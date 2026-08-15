import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import HeroVideo from "@/components/HeroVideo";
import SectionTracker from "@/components/SectionTracker";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";

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

const CASE_STUDY_VIDEO =
  "https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a7f59beaeacbd590e0e9cae.mp4";

export const metadata: Metadata = {
  title: "Never Let Your Loan Pipeline Run Thin Again",
  description:
    "Done-for-you Facebook lead-gen for private lenders, proven on $28M in ad spend. Keep qualified borrowers coming into your pipeline every month.",
  openGraph: {
    title: "Never Let Your Loan Pipeline Run Thin Again | Capital Growth Club",
    description:
      "Done-for-you Facebook lead-gen for private lenders. See the case study + book a free Lending Pipeline Strategy Call.",
    url: "https://capitalgrowthclub.com/lenderscasestudy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Let Your Loan Pipeline Run Thin Again | Capital Growth Club",
    description:
      "Done-for-you Facebook lead-gen for private lenders. See the case study + book a free Lending Pipeline Strategy Call.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/lenderscasestudy",
  },
};

const primaryCta =
  "inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5";
const navCta =
  "inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-sm py-2.5 px-5 rounded-lg hover:bg-neutral-800 transition-colors";

export default function LendersCaseStudyPage() {
  return (
    <SurveyProvider questionSet="lenders">
      <main
        className={`${helveticaBold.variable} ${editorialSerif.variable} min-h-screen bg-white text-neutral-900 flex flex-col`}
      >
        <SectionTracker />

        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Capital Growth Club"
                width={120}
                height={40}
                className="h-7 w-auto"
                priority
              />
            </Link>
            <SurveyButton location="nav" className={navCta}>
              Book Your Strategy Call
              <span aria-hidden className="text-brand-gold">→</span>
            </SurveyButton>
          </div>
        </nav>

        {/* ═════════════ HERO (case study) ═════════════ */}
        <section
          data-section-name="hero"
          className="relative flex-1 pt-28 pb-16 md:pt-32 md:pb-24"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full px-4 py-2 mb-6 shadow-sm shadow-neutral-900/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-neutral-900 text-xs md:text-sm font-black tracking-[0.15em] uppercase">
                  For Private Lenders Only
                </span>
              </div>
              <h1
                className={`${helveticaBold.className} text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight uppercase text-neutral-900 mb-5`}
              >
                The Facebook funnel private lenders are using to{" "}
                <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                  turn ad spend into funded loans on demand.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Watch the full breakdown of how we fill private lenders&apos;
                pipelines with qualified borrowers using Facebook ads — without
                chasing brokers or waiting on referrals.
              </p>
            </div>

            <HeroVideo src={CASE_STUDY_VIDEO} className="mb-8" autoSound />

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              We run done-for-you Facebook campaigns for private lenders, proven
              across $28M in ad spend, to keep your loan officers supplied with
              new high-intent borrowers every month.
            </p>

            <div className="text-center">
              <span className="cta-wrap inline-block">
                <SurveyButton location="hero" className={primaryCta}>
                  Book Your Free Strategy Call
                  <span aria-hidden className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
              <p className="text-xs text-neutral-500 max-w-md mx-auto mt-4">
                15–20 minutes. No hard pitch. We&apos;ll tell you straight up if
                this doesn&apos;t fit your lending business.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 px-6 border-t border-neutral-200 bg-white">
          <p className="text-center text-neutral-500 text-xs">
            &copy; 2026 Capital Growth Club. All rights reserved.
          </p>
        </footer>
      </main>
    </SurveyProvider>
  );
}
