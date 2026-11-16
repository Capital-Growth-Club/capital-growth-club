"use client";

import { track } from "@/lib/analytics";

/** Scrolls back to the inline application form and focuses its first control. */
export default function BookCallButton({ location }: { location: string }) {
  function handleClick() {
    track("cta_click", { location, label: "Book a call", page_path: window.location.pathname });
    const target = document.getElementById("apply");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      target.querySelector<HTMLElement>("button, input")?.focus({ preventScroll: true });
    }, 600);
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-3 text-center">
      <button
        type="button"
        onClick={handleClick}
        className="w-full max-w-xs rounded-2xl bg-gradient-to-br from-[#BB9A65] to-[#D4B87A] px-10 py-4 text-lg font-extrabold uppercase tracking-[0.06em] text-[#0E0E0E] shadow-[0_14px_30px_-10px_rgba(140,107,46,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_rgba(140,107,46,0.7)] sm:w-auto"
      >
        Book a call
      </button>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5F594B]">
        A working session on your pipeline
      </p>
    </div>
  );
}
