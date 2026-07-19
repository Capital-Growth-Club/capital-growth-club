"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

const DEFAULT_VIDEO_URL =
  "https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a2a1bc3d7f65291ad92f2cc.mp4";
const REPLAY_AFTER_MS = 20000;
const SPEEDS = [1, 1.2, 1.5, 1.75, 2] as const;

export default function HeroVideo({
  src = DEFAULT_VIDEO_URL,
  className = "mb-10",
}: { src?: string; className?: string } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmutedRef = useRef(false);
  const progressMarksRef = useRef<Set<number>>(new Set());
  const [unmuted, setUnmuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

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

    const onPlay = () => {
      setIsPlaying(true);
      if (!unmutedRef.current) startReplayTimer();
    };
    const onPause = () => {
      setIsPlaying(false);
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
    if (v.currentTime < 1) v.currentTime = 0;
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

  const seekBy = (delta: number) => {
    const v = videoRef.current;
    if (!v) return;
    const duration = v.duration || 0;
    v.currentTime = Math.max(0, Math.min(duration, v.currentTime + delta));
    track("video_seek", {
      video_src: src,
      direction: delta > 0 ? "forward" : "rewind",
      amount_sec: Math.abs(delta),
      amount_num: Math.abs(delta),
      current_time_sec: Math.round(v.currentTime),
      current_time_num: Math.round(v.currentTime),
    });
  };

  const cycleSpeed = () => {
    const v = videoRef.current;
    if (!v) return;
    const nextIndex = (speedIndex + 1) % SPEEDS.length;
    const nextSpeed = SPEEDS[nextIndex];
    v.playbackRate = nextSpeed;
    setSpeedIndex(nextIndex);
    track("video_speed_change", {
      video_src: src,
      speed: nextSpeed,
      speed_num: nextSpeed,
    });
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

        {/* Custom controls — hover to reveal, fade in/out */}
        {unmuted && (
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 px-3 py-3 md:px-4 md:py-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Rewind 10s */}
              <button
                onClick={() => seekBy(-10)}
                aria-label="Rewind 10 seconds"
                className="relative w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9" />
                  <path d="M3 4v5h5" />
                </svg>
                <span className="absolute -bottom-0.5 text-[9px] font-bold">10</span>
              </button>

              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="w-12 h-12 rounded-full bg-white hover:bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg transition-all"
              >
                {isPlaying ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                )}
              </button>

              {/* Forward 10s */}
              <button
                onClick={() => seekBy(10)}
                aria-label="Forward 10 seconds"
                className="relative w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9" />
                  <path d="M21 4v5h-5" />
                </svg>
                <span className="absolute -bottom-0.5 text-[9px] font-bold">10</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Speed */}
              <button
                onClick={cycleSpeed}
                aria-label="Playback speed"
                className="min-w-[52px] h-8 md:h-9 px-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs md:text-sm font-bold backdrop-blur-md transition-colors"
              >
                {SPEEDS[speedIndex]}x
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors"
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
          </div>
        )}
      </div>
      <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-brand-gold/20 rounded-br-2xl pointer-events-none" />
      <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-2xl pointer-events-none" />
    </div>
  );
}
