import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Real Estate Business In A Box — Start Building Your Own Book Of Business",
  description:
    "Done-for-you Facebook ads, CRM, and IDX website that bring buyers and sellers directly to you. $500 setup, $497/mo, cancel anytime. Built for solo agents and micro-teams building their own real estate business.",
  openGraph: {
    title: "Real Estate Business In A Box | Capital Growth Club",
    description:
      "Start building your own real estate business without needing to build a big personal brand or spend multiple 5–6 figures a month on marketing. Done-for-you ads + CRM + IDX.",
    url: "https://capitalgrowthclub.com/agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Business In A Box | Capital Growth Club",
    description:
      "Done-for-you Facebook ads + CRM + IDX website. Built for solo agents building their own book of business without leaving their brokerage.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/agents",
  },
};

const isThisYou = [
  "You're at a brokerage or team that hands you leads and systems — but nothing you actually own, control, or can scale yourself.",
  "Every deal you close — whether it came from a referral you dug up yourself or a lead your team handed you — 30–50% of the check still walks. Because the brand on the sign isn't yours.",
  "You know you're capable of running your own book of business. The struggle was never ability — it's always been “how do I generate sales volume like these bigger brokerages and teams do — but for myself?”",
  "You'd rather run a proof of concept — build your own real estate business alongside your current setup and watch it produce — before jumping all in and hoping for the best.",
];

const deliverables = [
  {
    title: "A Full Specialist Team — Not Just Software",
    body: "Every Real Estate Business In A Box includes a dedicated lead generation marketing team, a lead nurture specialist, and an advanced automations specialist working behind the scenes on your business. You don't hire them. You don't manage them. They build, tune, and improve your system every month while you focus on your calls and closings.",
    image: "/deliverable-1.png",
    imageW: 1536,
    imageH: 1024,
    framed: true,
    imageNote:
      "Image for representation — our entire team is fully remote.",
  },
  {
    title: "Proven Lead Generation Campaigns",
    body: "We install the same proven lead-gen campaigns top brokerages use to keep their agents' pipelines full — except now every lead comes and goes through you first.",
    note: "Includes our verified lead guarantee — every lead has a real, valid phone number before it hits your CRM.",
    stackedImages: [
      // Back layer — newest two, huge, overflowing edges
      {
        src: "/sms-6.png",
        w: 896,
        h: 594,
        cls: "w-[110%] -translate-x-[22%] -translate-y-[16%] z-0 shadow-lg",
      },
      {
        src: "/sms-7.jpg",
        w: 1284,
        h: 731,
        cls: "w-[110%] translate-x-[24%] translate-y-[20%] z-0 shadow-lg",
      },
      // Middle layer — older SMS proofs at corners, larger
      {
        src: "/sms-1.png",
        w: 283,
        h: 172,
        cls: "w-[70%] -translate-x-[38%] -translate-y-[36%] z-10 shadow-xl",
      },
      {
        src: "/sms-2.png",
        w: 282,
        h: 162,
        cls: "w-[72%] translate-x-[38%] -translate-y-[38%] z-10 shadow-xl",
      },
      {
        src: "/sms-3.png",
        w: 272,
        h: 195,
        cls: "w-[70%] -translate-x-[38%] translate-y-[38%] z-10 shadow-xl",
      },
      {
        src: "/sms-4.png",
        w: 288,
        h: 177,
        cls: "w-[72%] translate-x-[38%] translate-y-[40%] z-10 shadow-xl",
      },
      // Front layer — hero center card, shifted up-left
      {
        src: "/sms-5.png",
        w: 443,
        h: 240,
        cls: "w-[72%] -translate-x-[8%] -translate-y-[18%] z-20 shadow-2xl",
      },
    ],
  },
  {
    title: "CRM + IDX Website — Fully Set Up",
    body: "Captures every lead, tags them by interest, and auto-nurtures them for life. You get a real, proven, high-converting website with live MLS listings — not a static landing page.",
    image: "/deliverable-3.png",
    imageW: 1920,
    imageH: 1080,
  },
  {
    title: "Automated Text + Email Follow-Up",
    body: "Speed-to-lead SMS the second they opt in. Long-term nurture emails that keep every lead warm until they're ready. No one falls through the cracks.",
    image: "/deliverable-4.png",
    imageW: 1920,
    imageH: 1080,
  },
  {
    title: "Lead Behavior Tracking & Alerts",
    body: "The system watches what every lead does on your site — which listings they view, how often, when they come back — and tells you exactly who to prioritize calling next based on their behavior.",
    image: "/deliverable-5.png",
    imageW: 1138,
    imageH: 986,
    imageClass: "w-2/3 h-auto mx-auto drop-shadow-lg",
  },
  {
    title: "Sales & Marketing Dashboards",
    body: "See how your business is running at a glance. From sales performance across your whole team to which marketing efforts are driving the highest ROI — every number that matters, in one view.",
    image: "/deliverable-6.png",
    imageW: 1920,
    imageH: 1080,
    imageClass: "w-full h-auto scale-110 origin-center drop-shadow-xl",
  },
  {
    title: "Full Team Scaling System",
    body: "When you're ready, plug in new agents or ISAs at any time. Full training and support team included so you scale quickly instead of getting stuck training people yourself.",
    image: "/deliverable-7.png",
    imageW: 1254,
    imageH: 1254,
    imageClass: "w-2/3 h-auto mx-auto rounded-full drop-shadow-lg",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "Strategy Call",
    duration: "Day 0",
    body: "We map your market, price points, target buyers, and goals. If we're not a fit, we tell you on the call.",
  },
  {
    label: "Step 2",
    title: "Build & Launch",
    duration: "Under 10 days",
    body: "We build your Real Estate Business In A Box end-to-end — ads, funnel, CRM, IDX site, nurture sequences — and go live in under 10 days.",
  },
  {
    label: "Step 3",
    title: "Optimize & Scale",
    duration: "Ongoing",
    body: "We tune the ads and nurture based on real conversations and real closings. You stay in your zone of genius. We stay in ours.",
  },
];

const faqs = [
  {
    q: "Do I need to leave my brokerage to work with you?",
    a: "No. Most of our clients start this while they're still active at their current team or brokerage. Same phone, same closings, same paychecks. The machine runs in parallel — building your own pipeline in your own name. Once you see the results, you decide if you want to negotiate a better split, launch your own team, or stay put with extra income. That decision is yours, not ours.",
  },
  {
    q: "What if my brokerage or team agreement doesn't allow this?",
    a: "Every agreement is different, but most brokerages allow agents to build a personal brand and generate their own leads. Check your agreement first. If it's unclear, we've helped many agents structure this to fit inside their existing contract without triggering any conflicts. This isn't designed to compete with your brokerage's leads. It's designed to build YOUR book of business on the side.",
  },
  {
    q: "What exactly counts as a \"qualified lead\" for the 60-day guarantee?",
    a: "A qualified lead is a real, non-duplicate person who submitted their info through one of our campaigns and provided a verified working phone number. Bots, fake numbers, and duplicates don't count. Every lead we count toward the guarantee has been phone-verified before it lands in your CRM.",
  },
  {
    q: "How does the 60-day guarantee actually work?",
    a: "If we don't deliver at least 30 qualified leads inside the first 60 days of your ads going live, we keep running your entire system at no additional management fee until we do. You keep paying ad spend directly to Facebook. We keep working — for free — until we hit the number. The guarantee applies to Facebook / Meta campaigns and is spelled out in your Services Agreement and our Terms of Service.",
  },
  {
    q: "What if I'm not techy?",
    a: "That's exactly who this is built for. We build and run everything. You don't touch Facebook Ads Manager, you don't set up automations, you don't hire a developer. You just handle the calls and closings — the same thing you already do today.",
  },
  {
    q: "How much ad spend do I need?",
    a: "Most agents start at $15–$30 a day ($450–$900/month), then scale once they see deals landing. Ad spend is paid directly to Facebook — no per-lead fees, no markup on our end.",
  },
  {
    q: "What's the total monthly cost?",
    a: "Three parts: (1) our $497/month management fee, (2) $500/month minimum ad spend paid directly to Facebook, and (3) $100/month for an IDX Broker Engage plan — that's the IDX provider that directly integrates with your Real Estate Business In A Box to power the live MLS listings on your site. Total: $1,097/month minimum. If you already have IDX through another provider, we still need you on IDX Broker for the integration to work — whether you keep or cancel your old subscription is your call. We help you set up IDX Broker, buy a domain if you need one, and configure everything else.",
  },
  {
    q: "How long is the commitment?",
    a: "Cancel anytime after the initial under-10-day build. No long-term contract, no cancellation penalty. If we're not performing, you leave. That's exactly why the guarantee is what it is — if we don't hit 30 qualified leads in 60 days, we run your system for free until we do.",
  },
  {
    q: "What if I want to eventually build a team or add ISAs?",
    a: "That's exactly what the Full Team Scaling System is for. When you're ready to add agents or ISAs, we plug them into your existing infrastructure and handle the training and support so you don't get stuck onboarding people yourself. Your machine stays yours. The scale just goes up without you spending your weekends training new hires.",
  },
  {
    q: "How do I know when it's time to leave my brokerage?",
    a: "You'll know when the split math stops making sense. Most of our clients hit a moment where the leads their own machine is producing outperform what they're getting from their broker — and the 30–50% commission cut just becomes a math problem. When you hit that moment, you'll know. We'll help you think through it if you want.",
  },
  {
    q: "How do I transfer my existing leads into the new system?",
    a: "If your current CRM allows a bulk export, we import them straight into your new system. Some platforms you don't own or control block that — in which case one of our VAs can do it manually for an added cost, or you cherry-pick and move only your hottest leads by hand. Either way, you don't lose your pipeline.",
  },
  {
    q: "What makes your leads different than Zillow / Realtor.com / other lead sources?",
    a: "The lead itself isn't the difference — the system around it is. We combine targeted ads + your own CRM + IDX website + lifetime automated nurture + speed-to-lead SMS + lead behavior alerts. Same buyer would be a $200 Zillow lead sold to four other agents. Through your Real Estate Business In A Box, they're exclusively yours, dropped straight into your CRM, at a fraction of the cost.",
  },
  {
    q: "How is this different from Realgeeks or other CRM software?",
    a: "Realgeeks and similar tools give you the software and hand you the keys. Great — if you have the time, the tech skills, and the ad budget to figure it all out yourself. We're the opposite. Software plus a service team that builds it, runs it, and optimizes it for you. Same tools you'd get from a software company, plus the people who actually operate them. Software pricing, done-for-you service.",
  },
  {
    q: "Do I need my own website already?",
    a: "You can absolutely have your own site for anything else — personal blog, static landing pages, whatever. But for the MLS listing site that pairs with your Real Estate Business In A Box, we use our own proven high-converting, modern, minimal design and theme it to your brand — logo, colors, fonts, style. It's not a template you have to customize. It's a system that's already been tested and optimized, adapted to look like yours.",
  },
];

const leadQualityImages = [
  { src: "/lead-quality-2.png", w: 462, h: 201 },
  { src: "/lead-quality-3.png", w: 430, h: 208 },
  { src: "/lead-quality-4.png", w: 433, h: 312 },
  { src: "/lead-quality-5.png", w: 483, h: 267 },
  { src: "/lead-quality-6.png", w: 496, h: 199 },
  { src: "/lead-quality-7.png", w: 353, h: 258 },
  { src: "/lead-quality-8.png", w: 507, h: 240 },
  { src: "/lead-quality-9.png", w: 488, h: 223 },
  { src: "/lead-quality-1.png", w: 549, h: 420 },
];

export default function AgentsPage() {
  return (
    <SurveyProvider questionSet="real-estate">
      <main className="min-h-screen bg-white text-neutral-900 relative overflow-hidden">
        {/* Ambient gold glows — the "techy premium" backdrop */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-gold/[0.10] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[70vh] left-0 w-[700px] h-[700px] bg-brand-gold/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[160vh] right-0 w-[600px] h-[600px] bg-brand-gold/[0.05] rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle grid pattern — SaaS techy feel */}
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
                src="/logo.png"
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
            <SurveyButton location="nav" className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-sm py-2.5 px-5 rounded-lg hover:bg-neutral-800 transition-colors">
              Book Your Discovery Call
            </SurveyButton>
          </div>
        </nav>

        {/* ═════════════ HERO ═════════════ */}
        <section className="relative pt-32 pb-10 md:pt-36 md:pb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              {/* Product tag */}
              <div className="inline-flex items-center gap-2 bg-brand-gold/[0.08] border border-brand-gold/25 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase">
                  Full Real Estate Business In A Box
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase text-neutral-900 max-w-4xl">
                Start building{" "}
                <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                  your own real estate business
                </span>{" "}
                without needing to build a big personal brand or spend multiple
                5–6 figures a month on marketing.
              </h1>

              {/* Subhead */}
              <p className="mt-7 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
                We'll install and manage the exact lead generation and
                long-term nurture systems billion-dollar brokerages and teams
                use — built for you, run for you, owned by you. We bring you
                the clients, you handle the calls and closings.
              </p>

              {/* Credibility line */}
              <p className="mt-5 text-sm text-neutral-500">
                Built for ambitious agents ready to own their book of business.
              </p>

              {/* Video */}
              <div className="mt-10 w-full max-w-3xl">
                <HeroVideo
                  src="https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a5bece41a0f048050ae93ec.mp4"
                  className="mb-0"
                />
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col items-center gap-4">
                <span className="cta-wrap"><SurveyButton location="hero" className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                  Book Your Discovery Call
                  <span className="text-brand-gold">→</span>
                </SurveyButton></span>
                <p className="text-xs text-neutral-500">
                  No brokerage exit required — most clients start alongside
                  their current setup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ SMS PROOF ═════════════ */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-neutral-900 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase">
                Real Texts. From Real Clients.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] max-w-5xl mx-auto">
              {[
                { src: "/sms-1.png", w: 283, h: 172 },
                { src: "/sms-2.png", w: 282, h: 162 },
                { src: "/sms-3.png", w: 272, h: 195 },
                { src: "/sms-4.png", w: 288, h: 177 },
                { src: "/sms-5.png", w: 443, h: 240 },
                { src: "/sms-6.png", w: 896, h: 594 },
                { src: "/sms-7.jpg", w: 1284, h: 731 },
              ].map((img, i) => (
                <div
                  key={img.src}
                  className="mb-6 break-inside-avoid rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-md shadow-neutral-900/5"
                >
                  <Image
                    src={img.src}
                    alt={`SMS conversation ${i + 1}`}
                    width={img.w}
                    height={img.h}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ═════════════ IS THIS YOU ═════════════ */}
        <section className="relative pt-10 pb-20 md:pt-12 md:pb-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Qualifying
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900">
                Is this you?
              </h2>
            </div>

            <div className="grid gap-3">
              {isThisYou.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border border-neutral-200 rounded-2xl p-5 md:p-6 shadow-sm"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-brand-gold to-[#D4B87A] flex items-center justify-center shadow-sm shadow-brand-gold/30">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 10l4 4 6-8"
                        stroke="#0E0E0E"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg text-neutral-800 leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <div className="mt-10 flex justify-center">
              <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                Book Your Discovery Call
                <span className="text-brand-gold">→</span>
              </SurveyButton></span>
            </div>
          </div>
        </section>

        {/* ═════════════ RUN ALONGSIDE YOUR BROKERAGE ═════════════ */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-brand-gold/[0.08] via-white to-white border border-brand-gold/25 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  Parallel, Not Replacement
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900 mb-5">
                  You don't need to quit your brokerage{" "}
                  <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                    to start building yours.
                  </span>
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Most of our clients start this while they're still active at
                  their team or brokerage. Same closings. Same paychecks. Same
                  Monday morning meetings.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-10">
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 md:p-6">
                  <p className="text-neutral-400 font-mono text-xs mb-2">
                    Today
                  </p>
                  <p className="text-neutral-900 font-bold text-lg mb-2">
                    Nothing changes on the surface.
                  </p>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Keep servicing your current pipeline. Keep your
                    brokerage-provided leads. Keep the paycheck coming.
                  </p>
                </div>
                <div className="bg-white border border-brand-gold/30 rounded-2xl p-5 md:p-6">
                  <p className="text-brand-gold font-mono text-xs mb-2">
                    In the background
                  </p>
                  <p className="text-neutral-900 font-bold text-lg mb-2">
                    A machine you own starts producing.
                  </p>
                  <p className="text-neutral-600 text-[15px] leading-relaxed">
                    Leads captured in your name. On your domain. Feeding a
                    pipeline that belongs to you.
                  </p>
                </div>
              </div>

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">
                  Once it's producing — usually within 60 days — you're looking
                  at split math with real numbers instead of guesses. Negotiate
                  a better split. Launch your own team. Go fully independent.
                  Or just pocket the extra commission while you stay put.
                </p>
                <p className="text-neutral-900 font-bold text-lg md:text-xl italic border-t border-neutral-200 pt-6 mb-8">
                  The point isn't to leave. The point is to have the option.
                </p>

                {/* Section CTA */}
                <div className="flex justify-center">
                  <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                    Book Your Discovery Call
                    <span className="text-brand-gold">→</span>
                  </SurveyButton></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ WHAT YOU GET ═════════════ */}
        <section className="relative py-20 md:py-28 bg-neutral-50/70 border-y border-neutral-200/70">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              {/* Product intro pill */}
              <p className="text-neutral-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">
                Introducing
              </p>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-gold/[0.14] via-brand-gold/[0.08] to-brand-gold/[0.14] border border-brand-gold/35 rounded-full px-6 py-3 mb-8 shadow-md shadow-brand-gold/10">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-neutral-900 text-sm md:text-base font-black tracking-[0.15em] uppercase">
                  Full Real Estate Business In A Box
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900 mb-5">
                Install the same systems billion-dollar brokerages and teams
                run off,{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  but this one's yours — and only $497/month.
                </span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Leads. CRM. IDX site. Lifetime nurture. Follow-up alerts.
                Weekly reporting. Everything a broker or team uses to get you
                to hang your license with them — but built for you. Run for
                you. Reported to you.
              </p>
            </div>

            {/* Alternating rows */}
            <div className="space-y-16 md:space-y-24">
              {deliverables.map((d, i) => {
                const imageOnLeft = i % 2 === 1;
                return (
                  <div
                    key={i}
                    className="grid md:grid-cols-2 gap-8 md:gap-14 items-center"
                  >
                    {/* Text */}
                    <div className={imageOnLeft ? "md:order-2" : ""}>
                      <div className="inline-flex items-center gap-3 mb-5">
                        <span className="text-brand-gold font-mono text-sm font-bold">
                          0{i + 1}
                        </span>
                        <span className="h-px w-10 bg-brand-gold/40" />
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-5 leading-tight">
                        {d.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                        {d.body}
                      </p>
                      {"note" in d && d.note && (
                        <p className="mt-4 text-neutral-500 text-sm font-light leading-relaxed">
                          [ {d.note} ]
                        </p>
                      )}
                    </div>

                    {/* Image or placeholder */}
                    <div className={imageOnLeft ? "md:order-1" : ""}>
                      {"image" in d && d.image && "framed" in d && d.framed ? (
                        // Framed image — inside the gold-gradient container
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-brand-gold/[0.10] via-white to-brand-gold/[0.05] shadow-xl shadow-brand-gold/10">
                          <Image
                            src={d.image}
                            alt={d.title}
                            fill
                            sizes="(max-width: 768px) 92vw, 45vw"
                            className="object-cover"
                          />
                        </div>
                      ) : "image" in d && d.image ? (
                        // Free-standing image
                        <Image
                          src={d.image}
                          alt={d.title}
                          width={d.imageW || 1920}
                          height={d.imageH || 1080}
                          sizes="(max-width: 768px) 100vw, 55vw"
                          className={
                            "imageClass" in d && d.imageClass
                              ? d.imageClass
                              : "w-full h-auto scale-125 origin-center drop-shadow-xl"
                          }
                        />
                      ) : "stackedImages" in d && d.stackedImages ? (
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-brand-gold/[0.10] via-white to-brand-gold/[0.05] shadow-xl shadow-brand-gold/10">
                          {/* Dark solid backdrop so no white peeks through */}
                          <div className="absolute inset-0 bg-neutral-900" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            {d.stackedImages.map((img, idx) => (
                              <div
                                key={img.src}
                                className={`absolute rounded-xl overflow-hidden ${img.cls}`}
                              >
                                <Image
                                  src={img.src}
                                  alt={`${d.title} — proof ${idx + 1}`}
                                  width={img.w}
                                  height={img.h}
                                  sizes="(max-width: 768px) 80vw, 40vw"
                                  className="w-full h-auto block"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-brand-gold/[0.10] via-white to-brand-gold/[0.05] shadow-xl shadow-brand-gold/10">
                          {/* Subtle grid overlay */}
                          <div
                            className="absolute inset-0 opacity-[0.06]"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #0E0E0E 1px, transparent 1px), linear-gradient(to bottom, #0E0E0E 1px, transparent 1px)",
                              backgroundSize: "32px 32px",
                            }}
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <svg
                              className="w-12 h-12 text-brand-gold/40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <path d="M21 15l-5-5L5 21" />
                            </svg>
                            <span className="text-brand-gold/70 text-xs font-bold tracking-[0.25em] uppercase">
                              /deliverable-{i + 1}.png
                            </span>
                          </div>
                        </div>
                      )}
                      {"imageNote" in d && d.imageNote && (
                        <p className="mt-3 text-neutral-500 text-xs text-center italic">
                          {d.imageNote}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="inline-block text-neutral-700 font-semibold text-lg italic border-t border-b border-neutral-200 py-4 px-6">
                You don't learn more tech. You get a machine that just runs.
              </p>
            </div>

            {/* Section CTA */}
            <div className="mt-10 flex justify-center">
              <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                Book Your Discovery Call
                <span className="text-brand-gold">→</span>
              </SurveyButton></span>
            </div>
          </div>
        </section>

        {/* ═════════════ HOW IT WORKS ═════════════ */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900 mb-5">
                Live in{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  under 10 days.
                </span>
              </h2>
              <p className="text-neutral-600 text-lg">
                Three steps. No consultants. No project managers. No handoffs.
              </p>
            </div>

            {/* Steps grid */}
            <div className="grid md:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="relative bg-white border border-neutral-200 rounded-2xl p-6 md:p-7 shadow-sm"
                >
                  {/* Connector arrow (desktop only, between cards) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
                        <span className="text-brand-gold text-sm">→</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block bg-brand-gold/10 text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase py-1 px-2.5 rounded">
                      {s.label}
                    </span>
                    <span className="text-neutral-400 font-mono text-xs">
                      {s.duration}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-[15px]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <div className="mt-12 flex justify-center">
              <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                Book Your Discovery Call
                <span className="text-brand-gold">→</span>
              </SurveyButton></span>
            </div>
          </div>
        </section>

        {/* ═════════════ PRICING ═════════════ */}
        <section className="relative py-20 md:py-28 bg-neutral-50/70 border-y border-neutral-200/70">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Pricing
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900 mb-5">
                Simple pricing.{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  No splits.
                </span>
              </h2>
              <p className="text-neutral-600 text-lg">
                One offer. One price. Everything included.
              </p>
            </div>

            <div className="relative bg-white border-2 border-brand-gold/30 rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-gold/10">
              {/* Ribbon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-w-[calc(100%-2rem)]">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-[#D4B87A] text-neutral-900 text-[11px] md:text-xs font-bold tracking-[0.14em] uppercase py-2 px-5 rounded-full shadow-md whitespace-nowrap">
                  Real Estate Business In A Box
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left — price */}
                <div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl md:text-6xl font-black text-neutral-900 font-mono">
                      $497
                    </span>
                    <span className="text-neutral-500 text-lg font-medium">
                      /month
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-6 flex items-center gap-2">
                    <span className="font-mono text-neutral-400">+</span>
                    <span className="font-mono font-semibold text-neutral-900">
                      $500
                    </span>{" "}
                    one-time setup fee
                  </p>

                  <div className="space-y-2 text-sm text-neutral-500 border-t border-neutral-200 pt-5">
                    <div className="flex justify-between">
                      <span>Contract</span>
                      <span className="text-neutral-900 font-semibold">
                        Cancel anytime
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ad spend</span>
                      <span className="text-neutral-900 font-semibold">
                        Paid to Facebook direct
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Typical start</span>
                      <span className="text-neutral-900 font-semibold">
                        $15–$30/day
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to live</span>
                      <span className="text-neutral-900 font-semibold">
                        Under 10 days
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right — what's inside */}
                <div>
                  <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    Everything Included
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Full specialist team (lead gen, nurture, automations)",
                      "Proven lead generation campaign — built + managed",
                      "CRM + IDX website — fully set up",
                      "Lifetime automated nurture (text + email)",
                      "Lead behavior tracking + alerts",
                      "Sales & marketing dashboards",
                      "Full team scaling system (when you're ready)",
                      "60-day lead guarantee (see below)",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 mt-0.5 shrink-0"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 10l4 4 6-8"
                            stroke="#BB9A65"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-neutral-700 text-[15px] leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
                <span className="cta-wrap"><SurveyButton location="pricing" className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-4 px-8 rounded-xl hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10">
                  Book Your Discovery Call
                  <span className="text-brand-gold">→</span>
                </SurveyButton></span>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ GUARANTEE ═════════════ */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-brand-gold/[0.08] via-white to-white border border-brand-gold/25 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 bg-white border border-brand-gold/30 rounded-full px-3 py-1 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.25em] uppercase">
                    Our 60-Day Lead Guarantee
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900 mb-6">
                  30 qualified leads in under 60 days,{" "}
                  <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                    or we work for free until we do.
                  </span>
                </h2>
                <p className="text-neutral-700 text-lg md:text-xl leading-relaxed max-w-2xl">
                  If we don't deliver at least 30 qualified leads inside the
                  first 60 days of your ads going live, we work for free until
                  we do.
                </p>
                <p className="text-neutral-500 text-sm mt-6 mb-8">
                  Applies only to Facebook / Meta campaigns. See{" "}
                  <Link
                    href="/terms"
                    className="text-brand-gold hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  for full details.
                </p>

                {/* Section CTA */}
                <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                  Book Your Discovery Call
                  <span className="text-brand-gold">→</span>
                </SurveyButton></span>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════ SIMPLE PROOF ═════════════ */}
        <section className="relative py-20 md:py-28 bg-neutral-50/70 border-y border-neutral-200/70">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Real Lead Flow
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900 mb-5">
                This is what a qualified lead{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  actually looks like.
                </span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Real conversations pulled straight from client pipelines. Some
                are buying or selling in the next few weeks, some six months
                out, some a year. But every one is a real person with real
                intent — not a junk lead you waste your week chasing.
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
              {leadQualityImages.map((img, i) => (
                <div
                  key={img.src}
                  className="mb-5 break-inside-avoid rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={`Real lead conversation ${i + 1}`}
                    width={img.w}
                    height={img.h}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-500 text-sm mt-10 max-w-2xl mx-auto">
              Captured from active campaigns. Names, numbers, and identifying
              details blurred for client confidentiality.
            </p>

            {/* Section CTA */}
            <div className="mt-10 flex justify-center">
              <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                Book Your Discovery Call
                <span className="text-brand-gold">→</span>
              </SurveyButton></span>
            </div>
          </div>
        </section>

        {/* ═════════════ FAQ ═════════════ */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-neutral-900">
                Questions we get{" "}
                <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                  every week.
                </span>
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {faqs.map((f, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base md:text-lg font-semibold text-neutral-900 leading-snug">
                      {f.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200 group-open:bg-brand-gold group-open:border-brand-gold flex items-center justify-center transition-colors">
                      <svg
                        className="w-3 h-3 text-neutral-500 group-open:text-neutral-900 group-open:rotate-45 transition-transform"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-neutral-600 leading-relaxed text-[15px] pr-12">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>

            {/* Section CTA */}
            <div className="mt-12 flex flex-col items-center gap-3">
              <p className="text-neutral-500 text-sm text-center">
                Still have questions? Ask them on the call.
              </p>
              <span className="cta-wrap"><SurveyButton className="inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold text-base md:text-lg py-3.5 px-7 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl hover:-translate-y-0.5">
                Book Your Discovery Call
                <span className="text-brand-gold">→</span>
              </SurveyButton></span>
            </div>
          </div>
        </section>

        {/* ═════════════ FINAL CTA ═════════════ */}
        <section className="relative py-20 md:py-28 bg-neutral-900 text-white overflow-hidden">
          {/* Gold glow inside dark section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-gold/[0.15] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Ready?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Start building the machine.{" "}
              <span className="bg-gradient-to-r from-brand-gold to-[#D4B87A] bg-clip-text text-transparent">
                Decide your future once it's producing.
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Book the strategy call. We map your market, walk you through
              exactly what we'd build for you, and tell you straight if you're
              a fit. No brokerage exit required to say yes.
            </p>
            <span className="cta-wrap"><SurveyButton location="final_cta" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-[#D4B87A] text-neutral-900 font-bold text-lg py-4 px-8 rounded-xl hover:shadow-xl hover:shadow-brand-gold/30 transition-all hover:-translate-y-0.5">
              Book Your Discovery Call
              <span>→</span>
            </SurveyButton></span>
            <p className="text-white/40 text-xs mt-5">
              No pressure. No brokerage exit required to say yes.
            </p>
          </div>
        </section>

        {/* ═════════════ FOOTER ═════════════ */}
        <footer className="relative py-10 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; 2026 Capital Growth Club. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="mailto:support@capitalgrowthclub.com"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </SurveyProvider>
  );
}
