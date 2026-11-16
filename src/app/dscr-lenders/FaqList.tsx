"use client";

import { track } from "@/lib/analytics";

export type Faq = { q: string; a: string };

/** FAQ accordion; fires `faq_open` with the question each time one is opened. */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3.5">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          onToggle={(e) => {
            if (e.currentTarget.open) {
              track("faq_open", { funnel: "dscr-lenders", question: f.q, position: i + 1 });
            }
          }}
          className="group rounded-2xl border border-[#BB9A65]/40 bg-white shadow-[0_16px_36px_rgba(14,14,14,0.05)] open:border-[#BB9A65]/70"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-base font-bold tracking-[-0.01em] md:px-7 md:text-lg [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="relative h-4 w-4 shrink-0 text-[#8C6B2E]">
              <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
              <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-[#5F594B] md:px-7">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
