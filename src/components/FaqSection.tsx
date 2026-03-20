"use client";

import { useState } from "react";
import SurveyButton from "./SurveyButton";

const faqs = [
  {
    q: "How much does it cost to work with Capital Growth Club?",
    a: "We don't believe in making you sit through a sales call just to find out if the numbers make sense. For an ongoing working relationship — where we're inside your business every month managing, optimizing, and building — engagements range from $5,000 to $20,000/month depending on scope, with the potential for a revenue share arrangement on top. For one-time build-and-handoff projects, those start in the mid five figures and can go into six figures depending on what needs to be built. We work with service business owners who are ready to deploy real capital into scaling — not people hoping ads will save a broken business, but operators building toward $1M to $10M/month who need the system to get there. The investment reflects what it takes to do this right.",
  },
  {
    q: "How is this different from every other marketing agency?",
    a: "Most businesses are hiring for pieces — a media buyer here, a funnel builder there, someone for email and SMS — and every one of those people is doing their job in isolation with no one seeing the full picture. We build the entire system end-to-end as one thing. Someone who crafts the ad that stops the right person mid-scroll, builds the funnel that turns that lead into a booked call, and handles everything between the opt-in and the appointment — the nurture, the follow-up, the confirmation sequence. That's the difference between a 20% show rate and a 70% show rate.",
  },
  {
    q: "I've been burned by agencies before. How do I know this will actually work?",
    a: "We get it — and that's exactly why we have a qualification process. Not to be difficult, but because if we can't see a clear and honest path to a return for you, we won't take the engagement. We'd rather tell you that now than have you three months in without results. Every system we build is backed by 306+ service businesses served and real campaign data. When we're at capacity, we close applications.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see their full funnel live within 14–21 days of onboarding. From there, you can expect to see qualified leads coming in within the first week of launch. Meaningful revenue impact — booked calls, closed deals, and measurable ROI — typically shows within 30–60 days depending on your sales cycle.",
  },
  {
    q: "Do I need to create the ad content myself?",
    a: "No. We handle everything. Our team scripts your ads based on proven frameworks, coaches you through filming (or coordinates production), and handles all editing and post-production. You show up, follow the script, and we turn it into high-converting creative.",
  },
  {
    q: "What if I already have a CRM or funnel in place?",
    a: "We'll audit what you have. If parts of your existing setup are working, we'll build on them. If they're holding you back, we'll rebuild from the ground up. Either way, you'll walk away with a system that's fully optimized — not a band-aid on a broken process.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We specialize in service-based businesses doing $250K+/month — real estate teams, home service companies, legal firms, medical practices, financial advisors, and high-ticket coaching/consulting businesses. If you sell a service and want to scale past $1M/month, we're built for you.",
  },
  {
    q: "What does the application process look like? Is this a sales call?",
    a: "The application takes about 2 minutes and helps us understand your business before we get on a call. The strategy session itself is a real working session — we'll map out your growth roadmap, identify bottlenecks, and show you exactly what we'd build. If there's a fit, we'll talk about next steps. No pressure, no hard close.",
  },
];

function AccordionItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span
          className={`text-lg md:text-xl font-medium transition-colors duration-200 ${open ? "text-white" : "text-white/70 group-hover:text-white"}`}
        >
          {question}
        </span>
        <span
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-brand-gold/20 rotate-45" : "bg-white/5 group-hover:bg-white/10"}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 3v12M3 9h12"
              stroke={open ? "#BB9A65" : "#888"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="text-white/50 leading-relaxed pb-6 pr-14">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div>
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            question={faq.q}
            answer={faq.a}
            open={openFaq === i}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-white/40 mb-6">
          Still have questions? We&apos;ll answer everything on your strategy call.
        </p>
        <SurveyButton className="btn-primary">Apply Now</SurveyButton>
      </div>
    </>
  );
}
