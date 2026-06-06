import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Reviewed",
  description:
    "Based on your application, you don't meet the qualifying criteria for our offer right now.",
  robots: { index: false, follow: false },
};

export default function NotAFitPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden flex flex-col">
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
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Application Reviewed
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Unfortunately, you don't meet the{" "}
            <span className="gradient-text">qualifying criteria</span> for our
            offer.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Our offer is built specifically for real estate professionals who
            meet our qualifying criteria around team structure, market tier, and
            minimum investment. If your situation changes — you bring on an ISA,
            expand your team, scale into a Tier A or B market, or reach the
            $2,500/month investment threshold — we'd love to hear from you again.
          </p>

          <div className="bg-brand-card border border-white/10 rounded-2xl p-6 md:p-8 mb-10 text-left">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              When To Apply Again
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l4 4 6-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>You've hired or are about to hire a full-time ISA.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l4 4 6-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>You've grown to 5+ agents with a proven long-term lead conversion track record.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l4 4 6-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>You're operating in or expanding into a Tier A or Tier B market.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10l4 4 6-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>You're ready to invest at least $2,500/month per market between retainer and ad spend.</span>
              </li>
            </ul>
          </div>

          <Link
            href="/agents"
            className="text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            ← Return to homepage
          </Link>
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
