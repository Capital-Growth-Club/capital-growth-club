import Image from "next/image";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import NavBar from "@/components/NavBar";
import RevealSection from "@/components/RevealSection";
import AnimatedStat from "@/components/AnimatedStat";
import FaqSection from "@/components/FaqSection";
import TestimonialScroll from "@/components/TestimonialScroll";
import HeroVideo from "@/components/HeroVideo";

/* ─── Main Page (Server Component) ─── */
export default function Home() {
  return (
    <SurveyProvider>
      {/* ════════════════ NAVBAR ════════════════ */}
      <NavBar />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background gradient orb */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow */}
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              For Service Businesses Doing $250K+/mo
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4">
              Most Service Businesses Don&apos;t Have a Lead Generation Problem.{" "}
              <span className="gradient-text">They Have a Cold Client Acquisition Problem.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              We build service businesses the entire machine that turns ice-cold strangers
              into profitable customers — paid ads, sales funnels, CRM, follow-up automations,
              and tracking. All built and managed by one team, so you stop depending on
              referrals and start scaling on demand.
            </p>

            {/* VSL Video */}
            <HeroVideo />

            {/* CTA Button */}
            <SurveyButton className="btn-primary !text-lg !py-5 !px-12 mb-10">
              Apply To Work With Us
            </SurveyButton>

            {/* Trust bar */}
            <div className="flex items-center justify-center pt-8 border-t border-white/5 w-full max-w-xl">
              <div className="text-center flex-1">
                <p className="text-white font-bold text-xl">306+</p>
                <p className="text-white/40 text-xs mt-1">Service Businesses Served</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center flex-1">
                <p className="text-white font-bold text-xl">28,692+</p>
                <p className="text-white/40 text-xs mt-1">Clients Acquired</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center flex-1">
                <p className="text-white font-bold text-xl">$243M+</p>
                <p className="text-white/40 text-xs mt-1">Sales Volume Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PLATFORM EXPERIENCE STRIP ════════════════ */}
      <section className="py-16 border-y border-white/5 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-white/30 text-sm tracking-[0.2em] uppercase">
              8+ Years Scaling Service Businesses Across Every Major Ad Platform
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {[
              { name: "Meta", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M18 3C9.716 3 3 9.716 3 18c0 7.487 5.488 13.693 12.656 14.818V22.225h-3.808V18h3.808v-3.223c0-3.76 2.24-5.836 5.664-5.836 1.64 0 3.358.293 3.358.293v3.692h-1.891c-1.864 0-2.444 1.157-2.444 2.344V18h4.16l-.665 4.225h-3.495v10.593C27.512 31.693 33 25.487 33 18c0-8.284-6.716-15-15-15z" fill="#888"/></svg> },
              { name: "Google", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M33 18.257c0-1.16-.104-2.274-.298-3.346H18v6.332h8.413c-.363 1.955-1.466 3.612-3.125 4.72v3.923h5.063C31.1 27.253 33 23.065 33 18.257z" fill="#888"/><path d="M18 33c4.23 0 7.776-1.402 10.35-3.796l-5.062-3.924c-1.403.94-3.198 1.496-5.288 1.496-4.067 0-7.51-2.747-8.74-6.438H4.035v4.05C6.594 29.776 11.93 33 18 33z" fill="#888"/><path d="M9.26 20.338A9.013 9.013 0 018.79 18c0-.812.172-1.601.47-2.338v-4.05H4.035A14.978 14.978 0 003 18c0 2.425.58 4.72 1.608 6.75l5.252-4.05z" fill="#888" opacity=".6"/><path d="M18 9.224c2.292 0 4.35.788 5.968 2.335l4.475-4.475C25.768 4.543 22.222 3 18 3 11.93 3 6.594 6.224 4.035 11.612l5.225 4.05c1.23-3.69 4.673-6.438 8.74-6.438z" fill="#888" opacity=".6"/></svg> },
              { name: "Snapchat", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M18.08 4C14.2 4 11.5 6.02 10.5 9.5c-.3 1.1-.2 3.2-.15 4.6.02.5-.25.7-.6.85-1.2.5-2.4 1-2.5 1.6-.1.7.9 1.1 1.6 1.35.2.07.5.15.5.35 0 .3-.3.55-.5.75-.8.8-2.1 1.7-2.35 2.9-.15.7.2 1.5.85 2 1.3 1 3.3 1.55 4.95 1.7.1.6.2 1.5.8 1.9.7.5 1.8.3 2.7.5 1.1.2 1.8 1.6 3.15 1.6s2.05-1.4 3.15-1.6c.9-.2 2 0 2.7-.5.6-.4.7-1.3.8-1.9 1.65-.15 3.65-.7 4.95-1.7.65-.5 1-1.3.85-2-.25-1.2-1.55-2.1-2.35-2.9-.2-.2-.5-.45-.5-.75 0-.2.3-.28.5-.35.7-.25 1.7-.65 1.6-1.35-.1-.6-1.3-1.1-2.5-1.6-.35-.15-.62-.35-.6-.85.05-1.4.15-3.5-.15-4.6C24.5 6.02 21.96 4 18.08 4z" fill="#888"/></svg> },
              { name: "LinkedIn", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M8.5 5A3.5 3.5 0 005 8.5v19A3.5 3.5 0 008.5 31h19a3.5 3.5 0 003.5-3.5v-19A3.5 3.5 0 0027.5 5h-19zm3.25 6.5a2.25 2.25 0 11-.001-4.501A2.25 2.25 0 0111.75 11.5zM10 14h3.5v12H10V14zm6.5 0H20v1.635C20.77 14.61 22.04 13.8 23.5 13.8c3.3 0 3.5 2.888 3.5 5.7v6.5H23.5v-5.5c0-1.5-.5-2.5-1.8-2.5-1.5 0-2.2 1-2.2 2.7V26h-3V14z" fill="#888"/></svg> },
              { name: "Pinterest", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M18 3C9.716 3 3 9.716 3 18c0 6.348 3.942 11.772 9.507 13.963-.037-.984-.007-2.168.247-3.24l1.836-7.776s-.456-.912-.456-2.26c0-2.116 1.228-3.696 2.756-3.696 1.3 0 1.928.976 1.928 2.144 0 1.308-.832 3.26-1.26 5.072-.36 1.512.76 2.744 2.252 2.744 2.7 0 4.512-3.468 4.512-7.572 0-3.12-2.1-5.46-5.928-5.46-4.32 0-7.012 3.22-7.012 6.82 0 1.24.366 2.116.938 2.792.264.312.3.436.204.796-.068.264-.228.9-.292 1.152-.096.368-.388.5-.716.364-2-.816-2.932-3.012-2.932-5.48 0-4.468 3.772-9.832 11.272-9.832 6.024 0 9.984 4.36 9.984 9.044 0 6.192-3.444 10.824-8.52 10.824-1.704 0-3.308-.92-3.856-1.964l-1.08 4.264c-.324 1.204-.96 2.408-1.54 3.348A15.002 15.002 0 0018 33c8.284 0 15-6.716 15-15S26.284 3 18 3z" fill="#888"/></svg> },
              { name: "Amazon", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M21.996 27.818c-5.478 3.34-10.942 1.752-15.078-.966-.378-.252-.702.168-.378.504 2.394 2.64 7.602 5.418 13.272 5.418 3.96 0 8.586-1.674 11.16-4.836.45-.558-.084-1.092-.63-.78-.9.504-2.934 1.344-5.346 1.344-.96 0-1.98-.252-3-.684z" fill="#888" opacity=".6"/><path d="M24.396 25.536c-.504-.252-3.066-.126-4.41.072-.378.042-.438-.294-.096-.54 2.16-1.512 5.706-1.074 6.12-.57.414.51-.108 4.044-2.136 5.73-.312.258-.612.12-.474-.222.462-1.152 1.5-3.72.996-4.47z" fill="#888" opacity=".6"/><path d="M20.172 9.048c0-1.584.042-2.904-.762-4.308-.648-1.146-1.68-1.848-2.82-1.848-1.566 0-2.484 1.2-2.484 2.97 0 2.862 1.764 4.476 4.068 4.476.558 0 1.074-.042 1.518-.168V9.048h.48zm3.276 7.896c-.21.192-.516.204-.756.078C21.39 16.05 21.12 15.4 19.8 14.356c-1.398 1.428-2.388 1.854-4.2 1.854-2.142 0-3.81-1.326-3.81-3.972 0-2.07 1.122-3.477 2.718-4.164 1.386-.612 3.318-.72 4.8-.888v-.33c0-.612.048-1.338-.312-1.866-.312-.474-.918-.666-1.452-.666-1.122 0-2.04.57-2.28 1.752-.048.252-.234.504-.486.516l-2.736-.294c-.228-.054-.486-.24-.414-.594C12.24 2.46 15.21 1.5 17.886 1.5c1.368 0 3.156.366 4.236 1.404 1.368 1.284 1.236 2.994 1.236 4.86v4.404c0 1.326.552 1.908 1.068 2.622.18.258.222.564-.012.756-.588.486-1.632 1.398-2.208 1.908l.042-.51z" fill="#888"/></svg> },
              { name: "TikTok", icon: <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9"><path d="M25.5 6h-3.6a6.3 6.3 0 004.35 5.985V15.6A10.05 10.05 0 0120 13.5v9.75a7.5 7.5 0 11-6.45-7.425v3.75A3.75 3.75 0 1017.25 23.25V6H21a6.3 6.3 0 006.3 6.3v-3.6A6.3 6.3 0 0125.5 6z" fill="#888"/></svg> },
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center gap-1.5 group">
                <div className="opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                  {platform.icon}
                </div>
                <span className="text-white/30 text-xs font-medium group-hover:text-white/60 transition-colors">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-white/20 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            After 8+ years building cold client acquisition systems for service businesses — from solo
            consultants to multi-location operations — we&apos;ve learned that every growth problem
            traces back to the same thing: a broken system, not a broken ad.
          </p>
        </div>
      </section>

      {/* ════════════════ PAIN POINTS — "Is This You?" ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="pain-points">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Sound Familiar?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Is This <span className="gradient-text">Your Service Business</span> Right Now?
            </h2>
            <p className="text-white/50 text-lg">
              We hear these from service business owners every single week.
              If any of them hit close to home, you&apos;re in the right place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2v24M2 14h24" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /><circle cx="14" cy="14" r="12" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /></svg>,
                title: "Living Off Referrals And Word-Of-Mouth",
                desc: "Your business runs on hope — hope someone refers you, hope a past client comes back, hope organic social brings in a lead. None of it is predictable, and none of it scales.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M9 14h10M14 9v10" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Cold Leads Don't Answer Or Disappear",
                desc: "You finally get leads from cold traffic — and half of them never answer the phone. The ones who do say they're interested, then ghost the second you try to follow up.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#BB9A65" strokeWidth="2" strokeLinejoin="round" opacity="0.3" /><path d="M10 18l8-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "No-Shows And “Need To Think About It”",
                desc: "People book and then don't show. The ones who do show say they need to “think about it” and never come back. You're paying for appointments that never close.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 24l8-8 4 4 8-12" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "Asking “Are Ads Even Worth It?”",
                desc: "You've tried ads, you've spent the money, and you can't tell if it's the platform, the offer, your market, or the funnel. So you start questioning whether ads work for your business at all.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M14 8v6l4 4" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "No Idea Which Part Of The Funnel Is Broken",
                desc: "Maybe it's the ad. Maybe it's the landing page. Maybe it's the follow-up. Maybe it's the offer. Without proper tracking, every fix is a guess and every dollar is a gamble.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 8h20v14a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M10 14l3 3 5-6" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "Old Leads Sitting Dead In Your CRM",
                desc: "You've collected hundreds — maybe thousands — of leads over time. Nobody&apos;s followed up in months. There&apos;s real money sitting there, but no system to pull it out.",
              },
            ].map((item, i) => (
              <div key={i} className="card-dark p-8 group">
                <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/40 text-lg mb-6">
              These aren&apos;t lead generation problems. They&apos;re cold client acquisition problems —
              and they&apos;re costing you six figures a year.
            </p>
            <SurveyButton className="btn-primary">
              Let&apos;s Fix This
            </SurveyButton>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ SOCIAL PROOF — Results ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="results">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Proven Results
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Results From Real{" "}
              <span className="gradient-text">Service Businesses</span>
            </h2>
            <p className="text-white/50 text-lg">
              These aren&apos;t projections. These are real results from service businesses
              we&apos;ve built cold client acquisition systems for.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-14">
            <AnimatedStat value="$243M" suffix="+" label="In Sales Volume Generated" />
            <AnimatedStat value="28,692" suffix="+" label="New Clients Acquired" />
            <AnimatedStat value="75" suffix="%" label="Cost-Per-Lead Reduction" />
            <AnimatedStat value="70" suffix="%" label="Avg. Appointment Show Rate" />
          </div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Case Study 1: Real Estate */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Real Estate — Buyer &amp; Seller Leads
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A real estate team was completely dependent on referrals with no predictable pipeline.
                We built the full cold client acquisition system — ads, funnels, CRM, and follow-up.
                Result: $5 buyer leads, $72 local seller leads, and over $243M in sales volume.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Buyer Leads</span>
                  <span className="text-white font-semibold">$5 each</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Seller Leads</span>
                  <span className="text-white font-semibold">$72 each</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Sales Volume Generated</span>
                  <span className="text-brand-gold font-bold text-xl">$243M+</span>
                </div>
              </div>
            </div>

            {/* Case Study 2: Lending */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Lending — Cold Inbound Leads
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A lending company couldn&apos;t crack Facebook ads — leads were unqualified, costs were
                high, and nothing was tracked. We rebuilt the acquisition system from creative to CRM.
                In one month they pulled $83K profit from $8K ad spend.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Qualified Leads (3 mo)</span>
                  <span className="text-white font-semibold">203</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Ad Spend (1 mo)</span>
                  <span className="text-white font-semibold">$8,000</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Profit (1 mo)</span>
                  <span className="text-brand-gold font-bold text-xl">$83,000</span>
                </div>
              </div>
            </div>

            {/* Case Study 3: 7th Level */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                7th Level — Full Rebuild
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                Jeremy Miner brought us in to rebuild their CRM sales system, ad and sales tracking,
                automated sales processes, and the entire ad infrastructure for rigorous A/B testing
                as they scaled into 7-figure ad spend with healthier margins.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Previous Ad Spend</span>
                  <span className="text-white font-semibold line-through decoration-white/30">$25K/day</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">New Ad Spend</span>
                  <span className="text-brand-gold font-bold text-xl">&lt; $3K/day</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Same ICP, New System</span>
                  <span className="text-brand-gold font-bold text-xl">88% Less Spend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ WHAT WE DO FOR YOU ════════════════ */}
      <RevealSection className="pt-16 md:pt-24 pb-8 md:pb-12" id="common-problems">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Where Cold Acquisition Breaks
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Capturing a Lead Is Only{" "}
              <span className="gradient-text">One Small Part of the Process</span>
            </h2>
            <p className="text-white/50 text-lg">
              The real money is made in what happens after a stranger clicks the ad —
              the funnel, the follow-up, the tracking, the sales process. Here&apos;s where
              cold client acquisition breaks down for most service businesses, and what
              we actually do to fix it.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ FACEBOOK & INSTAGRAM ADS ════════════════ */}
      <RevealSection className="py-10 md:py-16 bg-brand-dark" id="facebook-ads">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 mx-auto">
              <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8"><path d="M18 3C9.716 3 3 9.716 3 18c0 7.487 5.488 13.693 12.656 14.818V22.225h-3.808V18h3.808v-3.223c0-3.76 2.24-5.836 5.664-5.836 1.64 0 3.358.293 3.358.293v3.692h-1.891c-1.864 0-2.444 1.157-2.444 2.344V18h4.16l-.665 4.225h-3.495v10.593C27.512 31.693 33 25.487 33 18c0-8.284-6.716-15-15-15z" fill="#BB9A65"/></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Facebook &amp; Instagram Ads
            </h3>
            <p className="text-white/50 leading-relaxed">
              Cold traffic doesn&apos;t know you, doesn&apos;t trust you, and isn&apos;t looking for you.
              We build the creative, targeting, and funnel infrastructure that turns scrolling
              strangers into booked appointments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                problem: "Your ads look like everyone else's",
                solution: "We build a unique offer and ship 25–200 fresh creatives every month — built around your ICP's pain, not generic templates. People stop scrolling because the ad actually speaks to them.",
              },
              {
                problem: "Cold traffic isn't converting",
                solution: "We structure campaigns so Meta learns who your real customers are and finds more of them. The right hook in front of the right person is what turns cold strangers into booked leads.",
              },
              {
                problem: "Clicks don't turn into bookings",
                solution: "We build a dedicated landing page or funnel for every campaign — designed to capture leads, build trust, and move them toward becoming a customer. Not your homepage. A funnel.",
              },
              {
                problem: "You don't know what's actually working",
                solution: "We install full conversion tracking and attribution so you can see which ads, hooks, and audiences are producing real customers — and we cut the ones that aren't.",
              },
            ].map((item, i) => (
              <div key={i} className="card-dark p-7">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <p className="text-white/50 text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3-4" stroke="#BB9A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-white font-medium text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ GOOGLE ADS & LSA ════════════════ */}
      <RevealSection className="py-10 md:py-16" id="google-ads">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 mx-auto">
              <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8"><path d="M33 18.257c0-1.16-.104-2.274-.298-3.346H18v6.332h8.413c-.363 1.955-1.466 3.612-3.125 4.72v3.923h5.063C31.1 27.253 33 23.065 33 18.257z" fill="#BB9A65"/><path d="M18 33c4.23 0 7.776-1.402 10.35-3.796l-5.062-3.924c-1.403.94-3.198 1.496-5.288 1.496-4.067 0-7.51-2.747-8.74-6.438H4.035v4.05C6.594 29.776 11.93 33 18 33z" fill="#BB9A65"/><path d="M9.26 20.338A9.013 9.013 0 018.79 18c0-.812.172-1.601.47-2.338v-4.05H4.035A14.978 14.978 0 003 18c0 2.425.58 4.72 1.608 6.75l5.252-4.05z" fill="#BB9A65" opacity=".6"/><path d="M18 9.224c2.292 0 4.35.788 5.968 2.335l4.475-4.475C25.768 4.543 22.222 3 18 3 11.93 3 6.594 6.224 4.035 11.612l5.225 4.05c1.23-3.69 4.673-6.438 8.74-6.438z" fill="#BB9A65" opacity=".6"/></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Google Ads &amp; Local Services
            </h3>
            <p className="text-white/50 leading-relaxed">
              Search traffic is the warmest cold traffic you can buy — these people are
              actively looking for what you do. We make sure they find you first and convert
              into customers, not just clicks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                problem: "You're paying for clicks from people who will never hire you",
                solution: "We bid on the exact searches your real customers are typing — and block the ones that waste your spend, like DIY tips or job applications.",
              },
              {
                problem: "Your budget runs out before the day is over",
                solution: "We restructure your campaigns so spend goes toward keywords that actually convert — not the most expensive ones in your industry.",
              },
              {
                problem: "Searchers land on the wrong page and bounce",
                solution: "We build dedicated landing pages that match each keyword's intent — so when they click, they see exactly the service they searched for and a clear way to take action.",
              },
              {
                problem: "Your Local Services listing isn't generating calls",
                solution: "We optimize your profile, help you stack reviews, and get you Google-verified — so Google ranks you higher and sends you better leads at a lower cost.",
              },
            ].map((item, i) => (
              <div key={i} className="card-dark p-7">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <p className="text-white/50 text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3-4" stroke="#BB9A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-white font-medium text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ SALES SYSTEM & FOLLOW-UP ════════════════ */}
      <RevealSection className="py-10 md:py-16 bg-brand-dark" id="backend-systems">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 mx-auto">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="4" stroke="#BB9A65" strokeWidth="2" /><path d="M10 12h12M10 16h8M10 20h10" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              CRM, Follow-Up &amp; Tracking
            </h3>
            <p className="text-white/50 leading-relaxed">
              This is where most agencies stop and most service businesses bleed money. Speed-to-lead,
              follow-up sequences, sales process, and proper tracking are what separate a lead generator
              from a real cold client acquisition system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                problem: "Leads come in but nobody calls them fast enough",
                solution: "We set up instant notifications and automations so every new lead gets a call or text within minutes — not hours. Speed-to-lead under 3 minutes is the difference between closing them and losing them.",
              },
              {
                problem: "People book but don't show up",
                solution: "We build automated reminder sequences — text and email — that confirm the appointment, remind them the day before, and re-engage no-shows. Show rates jump from 20% to 70%+ when this is wired up correctly.",
              },
              {
                problem: "Bad tracking means every decision is a guess",
                solution: "We install conversion tracking, server-side events, and CRM attribution so you can see cost-per-lead, cost-per-appointment, and cost-per-client in real time. No more guessing what's working.",
              },
              {
                problem: "Old leads sit dead in your CRM",
                solution: "We build long-term nurture sequences — email and SMS — that automatically re-engage leads over weeks and months. Some of your best customers will come from leads you thought were dead.",
              },
            ].map((item, i) => (
              <div key={i} className="card-dark p-7">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <p className="text-white/50 text-sm">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5l2 2 3-4" stroke="#BB9A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-white font-medium text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ WHAT THIS IS COSTING YOU ════════════════ */}
      <RevealSection className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Add It Up
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Broken Cold Acquisition Is{" "}
              <span className="gradient-text">Costing You Every Year</span>
            </h2>
            <p className="text-white/50 text-lg">
              Each leak feels small on its own. Add them up over 12 months across
              your entire acquisition system and the number will make you sick.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Ad spend wasted on the wrong people", amount: "$36K – $120K" },
              { label: "Google clicks that never turn into calls", amount: "$18K – $72K" },
              { label: "Website visitors who leave without booking", amount: "$60K – $180K" },
              { label: "Leads you were too slow to call back", amount: "$48K – $144K" },
              { label: "Appointments that no-showed", amount: "$60K – $180K" },
              { label: "Old leads nobody ever followed up on", amount: "$24K – $72K" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-white/5">
                <span className="text-white/60 text-sm">{item.label}</span>
                <span className="text-red-400 font-semibold text-sm whitespace-nowrap">- {item.amount}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t-2 border-brand-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-white font-bold text-lg">Total per year</span>
            <span className="text-red-400 font-bold text-2xl md:text-3xl">$246K – $768K+</span>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ IT'S YOUR ENTIRE SYSTEM ════════════════ */}
      <RevealSection className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            The Real Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            It&apos;s Not That Your Service Is Bad.{" "}
            <span className="gradient-text">You Don&apos;t Have a Predictable System.</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            It&apos;s not that your service is bad. It&apos;s not that your market doesn&apos;t need
            you. It&apos;s not that people aren&apos;t buying. The real problem is you don&apos;t have
            a predictable system for turning complete strangers into profitable customers.
          </p>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Better ads won&apos;t help if your funnel doesn&apos;t convert. A better funnel
            won&apos;t help if nobody calls the lead back in 3 minutes. Bad tracking means
            you can&apos;t fix what you can&apos;t see. Every piece — ad, funnel, CRM, follow-up,
            tracking — has to work{" "}
            <span className="text-white font-semibold">as one connected system</span>.
            That&apos;s what we build.
          </p>

          <SurveyButton className="btn-primary !text-lg !py-5 !px-12">
            Apply To Work With Us
          </SurveyButton>
        </div>
      </RevealSection>

      {/* ════════════════ TESTIMONIALS MARQUEE ════════════════ */}
      <section className="py-16 md:py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Straight From Our Clients
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              What Service Business Owners{" "}
              <span className="gradient-text">Are Saying</span>
            </h2>
          </div>
        </div>

        <TestimonialScroll />
      </section>

      {/* ════════════════ SOLUTION — "Your Cold Client Acquisition System" ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              How We Fix It
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Complete{" "}
              <span className="gradient-text">Cold Client Acquisition System</span>
            </h2>
            <p className="text-white/50 text-lg">
              We don&apos;t hand you a template. We audit your business, identify your ICP,
              build what&apos;s missing, and connect every piece — ads, funnel, CRM, follow-up,
              and tracking — into one system that turns ice-cold strangers into profitable
              customers on demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Identify Your ICP", desc: "We dig into your market, competition, and past wins to figure out exactly who your most profitable customers are — what they care about, what pain they feel, and what message will actually get their attention." },
              { step: "02", title: "Build the Offer & Hook", desc: "We turn that ICP research into lead magnets, offers, and ad creative that don't just collect names — they create demand. Built for cold traffic that doesn't know you yet." },
              { step: "03", title: "Build the Funnel", desc: "Whether your market needs a VSL, a booking flow, a lead magnet, or a direct-purchase page — we build the funnel that fits how your customers actually buy. Not a playbook template." },
              { step: "04", title: "Launch Paid Traffic", desc: "We run your campaigns across the channels that make sense for your service — Meta, Google, LSA, LinkedIn, YouTube — with the right campaign structure, targeting, and daily optimization." },
              { step: "05", title: "Wire Up CRM & Follow-Up", desc: "We connect your funnel into your CRM, set up automations, email sequences, SMS reminders, and speed-to-lead workflows so leads don't sit and die. Plus the long-term nurture that turns dead leads into closed customers." },
              { step: "06", title: "Install Tracking", desc: "Server-side conversion tracking, ad platform attribution, and CRM dashboards so you see cost-per-lead, cost-per-appointment, and cost-per-customer in real time. Guessing is expensive — tracking is the fix." },
            ].map((item) => (
              <div key={item.step} className="card-dark p-8 group relative overflow-hidden">
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] group-hover:text-brand-gold/[0.08] transition-colors">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-5">
                    <span className="text-brand-black font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ WHO THIS IS FOR / NOT FOR ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="who">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Qualification
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              This Is <span className="gradient-text">Not For Everyone</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-dark p-8 border-brand-gold/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l4 4 6-8" stroke="#0E0E0E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">This Is For You If...</h3>
              </div>
              <ul className="space-y-4">
                {["You run a service business — coaching, consulting, legal, medical, home services, financial, or agency", "You're doing $250K+/month and ready to scale toward $1M/month", "You're tired of depending on referrals, word-of-mouth, and inconsistent organic leads", "You're ready to deploy capital into a real cold client acquisition system — not test the waters", "You want one team owning your ads, funnel, CRM, follow-up, and tracking"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10l4 4 6-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 6l8 8M14 6l-8 8" stroke="#666" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">This Is NOT For You If...</h3>
              </div>
              <ul className="space-y-4">
                {["You sell products, not services — we're built for service businesses specifically", "Your business is doing less than $250K/month in revenue", "You're not ready to deploy real capital into scaling — you're still testing the waters", "You're looking for a quick hack or a media buyer, not a full acquisition system", "You don't have a proven service that delivers real results yet"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M6 6l8 8M14 6l-8 8" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-white/40">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ HOW IT WORKS ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-white/50 text-lg">
              From application to launch in as little as 14 days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/40 via-brand-gold/20 to-transparent hidden md:block" />
              <div className="space-y-12">
                {[
                  { step: "01", title: "Apply & Qualify", desc: "Fill out a quick application so we can make sure your service business is the right fit. We only take on businesses we know we can help scale with cold client acquisition." },
                  { step: "02", title: "Strategy Session", desc: "We jump on a call to map out your full cold acquisition system — ICP, offer positioning, funnel architecture, ad strategy, CRM build, follow-up flows, and tracking infrastructure." },
                  { step: "03", title: "Build & Launch", desc: "Our team builds everything — ad creative, landing pages, funnel flows, CRM pipelines, automations, and tracking — tailored to your service. Then we launch." },
                  { step: "04", title: "Scale & Optimize", desc: "We monitor performance daily, A/B test creative, optimize the funnel, tighten the follow-up, and scale what's working — continuously driving more profitable customers into your service business." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <div className="shrink-0 w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center relative z-10">
                      <span className="text-brand-black font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/50 text-lg leading-relaxed max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ FAQ ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Got Questions?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Frequently <span className="gradient-text">Asked Questions</span>
            </h2>
          </div>

          <FaqSection />
        </div>
      </RevealSection>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <RevealSection className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-dark to-brand-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Ready To Scale?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Stop Running Ads.{" "}
            <span className="gradient-text">Start Building Your Cold Client Acquisition System.</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            If you can&apos;t tell us your cost-per-customer, your customer lifetime value, and which
            part of your funnel is leaking the most — you don&apos;t have a scalable service business.
            You have an expensive guessing game. We build the machine that turns strangers into
            profitable customers, predictably.
          </p>

          <SurveyButton className="btn-primary !text-lg !py-5 !px-12">
            Apply To Work With Us
          </SurveyButton>

          <p className="text-white/30 text-sm mt-6">
            We take a very limited number of partners at a time. When we&apos;re at capacity, we close applications.
          </p>
        </div>
      </RevealSection>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Capital Growth Club"
                width={100}
                height={34}
                className="h-7 w-auto"
              />
              <span className="text-white/30 text-sm">Capital Growth Club</span>
            </div>

            <p className="text-white/20 text-sm">
              &copy; 2025 Capital Growth Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </SurveyProvider>
  );
}
