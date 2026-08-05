"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Fires `section_view` the first time each `[data-section-name]` element
 * crosses 40% into the viewport. One event per section per page load —
 * a section coming back into view later does NOT re-fire.
 *
 * Add `data-section-name="hero"` (or similar) to any <section> that should
 * be tracked. The tracker auto-discovers on mount.
 */
export default function SectionTracker() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const seen = new Set<string>();
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-name]")
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const name = el.dataset.sectionName;
          if (!name || seen.has(name)) continue;
          seen.add(name);
          track("section_view", { section: name });
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    for (const el of sections) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
