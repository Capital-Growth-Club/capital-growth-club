import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import HeroVideo from "@/components/HeroVideo";
import SectionTracker from "@/components/SectionTracker";

const editorialSerif = localFont({
  src: "../../../../public/fonts/maison-galliard-serif.otf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const helveticaBold = localFont({
  src: "../../../../public/fonts/HelveticaNeueBold.otf",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "From Solo Agent To Team Leader In 12 Months",
  description:
    "The team-ready growth machine we build and run for top-producing real estate agents. Multi-agent CRM, market-tested ad funnels, and long-term nurture that keeps your pipeline alive for years.",
  openGraph: {
    title: "From Solo Agent To Team Leader In 12 Months | Capital Growth Club",
    description:
      "The team-ready growth machine we build and run for top-producing real estate agents. Multi-agent CRM, market-tested ad funnels, and long-term nurture that scales your business.",
    url: "https://capitalgrowthclub.com/agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Solo Agent To Team Leader In 12 Months | Capital Growth Club",
    description:
      "The team-ready growth machine for top-producing agents. Multi-agent CRM, market-tested funnels, long-term nurture.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/agents",
  },
  robots: { index: false, follow: false },
};

const smsProof = [
  { src: "/sms-5.webp", w: 443, h: 240, headline: "$1.2M closed in 90 days on ~$1,300 in ad spend" },
  { src: "/sms-6.webp", w: 896, h: 594, headline: "$590K sale on $900 in ads — a 10x return" },
  { src: "/sms-7.jpg", w: 1284, h: 731, headline: "$9,150 in new business on $751 in ad spend" },
  { src: "/sms-2.webp", w: 282, h: 162, headline: "$1.2M+ under contract in 47 days on $1,000" },
  { src: "/sms-3.webp", w: 272, h: 195, headline: "$2.9M closed — 5 deals in 5 months on $2,200" },
  { src: "/sms-4.webp", w: 288, h: 177, headline: "2 deals + 80+ leads on just $15/day" },
];

const problemBullets = [
  {
    title: "You are the ceiling.",
    body: "Every deal, every follow-up, every ad decision runs through you. You've built yourself to the top of your market — and now the business can't grow past what one person can do in a day.",
  },
  {
    title: "Every hour on marketing is an hour not closing.",
    body: "CRM, ad tweaks, follow-up sequences, tech-stack fires. That's work an agent doing $80k should do — not one closing at your level. Every hour there is an hour not sitting in front of a buyer or seller.",
  },
  {
    title: "You can't build the business while you're stuck running the business.",
    body: "You want to hire an ISA, recruit agents, actually build the team. But every hour goes to today's deal instead of tomorrow's machine — so the business you want to build never gets built.",
  },
  {
    title: "You've tried the tools. None of them built you a business.",
    body: "New CRM. New coach. New AI hack. Every “solution” ended up as one more thing YOU have to manage. What you actually need is infrastructure — the systems and specialists an ISA or new agent can plug into — not another dashboard.",
  },
];

const dreamBullets = [
  {
    title: "You lead the business. We install the systems that scale it past you.",
    body: "Stop being your own marketer, follow-up team, and ops manager. Our specialists own every operational piece of the pipeline — so growth stops depending on how many hours you can personally squeeze in.",
  },
  {
    title: "Every hour on your calendar becomes CEO work.",
    body: "Ads, CRM, nurture, tracking, reporting — all handled in the background. Your day becomes closings, hiring, training, and leading — the work that actually builds a business, not the work that maintains one.",
  },
  {
    title: "Hire your first ISA. Recruit your first agents. Build the team.",
    body: "With lead-gen and nurture handled, you get your CEO hours back. Time to train an ISA, recruit closers, negotiate splits, and turn your solo practice into a real, growing operation.",
  },
  {
    title: "A pipeline your team can actually work — not one that dies when you take a week off.",
    body: "No new CRM to master. No new dashboards. Just a fully-managed system producing new inquiries and appointments predictably, week after week — at whatever team size you're ready for.",
  },
];

const mechanismSteps = [
  {
    n: "01",
    title: "Book your strategy call.",
    body: "We map out your goals, your market, and what a top-producer team actually looks like for you. No pitch, no obligation.",
    cta: true,
  },
  {
    n: "02",
    title: "We build your launch system.",
    body: "Your own custom-branded IDX website, CRM, automations, and proven lead-gen funnels — all built and wired for you in under 10 days.",
  },
  {
    n: "03",
    title: "We launch your ads.",
    body: "Proven campaigns go live in your market. Fresh buyer and/or seller inquiries start landing directly in your CRM within days.",
  },
  {
    n: "04",
    title: "We nurture your leads.",
    body: "Speed-to-lead SMS, automated property alerts, and 1,000-day check-ins fire on every lead the moment they hit your CRM — so leads stay warm and re-engage for years, without you touching a thing.",
  },
  {
    n: "05",
    title: "You work the leads.",
    body: "Show up, take the calls, close the deals. Or train your ISA and agents to take the calls and handle the closings for you — while you focus on leading the business.",
  },
];


const includedItems = [
  {
    n: "01",
    title: "Turn Website Browsers Into High-Intent Leads",
    bullets: [
      "Live MLS listings, updated in real time",
      "Fully custom-branded around you and your market",
      "Design proven with tens of thousands in ad spend behind it",
      "Turns cold browsers into real, verified buyer inquiries",
    ],
    image: "/idx-site-book-black.webp",
    value: "$5,000",
    valueNum: 5000,
    lineLabel: "High-Converting IDX Site",
    lineValue: "$5,000",
  },
  {
    n: "02",
    title: "Convert Complete Strangers Into Profitable Clients",
    bullets: [
      "Instant speed-to-lead SMS the moment they opt in",
      "Automated email property updates matched to their interest",
      "1,000+ days of check-ins and re-engagement, on autopilot",
      "No lead ever falls through the cracks — even years later",
    ],
    image: "/lead-nurture-book-black.webp",
    value: "$4,000",
    valueNum: 4000,
    lineLabel: "1,000-Day Nurture System",
    lineValue: "$4,000",
  },
  {
    n: "03",
    title: "Know Which Leads Are Closer To Buying",
    bullets: [
      "Tracks every property view, save, and return visit",
      "Scores leads based on real intent signals — not guesswork",
      "Tells your team exactly who to call next, in order",
      "So you spend time on the hottest leads first, always",
    ],
    image: "/behavior-tracking-book-black.webp",
    value: "$1,500",
    valueNum: 1500,
    lineLabel: "Behavior Tracking Pro",
    lineValue: "$1,500",
  },
  {
    n: "04",
    title: "Flood Your Pipeline With Phone-Verified Leads",
    bullets: [
      "Powered by $28M+ in managed ad spend",
      "Funnels stress-tested across dozens of markets and price points",
      "Every lead comes with a verified phone number, <strong><em>guaranteed</em></strong>",
      "No fakes, no bots, no landlines — just real people",
    ],
    image: "/lead-gen-book-black.webp",
    value: "$5,000",
    valueNum: 5000,
    lineLabel: "Lead-Gen Campaigns",
    lineValue: "$5,000",
  },
  {
    n: "05",
    title: "Get A Full Marketing Agency Managing It All",
    bullets: [
      "Dedicated lead-gen, nurture, and automation specialists",
      "Managed and optimized every single month",
      "No software login you have to figure out yourself",
      "You focus on leading — we focus on producing",
    ],
    image: "/top-producer-bundle.webp",
    value: "$5,000/mo",
    valueNum: 60000,
    lineLabel: "Full-Service Agency (12 months)",
    lineValue: "$60,000",
  },
];

const forYou = [
  "Are already top 20–30% in your market (12–30+ sides a year) and know it",
  "Want to build a team or small brokerage in the next 2–3 years — not just close more this month",
  "Know you're the bottleneck — and are done being the one who has to do everything",
  "Are willing to invest cash into systems that pay you back in team leverage, not one more coaching program",
];

const notForYou = [
  "Brand-new or part-time agents still learning to close — this is infrastructure, not sales coaching",
  "Ultra-luxury agents selling $5M+ homes — we're built for volume, not trophy sales",
  "Agents who want leads but aren't planning to hire, train, or build past themselves",
  "Agents who need today's leads to pay tomorrow's bills",
];

const faqs = [
  {
    q: "Can I do this under my current brokerage?",
    a: "Yes. Everything we build lives under your name, in your CRM, on your domain. Whatever splits, MLS access, or transaction rules your brokerage requires stay exactly the same — we don't touch that. What we build is the client-generation and pipeline machine that runs in parallel with whatever your brokerage provides.",
  },
  {
    q: "How fast do leads start coming in?",
    a: "Usually within 48–72 hours of your ads going live. Full install — site, CRM, campaigns, automations, dashboards — takes under 10 days from your discovery call. Once live, expect a steady weekly cadence of new inquiries. Most Tier A/B markets see 30+ qualified inquiries in the first 60 days.",
  },
  {
    q: "What ad budget do I need in my market?",
    a: "Depends on your tier. Tier A lifestyle markets (30A, Scottsdale, Naples): $15–20/day minimum — big audiences move on smaller spend. Tier B life-milestone markets (Plano, Chandler, Charleston): $25–35/day minimum. Tier C hidden-gem markets: $40–50+/day since smaller audiences need heavier saturation to produce steady volume. We set the exact number with you on the call before you commit to anything.",
  },
  {
    q: "What are the additional costs beyond your management fee?",
    a: "Beyond our $497/month management fee, you'll have two other recurring costs. (1) Your Facebook ad spend — paid directly to Meta, usually $15–$50/day depending on your market tier. (2) An IDX Broker Engage plan at $100/month — billed directly to IDX Broker (not us), since we integrate with their MLS feed to power the live listings on your site. You can cancel your IDX Broker subscription with them anytime. Plus a one-time $500 setup fee to us for the initial build.",
  },
  {
    q: "How many ad campaigns can I run?",
    a: "Your base $497/month includes one buyer campaign. Additional campaigns run alongside it: $297/month per additional buyer campaign, or $497/month per seller campaign. Each new campaign also requires a one-time setup fee no greater than $500 depending on the complexity of the request.",
  },
  {
    q: "Do you offer custom branding — logos, colors, fonts?",
    a: "Yes. We can build a full brand template — logo, color system, font choices, and design language — that carries across your IDX site, ads, emails, and everything else we produce. Bring it up on your discovery call if you want a full brand build; pricing depends on scope and is separate from the base management fee.",
  },
  {
    q: "Can you do my social media too?",
    a: "Yes, but with a specific scope: we produce the first 10–20 conversion-optimized posts (billed separately) to establish a starting brand presence. You do NOT need a big personal brand or thousands of followers to start closing deals — we've grown multiple agents and teams from zero and closed deals for them before they ever hit 500 followers. Ongoing content creation isn't part of the base package, but the launch brand build is available.",
  },
  {
    q: "How does the lead guarantee actually work?",
    a: "We qualify you for the guarantee on your discovery call — it depends on your market's audience size and whether you can commit to the minimum ad spend for 60 days straight (no pausing campaigns, no switching them mid-flight). If you qualify and hold the commitment, we guarantee at least 30 real, phone-verified buyer leads a month. If we don't hit that number, we keep running your entire system at no management fee until we do.",
  },
  {
    q: "What happens if my market doesn't qualify for the guarantee?",
    a: "You can still work with us — same install, same system, same team behind you. The volume guarantee just doesn't apply because smaller-population markets produce less predictable volume. You'll get everything else, and we'll set realistic expectations based on your actual audience size on the call.",
  },
  {
    q: "What if I don't want to build a team?",
    a: "This system is built to scale — and building a team is usually part of that — but you can get really far running it solo too. Most agents eventually hit a point where they have to choose between hiring more agents or bringing on a trained ISA (Inside Sales Agent). Our preferred route for the fastest results is the ISA — one person handling the calls and appointment-setting while you focus on the closings. Either way, the machine keeps producing regardless of your team size.",
  },
  {
    q: "Do you call my leads or set appointments for me?",
    a: "No. Everything up to the phone call is on us — capture, tagging, alerts, routing, nurture. The moment a lead is warm and ready, you (or your ISA when you hire one) do the calling. If you want done-for-you calling, we can refer you to a partner ISA provider — but it's not part of the base system.",
  },
];

export default function AgentsPage() {
  return (
    <SurveyProvider questionSet="real-estate">
      <SectionTracker />
      <main className={`${helveticaBold.variable} min-h-screen bg-white text-neutral-900 relative overflow-hidden`}>
        {/* Ambient gold glows */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-gold/[0.10] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[80vh] left-0 w-[700px] h-[700px] bg-brand-gold/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[180vh] right-0 w-[600px] h-[600px] bg-brand-gold/[0.05] rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0E0E0E 1px, transparent 1px), linear-gradient(to bottom, #0E0E0E 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Nav */}
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
            <SurveyButton
              location="nav"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-sm py-2.5 px-5 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Book Your Strategy Call
            </SurveyButton>
          </div>
        </nav>

        {/* ═════════════ 1. HERO ═════════════ */}
        <section data-section-name="hero" className="relative pt-32 pb-14 md:pt-36 md:pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full px-4 py-2 mb-8 shadow-sm shadow-neutral-900/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-neutral-900 text-xs md:text-sm font-black tracking-[0.15em] uppercase">
                  For Ambitious Real Estate Agents Only
                </span>
              </div>

              <h1 className={`${helveticaBold.className} text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight uppercase text-neutral-900 max-w-6xl`}>
                You&apos;ve hit your own ceiling.{" "}
                <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                  We build the business that scales past you.
                </span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
                We install the lead-gen and long‑term nurture systems top producers need to hire
                and scale — the infrastructure your ISA and future team will run. Without giving
                up your split.
              </p>

              <p className="mt-8 text-brand-gold text-base md:text-lg font-bold tracking-wide inline-flex items-center gap-3">
                <span aria-hidden>↓</span>
                How We&apos;re Scaling Solo Agents Businesses
                <span aria-hidden>↓</span>
              </p>

              {/* VSL */}
              <div className="mt-5 w-full max-w-3xl">
                <HeroVideo
                  src="https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a73945a329b76ca7bc3dae6.mp4"
                  className="mb-0"
                />
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-center gap-4">
                <span className="cta-wrap">
                  <SurveyButton
                    location="hero"
                    className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Book Your Strategy Call
                    <span className="text-brand-gold">→</span>
                  </SurveyButton>
                </span>
                <p className="text-xs text-neutral-500 max-w-md text-center">
                  No obligation. Only for agents serious about scaling their real estate business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ 2. RESULTS STRIP ═════════════ */}
        <section data-section-name="results-strip" className="relative py-10 md:py-14 bg-neutral-50/70 border-y border-neutral-200/70">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-3 items-center gap-4 md:gap-10">
              <div className="text-center">
                <p className={`${editorialSerif.className} text-4xl md:text-6xl text-neutral-900 leading-none`}>
                  8<span className="text-brand-gold">+</span>
                </p>
                <p className={`${editorialSerif.className} mt-3 text-xs md:text-sm text-neutral-500 tracking-widest uppercase leading-tight`}>
                  Years servicing real estate agents
                </p>
              </div>
              <div className="text-center border-x border-neutral-200 px-2 md:px-6">
                <p className={`${editorialSerif.className} text-4xl md:text-6xl text-neutral-900 leading-none`}>
                  $213M<span className="text-brand-gold">+</span>
                </p>
                <p className={`${editorialSerif.className} mt-3 text-xs md:text-sm text-neutral-500 tracking-widest uppercase leading-tight`}>
                  In attributed sales volume
                </p>
              </div>
              <div className="text-center">
                <p className={`${editorialSerif.className} text-4xl md:text-6xl text-neutral-900 leading-none`}>
                  $28M<span className="text-brand-gold">+</span>
                </p>
                <p className={`${editorialSerif.className} mt-3 text-xs md:text-sm text-neutral-500 tracking-widest uppercase leading-tight`}>
                  In ad spend managed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ 2b. SMS PROOF ═════════════ */}
        <section data-section-name="sms-proof" className="relative pt-20 md:pt-24 pb-8 md:pb-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-5 shadow-sm shadow-neutral-900/10">
                <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  Our Happy Clients
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900 mb-5">
                Real Texts From{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  Real Clients
                </span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                We didn&apos;t ask for these — clients just sent them after their first big wins
                on our system.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance] max-w-5xl mx-auto">
              {smsProof.map((img, i) => (
                <div key={img.src} className="mb-6 break-inside-avoid">
                  <p className="text-sm md:text-base font-bold text-neutral-900 mb-2.5 leading-snug px-1">
                    {img.headline}
                  </p>
                  <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
                    <Image
                      src={img.src}
                      alt={`Real client text ${i + 1} — ${img.headline}`}
                      width={img.w}
                      height={img.h}
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

        {/* ═════════════ 3. PROBLEM ═════════════ */}
        <section data-section-name="bottleneck" className="relative pt-8 md:pt-12 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-5 shadow-sm shadow-neutral-900/10">
                <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  The Bottleneck
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900">
                You&apos;ve maxed out what one person can do.{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  And that&apos;s the problem.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {problemBullets.map((b, i) => (
                <div
                  key={i}
                  className="relative bg-white border border-neutral-200 rounded-xl p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`${editorialSerif.className} text-brand-gold text-base md:text-lg tracking-widest`}>
                      0{i + 1}
                    </span>
                    <span className="h-px w-8 bg-brand-gold/40" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 leading-snug mb-3 font-[family-name:var(--font-heading)]">
                    {b.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-[15px] md:text-base">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 md:mt-16 text-center">
              <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 leading-tight font-[family-name:var(--font-heading)]">
                Get the machine your team will run.
              </p>
              <span className="cta-wrap inline-block">
                <SurveyButton
                  location="bottleneck"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Your Strategy Call
                  <span className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
            </div>
          </div>
        </section>

        {/* ═════════════ 4. DREAM OUTCOME ═════════════ */}
        <section data-section-name="dream-outcome" className="relative py-20 md:py-28 bg-[#0E0E0E]">
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="mx-auto flex w-fit items-center justify-center bg-gradient-to-r from-brand-gold/[0.14] via-brand-gold/[0.08] to-brand-gold/[0.14] border border-brand-gold/40 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-5 shadow-md shadow-brand-gold/20">
                <span className={`${editorialSerif.className} text-brand-gold text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  The Outcome
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-white">
                What we handle for you{" "}
                <span className={`${editorialSerif.className} font-normal bg-gradient-to-r from-[#BB9A65] to-[#FFFCD8] bg-clip-text text-transparent`}>
                  guaranteed.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {dreamBullets.map((b, i) => (
                <div
                  key={i}
                  className="relative bg-neutral-900/60 border border-white/10 rounded-xl p-7 md:p-8 backdrop-blur-sm hover:border-brand-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`${editorialSerif.className} text-brand-gold text-base md:text-lg tracking-widest`}>
                      0{i + 1}
                    </span>
                    <span className="h-px w-8 bg-brand-gold/50" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-3">
                    {b.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-[15px] md:text-base">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 md:mt-16 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-heading)]">
                You focus on calls and closing. We do the rest.
              </p>
              <span className="cta-wrap inline-block">
                <SurveyButton
                  location="dream"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold text-neutral-900 font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:from-[#D4B87A] hover:via-brand-gold hover:to-[#D4B87A] transition-all shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Your Strategy Call
                  <span className="text-neutral-900">→</span>
                </SurveyButton>
              </span>
            </div>
          </div>
        </section>

        {/* ═════════════ 5. MECHANISM ═════════════ */}
        <section data-section-name="mechanism" className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-neutral-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">
                The Mechanism
              </p>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold/[0.14] via-brand-gold/[0.08] to-brand-gold/[0.14] border border-brand-gold/35 rounded-full px-6 py-3 mb-8 shadow-md shadow-brand-gold/10">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-neutral-900 text-sm md:text-base font-black tracking-[0.15em] uppercase">
                  The Team-Ready Growth System
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900">
                How to{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  get started.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
              {mechanismSteps.map((s) => (
                <div
                  key={s.n}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-7 shadow-sm relative flex flex-col"
                >
                  <div className={`${editorialSerif.className} absolute -top-3 left-6 bg-gradient-to-br from-brand-gold to-[#D4B87A] text-neutral-900 text-xs tracking-widest rounded-md px-2.5 pt-2 pb-1 leading-none shadow-md shadow-brand-gold/30`}>
                    STAGE {s.n}
                  </div>
                  <h3 className="mt-4 text-lg md:text-xl font-bold text-neutral-900 mb-3 leading-snug font-[family-name:var(--font-heading)]">
                    {s.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-[15px] flex-1">
                    {s.body}
                  </p>
                  {s.cta && (
                    <div className="mt-5">
                      <span className="cta-wrap block">
                        <SurveyButton
                          location="mechanism-stage-1"
                          className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold text-sm py-3 px-4 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                          Book Your Strategy Call
                          <span className="text-brand-gold">→</span>
                        </SurveyButton>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ 5b. FIT CHECK ═════════════ */}
        <section data-section-name="fit-check" className="relative py-12 md:py-16 bg-neutral-50/70 border-y border-neutral-200/70">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-5 shadow-sm shadow-neutral-900/10">
                <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  Fit Check
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900">
                Is this the{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  right fit for you?
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* For */}
              <div className="bg-white border border-brand-gold/30 rounded-2xl p-7 md:p-8 shadow-md shadow-brand-gold/10">
                <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-5">
                  Built for agents who…
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
                      <p className="text-neutral-800 leading-relaxed text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-7 md:p-8 shadow-sm">
                <p className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
                  Not for…
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
                      <p className="text-neutral-500 leading-relaxed text-base">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ 7. OFFER STACK ═════════════ */}
        <section data-section-name="offer-stack" className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-5 shadow-sm shadow-neutral-900/10">
                <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  What You Get
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900 mb-5">
                Everything you need to run a growing team —{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  none of it run by you.
                </span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Clear division of labor. We handle the machine. You and your people work the
                pipeline it feeds you.
              </p>
            </div>

            <div className="mt-10 relative w-full max-w-3xl mx-auto mb-14 md:mb-16">
              <Image
                src="/top-producer-bundle.webp"
                alt="Top Producer Team Launch System — the full bundle"
                width={2906}
                height={1627}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Section divider heading */}
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight font-[family-name:var(--font-heading)]">
                5 systems. All built and managed for you.
              </h3>
              <p className="mt-3 text-neutral-600 text-base md:text-lg leading-relaxed">
                Here&apos;s every piece — and what it&apos;d cost you à la carte.
              </p>
            </div>

            {/* 5 Alternating item rows */}
            <div className="space-y-20 md:space-y-28">
              {includedItems.map((item, i) => {
                const imageOnLeft = i % 2 === 0;
                return (
                  <div
                    key={item.n}
                    className="grid md:grid-cols-2 gap-8 md:gap-14 items-center"
                  >
                    <div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={3000}
                        height={3000}
                        sizes={
                          item.image === "/top-producer-bundle.webp"
                            ? "(max-width: 768px) 95vw, 50vw"
                            : "(max-width: 768px) 80vw, 40vw"
                        }
                        className={
                          item.image === "/top-producer-bundle.webp"
                            ? "w-full max-w-2xl h-auto mx-auto drop-shadow-2xl"
                            : "w-3/4 md:w-full max-w-md h-auto mx-auto drop-shadow-2xl"
                        }
                      />
                    </div>
                    <div className={imageOnLeft ? "md:order-2" : "md:order-1"}>
                      <p className={`${editorialSerif.className} text-brand-gold text-base md:text-lg tracking-widest mb-3`}>
                        INCLUDED &middot; {item.n}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight mb-5 font-[family-name:var(--font-heading)]">
                        {item.title}
                      </h3>
                      <ul className="space-y-2.5 mb-6">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <div className="shrink-0 w-5 h-5 rounded-md bg-gradient-to-br from-brand-gold to-[#D4B87A] flex items-center justify-center mt-0.5">
                              <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                                <path
                                  d="M5 10l4 4 6-8"
                                  stroke="#0E0E0E"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p
                              className="text-neutral-700 leading-snug text-[15px] md:text-base"
                              dangerouslySetInnerHTML={{ __html: b }}
                            />
                          </li>
                        ))}
                      </ul>
                      <div className="inline-flex items-baseline gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-4 py-2.5">
                        <span className="text-neutral-500 text-[11px] font-bold uppercase tracking-widest">
                          Valued at
                        </span>
                        <span className="text-neutral-900 text-xl md:text-2xl font-black">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cost transition headline */}
            <div className="text-center max-w-3xl mx-auto mt-20 md:mt-28 mb-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900">
                What does this{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  cost?
                </span>
              </h3>
            </div>

            {/* Totals + Pricing Block */}
            <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-2xl p-8 md:p-10 shadow-lg">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6 text-center">
                Cost Of Doing It Yourself
              </p>

              <div className="space-y-3 mb-6 text-[15px] md:text-base">
                {includedItems.map((item) => (
                  <div
                    key={item.n}
                    className="flex justify-between items-baseline text-neutral-700"
                  >
                    <span>{item.lineLabel}</span>
                    <span className="text-neutral-900 text-lg font-semibold">
                      {item.lineValue}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-5 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-neutral-900 text-lg font-bold">
                    A la carte total
                  </span>
                  <span className="text-neutral-400 text-2xl md:text-3xl font-black line-through decoration-red-500/70 decoration-4">
                    $75,500
                  </span>
                </div>
              </div>

              <div className="mb-8 -mx-2">
                <Image
                  src="/top-producer-bundle.webp"
                  alt="Real Estate Business In A Box — the full bundle"
                  width={2906}
                  height={1627}
                  sizes="(max-width: 768px) 90vw, 500px"
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>

              <div className="text-center bg-gradient-to-br from-brand-gold/10 via-white to-brand-gold/5 border border-brand-gold/40 rounded-xl p-6 md:p-7 shadow-sm">
                <p className="text-brand-gold text-xs font-bold tracking-[0.28em] uppercase mb-3">
                  Your Price
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-black text-neutral-900 leading-none">
                    $497
                  </span>
                  <span className="text-neutral-500 text-lg">/month</span>
                </div>
                <p className="text-neutral-500 text-sm mt-2 font-semibold">
                  + one-time $500 setup fee
                </p>
                <div className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/40 rounded-full px-3 py-1 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-600 text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase">
                    Price increase coming
                  </span>
                </div>
                <p className="text-neutral-500 text-sm mt-3">
                  All of it. Every month. No a la carte pricing games.
                </p>
                <p className="text-neutral-400 text-xs mt-3 italic leading-relaxed max-w-md mx-auto">
                  Does not include the separate IDX plan needed to host your MLS feed.{" "}
                  <strong className="text-neutral-500">Don&apos;t purchase before speaking to
                  us.</strong>
                </p>
              </div>
            </div>

            {/* Terms */}
            <div className="mt-10 max-w-2xl mx-auto space-y-3">
              {[
                "You own all your contacts and data, forever. We don't hold anything hostage.",
                "One team runs the whole system — one point of contact, not five vendors to chase.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
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
                  <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex justify-center">
              <span className="cta-wrap">
                <SurveyButton
                  location="offer"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Your Strategy Call
                  <span className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
            </div>
          </div>
        </section>

        {/* ═════════════ 6. GUARANTEE ═════════════ */}
        <section data-section-name="guarantee" className="relative py-20 md:py-28 bg-neutral-50/70 border-y border-neutral-200/70">
          <div className="max-w-3xl mx-auto px-6">
            {/* Kicker pill */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 shadow-sm shadow-neutral-900/10">
                <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  Our Lead Guarantee
                </span>
              </div>
            </div>

            {/* THE BADGE */}
            <div className="relative max-w-2xl mx-auto">
              {/* Gold gradient outer frame */}
              <div className="bg-gradient-to-br from-brand-gold via-[#D4B87A] to-brand-gold rounded-3xl p-[3px] shadow-2xl shadow-brand-gold/25">
                {/* Inner cream card */}
                <div className="bg-gradient-to-br from-white via-[#FFFDF7] to-[#FDF6E5] rounded-[calc(1.5rem-3px)] p-8 md:p-14 relative overflow-hidden">
                  {/* Decorative corner marks */}
                  <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-brand-gold/50 rounded-tl-md pointer-events-none" />
                  <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-brand-gold/50 rounded-tr-md pointer-events-none" />
                  <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-brand-gold/50 rounded-bl-md pointer-events-none" />
                  <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-brand-gold/50 rounded-br-md pointer-events-none" />

                  {/* Medallion */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold via-[#D4B87A] to-brand-gold shadow-lg shadow-brand-gold/40" />
                      <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center">
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#BB9A65"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 21h8" />
                          <path d="M12 17v4" />
                          <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
                          <path d="M17 4h3c0 2.5-1.5 4.5-3 5" />
                          <path d="M7 4H4c0 2.5 1.5 4.5 3 5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Promise */}
                  <p className="text-center text-xl md:text-2xl font-bold text-neutral-900 leading-snug font-[family-name:var(--font-heading)] relative">
                    We guarantee to fill your pipeline with real verified phone buyer leads —{" "}
                    <span className={`${editorialSerif.className} font-normal bg-gradient-to-r from-[#BB9A65] to-[#D4B87A] bg-clip-text text-transparent`}>
                      or we work for free until we do.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-center text-neutral-500 text-sm italic max-w-xl mx-auto">
              Guarantee volume and eligibility depend on your market and ad budget — we walk
              through both on your discovery call.
            </p>
          </div>
        </section>

        {/* ═════════════ 9. FAQ ═════════════ */}
        <section data-section-name="faq" className="relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center bg-gradient-to-r from-neutral-900/[0.06] via-neutral-900/[0.03] to-neutral-900/[0.06] border border-neutral-900/25 rounded-full pl-[calc(1rem+0.28em)] pr-4 pt-3 pb-2 mb-5 shadow-sm shadow-neutral-900/10">
                <span className={`${editorialSerif.className} text-neutral-900 text-xs md:text-sm tracking-[0.28em] uppercase leading-none`}>
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-neutral-900">
                Frequently{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <p className="text-base md:text-lg font-bold text-neutral-900 leading-snug">
                      {f.q}
                    </p>
                    <span className="shrink-0 mt-1 text-brand-gold text-xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-neutral-600 leading-relaxed text-base">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════ FINAL CTA ═════════════ */}
        <section data-section-name="final-cta" className="relative py-24 md:py-32 bg-[#0E0E0E]">
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-heading)] text-white mb-6">
              Every month you wait to build your own is another month you let{" "}
              <span className={`${editorialSerif.className} font-normal bg-gradient-to-r from-[#BB9A65] to-[#FFFCD8] bg-clip-text text-transparent`}>
                someone else control your success and your growth.
              </span>
            </h2>

            <div className="mt-10 flex flex-col items-center gap-4">
              <span className="cta-wrap">
                <SurveyButton
                  location="final"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold text-neutral-900 font-semibold text-lg md:text-xl py-5 px-10 rounded-xl hover:from-[#D4B87A] hover:via-brand-gold hover:to-[#D4B87A] transition-all shadow-xl shadow-brand-gold/30 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Book Your Strategy Call
                  <span className="text-neutral-900">→</span>
                </SurveyButton>
              </span>
              <p className="text-xs text-neutral-400 max-w-md">
                No obligation. Only for agents serious about scaling their real estate business.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-10 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              &copy; 2026 Capital Growth Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </SurveyProvider>
  );
}
