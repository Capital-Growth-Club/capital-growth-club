import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Cold Acquisition Mastery — Learn To Build Your Own Client Acquisition Machine",
  description:
    "The Skool community that teaches service-based business owners how to build and scale cold client acquisition systems — ads, funnels, CRM, follow-up, and tracking.",
  openGraph: {
    title: "Cold Acquisition Mastery | Capital Growth Club",
    description:
      "Learn to build and scale your own cold client acquisition systems — ads, funnels, CRM, follow-up, tracking. Skool community for service business owners.",
    url: "https://capitalgrowthclub.com/skooloffer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Acquisition Mastery | Capital Growth Club",
    description:
      "The Skool community teaching service business owners to build their own cold client acquisition machine.",
  },
  robots: { index: false, follow: false },
};

const SKOOL_URL = "https://www.skool.com/coldacquisition/about";

const benefits = [
  "Full Cold Client Acquisition Course",
  "1 LIVE Weekly Group Funnel Q&A Call",
  "Build / Create Your ICP, Offer & Lead Magnet",
  "Learn To Create Scroll-Stopping Creatives That Make $",
  "How To Automate 80% Of The Follow-Up To Get Your Time Back",
  "Ad Platform Breakdowns & Best Practices",
  "Build High-Converting Websites With AI In Minutes",
];

export default function ColdAcquisitionMasteryPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden">
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

      <section className="relative px-6 pt-12 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Urgency banner */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
              <span className="animate-pulse">●</span>
              Price Increases July 1 To $129/month — Lock In Today
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-10">
            <p className="text-brand-gold text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-5">
              For Service-Based Business Owners
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              You Don't Qualify For Our Done-For-You —{" "}
              <span className="gradient-text">
                But We Still Want To Help.
              </span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We built a Skool community for people just like you — who we want
              to help but can't take on through our done-for-you program
              because of our strict ICP guidelines. Inside Cold Acquisition
              Mastery we hand you the exact lead generation and conversion
              system we run for our clients — so you can build it, run it,
              and scale it yourself.
            </p>
          </div>

          {/* Video */}
          <div className="flex justify-center mb-6">
            <HeroVideo src="https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a3c26e9b3c8655da2a651a7.mp4" />
          </div>

          {/* CTA under video */}
          <div className="text-center mb-14">
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-lg !py-5 !px-12 inline-block"
            >
              Start Free Trial On Skool
            </a>
          </div>

          {/* What you get */}
          <div className="bg-brand-card border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-center">
              What You Get Inside
            </p>
            <ul className="space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 10l4 4 6-8"
                      stroke="#BB9A65"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Positioning */}
          <p className="text-center text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            The only community that specifically teaches you how to build and
            efficiently scale cold client acquisition systems through
            data-backed decisions — built for service-based businesses.
          </p>

          {/* CTA */}
          <div className="text-center">
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-lg !py-5 !px-12 inline-block"
            >
              Start Free Trial On Skool
            </a>
          </div>

          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="text-white/40 hover:text-white/70 transition-colors text-sm"
            >
              ← Return to homepage
            </Link>
          </div>
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
