import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import ScheduleEventFire from "@/components/ScheduleEventFire";

const editorialSerif = localFont({
  src: "../../../public/fonts/maison-galliard-serif.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-editorial",
});

const helveticaBold = localFont({
  src: "../../../public/fonts/HelveticaNeueBold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
});

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
    <main className={`${helveticaBold.variable} min-h-screen bg-white text-neutral-900 relative overflow-hidden flex flex-col`}>
      <ScheduleEventFire funnel="agents" />
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-gold/[0.10] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-gold/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Capital Growth Club"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <span className="hidden sm:inline text-neutral-500 text-sm font-medium border-l border-neutral-200 pl-3">
              Capital Growth Club
            </span>
          </Link>
        </div>
      </nav>

      <section className="relative flex-1 flex items-center justify-center px-6 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-6 shadow-sm shadow-neutral-900/10">
              <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                Call Confirmed
              </span>
            </div>

            <h1 className={`${helveticaBold.className} text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight uppercase text-neutral-900 mb-5`}>
              Please read before leaving —{" "}
              <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                or we&apos;ll cancel your call.
              </span>
            </h1>

            <p className="text-neutral-600 text-lg leading-relaxed">
              We only take on 5 agents per market and reserve a real advisor
              for every call. The expectations below aren&apos;t optional.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm shadow-neutral-900/5 p-6 md:p-8 mb-8">
            <p className={`${editorialSerif.className} text-neutral-900 text-xs tracking-[0.28em] uppercase mb-6 text-center leading-none`}>
              Before The Call
            </p>
            <ul className="space-y-4">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-neutral-700 leading-relaxed pt-0.5">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-neutral-500 text-sm leading-relaxed">
            If anything changes, reply to your confirmation text at least 24
            hours before the call. No-shows are not rescheduled.
          </p>
        </div>
      </section>

      <footer className="relative py-8 px-6 border-t border-neutral-200/70">
        <p className="text-center text-neutral-500 text-sm">
          &copy; 2026 Capital Growth Club. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
