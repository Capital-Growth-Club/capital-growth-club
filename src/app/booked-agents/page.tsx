import type { Metadata } from "next";
import Image from "next/image";
import ScheduleEventFire from "@/components/ScheduleEventFire";

export const metadata: Metadata = {
  title: "Agent Strategy Call Booked — Please Read Before Leaving",
  description:
    "Your Capital Growth Club agent strategy call is confirmed. Read the pre-call requirements before leaving this page so we make the most of our time together.",
  openGraph: {
    title: "Agent Strategy Call Booked | Capital Growth Club",
    description:
      "Your agent strategy call is confirmed. Read the pre-call requirements before leaving this page.",
    url: "https://capitalgrowthclub.com/booked-agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Strategy Call Booked | Capital Growth Club",
    description:
      "Your agent strategy call is confirmed. Read the pre-call requirements before leaving this page.",
  },
  robots: { index: false, follow: false },
};

const rules = [
  "Check your email and text messages now and add the call to your calendar.",
  "Be on time. No-shows and reschedules give your slot away to the next agent in line.",
  "Be at a computer in a quiet space with a stable internet connection — not in the car, not between showings.",
  "If you run a team, your decision-maker (team lead / broker / partner) must be on the call with you.",
  "Come ready to talk numbers: last 12 months of sales volume, your primary market, average price point, and what you've already tried.",
];

export default function BookedAgentsPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden flex flex-col">
      <ScheduleEventFire funnel="agents" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <header className="relative pt-10 px-6">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Capital Growth Club"
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>
      </header>

      <section className="relative flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-10">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Call Confirmed
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Please read before leaving —{" "}
              <span className="gradient-text">or we'll cancel your call.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We only take on 5 agents per market and we reserve a real advisor
              for every call. The expectations below aren't optional.
            </p>
          </div>

          <div className="bg-brand-card border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-center">
              Before The Call
            </p>
            <ul className="space-y-4">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-white/80 leading-relaxed pt-0.5">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-white/40 text-sm leading-relaxed">
            If anything changes, reply to your confirmation text at least 24
            hours before the call. No-shows are not rescheduled.
          </p>
        </div>
      </section>

      <footer className="relative py-8 px-6">
        <p className="text-center text-white/30 text-sm">
          &copy; 2026 Capital Growth Club. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
