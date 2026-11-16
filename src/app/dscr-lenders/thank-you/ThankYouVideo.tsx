"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

/**
 * Bunny Stream video for the /dscr-lenders thank-you page, same behaviour as
 * the GHL original:
 *  - plays muted on a loop as a moving thumbnail;
 *  - on click, restarts from the beginning with sound and controls;
 *  - if the HLS stream can't load, the click opens Bunny's embed player.
 */
const VIDEO_ID = "978e0cdd-8d5d-4ee9-940a-424f37c70c4b";
const CDN = `https://vz-e88dba28-7f3.b-cdn.net/${VIDEO_ID}`;
const HLS_URL = `${CDN}/playlist.m3u8`;
const POSTER_URL = `${CDN}/thumbnail.jpg`;
const PLAYER_URL = `https://player.mediadelivery.net/embed/743040/${VIDEO_ID}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;

export default function ThankYouVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"preview" | "playing" | "embed">("preview");
  const failedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let destroy: (() => void) | undefined;
    let cancelled = false;
    const fail = () => {
      failedRef.current = true;
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari / iOS play HLS natively.
      video.src = HLS_URL;
      video.addEventListener("error", fail, { once: true });
      video.play().catch(() => {});
    } else {
      import("hls.js").then(({ default: Hls }) => {
        if (cancelled) return;
        if (!Hls.isSupported()) return fail();
        const hls = new Hls({ capLevelToPlayerSize: true });
        hls.on(Hls.Events.ERROR, (_e, data) => {
          if (data.fatal) fail();
        });
        hls.loadSource(HLS_URL);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
        destroy = () => hls.destroy();
      }, fail);
    }

    return () => {
      cancelled = true;
      video.removeEventListener("error", fail);
      destroy?.();
    };
  }, []);

  function playWithSound() {
    track("thank_you_video_play", { funnel: "dscr-lenders" });
    const video = videoRef.current;
    if (failedRef.current || !video) {
      setMode("embed");
      return;
    }
    video.loop = false;
    video.muted = false;
    video.currentTime = 0;
    video.controls = true;
    setMode("playing");
    video.play().catch(() => setMode("embed"));
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#0E0E0E] shadow-[0_30px_70px_-20px_rgba(14,14,14,0.45)] ring-1 ring-[#0E0E0E]">
      {mode === "embed" ? (
        <iframe
          src={PLAYER_URL}
          title="Watch this before your call"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          poster={POSTER_URL}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {mode === "preview" && (
        <button
          type="button"
          onClick={playWithSound}
          aria-label="Play video with sound"
          className="group absolute inset-0 grid place-items-center bg-[#0E0E0E]/25 transition-colors hover:bg-[#0E0E0E]/10"
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#BB9A65] text-[#0E0E0E] shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-transform group-hover:scale-105 md:h-24 md:w-24">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 md:h-9 md:w-9" fill="currentColor" aria-hidden>
              <path d="M6 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L7.5 3.64A1 1 0 0 0 6 4.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
