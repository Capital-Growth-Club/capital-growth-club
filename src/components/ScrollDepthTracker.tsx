"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

const DEFAULT_THRESHOLDS = [25, 50, 75, 100];

/**
 * Fires `scroll_depth` ({ percent, page_path }) once per threshold per page
 * load, the first time the bottom of the viewport passes that share of the
 * page. 100 fires within a few pixels of the end to absorb rounding.
 */
export default function ScrollDepthTracker({
  thresholds = DEFAULT_THRESHOLDS,
}: {
  thresholds?: number[];
}) {
  useEffect(() => {
    const fired = new Set<number>();
    const pagePath = window.location.pathname;
    let frame = 0;

    const check = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight;
      if (scrollable <= 0) return;
      const seen = window.scrollY + window.innerHeight;
      const percent = seen >= scrollable - 4 ? 100 : (seen / scrollable) * 100;
      for (const t of thresholds) {
        if (percent >= t && !fired.has(t)) {
          fired.add(t);
          track("scroll_depth", { percent: t, page_path: pagePath });
        }
      }
      if (fired.size === thresholds.length) window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    check(); // A short page may already be past the first thresholds.

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [thresholds]);

  return null;
}
