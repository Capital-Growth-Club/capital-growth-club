"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_VIDEO_URL =
  "https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a2a1bc3d7f65291ad92f2cc.mp4";
const REPLAY_AFTER_MS = 20000;

export default function HeroVideo({ src = DEFAULT_VIDEO_URL }: { src?: string } = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmutedRef = useRef(false);
  const [unmuted, setUnmuted] = useState(false);

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
      if (!unmutedRef.current) startReplayTimer();
    };

    v.addEventListener("play", onPlay);
    v.play().catch(() => {});

    return () => {
      v.removeEventListener("play", onPlay);
      clearReplayTimer();
    };
  }, []);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;
    unmutedRef.current = true;
    setUnmuted(true);
    v.muted = false;
    v.loop = false;
    v.controls = true;
    if (replayTimerRef.current) {
      clearTimeout(replayTimerRef.current);
      replayTimerRef.current = null;
    }
    if (v.currentTime < 1) v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <div className="relative w-full max-w-3xl mb-10">
      <div
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card"
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
      </div>
      <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-brand-gold/20 rounded-br-2xl pointer-events-none" />
      <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-2xl pointer-events-none" />
    </div>
  );
}
