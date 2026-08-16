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
  "https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a7b4f7d9115899f0337e401.mp4";

export const metadata: Metadata = {
  title: "Install Our Real Estate Facebook Lead System — $99 For 14 Days",
  description:
    "Pay $99, we install our high intent Facebook lead system for you and run it for a full 14 days. Only then do you decide whether to continue. Proven on $28M in ad spend.",
  openGraph: {
    title:
      "Install Our Real Estate Facebook Lead System — $99 For 14 Days | Capital Growth Club",
    description:
      "Pay $99, we install the whole system and run it for 14 days before you commit to anything. See the case study + book your call.",
    url: "https://capitalgrowthclub.com/agentscasestudy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Install Our Real Estate Facebook Lead System — $99 For 14 Days | Capital Growth Club",
    description:
      "Pay $99, we install the whole system and run it for 14 days before you commit to anything. See the case study + book your call.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/agentscasestudy",
  },
};

const smsProof = [
  { src: "/sms-5.webp", w: 443, h: 240, headline: "$1.2M closed in 90 days on ~$1,300 in ad spend" },
  { src: "/sms-6.webp", w: 896, h: 594, headline: "$590K sale on $900 in ads — a 10x return" },
  { src: "/sms-7.jpg", w: 1284, h: 731, headline: "$9,150 in new business on $751 in ad spend" },
  { src: "/sms-2.webp", w: 282, h: 162, headline: "$1.2M+ under contract in 47 days on $1,000" },
  { src: "/sms-3.webp", w: 272, h: 195, headline: "$2.9M closed — 5 deals in 5 months on $2,200" },
  { src: "/sms-4.webp", w: 288, h: 177, headline: "2 deals + 80+ leads on just $15/day" },
];

const eyebrow = `${editorialSerif.className} text-neutral-500 text-xs tracking-[0.28em] uppercase leading-none`;
const heading = `${helveticaBold.className} text-neutral-900 leading-tight`;
// The CTA label is long and must stay on one line (whitespace-nowrap), so on
// phones the button goes full width and its type scales with the viewport —
// that keeps it as large as the screen allows without ever wrapping.
const primaryCta =
  "inline-flex w-full sm:w-auto justify-center items-center gap-2 whitespace-nowrap bg-neutral-900 text-white font-semibold text-[clamp(1rem,4.5vw,1.25rem)] py-5 px-4 sm:px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5";
const navCta =
  "inline-flex items-center gap-2 whitespace-nowrap bg-neutral-900 text-white font-semibold text-sm py-2.5 px-5 rounded-lg hover:bg-neutral-800 transition-colors";

export default function AgentsCaseStudyPage() {
  return (
    <SurveyProvider questionSet="real-estate">
      <main
        className={`${helveticaBold.variable} ${editorialSerif.variable} min-h-screen bg-white text-neutral-900`}
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
              Book Discovery Call
              <span aria-hidden className="text-brand-gold">→</span>
            </SurveyButton>
          </div>
        </nav>

        {/* ═════════════ 1. HERO (case study) ═════════════ */}
        <section
          data-section-name="hero"
          className="relative pt-24 pb-12 md:pt-32 md:pb-14"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2.5 bg-brand-gold/10 border border-brand-gold/40 rounded-full px-4 py-2 mb-6 shadow-sm shadow-brand-gold/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-neutral-900 text-xs md:text-sm font-black tracking-[0.15em] uppercase">
                  Try 14 days before committing &mdash; only $99
                </span>
              </div>
              <h1
                className={`${helveticaBold.className} text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight uppercase text-neutral-900 mb-4`}
              >
                Real estate agents: watch how our high intent Facebook leads
                system produced{" "}
                <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                  9 extra closings in 4 months
                </span>
              </h1>
              {/* Bolded middle clause gives the skimming eye something to
                  land on; the directives sit in their own pill below. */}
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto">
                If you&apos;re a real estate agent or team trying to{" "}
                <span className="font-bold text-neutral-900">
                  generate clients more predictably
                </span>
                , our high intent lead system was made for you.
              </p>

              <div className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-2xl sm:rounded-full border border-neutral-900/20 bg-neutral-900/[0.04] px-5 py-2.5">
                <svg
                  aria-hidden
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brand-gold shrink-0"
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
                <span className="text-neutral-900 text-xs md:text-sm font-black tracking-[0.14em] uppercase leading-snug">
                  Watch the video &middot; Try it for 14 days
                </span>
              </div>
            </div>

            <HeroVideo
              src={CASE_STUDY_VIDEO}
              className="mb-8"
              poster="/video-poster.webp"
              autoSound
            />

            {/* Offer callout — dashed card + chevrons aiming at the CTA */}
            <div className="max-w-2xl mx-auto mb-5">
              <div className="rounded-2xl border-2 border-dashed border-brand-gold/70 bg-brand-gold/[0.07] px-5 py-6 md:px-8 md:py-7 text-center shadow-sm shadow-brand-gold/10">
                <p className="text-[11px] md:text-xs font-black tracking-[0.22em] uppercase text-brand-gold mb-3">
                  The Trial Offer
                </p>
                <p
                  className={`${helveticaBold.className} text-neutral-900 text-xl md:text-2xl leading-snug`}
                >
                  Let us build the whole funnel for your business and run it
                  for 14 days &mdash;{" "}
                  <span className="text-brand-gold">$99</span> to see it work
                  before you commit to anything.
                </p>

                <div className="mt-5 pt-4 border-t border-brand-gold/25 flex items-center justify-center gap-2.5">
                  <svg
                    aria-hidden
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-gold shrink-0"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-neutral-700 text-sm md:text-base font-semibold leading-snug">
                    If we don&apos;t generate you any leads, you get your $99
                    back.
                  </p>
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="flex justify-center items-center gap-2 mb-4"
            >
              {["0ms", "150ms", "300ms"].map((delay) => (
                <svg
                  key={delay}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-gold animate-bounce"
                  style={{ animationDelay: delay }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              ))}
            </div>

            <div className="text-center">
              <span className="cta-wrap inline-block w-full sm:w-auto">
                <SurveyButton location="hero" className={primaryCta}>
                  Book Trial Offer Discovery Call
                  <span aria-hidden className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
            </div>
          </div>
        </section>

        {/* ═════════════ 2. RESULTS (texted proof) ═════════════ */}
        <section
          data-section-name="texted-case-studies"
          className="relative border-t border-neutral-100 pt-12 md:pt-16 pb-20 md:pb-28"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className={`${eyebrow} mb-5`}>More case studies</p>
              <h2
                className={`${heading} text-3xl md:text-4xl lg:text-5xl tracking-tight`}
              >
                More wins texted in from agents and teams like yours.
              </h2>
            </div>

            {/* Featured — the main "9 closings on $33/day" client testimonial */}
            <div className="max-w-3xl mx-auto mb-14 md:mb-16">
              <p
                className={`${helveticaBold.className} text-neutral-900 text-lg md:text-xl mb-3 leading-snug px-1`}
              >
                9 extra closings and $4.9M in volume in 4 months on $33/day in
                Facebook ads
              </p>
              <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
                <Image
                  src="/case-study-featured.webp"
                  alt="Client text — 9 extra closings and $4.9M in volume in 4 months on $33/day in Facebook ads"
                  width={1320}
                  height={963}
                  sizes="(max-width: 768px) 92vw, 720px"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] max-w-5xl mx-auto">
              {smsProof.map((item, i) => (
                <div key={item.src} className="mb-6 break-inside-avoid">
                  <p
                    className={`${helveticaBold.className} text-neutral-900 text-sm md:text-base mb-2.5 leading-snug px-1`}
                  >
                    {item.headline}
                  </p>
                  <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                    <Image
                      src={item.src}
                      alt={`Client text ${i + 1} — ${item.headline}`}
                      width={item.w}
                      height={item.h}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ FINAL CTA — build it for them ═════════════ */}
        <section
          data-section-name="final-cta"
          className="relative py-24 md:py-32 bg-[#0E0E0E]"
        >
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2
              className={`${helveticaBold.className} text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-8`}
            >
              Want the whole system installed and{" "}
              <span
                className={`${editorialSerif.className} font-normal bg-gradient-to-r from-[#BB9A65] to-[#FFFCD8] bg-clip-text text-transparent`}
              >
                feeding you leads inside 14 days?
              </span>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <span className="cta-wrap inline-block w-full sm:w-auto">
                <SurveyButton
                  location="final"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 whitespace-nowrap bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold text-neutral-900 font-semibold text-[clamp(1rem,4.5vw,1.5rem)] py-6 px-4 sm:px-10 rounded-xl hover:from-[#D4B87A] hover:via-brand-gold hover:to-[#D4B87A] transition-all shadow-xl shadow-brand-gold/30 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Book Trial Offer Discovery Call
                  <span aria-hidden>→</span>
                </SurveyButton>
              </span>
              <p className="text-xs text-neutral-400 max-w-md">
                15–20 minutes to map it to your market. If we&apos;re a fit,
                you&apos;re live for $99 and you decide what happens after the
                14 days. If we&apos;re not, we&apos;ll tell you straight up.
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
