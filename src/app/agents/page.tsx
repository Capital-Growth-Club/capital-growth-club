import type { Metadata } from "next";
import Image from "next/image";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import NavBar from "@/components/NavBar";
import RevealSection from "@/components/RevealSection";
import AnimatedStat from "@/components/AnimatedStat";
import FaqSection from "@/components/FaqSection";
import TestimonialScroll from "@/components/TestimonialScroll";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "Capital Growth Club | Cold Client Acquisition for Real Estate Agents",
  description:
    "We build cold client acquisition systems for real estate agents — paid ads, funnels, CRM, follow-up, and tracking. All built and managed by one team.",
};

const agentFaqs = [
  {
    q: "What does the lead guarantee actually mean?",
    a: "We guarantee to double your qualified buyer or seller lead flow in the first 90 days of ads running — or we refund the retainer and ad spend in full. The guarantee only applies when the client meets our qualifying requirements at signing: a full-time ISA (or 5+ agents with a proven 6–24 month conversion track record), a Tier A or B market, willingness to invest the $2,500/month minimum, and operational readiness to follow up on leads in under 5 minutes during business hours. We turn away more agents than we take precisely because the guarantee is real.",
  },
  {
    q: "What counts as a qualified lead?",
    a: "A qualified lead is someone who (1) submitted their information through one of our lead generation campaigns, (2) provided a real, verified phone number, and (3) acknowledged interest in buying or selling a property within the next 6–24 months. That's the only kind of lead that counts toward our 90-day guarantee — bots, fake numbers, duplicates, and prospects outside that intent window don't count.",
  },
  {
    q: "Do you work with my competitors in the same area?",
    a: "No. We only take one real estate team or brokerage per city or designated service area. When you sign with us, no other team in your zip code, city, or radius can run our system at the same time. That exclusivity is part of why our clients win — and it's also why spots in competitive markets fill quickly. If your area is already taken, we maintain a short waitlist and only bring on the next team if the current one ends their engagement.",
  },
  {
    q: "What if I want to target multiple cities or markets?",
    a: "Pricing scales with the number of markets you want exclusivity on. The first area starts at our base rate (around $2,500–$5,000/month combined retainer and ad spend depending on buyer-only, seller-only, or both). Each additional market adds incremental retainer and ad spend depending on size and competitiveness. Most teams start with one area, prove the model, then expand into adjacent zips or cities as they grow.",
  },
  {
    q: "How much does it cost to work with you?",
    a: "For a single market, plan on $2,500–$5,000/month combined between retainer and ad spend. The exact number depends on whether you're running buyer-only, seller-only, or both campaigns — and on your market's size and competitiveness. There's also a one-time setup fee covering funnel buildout, ad account configuration, automation install, and attribution tracking. Adding additional markets scales the investment. We share the specific numbers on the strategy call once we understand your situation. If a team flinches at this range, the ISA economics aren't really there yet — and the guarantee won't protect either of us.",
  },
  {
    q: "Do I need a full-time ISA to work with you?",
    a: "Not necessarily — but you need somebody with the capacity to work leads over a 6–24 month window. That's either a full-time ISA on payroll, or at least 5 agents under you who have a proven track record of converting leads months after the first touch. If you don't have an ISA, we'll dig into your long-term sales process and team workflow on the strategy call and vet whether your team can carry the lead from where we hand it off to closing. We care about the conversion infrastructure existing — not the specific title.",
  },
  {
    q: "What's the difference between a Tier A and a Tier B market?",
    a: "Tier A markets are popular travel destinations or markets with an average price point of $1M+ — places like Miami, Aspen, the Hamptons, Naples, San Diego, Park City. Tier B markets are large cities with high-volume mid-priced homes starting around $500K+ — places like Charlotte, Tampa, Nashville, Phoenix, Raleigh. We don't work in Tier C/D markets because the lead economics and ad inventory don't support our model at scale. If you're unsure where your area falls, just ask us on the strategy call — we'll tell you straight.",
  },
  {
    q: "How is this different from Zillow, Realtor.com, or OpCity?",
    a: "Three differences. First — you own every lead. No 30–40% referral cut on closings. Second — the leads come from your market only, on creative and targeting we build for you specifically, not a national pool of buyers shopping three other agents. Third — we build the entire lead engine: ads, funnel, CRM routing, automated nurture, and tracking. The platforms sell you the lead and walk away. We build the system that converts the lead.",
  },
  {
    q: "How long until we see results?",
    a: "Most teams see their full system live within 14–21 days of onboarding. First leads typically come within the first week of ads running. The double-your-lead-flow milestone is what we measure at 90 days. But real estate is a 6–24 month sales cycle on most leads — so closings ramp up from that window. The teams that win at this are the ones who treat it as a 6–12 month system build, not a 30-day vending machine.",
  },
  {
    q: "Do I need to make the ad creative myself?",
    a: "No. Our team handles all of the creative — scripting hooks, sourcing footage, editing, ad copy, and ongoing rotation. You may be asked to film selfie-style segments occasionally for higher-converting creative, but we coach you through it. The minimum is your branding and access to a few of your listings or sold properties for social proof.",
  },
  {
    q: "What if I already have a CRM or follow-up system?",
    a: "We work with whatever CRM you have. Most of our clients run GoHighLevel because it makes everything easier on our side, but we plug into Follow Up Boss, Sierra, KW Command, Brivity, or whatever you're using. If your CRM is genuinely holding the business back, we'll tell you and recommend a migration — but we'll never force one.",
  },
  {
    q: "What kind of agents do you work with?",
    a: "Established solo agents with at least one ISA, small team leads, and boutique brokerage owners of any size. Tier A and B markets only. We don't work with brand-new agents, solo operators without follow-up capacity, or Tier C/D markets where the unit economics don't support our model. If you don't have an ISA, you need at least 5 agents under you with a proven track record of converting leads over a 6–24 month window.",
  },
  {
    q: "What does the application process look like? Is this a sales call?",
    a: "Application takes about 2 minutes. If you fit our ICP, you'll be invited to a strategy session with our Cold Acquisition Advisors — a real working call where we map out your local ICP, target neighborhoods, funnel architecture, ad strategy, and ISA workflow. If there's a fit, we talk about onboarding. If there isn't, you walk away with a real plan you can take to anyone. No high-pressure pitch.",
  },
];

const agentTestimonials = [
  { quote: "I was burning cash on Zillow and Realtor.com leads that were already shopping three other agents. CGC ran the ads, the cost per buyer lead came in under $10, and I closed my first deal off the new leads in under 30 days.", author: "Marcus B.", role: "Solo Agent — Tier A Market" },
  { quote: "Our team was stagnant. Same production three years in a row. After 90 days with CGC running our ads, we hit the doubled lead flow they guaranteed and brought in $31K in commissions from those leads.", author: "Diane W.", role: "Team Lead — 5+ Agents" },
  { quote: "I didn't want to drop $5K/month to break into luxury buyers. CGC ran a focused campaign on $750/month and we pulled in 142 qualified luxury buyer leads in 6 months. Two of them turned into closings.", author: "Trent K.", role: "Luxury Team — Buyer Focus" },
  { quote: "We wanted luxury seller leads inside one specific zip code. CGC ran the ads targeting that exact area and in 3 months we had 50 qualified seller leads — including one that turned into a $4M listing appointment.", author: "Riley & Hannah G.", role: "Boutique Team — Luxury Sellers" },
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
              For Real Estate Professionals With An ISA
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4">
              We Will Double Your Qualified Seller Or Buyer Leads In 90 Days{" "}
              <span className="gradient-text">Or We Will Refund You Every Dollar Including Ad Spend.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              We run, manage, and create paid ad campaigns that consistently put real
              qualified and pre-filtered buyers and sellers into your team's pipelines
              every single month. See How Below.
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
              Sound Familiar?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Is This <span className="gradient-text">Your Team</span> Right Now?
            </h2>
            <p className="text-white/50 text-lg">
              We hear these from team leads and brokerage owners every single week.
              If any of them hit close to home, you're in the right place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2v24M2 14h24" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /><circle cx="14" cy="14" r="12" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /></svg>,
                title: "Overpaying For Window Shoppers",
                desc: "Most buyer leads from Zillow, Redfin, or Realtor.com are window shoppers — and the ones that aren't are usually already talking to three other agents the same vendor shipped the lead to.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="4" stroke="#BB9A65" strokeWidth="2" opacity="0.3" /><path d="M9 14h10M14 9v10" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Your Agents' Pipelines Are Drying Up",
                desc: "The agents who joined you because “leads will be provided” are getting restless. A few have already made noise about leaving. Some have. Each departure is months of recruiting gone — plus the morale hit on whoever stayed.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#BB9A65" strokeWidth="2" strokeLinejoin="round" opacity="0.3" /><path d="M10 18l8-8" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" /></svg>,
                title: "Profitable But Stagnant",
                desc: "Last year looked like the year before. The year before looked like the year before that. You're alive on referrals and word-of-mouth, but you've never built a real way to add buyers and sellers on demand.",
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 24l8-8 4 4 8-12" stroke="#BB9A65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                title: "40% Referral Splits On Seller Leads",
                desc: "Most seller lead vendors take up to 40% of your commission off every closing. By the time the brokerage takes its split and the lead vendor takes theirs, the listing barely feels worth the work.",
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
              sources. We just deliver qualified cold leads at a lower cost so your team has more
              shots on goal without the 40% referral hit.
            </p>
            <SurveyButton className="btn-primary">
              Apply To Work With Us
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
              <span className="gradient-text">Real Estate Teams</span>
            </h2>
            <p className="text-white/50 text-lg">
              These aren't projections. These are real results from real estate teams
              and brokerage owners we've built lead engines for.
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
                Solo Agent — First Closing in 30 Days
              </p>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                A solo agent with one ISA wanted to add a lower-cost lead source to supplement
                their referral pipeline. We built a buyer lead magnet funnel and Meta campaign
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

            {/* Case Study 4: Boutique Team — Hyper-Local Luxury Seller */}
            <div className="card-dark p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg opacity-60" />
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Boutique Team — Hyper-Local Luxury Sellers
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
              Double Your Buyer or Seller Lead Flow in 90 Days,{" "}
              <span className="gradient-text">or Get a Full Refund.</span>
            </h2>
            <p className="text-white/50 text-lg">
              We put the risk on us. If we don't double your buyer or seller lead flow
              within 90 days of ads running, we refund the retainer and ad spend in full.
              No partial refunds. No footnotes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card-dark p-7 border-brand-gold/20">
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">What We Promise</p>
              <p className="text-white/70 leading-relaxed">
                Your buyer or seller lead flow doubles within 90 days of ads going live,
                measured against your prior 90-day baseline.
              </p>
            </div>
            <div className="card-dark p-7 border-brand-gold/20">
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">If We Miss</p>
              <p className="text-white/70 leading-relaxed">
                Full refund. Every dollar of retainer plus every dollar of ad spend paid
                back, no questions asked.
              </p>
            </div>
          </div>

          <div className="card-dark p-7 border-brand-gold/20">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">To Qualify For The Guarantee, You Need To Meet These Requirements</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white/70">A full-time ISA on payroll — or at least 5 agents under you with a proven track record of closing leads 6–24 months after the first touch.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white/70">Willingness to invest at least $2,500/month between retainer and ad spend per market.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5L9.5 3" stroke="#0E0E0E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-white/70">Operating in a Tier A or Tier B market.</span>
              </li>
            </ul>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ EXCLUSIVITY ════════════════ */}
      <RevealSection className="py-16 md:py-24" id="exclusivity">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Market Exclusivity
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              One Team Per Market.{" "}
              <span className="gradient-text">No Exceptions.</span>
            </h2>
            <p className="text-white/50 text-lg">
              We only work with one real estate team or brokerage per city or designated
              service area. When you sign with us, no competing team in your area gets
              the same system. That's why our clients win — and why spots fill quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="card-dark p-7">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#BB9A65" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Your Area Is Yours</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                No other CGC client competes in your city, zip code, or designated radius.
                Your ads, your audiences, your data — all built without another agent
                eating into your market share.
              </p>
            </div>
            <div className="card-dark p-7">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z" stroke="#BB9A65" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="#BB9A65" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">First-Mover Advantage</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Lock in your area before a competitor does. Once your zone is claimed,
                we maintain a short waitlist — and only bring on a new team if the
                current one ends.
              </p>
            </div>
            <div className="card-dark p-7">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="#BB9A65" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="6" cy="6" r="1.5" fill="#BB9A65" />
                  <circle cx="11" cy="12" r="1.5" fill="#BB9A65" />
                  <circle cx="16" cy="18" r="1.5" fill="#BB9A65" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Scale With More Territory</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Want to expand? Add additional cities or service areas. Pricing scales
                with each new market based on size and competitiveness — but you keep
                exclusivity in every one.
              </p>
            </div>
          </div>

          <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-6 text-center">
            <p className="text-white/80">
              <span className="text-brand-gold font-semibold">Spots fill quickly in Tier A markets.</span>{" "}
              Apply now to check if your area is still available.
            </p>
            <p className="text-white/40 text-sm mt-3">
              Tier A = popular travel destinations or markets with avg price point $1M+.
              Tier B = large cities with high-volume mid-priced homes at $500K+. Not sure
              where you fall? Ask us on the call.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ════════════════ WHAT'S INCLUDED ════════════════ */}
      <RevealSection className="py-16 md:py-24 bg-brand-dark" id="whats-included">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              What's Included
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Everything You Need to Generate Buyer or Seller Leads{" "}
              <span className="gradient-text">on Demand.</span>
            </h2>
            <p className="text-white/50 text-lg">
              Built and managed by one team. No piecing it together. No managing five
              vendors. We own the whole engine for you — you focus on closing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Paid Ad Campaigns",
                problem: "Generic ads that look like every other agent's get ignored — and ad accounts that run the same creative for months stop scaling.",
                solution: "We build campaigns targeted to your local market and ship fresh creative every month so your account doesn't fatigue and your CPL stays low.",
              },
              {
                title: "Buyer & Seller Lead Magnet Funnels",
                problem: "Sending paid traffic to a homepage or generic IDX site is why most agents' ads don't convert.",
                solution: "We build dedicated lead magnet funnels for each campaign — buyer or seller, luxury or local — designed to capture qualified leads and hand them straight to your ISA or team members.",
              },
              {
                title: "CRM Setup & Lead Routing",
                problem: "Leads buried in inboxes or scattered across spreadsheets never get worked.",
                solution: "We wire your funnel into your CRM (GHL, Follow Up Boss, Sierra, KW Command, whatever you use) with clean pipeline stages and instant routing.",
              },
              {
                title: "Initial Lead Handoff Automations",
                problem: "If your ISA gets a lead notification 30 minutes after the opt-in, the deal is already cold.",
                solution: "We build the initial automations — instant SMS confirmations, email auto-replies, ISA notifications — that hand the lead to your team in real time. From there, your team takes over the conversation.",
              },
              {
                title: "Conversion Tracking & Attribution",
                problem: "Without real tracking, you can't tell which campaigns produce closings vs. which ones burn budget.",
                solution: "We install server-side conversion tracking and attribution so you see cost-per-lead, cost-per-appointment, and cost-per-closing in real time — not at the end of the quarter.",
              },
              {
                title: "Ongoing Campaign Management",
                problem: "Most agencies launch the campaign and disappear. You're left wondering why your CPL keeps creeping up.",
                solution: "We monitor your account daily, rotate creative weekly, and review strategy monthly. Your campaigns get worked, not just turned on and forgotten.",
              },
              {
                title: "Market Exclusivity",
                problem: "When your lead vendor sells the same lead to three other agents in your zip, you're competing on response time, not value.",
                solution: "Locked exclusivity in your city or designated service area. No other CGC client competes with you for the same audiences.",
              },
              {
                title: "Strategy & Onboarding Support",
                problem: "Generic launch playbooks rarely fit your specific market, team, or budget.",
                solution: "Direct working sessions to map your local ICP, funnel architecture, ad strategy, and team workflow before we ever launch — so the system is built around your business.",
              },
            ].map((item, i) => (
              <div key={i} className="card-dark p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-6" stroke="#0E0E0E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold leading-tight">{item.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed pl-11">
                  {item.solution}
                </p>
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
                {["You're an established solo agent with at least 1 ISA, a small team lead, or a boutique brokerage owner of any size", "You operate in a Tier A or Tier B market", "You have either a full-time ISA OR 5+ agents under you with a proven track record of converting leads over a 6–24 month window", "You're able to meet our minimum spend of $2,500/month for your area", "You treat marketing as a 6–24 month investment, not a 30-day vending machine"].map((item, i) => (
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
                {["You're a solo agent with no ISA and no agents under you with a proven 6–24 month conversion track record", "You operate in a Tier C or Tier D market — the unit economics don't support our model", "You aren't able to meet our minimum spend of $2,500/month for your area", "You want closings this quarter or your money back — paid lead gen is a 6–24 month game", "You're looking for a quick hack or a media buyer to dump traffic into your existing setup"].map((item, i) => (
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
            We guarantee to double your buyer or seller lead flow in the first 90 days of
            ads running — or we refund the retainer and ad spend in full. If your team
            has the conversion capacity to work leads across the 6–24 month window, you're
            in a Tier A or B market, and you can meet our $2,500/month minimum — apply below.
          </p>

          <SurveyButton className="btn-primary !text-lg !py-5 !px-12">
            Apply To Work With Us
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
