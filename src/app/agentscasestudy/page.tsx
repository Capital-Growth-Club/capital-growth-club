import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import HeroVideo from "@/components/HeroVideo";
import SectionTracker from "@/components/SectionTracker";
import SocialProofWidget from "@/components/SocialProofWidget";
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
  title: "Never Let Your Agents' Pipelines Run Thin Again",
  description:
    "Done-for-you Facebook lead-gen for real estate teams, proven on $28M in ad spend. Fill your team's pipelines with new high-intent leads daily.",
  openGraph: {
    title:
      "Never Let Your Agents' Pipelines Run Thin Again | Capital Growth Club",
    description:
      "Done-for-you Facebook lead-gen for real estate teams. See the case study + book a free Agent Pipeline Strategy Call.",
    url: "https://capitalgrowthclub.com/agentscasestudy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Never Let Your Agents' Pipelines Run Thin Again | Capital Growth Club",
    description:
      "Done-for-you Facebook lead-gen for real estate teams. See the case study + book a free Agent Pipeline Strategy Call.",
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

const forYou = [
  "You're a real estate team closing 50+ deals a year",
  "You have 2–10 agents who need new high-intent leads coming in daily",
  "You're a growing team and your lead pools are starting to get thin",
  "You're open to invest in ads to help solve these problems",
];

const notForYou = [
  "You're a brand-new solo agent with no team",
  "You aren't ready to spend on ads",
  "You're looking for today's leads to pay tomorrow's rent",
  "You want \"set and forget\" with zero agent follow-up",
];

const howSteps = [
  {
    n: "01",
    title: "Plan & routing setup.",
    body: "We review your market, price points, and team. Decide which agents get which leads and route them straight into whatever CRM you already use.",
  },
  {
    n: "02",
    title: "Launch proven Facebook campaigns.",
    body: "We deploy campaigns and creatives tested on $28M+ in real estate ad spend. New high-intent leads start hitting your agents daily.",
  },
  {
    n: "03",
    title: "Report & tune.",
    body: "Weekly reports on leads per agent, ad spend, and cost per lead. Ongoing campaign tuning to keep the pipeline volume steady week over week.",
  },
];

const faqs = [
  {
    q: "What does this cost?",
    a: "Depends on your goals, how many agents you have, and how many campaigns you want us to run (buyer, seller, or both). We'll walk through the exact numbers for your team on the call. That said — if $1,000/month in combined ad spend + management fees feels like a lot to invest in your business, this probably isn't a good fit for either of us.",
  },
  {
    q: "Do you replace our CRM?",
    a: "No. We route new leads straight into whatever CRM you already use. Your team runs their own follow-up — we just make sure the top of the funnel is always full.",
  },
  {
    q: "What if I don't have a CRM?",
    a: "That's normal for newer teams. If you don't have one — or want something better — we can also give you our built-in lead-conversion system that handles nurture and automations, for an additional charge. We'll walk through what fits your setup on the call.",
  },
  {
    q: "What if I don't have an IDX site?",
    a: "Same idea as the CRM — we can build you one for an additional charge. The only extra recurring cost is an IDX Broker subscription at $100/month, billed directly to them (not us), which powers the live MLS feed on your site.",
  },
  {
    q: "How fast can we see leads?",
    a: "In most markets, new leads start coming in within a few days of launch. How fast that turns into closings depends on your agents' follow-up speed and your market's price point.",
  },
  {
    q: "Are these fake leads?",
    a: "No. Every lead has to verify their phone number before it ever hits your team — so no fake numbers, bots, or landlines. Every phone number that lands in your CRM is a real, verified mobile.",
  },
  {
    q: "Is this guaranteed?",
    a: "We can't guarantee specific deal counts or income — that depends on your team's follow-up and market. What we can guarantee is that if we don't think this fits your situation on the call, we'll tell you straight up.",
  },
];

const eyebrow = `${editorialSerif.className} text-neutral-500 text-xs tracking-[0.28em] uppercase leading-none`;
const heading = `${helveticaBold.className} text-neutral-900 leading-tight`;
const primaryCta =
  "inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5";
const navCta =
  "inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-sm py-2.5 px-5 rounded-lg hover:bg-neutral-800 transition-colors";

export default function AgentsCaseStudyPage() {
  return (
    <SurveyProvider questionSet="real-estate">
      <main
        className={`${helveticaBold.variable} ${editorialSerif.variable} min-h-screen bg-white text-neutral-900`}
      >
        <SectionTracker />
        <SocialProofWidget />

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

        {/* ═════════════ 1. HERO (case study) ═════════════ */}
        <section
          data-section-name="hero"
          className="relative pt-28 pb-12 md:pt-32 md:pb-14"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full px-4 py-2 mb-6 shadow-sm shadow-neutral-900/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-neutral-900 text-xs md:text-sm font-black tracking-[0.15em] uppercase">
                  For Real Estate Team Leaders Only
                </span>
              </div>
              <h1
                className={`${helveticaBold.className} text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight uppercase text-neutral-900 mb-5`}
              >
                The Facebook funnel real estate teams are using to{" "}
                <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                  turn ad spend into deals on demand.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Watch the full breakdown of how we helped a team in Frisco
                close $4.9m in sales volume in a little over 4 months with
                Facebook ads — only spending $33/day.
              </p>
            </div>

            <HeroVideo
              src={CASE_STUDY_VIDEO}
              className="mb-8"
              previewSeconds={15}
              poster="/video-poster.webp"
            />

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              We run done-for-you Facebook campaigns for real estate teams,
              proven across $28M in ad spend, to help keep your agents supplied
              with new high-intent buyers and sellers daily.
            </p>

            <div className="text-center">
              <span className="cta-wrap inline-block">
                <SurveyButton location="hero" className={primaryCta}>
                  Book Your Free Strategy Call
                  <span aria-hidden className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
            </div>
          </div>
        </section>

        {/* ═════════════ 2. MORE CASE STUDIES (texted proof) ═════════════ */}
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
                More wins texted in from teams like yours.
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

        {/* ═════════════ 3. FIT CHECK ═════════════ */}
        <section
          data-section-name="fit-check"
          className="relative border-t border-neutral-100 py-20 md:py-28"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className={`${eyebrow} mb-5`}>Fit check</p>
              <h2
                className={`${heading} text-3xl md:text-4xl lg:text-5xl tracking-tight`}
              >
                Is this right for your team?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* For */}
              <div className="bg-white border border-brand-gold/30 rounded-2xl p-7 md:p-8 shadow-md shadow-brand-gold/10">
                <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-5">
                  This is for you if
                </p>
                <ul className="space-y-4">
                  {forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-brand-gold to-[#D4B87A] flex items-center justify-center mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5 10l4 4 6-8"
                            stroke="#0E0E0E"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-neutral-800 leading-relaxed text-base">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-7 md:p-8 shadow-sm">
                <p className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
                  This is not for you if
                </p>
                <ul className="space-y-4">
                  {notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M6 6l8 8M14 6l-8 8"
                            stroke="#BB9A65"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <p className="text-neutral-500 leading-relaxed text-base">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 text-center">
              <span className="cta-wrap inline-block">
                <SurveyButton location="fit-check" className={primaryCta}>
                  Book Your Free Strategy Call
                  <span aria-hidden className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
            </div>
          </div>
        </section>

        {/* ═════════════ 4. HOW IT WORKS ═════════════ */}
        <section
          data-section-name="mechanism"
          className="relative border-t border-neutral-100 py-20 md:py-28"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className={`${eyebrow} mb-5`}>How it works</p>
              <h2
                className={`${heading} text-3xl md:text-4xl lg:text-5xl tracking-tight`}
              >
                How we fill your agents&apos; pipelines.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {howSteps.map((s) => (
                <div
                  key={s.n}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-7 shadow-sm relative flex flex-col"
                >
                  <div
                    className={`${editorialSerif.className} absolute -top-3 left-6 bg-gradient-to-br from-brand-gold to-[#D4B87A] text-neutral-900 text-xs tracking-widest rounded-md px-2.5 pt-2 pb-1 leading-none shadow-md shadow-brand-gold/30`}
                  >
                    STEP {s.n}
                  </div>
                  <h3
                    className={`${helveticaBold.className} mt-4 text-lg md:text-xl text-neutral-900 mb-3 leading-snug`}
                  >
                    {s.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-[15px] flex-1">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ 5. FAQ + DISCLAIMER ═════════════ */}
        <section
          data-section-name="faq"
          className="relative border-t border-neutral-100 py-20 md:py-28"
        >
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className={`${eyebrow} mb-5`}>FAQ</p>
              <h2
                className={`${heading} text-3xl md:text-4xl lg:text-5xl tracking-tight`}
              >
                Questions team leaders ask us.
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {faqs.map((item, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <p
                      className={`${helveticaBold.className} text-base md:text-lg text-neutral-900 leading-snug`}
                    >
                      {item.q}
                    </p>
                    <span className="shrink-0 mt-1 text-brand-gold text-xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-neutral-600 leading-relaxed text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <p className="mt-12 text-center text-neutral-400 text-xs md:text-sm italic leading-relaxed max-w-xl mx-auto">
              Results and examples are from specific clients. Your results will
              vary based on market, ad spend, and team. Past performance
              doesn&apos;t guarantee future results.
            </p>
          </div>
        </section>

        {/* ═════════════ FINAL CTA ═════════════ */}
        <section
          data-section-name="final-cta"
          className="relative py-24 md:py-32 bg-[#0E0E0E]"
        >
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2
              className={`${helveticaBold.className} text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-8`}
            >
              Ready to keep your agents&apos;{" "}
              <span
                className={`${editorialSerif.className} font-normal bg-gradient-to-r from-[#BB9A65] to-[#FFFCD8] bg-clip-text text-transparent`}
              >
                pipelines fed?
              </span>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <span className="cta-wrap inline-block">
                <SurveyButton
                  location="final"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold text-neutral-900 font-semibold text-lg md:text-xl py-5 px-10 rounded-xl hover:from-[#D4B87A] hover:via-brand-gold hover:to-[#D4B87A] transition-all shadow-xl shadow-brand-gold/30 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Book Your Free Strategy Call
                  <span aria-hidden>→</span>
                </SurveyButton>
              </span>
              <p className="text-xs text-neutral-400 max-w-md">
                15–20 minutes. No hard pitch. We&apos;ll tell you straight up
                if this doesn&apos;t fit your team.
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
