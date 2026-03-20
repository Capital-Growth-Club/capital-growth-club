import Image from "next/image";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import NavBar from "@/components/NavBar";
import RevealSection from "@/components/RevealSection";
import AnimatedStat from "@/components/AnimatedStat";
import FaqSection from "@/components/FaqSection";

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
              After Working With Hundreds of Service Businesses, We Keep Finding the Same 3 Broken Pieces.{" "}
              <span className="gradient-text">Your Ads. Your Funnel. Your Sales System.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              Whether you run a coaching practice, law firm, home services company,
              medical practice, or agency — if your ads aren&apos;t converting, your leads
              aren&apos;t closing, and your show rate is stuck at 20%, you don&apos;t need
              another media buyer. You need the entire system rebuilt by one team.
            </p>

            {/* VSL Video */}
            <div className="relative w-full max-w-3xl mb-10">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-brand-card" style={{ animation: "pulse-glow 4s ease-in-out infinite" }}>
                <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-brand-card to-brand-black">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12 8l16 8-16 8V8z" fill="#0E0E0E" stroke="#0E0E0E" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-white/40 text-sm">
                      Watch How We Fix Broken Growth Systems for Service Businesses
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-brand-gold/20 rounded-br-2xl pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-brand-gold/20 rounded-tl-2xl pointer-events-none" />
            </div>

            {/* CTA Button */}
            <SurveyButton className="btn-primary !text-lg !py-5 !px-12 mb-10">
              Apply To Work With Us
            </SurveyButton>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-white/5 w-full max-w-xl">
              <div className="text-center">
                <p className="text-white font-bold text-xl">306+</p>
                <p className="text-white/40 text-xs mt-1">Service Businesses Served</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="text-white font-bold text-xl">28,692+</p>
                <p className="text-white/40 text-xs mt-1">Clients Acquired</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="text-white font-bold text-xl">70%</p>
                <p className="text-white/40 text-xs mt-1">Avg. Show Rate</p>
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
            After 8+ years building growth systems for service businesses — from solo consultants
            to multi-location operations — we&apos;ve learned that every growth problem traces back to the
            same thing: a broken system, not a broken ad.
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
                title: "Ads Aren't Converting",
                desc: "You're spending thousands a month on ads for your service business and getting impressions, clicks — but no booked calls and no new clients.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M9 14h10M14 9v10" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Leads Aren't Closing",
                desc: "Leads are coming in but they're not turning into paying clients. You've got names in a CRM and a calendar full of no-shows — not revenue.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#BB9A65" strokeWidth="2" strokeLinejoin="round" opacity="0.3" /><path d="M10 18l8-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Show Rate Is Tanking",
                desc: "People are booking calls but your show rate is 15, maybe 20 percent. 80% of what you spent to get that appointment just evaporated.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 24l8-8 4 4 8-12" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "Flying Blind on Numbers",
                desc: "You don't know your cost per booked call, your cost to acquire a new client, or the lifetime value of each service relationship. You're guessing at scale.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M14 8v6l4 4" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "Too Many Vendors, No System",
                desc: "A media buyer here, a funnel builder there, someone for email and SMS — every one of them working in isolation with no one seeing the full picture.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 8h20v14a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M10 14l3 3 5-6" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "Expensive Guessing Game",
                desc: "You can't tell if your marketing is actually profitable because nobody built a system that connects ad spend to booked calls to closed clients. Every month without that is money gone.",
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
              If you checked more than one, you&apos;re leaving six figures on the table every month.
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
              These aren&apos;t projections. These are real results from service
              businesses we&apos;ve built growth systems for.
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
            {/* Case Study 1: Fitness / Skool */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Online Coaching — Skool
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A fitness coach was stuck at 40 members in his Skool community. No real acquisition system, nothing converting. We built the full front-to-back system — positioning, funnel, paid traffic strategy, all of it working together.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Ad Spend</span>
                  <span className="text-white font-semibold">$10,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">New Members</span>
                  <span className="text-white font-semibold">5,000+</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Cost Per Acquisition</span>
                  <span className="text-brand-gold font-bold text-xl">&lt; $2.00</span>
                </div>
              </div>
            </div>

            {/* Case Study 2: Real Estate */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Real Estate — Seller Leads
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A real estate investor in Myrtle Beach was completely dependent on friends and family for seller leads. No pipeline, no data, no predictability. We built a cold acquisition system from scratch.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Ad Spend</span>
                  <span className="text-white font-semibold">$15,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Sales Volume</span>
                  <span className="text-white font-semibold">$243M+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Seller Listing Appts</span>
                  <span className="text-white font-semibold">60</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Timeframe</span>
                  <span className="text-brand-gold font-bold text-xl">&lt; 1 Year</span>
                </div>
              </div>
            </div>

            {/* Case Study 3: Coaching — CPL Reduction */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                7th Level — Full Rebuild
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                Jeremy Miner at 7th Level was spending close to $750K/mo on ads — around $25K/day — booking ~50 appointments daily. We rebuilt their entire ad structure and system from the ground up.
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
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Booked Appts (12 Days)</span>
                  <span className="text-white font-semibold">70+</span>
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

      {/* ════════════════ WHAT SERVICE BUSINESSES WORK WITH US TO SOLVE ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="common-problems">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              The Real Problems
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Most Service Businesses{" "}
              <span className="gradient-text">Work With Us to Solve</span>
            </h2>
            <p className="text-white/50 text-lg">
              It&apos;s rarely just one thing. Most service businesses come to us with
              problems across their ads, their landing pages, and their backend —
              and they don&apos;t realize how connected it all is until we show them.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ FACEBOOK ADS BREAKDOWN ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="facebook-ads">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5">
                <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8"><path d="M18 3C9.716 3 3 9.716 3 18c0 7.487 5.488 13.693 12.656 14.818V22.225h-3.808V18h3.808v-3.223c0-3.76 2.24-5.836 5.664-5.836 1.64 0 3.358.293 3.358.293v3.692h-1.891c-1.864 0-2.444 1.157-2.444 2.344V18h4.16l-.665 4.225h-3.495v10.593C27.512 31.693 33 25.487 33 18c0-8.284-6.716-15-15-15z" fill="#BB9A65"/></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Facebook &amp; Instagram Ads
              </h3>
              <p className="text-white/50 leading-relaxed">
                Meta ads are the most powerful client acquisition tool for service businesses —
                when they&apos;re set up right. Most aren&apos;t. Here&apos;s what we see broken in almost
                every account we audit.
              </p>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Weak or Generic Offer",
                  desc: "Your ad says \"Book a Free Consultation.\" So does every competitor in your market. If your offer doesn't stand out, your cost per lead will stay high and your quality will stay low. The offer is the ad.",
                },
                {
                  title: "Stale Ad Creative",
                  desc: "Running the same 3–5 ads for months is the fastest way to tank your results. Any serious agency is rotating between 25 and 200 ad creatives per month at your level. If your creative isn't fresh, your CPMs climb and your relevance drops.",
                },
                {
                  title: "Bad Campaign Structure",
                  desc: "Campaigns with no testing framework, no proper audience segmentation, and no separation between cold and warm traffic. You're letting the algorithm guess instead of giving it a system to optimize against.",
                },
                {
                  title: "No Tracking or Pixel Setup",
                  desc: "If your pixel isn't properly configured with the right conversion events, Facebook has no idea what's working. You're paying for data you can't use and optimizing toward the wrong actions.",
                },
                {
                  title: "Ads Don't Speak to the Audience",
                  desc: "Your ads are talking about your service instead of your prospect's problem. People scroll past features — they stop for pain. If the hook doesn't hit an emotional nerve in the first 3 seconds, you've already lost them.",
                },
                {
                  title: "Landing Page Converting Under 6%",
                  desc: "You can have the best ads in the world and still bleed money if your landing page doesn't convert. If you're below 6%, the page is the bottleneck — not the traffic. We see this in 8 out of 10 service business accounts.",
                },
              ].map((item, i) => (
                <div key={i} className="card-dark p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ GOOGLE ADS BREAKDOWN ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="google-ads">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5">
                <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8"><path d="M33 18.257c0-1.16-.104-2.274-.298-3.346H18v6.332h8.413c-.363 1.955-1.466 3.612-3.125 4.72v3.923h5.063C31.1 27.253 33 23.065 33 18.257z" fill="#BB9A65"/><path d="M18 33c4.23 0 7.776-1.402 10.35-3.796l-5.062-3.924c-1.403.94-3.198 1.496-5.288 1.496-4.067 0-7.51-2.747-8.74-6.438H4.035v4.05C6.594 29.776 11.93 33 18 33z" fill="#BB9A65"/><path d="M9.26 20.338A9.013 9.013 0 018.79 18c0-.812.172-1.601.47-2.338v-4.05H4.035A14.978 14.978 0 003 18c0 2.425.58 4.72 1.608 6.75l5.252-4.05z" fill="#BB9A65" opacity=".6"/><path d="M18 9.224c2.292 0 4.35.788 5.968 2.335l4.475-4.475C25.768 4.543 22.222 3 18 3 11.93 3 6.594 6.224 4.035 11.612l5.225 4.05c1.23-3.69 4.673-6.438 8.74-6.438z" fill="#BB9A65" opacity=".6"/></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Google Ads &amp; LSA
              </h3>
              <p className="text-white/50 leading-relaxed">
                Google puts you in front of people actively searching for your service right now.
                But if your keywords, bids, or landing pages are off, you&apos;re just funding your
                competitors&apos; growth.
              </p>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Bidding on the Wrong Keywords",
                  desc: "You're targeting broad, high-volume keywords that sound relevant but attract tire-kickers, not buyers. A roofer bidding on \"roof repair\" instead of \"emergency roof repair near me\" is paying 3x more for leads that never close.",
                },
                {
                  title: "Overpaying for Competitive Terms",
                  desc: "You're going head-to-head on the most expensive keywords in your industry without the budget to sustain it. Your spend drains before noon and you wonder why the phone stops ringing in the afternoon.",
                },
                {
                  title: "Wrong Landing Page for the Search",
                  desc: "Someone searches \"water heater installation\" and lands on your homepage. That's not a match — it's a bounce. Every keyword group needs its own landing page that mirrors exactly what the person searched for. Mismatch kills your Quality Score and your conversion rate.",
                },
                {
                  title: "No Conversion Tracking",
                  desc: "If you're not tracking which keywords lead to actual phone calls and booked jobs — not just clicks — you're optimizing blind. Google needs conversion data to find you more of the right people.",
                },
                {
                  title: "LSA Profile Not Optimized",
                  desc: "Your Google Local Services profile is half-filled, missing reviews, or not verified properly. LSA rewards trust signals — background checks, review velocity, response time. If you're not managing these, you're paying more per lead than you should.",
                },
                {
                  title: "No Negative Keywords",
                  desc: "You're paying for clicks from people searching for DIY tutorials, job applications, and free services. Without a negative keyword list that gets updated weekly, you're hemorrhaging budget on traffic that was never going to convert.",
                },
              ].map((item, i) => (
                <div key={i} className="card-dark p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ BACKEND SALES SYSTEMS / CRM ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="backend-systems">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="4" stroke="#BB9A65" strokeWidth="2" /><path d="M10 12h12M10 16h8M10 20h10" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Backend Sales Systems &amp; CRM
              </h3>
              <p className="text-white/50 leading-relaxed">
                The best ads in the world won&apos;t save you if your backend can&apos;t handle
                the leads. This is where most service businesses silently lose the most money —
                and don&apos;t even realize it.
              </p>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Speed-to-Lead Is Too Slow",
                  desc: "When someone requests a quote or books a call and no team member contacts them within 3 minutes, you've likely lost them to a competitor who did. Studies show response time over 5 minutes drops contact rates by 80%. You need a system that ensures this never happens.",
                },
                {
                  title: "No KPI Tracking",
                  desc: "You can't tell us your cost per lead, cost per booked appointment, show rate, close rate, or client lifetime value. Without these numbers you're making every decision — including how much to spend on ads — based on gut feeling.",
                },
                {
                  title: "Leads Slipping Through the Cracks",
                  desc: "Someone fills out your form on a Friday and nobody follows up until Monday. Or a lead goes cold and sits in your CRM forever because there's no re-engagement sequence. Every lost lead is ad spend you already paid for and will never get back.",
                },
                {
                  title: "No Follow-Up Automations",
                  desc: "You're relying on your team to manually follow up with every lead via text and email. That works at 10 leads a month. At 100+, it breaks. You need automated nurture sequences, appointment reminders, and no-show follow-ups running 24/7.",
                },
                {
                  title: "Team Accountability Gaps",
                  desc: "You don't know which team member is calling leads, how fast they're responding, or what their close rate is. Without visibility into your team's performance, you can't coach, you can't optimize, and you can't scale.",
                },
                {
                  title: "No Pipeline Visibility",
                  desc: "Your CRM is a graveyard of contacts with no stages, no tags, and no way to see where money is stuck. You should be able to see at a glance how many leads came in, how many booked, how many showed, and how many closed — this week, today, right now.",
                },
              ].map((item, i) => (
                <div key={i} className="card-dark p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ WHAT THIS IS COSTING YOU ════════════════ */}
      <RevealSection className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              The Real Cost
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What This Is{" "}
              <span className="gradient-text">Actually Costing You</span>
            </h2>
            <p className="text-white/50 text-lg">
              Most service business owners look at these problems one at a time and
              think &ldquo;it&apos;s not that bad.&rdquo; But when you add them all up over
              12 months, the number is staggering.
            </p>
          </div>

          <div className="card-dark p-8 md:p-10">
            <p className="text-white/30 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              Estimated Annual Loss — Service Business Doing $250K+/mo
            </p>

            <p className="text-white/20 text-xs uppercase tracking-widest mb-6">Top of Funnel — Where the Most Money Burns</p>

            <div className="space-y-6">
              {[
                {
                  label: "Wasted ad spend on stale creative, bad targeting & poor campaign structure — 30–50% of your budget is buying nothing",
                  amount: "$36,000 – $120,000",
                },
                {
                  label: "Wrong Google keywords, no negative keywords & paying for clicks from people who were never going to buy",
                  amount: "$18,000 – $72,000",
                },
                {
                  label: "Landing pages converting under 6% — you paid for every one of those clicks and then lost them at the door",
                  amount: "$60,000 – $180,000",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/5">
                  <span className="text-white/50 text-sm leading-relaxed">{item.label}</span>
                  <span className="text-red-400 font-semibold text-sm whitespace-nowrap">- {item.amount}</span>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs uppercase tracking-widest mt-8 mb-6">Middle of Funnel — Where Leads Go to Die</p>

            <div className="space-y-6">
              {[
                {
                  label: "Speed-to-lead over 3 minutes — the lead came in hot, nobody called fast enough, they called your competitor instead",
                  amount: "$48,000 – $144,000",
                },
                {
                  label: "No-show appointments — they booked but never showed because there's no reminder sequence or pre-call nurture",
                  amount: "$60,000 – $180,000",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/5">
                  <span className="text-white/50 text-sm leading-relaxed">{item.label}</span>
                  <span className="text-red-400 font-semibold text-sm whitespace-nowrap">- {item.amount}</span>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs uppercase tracking-widest mt-8 mb-6">Bottom of Funnel — Money Left on the Table</p>

            <div className="space-y-6">
              {[
                {
                  label: "Leads sitting dead in your CRM — no re-engagement, no follow-up sequence, no second chance at revenue you already paid to generate",
                  amount: "$24,000 – $72,000",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-white/5">
                  <span className="text-white/50 text-sm leading-relaxed">{item.label}</span>
                  <span className="text-red-400 font-semibold text-sm whitespace-nowrap">- {item.amount}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t-2 border-brand-gold/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-white font-bold text-lg">Estimated Total Annual Loss</span>
                <span className="text-red-400 font-bold text-2xl md:text-3xl">$246,000 – $768,000+</span>
              </div>
              <p className="text-white/30 text-sm mt-4 leading-relaxed">
                Based on a service business spending $10K–$50K/mo on ads. That&apos;s not a
                marketing budget problem — that&apos;s a system problem. And every month you
                wait to fix it, the meter is still running.
              </p>
            </div>
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
            It&apos;s Not One Thing That&apos;s Broken.{" "}
            <span className="gradient-text">It&apos;s the Whole System.</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            If you read through those sections and found yourself nodding at problems
            across your ads, your landing pages, your CRM, and your sales process —
            that&apos;s not a coincidence. It&apos;s a pattern we see in nearly every service
            business that comes to us.
          </p>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            You don&apos;t have an ad problem. You don&apos;t have a landing page problem.
            You don&apos;t have a CRM problem. You have a{" "}
            <span className="text-white font-semibold">client acquisition system</span> that
            was never built as one connected thing — and it&apos;s leaking money at every stage.
          </p>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Fixing one piece in isolation doesn&apos;t work. Hiring a better media buyer
            doesn&apos;t fix a 2% landing page. A better landing page doesn&apos;t fix a team
            that takes 4 hours to call a lead back. The entire cold acquisition system —
            from the first ad impression to the signed contract — needs to work together.
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

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-6" aria-hidden={dup === 1 ? "true" : undefined}>
                {[
                  { quote: "We were getting tons of calls from our Google Ads but half of them were for jobs we don't even do. Nobody had set up negative keywords. CGC cleaned up our campaigns and our cost per booked job dropped by 55% in the first month.", author: "Jake R.", role: "Home Services — HVAC" },
                  { quote: "Our biggest issue was new patient no-shows. People would book online and never walk through the door. CGC built an automated reminder and confirmation sequence — texts, emails, the works. Our no-show rate went from 35% down to 8%.", author: "Dr. Sarah M.", role: "Medical Practice" },
                  { quote: "We were spending $15K/mo on ads and getting case leads, but our intake team wasn't calling them fast enough. CGC set up a system where every new lead gets a call within 90 seconds. Our signed retainer rate doubled.", author: "Marcus T.", role: "Legal — Personal Injury" },
                  { quote: "In financial services, trust is everything. CGC restructured our entire funnel so prospects saw three pieces of educational content before we ever asked for a consultation. Our consultation-to-client conversion went from 12% to 34%.", author: "Angela P.", role: "Financial Advisory" },
                  { quote: "Storm season is make or break for us. We were bidding on 'roof repair' and competing with every roofer in the metro. CGC rebuilt our campaigns around emergency and insurance-specific keywords and built separate landing pages for each. Our cost per inspection dropped from $280 to $95.", author: "David & Lisa K.", role: "Roofing Company" },
                  { quote: "I had a $15K coaching program and was running the same 4 ads for five months straight. CGC came in with a creative rotation strategy — 30+ new hooks per month — and my application flow tripled while my cost per application went down.", author: "Chris W.", role: "Coaching — Business Strategy" },
                  { quote: "Our problem was never leads — we had plenty of buyer and seller inquiries. The problem was our follow-up. Leads would come in and sit untouched for days. CGC built a nurture system that follows up automatically for 6 months. We closed 3 listings last quarter from leads that were 90+ days old.", author: "Priya S.", role: "Real Estate Team" },
                  { quote: "Our Google LSA was barely getting us calls because our profile was half-filled and we had 12 reviews. CGC helped us build a review generation system and optimized the profile. Within 8 weeks we went from 3 calls a week to 15.", author: "Tom H.", role: "Home Services — Plumbing" },
                  { quote: "We were running Facebook ads to our homepage. That was the whole strategy. CGC built us a dedicated new patient landing page with an intro offer and our conversion rate went from 1.9% to 11%. Same ad spend, completely different result.", author: "Rachel & Ben F.", role: "Dental Practice" },
                  { quote: "We had no idea what our cost to acquire a policy was. We just knew we were spending money on ads and getting some quotes. CGC built tracking from ad click all the way to bound policy. Turns out our best channel was one we were about to cut.", author: "Michael D.", role: "Insurance Agency" },
                  { quote: "I was running the same Botox and filler specials everyone else was running. CGC repositioned our offer around a signature consultation experience and built a funnel around it. Our average treatment value went up 40% because we stopped competing on price.", author: "Stephanie L.", role: "Med Spa" },
                  { quote: "In solar, the sale happens in the home — but getting the appointment set is where most companies bleed out. CGC built a pre-qualification funnel that filters out renters and low-credit leads before they ever hit our calendar. Our in-home close rate jumped from 22% to 41%.", author: "Jordan & Kyle M.", role: "Solar Installation" },
                ].map((t, i) => (
                  <div key={i} className="flex-shrink-0 w-[340px] md:w-[380px] bg-brand-card rounded-xl p-7 border border-white/5 flex flex-col gap-4">
                    <div className="text-brand-gold text-sm tracking-widest">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p className="text-white/70 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div>
                      <span className="text-white font-semibold text-sm">{t.author}</span>
                      <span className="text-white/30 text-xs ml-2">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SOLUTION — "Your Complete Growth Engine" ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              The Full System
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Complete{" "}
              <span className="gradient-text">Growth Engine</span>
            </h2>
            <p className="text-white/50 text-lg">
              Most service businesses hire a media buyer, a funnel builder, a CRM person, and an email
              team — none of whom talk to each other. That&apos;s not a growth system. That&apos;s a money pit.
              We build the entire engine as one thing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "ICP Research & Offer Creation", desc: "We identify your ideal client for your service business, craft an irresistible offer, and build a lead magnet that pulls them in — so every dollar attracts people who actually need what you do." },
              { step: "02", title: "Ad Creative & Production", desc: "We script your ads, help you film them, and handle all editing and post-production — giving your service business scroll-stopping content that books calls, not just clicks." },
              { step: "03", title: "Landing Pages & Funnel Build", desc: "Custom-built, conversion-optimized landing pages and funnels designed to turn cold traffic into booked consultations and appointments for your service." },
              { step: "04", title: "Ad Launch & Management", desc: "We launch, monitor, and scale your campaigns across Meta, Google, and YouTube — with daily optimization so your service business gets more clients for less spend." },
              { step: "05", title: "CRM Setup & Integrations", desc: "We build your backend system from scratch — pipeline stages, lead routing, task automations, and integrations so no potential client slips through the cracks." },
              { step: "06", title: "Email & SMS Automations", desc: "Automated nurture sequences, appointment reminders, and follow-up flows that boost show rates and close more service agreements on autopilot." },
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
                {["You run a service business — coaching, consulting, legal, medical, home services, financial, or agency", "You're doing $250K+/month and building toward $1M–$10M/month", "You're ready to deploy capital into a real growth system — not test the waters", "You want one team building your entire client acquisition engine", "You're done with agencies that run ads in isolation and call it a strategy"].map((item, i) => (
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
                {["You sell products, not services — we're built for service businesses specifically", "Your business is doing less than $250K/month in revenue", "You're not ready to invest real capital into scaling — you're still testing the waters", "You're looking for a quick hack, not a real growth system", "You don't have a proven service that delivers results yet"].map((item, i) => (
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
                  { step: "01", title: "Apply & Qualify", desc: "Fill out a quick application so we can make sure your service business is the right fit. We only take on businesses we know we can help scale." },
                  { step: "02", title: "Strategy Session", desc: "We jump on a call to map out your entire client acquisition system — your ideal client, offer positioning, funnel architecture, and launch timeline." },
                  { step: "03", title: "Build & Launch", desc: "Our team builds everything — ad creative, landing pages, funnel flows, CRM pipelines, and automation sequences tailored to your service. Then we launch." },
                  { step: "04", title: "Scale & Optimize", desc: "We monitor performance daily, optimize campaigns, and scale what's working — continuously driving more qualified clients into your service business." },
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
            Every Month Without a System Is{" "}
            <span className="gradient-text">Clients You&apos;re Never Getting Back</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            If you can&apos;t answer what it costs to acquire a new client, what that
            client is worth over time, and which part of your funnel is leaking the
            most — you don&apos;t have a scaling service business. You have an expensive guessing game.
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
