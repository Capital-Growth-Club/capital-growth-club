"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  eyebrow: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    eyebrow: "Day 0",
    title: "Book Your Strategy Call",
    body: "We dig into your goals, your ideal client, your market, and what you've already tried. By the end of the call you know whether we're a fit — and exactly what the next 21 days look like if we are.",
  },
  {
    eyebrow: "Days 1 – 14",
    title: "Strategy & Build Out",
    body: "We map the campaign for your market, write the ad creatives, build the lead capture funnel, and wire everything straight into your CRM. Nothing goes live until you review and approve it.",
  },
  {
    eyebrow: "By Day 21",
    title: "Launch & Start Capturing Leads",
    body: "Ads go live in your market. Qualified leads start dropping straight into your CRM in real time. You handle the conversations — we run the campaign.",
  },
  {
    eyebrow: "Ongoing",
    title: "Review, Optimize, Repeat",
    body: "Every campaign gets a weekly review. We kill what's underperforming, double down on what's working, and keep your cost-per-lead trending down month over month — for as long as we work together.",
  },
];

function TimelineStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-20 md:pl-24 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Numbered node — sits on the vertical line */}
      <div
        className={`absolute left-0 top-1 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg z-10 transition-all duration-500 ${
          visible
            ? "bg-brand-gold text-brand-black shadow-[0_0_24px_rgba(187,154,101,0.35)]"
            : "bg-brand-card border border-white/10 text-white/40"
        }`}
      >
        {index + 1}
      </div>

      <div className="card-dark p-6 md:p-7">
        <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          {step.eyebrow}
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
          {step.title}
        </h3>
        <p className="text-white/60 leading-relaxed">{step.body}</p>
      </div>
    </div>
  );
}

export default function HowItWorksTimeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line — runs behind the numbered nodes (left-7 = node center) */}
      <div
        aria-hidden
        className="absolute left-7 top-2 bottom-6 w-px bg-gradient-to-b from-brand-gold/50 via-brand-gold/20 to-brand-gold/0"
      />

      <div className="space-y-10 md:space-y-14">
        {STEPS.map((step, i) => (
          <TimelineStep key={step.title} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}
