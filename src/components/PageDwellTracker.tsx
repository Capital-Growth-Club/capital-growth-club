"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Fires `page_dwell` once per page load when the user leaves or tabs away.
 * Accumulates ONLY visible time — background time doesn't count.
 * Sent via gtag/fbq which use sendBeacon/keepalive under the hood during unload.
 */
export default function PageDwellTracker() {
  useEffect(() => {
    let start = Date.now();
    let accumulated = 0;
    let fired = false;
    const pagePath =
      typeof location !== "undefined" ? location.pathname : "";

    const accumulate = () => {
      accumulated += Date.now() - start;
      start = Date.now();
    };

    const fire = () => {
      if (fired) return;
      fired = true;
      accumulate();
      const dwellSec = Math.round(accumulated / 1000);
      track("page_dwell", {
        page_path: pagePath,
        dwell_ms: accumulated,
        dwell_sec: dwellSec,
        dwell_num: dwellSec,
      });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        fire();
      } else {
        start = Date.now();
      }
    };
    const onPageHide = () => fire();

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, []);

  return null;
}
