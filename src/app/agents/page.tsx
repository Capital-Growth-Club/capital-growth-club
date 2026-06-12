import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import NavBar from "@/components/NavBar";
import RevealSection from "@/components/RevealSection";
import AnimatedStat from "@/components/AnimatedStat";
import FaqSection from "@/components/FaqSection";
import TestimonialScroll from "@/components/TestimonialScroll";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Buyer & Seller Leads for Real Estate Teams",
  description:
    "100 buyer leads or $3M in seller leads in 90 days. Or we work for free until we do. Built for established real estate teams in Tier A or Tier B markets.",
  openGraph: {
    title: "Buyer & Seller Leads for Real Estate Teams | Capital Growth Club",
    description:
      "100 buyer leads or $3M in seller leads in 90 days. Or we work for free until we do.",
    url: "https://capitalgrowthclub.com/agents",
  },
  twitter: {
    title: "Buyer & Seller Leads for Real Estate Teams | Capital Growth Club",
    description:
      "100 buyer leads or $3M in seller leads in 90 days. Or we work for free until we do.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/agents",
  },
};

const agentFaqs = [
  {
    q: "What does the lead guarantee actually mean?",
    a: "We guarantee to generate either 100 buyer leads or at least $3 million in seller leads within the first 90 days of ads running. If we don't hit that threshold, we keep running your campaigns for free — no additional retainer — until we do. The guarantee only applies when the client meets our qualifying requirements at signing: previous year sales volume of $25M+ for solo agents or $100M+ for teams, a Tier A or B market, and a minimum of $1,000/month in ad spend kept live for the full 90 days with no pausing and no campaign changes. The 90 days starts the day your ads go live. See terms and conditions for full details. We turn away more agents than we take precisely because the guarantee is real.",
  },
  {
    q: "What counts as a qualified lead?",
    a: "A qualified lead is someone who (1) submitted their information through one of our lead generation campaigns, (2) provided a real, verified phone number, and (3) acknowledged interest in buying or selling a property within the next 6–24 months. That's the only kind of lead that counts toward our 90-day guarantee — bots, fake numbers, duplicates, and prospects outside that intent window don't count.",
  },
  {
    q: "What are the three packages and how do I pick one?",
    a: "Starter ($497/month per campaign) is the fastest way in — we run a campaign and deliver leads straight to your CRM, your team takes it from there. Best for agents who want to own their lead flow without the full done-for-you overhead. Premium ($3,497/month) adds a pre-trained lead qualifier and market exclusivity, so only the real leads worth working reach your team. Platinum ($7,997/month) is done-for-you everything — qualifier, email nurture, branded newsletter, and appointment setting straight to your calendar. We help you pick the right one on the strategy call.",
  },
  {
    q: "What's the minimum total I need to commit?",
    a: "Minimum total monthly spend to enter is $1,247 — Starter retainer ($497) plus $750/month in ad spend. To unlock our 90-day guarantee, ad spend bumps to $1,000/month (so $1,497/month total). Larger packages and additional campaigns scale the total from there. None of the retainers include ad spend — that's paid directly to the ad platforms.",
  },
  {
    q: "Is there a setup fee?",
    a: "Yes. There's a one-time setup fee that covers funnel buildout, ad account configuration, automation install, attribution tracking, and onboarding. We share the specific number on the strategy call once we understand your situation and which package fits.",
  },
  {
    q: "Do you work with my competitors in the same area?",
    a: "On our Premium and Platinum packages, no — those come with locked market exclusivity in your city or designated service area, so no other CGC client competes with you for the same audiences. The only exception is when Starter clients were already signed up in your city before you came in — those existing clients stay. But the moment you sign for Premium or Platinum, we stop accepting any new applicants in your area. On Starter, we never work with more than one team per zip code — but we may work with other agents in your city if they're in a different zip and also on Starter. If protecting your full area matters to you, Premium or Platinum is the right choice.",
  },
  {
    q: "How many Starter clients can there be in one city?",
    a: "Even on Starter, we cap each city at 5 clients total — and we never take more than one team per zip code. It's not an unlimited tier. This keeps audience overlap manageable, protects creative performance for everyone running in that city, and keeps us honest about how much volume we can actually deliver. Once a city hits the 5-client cap on Starter, we close applications for that area unless someone ends their engagement. If you want to lock down all or the remaining open slots in a city for yourself, you can also buy them out and run as the only team in the area — just ask about it on the call.",
  },
  {
    q: "What if I want to target multiple cities or markets?",
    a: "Pricing scales with the number of markets and campaigns you want to run. The first market starts at the package base rate; each additional market adds incremental retainer and ad spend depending on size and competitiveness. Most teams start with one area, prove the model, then expand into adjacent zips or cities.",
  },
  {
    q: "What's the difference between a Tier A and a Tier B market?",
    a: "Tier A markets are popular travel destinations or markets with an average price point of $1M+ — places like Miami, Aspen, the Hamptons, Naples, San Diego, Park City. Tier B markets are large cities with high-volume mid-priced homes starting around $500K+ — places like Charlotte, Tampa, Nashville, Phoenix, Raleigh. We don't work in Tier C/D markets because the lead economics and ad inventory don't support our model at scale. If you're unsure where your area falls, just ask us on the strategy call — we'll tell you straight.",
  },
  {
    q: "How is this different from Zillow, Realtor.com, or Redfin?",
    a: "Three differences. First — you own every lead. No 30–40% referral cut on closings. Second — the leads come from your market only, on creative and targeting we build for you specifically, not a national pool of buyers shopping three other agents. Third — we run the entire lead engine: ads, funnel, CRM routing, and initial handoff. The platforms sell you the lead and walk away. We give you a lead source you actually own and control.",
  },
  {
    q: "How long until we see results?",
    a: "Most teams see their campaign live within 14–21 days of onboarding. First leads typically come within the first week of ads running. The 100-buyer-lead or $3M-seller-lead milestone is what we measure at 90 days. But real estate is a 6–24 month sales cycle on most leads — so closings ramp up from that window. The teams that win at this are the ones who treat it as a 6–12 month build, not a 30-day vending machine.",
  },
  {
    q: "Do I need to make the ad creative myself?",
    a: "No. Our team handles all of the creative — scripting hooks, sourcing footage, editing, ad copy, and ongoing rotation. You may be asked to film selfie-style segments occasionally for higher-converting creative, but we coach you through it. The minimum is your branding and access to a few of your listings or sold properties for social proof.",
  },
  {
    q: "What if I already have a CRM?",
    a: "We work with whatever CRM you have. Most of our clients run GoHighLevel because it makes everything easier on our side, but we plug into Follow Up Boss, Sierra, KW Command, Brivity, or whatever you're using. If your CRM is genuinely holding the business back, we'll tell you and recommend a migration — but we'll never force one.",
  },
  {
    q: "What kind of agents do you work with?",
    a: "Established solo agents with $25M+ in previous year sales volume, and team leads or boutique brokerage owners with $100M+ in previous year team sales volume. Tier A and Tier B markets only. We don't work with brand-new agents, low-volume operators, or Tier C/D markets where the unit economics don't support our model.",
  },
  {
    q: "Do all your client campaigns look the same?",
    a: "Not likely. Every agent serves a different kind of client — some only want investor leads, others want $1M+ buyers or sellers exclusively, others are focused on first-time homebuyers, relocations, downsizers, luxury second homes, etc. On the Strategy Call before you ever become a client, we dig into your goals and the exact type of buyer or seller you want to attract — and we build your campaign specifically around that. Two agents in similar markets but targeting different client types will have completely different campaigns.",
  },
  {
    q: "What does the application process look like?",
    a: "The application takes about 30 seconds. Our system automatically reviews your answers and decides if you meet our qualifying criteria. If you do, you're redirected to a page where you can book your Strategy Call with one of our Cold Acquisition Advisors. On that call, we map out your local market, target client, funnel approach, and ad strategy — and figure out which package fits. If we're a match, we talk about onboarding. If not, you walk away with a real plan you can take to anyone.",
  },
];

const agentTestimonials = [
  { quote: "I was burning cash on Zillow and Realtor.com leads that were already shopping three other agents. CGC ran the ads, the cost per buyer lead came in under $10, and I closed my first deal off the new leads in under 60 days.", author: "Marcus B.", role: "Solo Agent — Tier A Market" },
  { quote: "Our team was stagnant. Same production three years in a row. After 90 days with CGC running our ads, we hit the doubled lead flow they guaranteed and brought in $31K in commissions from those leads.", author: "Diane W.", role: "Team Lead — 5+ Agents" },
  { quote: "I didn't want to drop $5K/month to break into luxury buyers. CGC ran a focused campaign on $750/month and we pulled in 142 qualified luxury buyer leads in 6 months. Two of them turned into closings.", author: "Trent K.", role: "Luxury Team — Buyer Focus" },
  { quote: "We wanted luxury seller leads inside one specific zip code. CGC ran the ads targeting that exact area and in 3 months we had 50 qualified seller leads — including one that turned into a $4M listing appointment.", author: "Riley & Hannah G.", role: "Boutique Brokerage — Luxury Sellers" },
  { quote: "I was skeptical about adding another lead source on top of what we already had. CGC kept their promise — leads started coming in week 2, and we closed 3 listings that quarter from their campaigns.", author: "Annette P.", role: "Team Lead — 7 Agents" },
  { quote: "Our ISA used to get lead notifications 30+ minutes after the opt-in. CGC's setup gets every new lead in front of our ISA instantly. Same effort, way more appointments.", author: "Carlos R.", role: "Brokerage Owner — Tier B Market" },
  { quote: "I had two agents threatening to leave because the pipeline was thin. Once CGC's campaigns kicked in, every agent had leads to work and the recruiting conversations stopped.", author: "Vince M.", role: "Team Lead — 4 Agents" },
  { quote: "Tried running my own Google ads for a year and burned through $3K/month with nothing to show for it. CGC took over and within 60 days I had a real cost-per-lead I could trust and appointments showing up on my calendar.", author: "Whitney L.", role: "Solo Agent — Coastal Market" },
  { quote: "Worked with two other 'real estate marketing agencies' before CGC. Both took the money and disappeared. CGC actually delivered — we hit their 90-day guarantee with two weeks to spare.", author: "Brandon T.", role: "Team Lead — Suburban" },
  { quote: "I wanted to add a reliable lead source without taking another 30% referral cut on every closing. CGC ran the ads and our cost per buyer lead came in under $20. We close them ourselves and keep the full commission.", author: "Renata S.", role: "Brokerage Owner — Tier A" },
  { quote: "We needed first-time buyer leads at volume. CGC ran the ads and now we're getting 80+ qualified leads a month. Our agents stay busy and I never have to touch the marketing.", author: "Olivia D.", role: "Team Lead — Urban Market" },
  { quote: "I avoided paid ads for years because nothing ever felt trustworthy. CGC was the first agency that actually explained what they'd do, executed on it, and made it work. Six months in, it's one of my most reliable lead sources.", author: "Logan H.", role: "Solo Agent — Mountain Market" },
];

export default function AgentsPage() {
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
              For $25M/yr Volume Solo Agents &amp; $100M/yr Teams
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4">
              We Will Generate You 100 Buyer Leads Or At Least $3M In Seller Leads In The Next 90 Days{" "}
              <span className="gradient-text">Or We Will Work For Free Until We Do.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              We run one Meta campaign for you in your market, drop the leads
              into your CRM, and only work with up to 5 agents per market.
              $497/month plus ad spend. If we don&apos;t hit your 90-day
              numbers, we waive the fee and keep going.
            </p>

            {/* VSL Video */}
            <HeroVideo />

            {/* CTA Button */}
            <SurveyButton className="btn-primary !text-lg !py-5 !px-12 mb-10">
              Apply And Book Call
            </SurveyButton>

            {/* Trust bar */}
            <div className="flex items-center justify-center pt-8 border-t border-white/5 w-full max-w-xl">
              <div className="text-center flex-1">
                <p className="text-white font-bold text-xl">52,984+</p>
                <p className="text-white/40 text-xs mt-1">Real Estate Leads Captured</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center flex-1">
                <p className="text-white font-bold text-xl">$8.4B+</p>
                <p className="text-white/40 text-xs mt-1">Sales Volume Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PAIN POINTS — "Is This You?" ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="pain-points">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Is This You Or Your Team?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Is This <span className="gradient-text">Your Team</span> Right Now?
            </h2>
            <p className="text-white/50 text-lg">
              We hear these from solo agents, team leads, and brokerage owners every
              single week. If any of them hit close to home, you're in the right place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2v24M2 14h24" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /><circle cx="14" cy="14" r="12" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /></svg>,
                title: "Your Brokerage Hands You The Leftovers",
                desc: "By the time leads roll downhill to you, the top producers in your brokerage have already picked through the best ones. You're left working what's left — and competing for the next batch.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M9 14h10M14 9v10" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Overpaying For Shared Leads",
                desc: "Zillow, Redfin, Realtor.com — they all sell the same lead to multiple agents on the same phone call. You're paying premium CPLs to compete on response time, not value, and the platforms keep raising prices.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#BB9A65" strokeWidth="2" strokeLinejoin="round" opacity="0.3" /><path d="M10 18l8-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Living Off Referrals That Cap You",
                desc: "Your sphere pays the bills. But it never sends enough to add another agent, expand into a new neighborhood, or actually hit the production numbers you want. You can't tell it to send you twice as many next month.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 24l8-8 4 4 8-12" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "Profitable But Stagnant",
                desc: "Last year looked like the year before. The year before looked like the year before that. You've got no real way to add buyers and sellers on demand — and no lever to pull when you want to grow.",
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
              We're not here to replace Zillow or Realtor.com — most successful teams use multiple
              sources. We give you a lead source you actually own and control, at a lower cost, so
              your team has more leads that turn into closings.
            </p>
            <SurveyButton className="btn-primary">
              Apply And Book Call
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
              <span className="gradient-text">Real Estate Agents</span>
            </h2>
            <p className="text-white/50 text-lg">
              These aren't projections. These are real results from real estate
              agents, teams, and boutique brokerage owners we've built lead engines for.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-14">
            <AnimatedStat value="$8.4B" suffix="+" label="In Sales Volume Generated" />
            <AnimatedStat value="52,984" suffix="+" label="Real Estate Leads Captured" />
            <AnimatedStat value="63" suffix="%" label="Avg. Cost Per Lead Reduction" />
          </div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Case Study 1: Solo Agent — Buyer */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Solo Agent — First Closing in 60 Days
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A solo agent with one ISA wanted to add a lower-cost lead source to supplement
                their referral pipeline. We built a custom buyer funnel and ran a Meta campaign
                in their market. After $900 in ad spend they closed their first deal — a $590K
                transaction — with more in the pipeline.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Cost Per Buyer Lead</span>
                  <span className="text-white font-semibold">$5</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Ad Spend</span>
                  <span className="text-white font-semibold">$900</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">First Closing</span>
                  <span className="text-white font-semibold">$590,000</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Estimated ROAS</span>
                  <span className="text-brand-gold font-bold text-xl">10x+</span>
                </div>
              </div>

              <div className="space-y-3 max-w-xs mx-auto">
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/solo-agent-text-2.jpg"
                    alt="Text message from solo agent confirming the first closing"
                    width={1320}
                    height={769}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/solo-agent-text-1.jpg"
                    alt="Text message from solo agent after the campaign launched"
                    width={1320}
                    height={1236}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <p className="text-white/40 text-xs text-center mt-3">
                Real text messages from the agent after launching the campaign
              </p>
            </div>

            {/* Case Study 2: Team — Google Seller Leads */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Team Lead — Seller Listings via Google
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A team wanted to add seller listings to their pipeline. We built a seller lead
                magnet funnel and ran Google search ads targeting high-intent seller keywords.
                In 3 months they generated qualified seller leads at $77 each and converted
                them into $31,325 in commissions.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Avg. Cost Per Seller Lead</span>
                  <span className="text-white font-semibold">$77</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Timeframe</span>
                  <span className="text-white font-semibold">3 Months</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Commissions Earned</span>
                  <span className="text-brand-gold font-bold text-xl">$31,325</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-brand-black/40">
                <Image
                  src="/77-cpl-seller-leads.png"
                  alt="$77 average cost per qualified seller lead via Google search ads"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-white/40 text-xs text-center mt-3">
                $77 average cost per qualified seller lead
              </p>
            </div>

            {/* Case Study 3: Team — Luxury Buyer ($1M+) */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Luxury Team — $1M+ Buyer Campaign
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A team wanted to focus exclusively on buyers searching for $1M+ properties.
                We built a targeted Meta campaign and luxury buyer lead magnet funnel on a
                lean budget. In 6 months they captured 142 qualified luxury buyer leads at
                $34 each on $750/month in ad spend.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Cost Per Luxury Lead</span>
                  <span className="text-white font-semibold">$34.04</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Total Leads (6mo)</span>
                  <span className="text-white font-semibold">142</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Total Ad Spend</span>
                  <span className="text-brand-gold font-bold text-xl">$750/month</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-brand-black/40">
                <Image
                  src="/142-luxury-leads.png"
                  alt="142 luxury buyer leads captured on $750/month in ad spend"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-white/40 text-xs text-center mt-3">
                142 qualified luxury buyer leads at $34.04 each
              </p>
            </div>

            {/* Case Study 4: Boutique Brokerage — Hyper-Local Luxury Seller */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Boutique Brokerage — Hyper-Local Luxury Sellers
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A team wanted exclusively luxury seller leads inside a 1-mile radius. We built
                a hyper-local Facebook campaign and a seller lead magnet funnel targeting
                homeowners in that zone. 50 seller leads in 3 months at an average property
                value of $1.48M — including 20 leads on homes worth $2M+ and a listing
                appointment for a $4M property.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">Avg. Property Value</span>
                  <span className="text-white font-semibold">$1.48M</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/40 text-sm">$2M+ Leads</span>
                  <span className="text-white font-semibold">20 of 50</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-white/40 text-sm">Sales Volume Generated</span>
                  <span className="text-brand-gold font-bold text-xl">$71M</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-brand-black/40">
                <Image
                  src="/71m-sales-volume.png"
                  alt="$71M in seller leads captured in under 3 months"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-white/40 text-xs text-center mt-3">
                $71M in seller leads captured in under 3 months
              </p>
            </div>
          </div>
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
              What Real Estate Teams & Brokerage Owners{" "}
              <span className="gradient-text">Are Saying</span>
            </h2>
          </div>
        </div>

        <TestimonialScroll testimonials={agentTestimonials} />
      </section>

      {/* ════════════════ THE GUARANTEE ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="guarantee">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              The 90-Day Guarantee
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              100 Buyer Leads or $3M in Seller Leads in 90 Days.{" "}
              <span className="gradient-text">Or We Work For Free Until We Do.</span>
            </h2>
            <p className="text-white/50 text-lg">
              We put the risk on us. If we don't deliver 100 buyer leads or at least
              $3 million in seller leads within 90 days of ads going live — we keep
              running your campaigns for free until we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card-dark p-7 border-brand-gold/20">
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">What We Promise</p>
              <p className="text-white/70 leading-relaxed">
                100 buyer leads or at least $3 million in seller leads within 90 days
                of ads going live in your market.
              </p>
            </div>
            <div className="card-dark p-7 border-brand-gold/20">
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">If We Miss</p>
              <p className="text-white/70 leading-relaxed">
                We keep working for free — no additional retainer — until we hit the
                threshold. You stay on ad spend, we stay on the work.
              </p>
            </div>
          </div>

          <div className="card-dark p-7 border-brand-gold/20">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">To Qualify For The Guarantee, You Need To Meet These Requirements</p>
            <ul className="space-y-3">
              {[
                "Previous year sales volume — $25M+ as a solo agent, or $100M+ as a team lead or boutique brokerage owner.",
                "Operating in a Tier A or Tier B market.",
                "Minimum $1,000/month in ad spend, paid directly to the ad platform.",
                "Ads cannot be paused or turned off for any reason during the 90-day window.",
                "No changes to the campaigns during the 90-day window.",
                "The 90 days starts the day your ads go live in your market.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-white/30 text-xs mt-5">
            See{" "}
            <a href="#" className="text-brand-gold/70 hover:text-brand-gold underline-offset-2 hover:underline transition-colors">
              terms and conditions
            </a>{" "}
            for full details.
          </p>
        </div>
      </RevealSection>

      {/* ════════════════ EXCLUSIVITY ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="exclusivity">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Market Exclusivity
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              One Team Per Market.{" "}
              <span className="gradient-text">No Exceptions.</span>
            </h2>
            <p className="text-white/50 text-lg mb-6">
              On our Premium and Platinum packages, we only work with one real estate
              team or brokerage per city or designated service area. Once you sign,
              no competing team in your zone gets the same system. That's why our
              exclusive clients win — and why spots fill quickly.
            </p>
            <p className="text-white/40 text-sm">
              Tier A = popular travel destinations or markets with avg price point $1M+.
              Tier B = large cities with high-volume mid-priced homes at $500K+. Not sure
              where you fall? Ask us on the call.
            </p>
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
                {["You're a solo agent with $25M+ in previous year sales volume — or a team lead / boutique brokerage owner with $100M+ in previous year team sales volume", "You operate in a Tier A or Tier B market", "You can meet our minimum total spend of $1,247/month per market", "You treat marketing as a 6–24 month investment, not a 30-day vending machine", "You're ready to stop renting leads and start owning your own lead source"].map((item, i) => (
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
                {["You're a solo agent with less than $25M in previous year sales volume", "You're a team or brokerage with less than $100M in previous year team sales volume", "You operate in a Tier C or Tier D market — the unit economics don't support our model", "You can't meet our $1,247/month minimum total spend per market ($497 retainer + $750 minimum ad spend)", "You want closings this quarter or your money back — paid lead gen is a 6–24 month game"].map((item, i) => (
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

      {/* ════════════════ PRICING ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Pick the engagement{" "}
              <span className="gradient-text">that fits where you are.</span>
            </h2>
            <p className="text-white/50 text-lg">
              Three packages. Same guarantee. Pricing scales with how much of
              the lead engine you want us running for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-5 items-stretch">
            {/* Premium — left on desktop, second on mobile */}
            <div className="card-dark p-8 flex flex-col order-2 md:order-1">
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Premium
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">$3,497</span>
                <span className="text-white/40 text-sm">/month</span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed mb-5">
                $2,000 one-time setup fee. Plus $750/month minimum ad
                spend per campaign.
              </p>
              <div className="bg-brand-gold/5 border border-brand-gold/15 rounded-xl p-4 mb-6">
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.15em] uppercase mb-2">
                  Best For
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Teams unfamiliar with qualifying and building relationships
                  with cold traffic, with slow internal speed-to-lead, who don&apos;t
                  want their agents wasting time on rude tire-kickers.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Up to 3 ad campaigns",
                  "Pre-trained lead qualifier",
                  "Market exclusivity",
                  "Everything in Starter",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <SurveyButton className="btn-secondary w-full text-center">
                Apply And Book Call
              </SurveyButton>
            </div>

            {/* Starter — middle on desktop, first on mobile */}
            <div
              className="card-dark p-8 flex flex-col border-brand-gold/40 relative md:-translate-y-6 order-1 md:order-2"
              style={{ boxShadow: "0 0 60px rgba(187,154,101,0.15)" }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-brand-black px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                Most Popular
              </div>
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Starter
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold gradient-text">$497</span>
                <span className="text-white/40 text-sm">/month per campaign</span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed mb-5">
                $1,000 one-time setup fee. Plus $750/month minimum ad
                spend per campaign.
              </p>
              <div className="bg-brand-gold/5 border border-brand-gold/15 rounded-xl p-4 mb-6">
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.15em] uppercase mb-2">
                  Best For
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Top-producing solo agents and lean teams with a strong
                  follow-up process who just want a reliable, done-for-you cold
                  traffic campaign feeding them more at-bats.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "1 buyer or seller ad campaign",
                  "Custom funnel built for your market",
                  "Leads delivered straight to your CRM",
                  "Initial handoff automations to your team",
                  "90-day guarantee",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <SurveyButton className="btn-primary w-full text-center">
                Apply And Book Call
              </SurveyButton>
            </div>

            {/* Platinum — right on desktop, third on mobile */}
            <div className="card-dark p-8 flex flex-col order-3 md:order-3">
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Platinum
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">$7,997</span>
                <span className="text-white/40 text-sm">/month</span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed mb-5">
                $3,000 one-time setup fee. Plus $750/month minimum ad
                spend per campaign.
              </p>
              <div className="bg-brand-gold/5 border border-brand-gold/15 rounded-xl p-4 mb-6">
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.15em] uppercase mb-2">
                  Best For
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Larger teams who want a near plug-and-play client acquisition
                  system — cold traffic, qualification, and ongoing nurture
                  handled so agents can focus almost entirely on listing and
                  showing.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Up to 5 ad campaigns",
                  "Market exclusivity",
                  "Email nurture sequences",
                  "Branded monthly newsletter",
                  "Appointments booked on your calendar",
                  "Everything in Premium",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <SurveyButton className="btn-secondary w-full text-center">
                Apply And Book Call
              </SurveyButton>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ COMPARISON TABLE ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Full Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              What&apos;s included{" "}
              <span className="gradient-text">in each package.</span>
            </h2>
          </div>

          <div className="card-dark overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 md:p-5 text-white/40 font-medium"></th>
                    <th className="p-4 md:p-5 text-center font-semibold gradient-text relative">
                      Starter
                      <span className="absolute -top-1 right-1/2 translate-x-[36px] text-[9px] tracking-[0.15em] uppercase text-brand-gold/80 font-bold">Popular</span>
                    </th>
                    <th className="p-4 md:p-5 text-center text-white font-semibold">Premium</th>
                    <th className="p-4 md:p-5 text-center text-white font-semibold">Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Monthly retainer", values: ["$497 per campaign", "$3,497/month", "$7,997/month"] },
                    { label: "One-time setup fee", values: ["$1,000", "$2,000", "$3,000"] },
                    { label: "Minimum ad spend per campaign", values: ["$750/mo", "$750/mo", "$750/mo"] },
                    { label: "Paid ad campaigns", values: ["1 per retainer", "Up to 3", "Up to 5"] },
                    { label: "Custom buyer/seller funnels", values: [true, true, true] },
                    { label: "Leads delivered to your CRM", values: [true, true, true] },
                    { label: "Initial handoff automations", values: [true, true, true] },
                    { label: "Conversion tracking & dashboards", values: [true, true, true] },
                    { label: "90-day guarantee", values: [true, true, true] },
                    { label: "Pre-trained lead qualifier", values: [false, true, true] },
                    { label: "Market exclusivity", values: [false, true, true] },
                    { label: "Email nurture sequences", values: [false, false, true] },
                    { label: "Branded monthly newsletter", values: [false, false, true] },
                    { label: "Appointment setting on your calendar", values: [false, false, true] },
                    { label: "Upgrade in 60 days — 50% off next setup fee", values: [true, true, false] },
                  ].map((row, i, arr) => (
                    <tr key={row.label} className="border-b border-white/5">
                      <td className="p-4 md:p-5 text-white/70">{row.label}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className={`p-4 md:p-5 text-center ${j === 0 ? "bg-brand-gold/[0.04]" : ""}`}>
                          {typeof v === "boolean" ? (
                            v ? (
                              <svg className="inline-block" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5 10l4 4 6-8" stroke="#BB9A65" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : (
                              <span className="text-white/20 text-lg">—</span>
                            )
                          ) : (
                            <span className="text-white font-medium">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 md:p-5"></td>
                    <td className="p-4 md:p-5 text-center bg-brand-gold/[0.04]">
                      <Link
                        href="/agents/more"
                        className="inline-flex items-center gap-1.5 text-brand-gold text-sm font-medium hover:text-brand-ivory transition-colors"
                      >
                        Just want more campaigns?
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8m0 0L8 4m3 3L8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </td>
                    <td className="p-4 md:p-5"></td>
                    <td className="p-4 md:p-5"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-10">
            <SurveyButton className="btn-primary !text-lg !py-5 !px-12">
              Apply And Book Call
            </SurveyButton>
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

          <FaqSection faqs={agentFaqs} />
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
            Add Buyer or Seller Leads to Your Pipeline —{" "}
            <span className="gradient-text">Guaranteed.</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            We guarantee to generate 100 buyer leads or $3 million in seller leads
            within the first 90 days of ads running — or we keep working for free
            until we do. If you closed $25M+ as a solo agent or $100M+ as a team last
            year, you're in a Tier A or B market, and you can meet our $1,500/month
            minimum total — apply below.
          </p>

          <SurveyButton className="btn-primary !text-lg !py-5 !px-12">
            Apply And Book Call
          </SurveyButton>

          <p className="text-white/30 text-sm mt-6">
            We take a very limited number of partners at a time. When we're at capacity, we close applications.
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
