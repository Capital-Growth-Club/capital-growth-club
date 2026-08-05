"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

const DEFAULT_VIDEO_URL =
  "https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a73945a329b76ca7bc3dae6.mp4";
const REPLAY_AFTER_MS = 20000;
const DEFAULT_PLAYBACK_RATE = 1;

export default function HeroVideo({
  src = DEFAULT_VIDEO_URL,
  className = "mb-10",
}: { src?: string; className?: string } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmutedRef = useRef(false);
  const progressMarksRef = useRef<Set<number>>(new Set());
  const engagedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const engagedFiredRef = useRef(false);
  const [unmuted, setUnmuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Locked to 1.2x — no user-facing speed control.
    v.playbackRate = DEFAULT_PLAYBACK_RATE;

    const clearReplayTimer = () => {
      if (replayTimerRef.current) {
        clearTimeout(replayTimerRef.current);
        replayTimerRef.current = null;
      }
    };

    const startReplayTimer = () => {
      clearReplayTimer();
      replayTimerRef.current = setTimeout(() => {
        if (!unmutedRef.current && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
          startReplayTimer();
        }
      }, REPLAY_AFTER_MS);
    };

    const armEngagedGate = () => {
      // Fire `video_engaged_view` if the user is still playing 2.5s in.
      // Anything under that mark is almost certainly a bot / accidental
      // click / instant bounce. One-shot per page load.
      if (engagedFiredRef.current || engagedTimerRef.current) return;
      engagedTimerRef.current = setTimeout(() => {
        engagedTimerRef.current = null;
        if (engagedFiredRef.current) return;
        if (!videoRef.current || videoRef.current.paused) return;
        engagedFiredRef.current = true;
        track("video_engaged_view", {
          video_src: src,
          threshold_ms: 2500,
          threshold_num: 2500,
          unmuted: unmutedRef.current,
        });
      }, 2500);
    };
    const cancelEngagedGate = () => {
      if (engagedTimerRef.current) {
        clearTimeout(engagedTimerRef.current);
        engagedTimerRef.current = null;
      }
    };

    const onPlay = () => {
      setIsPlaying(true);
      if (unmutedRef.current) setHasStartedOnce(true);
      if (!unmutedRef.current) startReplayTimer();
      armEngagedGate();
    };
    const onPause = () => {
      setIsPlaying(false);
      cancelEngagedGate();
      if (unmutedRef.current) {
        track("video_pause", {
          video_src: src,
          current_time_sec: Math.round(v.currentTime),
          current_time_num: Math.round(v.currentTime),
        });
      }
    };
    const onEnded = () => {
      if (unmutedRef.current) {
        track("video_complete", { video_src: src });
      }
    };
    const onTimeUpdate = () => {
      if (!unmutedRef.current || !v.duration) return;
      const pct = Math.floor((v.currentTime / v.duration) * 100);
      // Fire at every 10% checkpoint, once each per view
      for (const mark of [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]) {
        if (pct >= mark && !progressMarksRef.current.has(mark)) {
          progressMarksRef.current.add(mark);
          track("video_progress", {
            video_src: src,
            percent: mark,
            percent_num: mark,
            current_time_sec: Math.round(v.currentTime),
            current_time_num: Math.round(v.currentTime),
          });
        }
      }
    };

    const fireWatchEnd = (reason: string) => {
      if (!unmutedRef.current || !v.duration) return;
      // Guard against firing twice for the same session — reset unmutedRef
      // when the video is re-played so a new session can log its own end.
      const currentSec = Math.round(v.currentTime);
      const totalSec = Math.round(v.duration);
      const percent = totalSec ? Math.round((currentSec / totalSec) * 100) : 0;
      track("video_watch_end", {
        video_src: src,
        last_position_sec: currentSec,
        last_position_num: currentSec,
        duration_sec: totalSec,
        duration_num: totalSec,
        percent_watched: percent,
        percent_watched_num: percent,
        stopped_reason: reason,
      });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        fireWatchEnd("tab_hidden");
      }
    };
    const onBeforeUnload = () => {
      fireWatchEnd("page_unload");
    };
    const onPauseWithEnd = () => {
      onPause();
      // Only report the "end" if the user actually stopped (not just a scrub buffering pause)
      if (!v.seeking) fireWatchEnd("paused");
    };
    const onEndedWithReport = () => {
      onEnded();
      fireWatchEnd("ended");
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPauseWithEnd);
    v.addEventListener("ended", onEndedWithReport);
    v.addEventListener("timeupdate", onTimeUpdate);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("beforeunload", onBeforeUnload);
    v.play().catch(() => {});

    return () => {
      // Fire a final watch-end if we're unmounting mid-play
      if (unmutedRef.current && !v.paused && !v.ended) {
        fireWatchEnd("unmounted");
      }
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPauseWithEnd);
      v.removeEventListener("ended", onEndedWithReport);
      v.removeEventListener("timeupdate", onTimeUpdate);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("beforeunload", onBeforeUnload);
      clearReplayTimer();
      cancelEngagedGate();
    };
  }, [src]);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;
    unmutedRef.current = true;
    setUnmuted(true);
    v.muted = false;
    v.loop = false;
    if (replayTimerRef.current) {
      clearTimeout(replayTimerRef.current);
      replayTimerRef.current = null;
    }
    v.currentTime = 0;
    v.play().catch(() => {});
    // Reset progress marks so we count checkpoints for the "real" watch
    progressMarksRef.current = new Set();
    track("video_unmute_play", { video_src: src });
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      track("video_resume", {
        video_src: src,
        current_time_sec: Math.round(v.currentTime),
        current_time_num: Math.round(v.currentTime),
      });
    } else {
      v.pause();
      // pause event fires "video_pause" via the listener above
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    track("video_fullscreen_toggle", {
      video_src: src,
      entering: !document.fullscreenElement,
    });
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      // Try wrapper first (keeps custom controls visible in fullscreen);
      // fall back to the raw video element (iOS Safari uses this API).
      const target =
        (v.parentElement as HTMLElement & {
          webkitRequestFullscreen?: () => void;
        }) || v;
      const anyV = v as HTMLVideoElement & {
        webkitEnterFullscreen?: () => void;
      };
      if (target.requestFullscreen) {
        target.requestFullscreen().catch(() => {});
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
      } else if (anyV.webkitEnterFullscreen) {
        anyV.webkitEnterFullscreen();
      }
    }
  };

  return (
    <div className={`relative w-full max-w-3xl ${className}`}>
      <div
        className="group relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card"
        style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
      >
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Tap-to-unmute overlay */}
        {!unmuted && (
          <button
            onClick={handleUnmute}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
            aria-label="Tap to unmute"
          >
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M12 8l16 8-16 8V8z"
                  fill="#0E0E0E"
                  stroke="#0E0E0E"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        )}

        {/* Click-anywhere play/pause overlay + right-side controls */}
        {unmuted && (
          <>
            {/* Full-area click target for play/pause */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute inset-0 z-10 cursor-pointer bg-transparent"
            />

            {/* Center play indicator — only visible when paused (after first play) */}
            {hasStartedOnce && !isPlaying && (
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none bg-black/25 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-900 ml-1">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Right-side controls: fullscreen only */}
            <div className="absolute right-3 md:right-4 bottom-3 md:bottom-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-md"
              >
                {isFullscreen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
                    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8V5a2 2 0 0 1 2-2h3" />
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                    <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
                  </svg>
                )}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-brand-gold/20 rounded-br-2xl pointer-events-none" />
      <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-2xl pointer-events-none" />
    </div>
  );
}
