import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: "How Solo Agents Are Tripling Their Business In 12 Months",
  description:
    "The exact system billion-dollar brokerages use — done for solo real estate agents. No big brand needed. No 5–6 figure ad budget. No leaving your brokerage.",
  openGraph: {
    title: "How Solo Agents Are Tripling Their Business In 12 Months | Capital Growth Club",
    description:
      "The exact system billion-dollar brokerages use — done for solo real estate agents. No big brand needed. No 5–6 figure ad budget. No leaving your brokerage.",
    url: "https://capitalgrowthclub.com/agents/story",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Solo Agents Are Tripling Their Business In 12 Months | Capital Growth Club",
    description:
      "The exact system billion-dollar brokerages use — done for solo real estate agents.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/agents/story",
  },
};

// Reusable helpers so the letter reads consistently top to bottom
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[19px] md:text-[21px] leading-[1.7] text-[#111827]">{children}</p>
);
const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[28px] md:text-[36px] font-black leading-[1.2] text-[#0B1220] mt-4 mb-2">
    {children}
  </h2>
);
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-[#FFE873] px-1.5 py-0.5 rounded-sm font-bold text-[#0B1220]">
    {children}
  </span>
);

const InlineCTA = ({ label = "Book Your Discovery Call", location = "inline" }: { label?: string; location?: string }) => (
  <div className="my-14 py-10 px-6 md:px-8 bg-white border border-[#E5DBC5] rounded-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm">
    <Image
      src="/bundle-dark.webp"
      alt="Real Estate Business In A Box"
      width={2600}
      height={1627}
      className="w-full md:w-64 h-auto drop-shadow-xl shrink-0"
    />
    <div className="flex-1 text-center md:text-left">
      <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-2">
        Real Estate Business In A Box
      </p>
      <p className="text-[19px] md:text-[21px] leading-[1.5] text-[#0B1220] font-bold mb-5">
        The complete client machine — built for you, run for you, owned by you.
      </p>
      <span className="cta-wrap inline-block">
        <SurveyButton
          location={location}
          className="inline-flex items-center gap-2 bg-[#0B1220] text-white font-bold text-[16px] md:text-[17px] py-4 px-7 rounded-xl hover:bg-[#1a2337] transition-all shadow-lg hover:-translate-y-0.5"
        >
          {label}
          <span className="text-brand-gold">→</span>
        </SurveyButton>
      </span>
      <p className="mt-3 text-[13px] text-[#6b6555]">
        15-minute discovery call · No pitch deck · If we&apos;re not a fit, we&apos;ll tell you on the call
      </p>
    </div>
  </div>
);

const faqs = [
  {
    q: "What exactly counts as a \"qualified lead\" for the 60-day guarantee?",
    a: "A qualified lead is a real, non-duplicate person who submitted their info through one of our campaigns and provided a verified working phone number. Bots, fake numbers, and duplicates don't count. Every lead we count toward the guarantee has been phone-verified before it lands in your CRM.",
  },
  {
    q: "What happens if you don't hit 30 qualified leads in 60 days?",
    a: "If we don't deliver at least 30 qualified leads inside the first 60 days of your ads going live, we keep running your entire system at no additional management fee until we do. You keep paying ad spend directly to Facebook. We keep working — for free — until we hit the number.",
  },
  {
    q: "Do I have to leave my brokerage or team to do this?",
    a: "No. This runs completely in parallel with your current setup. You don't hang your license anywhere new. You don't give up your split. Most of our clients keep everything they have and use this to build their own book of business on the side — under their own name.",
  },
  {
    q: "How is this different from RealGeeks or Follow Up Boss?",
    a: "RealGeeks and Follow Up Boss are software. You still have to build the campaigns, write the follow-up sequences, set up the automations, run the ads, and troubleshoot when things break. We do all of that for you and manage it every month. Same category of tools, agency-level service.",
  },
  {
    q: "What's the total monthly cost?",
    a: "Three parts: (1) our $497/month management fee, (2) $500/month minimum ad spend paid directly to Facebook, and (3) $100/month for an IDX Broker Engage plan (the IDX provider that integrates with your system). Total: $1,097/month minimum. Plus a one-time $500 setup fee to build everything.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel anytime after the initial under-10-day build. No long-term contract, no cancellation penalty. If we're not performing, you leave.",
  },
];

export default function AgentsStoryPage() {
  return (
    <SurveyProvider questionSet="real-estate">
      <main className="min-h-screen bg-[#F7F1E1] text-[#111827] font-sans">
        {/* Minimal top bar */}
        <div className="w-full bg-[#F7F1E1] border-b border-[#E5DBC5]">
          <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="Capital Growth Club"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <SurveyButton
              location="nav"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0B1220] text-white font-bold text-sm py-2.5 px-4 rounded-lg hover:bg-[#1a2337] transition-colors"
            >
              Book Discovery Call
            </SurveyButton>
          </div>
        </div>

        {/* ═════════════ HERO ═════════════ */}
        <section className="pt-14 md:pt-20 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[13px] md:text-[14px] font-bold tracking-[0.28em] uppercase text-brand-gold mb-6 text-center">
              For Ambitious Real Estate Agents
            </p>

            <h1 className="text-[36px] md:text-[52px] leading-[1.12] font-black tracking-tight text-[#0B1220] mb-6 text-center">
              How solo agents are quietly tripling their business in 12 months —{" "}
              <span className="text-brand-gold">
                without a big brand, without a huge ad budget, and without leaving their brokerage.
              </span>
            </h1>

            <p className="text-[19px] md:text-[22px] leading-[1.55] text-[#374151] italic text-center max-w-2xl mx-auto mb-10">
              The exact system billion-dollar teams use — installed for you, run for you, owned by you.
            </p>

            {/* VSL */}
            <div className="w-full max-w-3xl mx-auto mb-8">
              <HeroVideo
                src="https://assets.cdn.filesafe.space/gg2Mgpn5GTYN7nAwd00W/media/6a5bece41a0f048050ae93ec.mp4"
                className="mb-0"
              />
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <span className="cta-wrap">
                <SurveyButton
                  location="hero"
                  className="inline-flex items-center gap-2 bg-[#0B1220] text-white font-bold text-[17px] md:text-[19px] py-4 px-8 rounded-xl hover:bg-[#1a2337] transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Book Your Discovery Call
                  <span className="text-brand-gold">→</span>
                </SurveyButton>
              </span>
              <p className="text-[13px] text-[#6b6555]">
                9 years in real estate · $28M+ in managed ad spend · 454+ sales attributed
              </p>
            </div>
          </div>
        </section>

        {/* Divider bar between hero and letter */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-[#E5DBC5]" />
        </div>

        {/* ═════════════ THE LETTER ═════════════ */}
        <article className="pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-7 md:space-y-8">
              <p className="text-[22px] md:text-[24px] font-bold text-[#0B1220] mt-6">
                Dear Ambitious Real Estate Agent,
              </p>

              <P>
                If you want to finally build your <em>own</em> real estate business — one that generates
                its own leads while you sleep…
              </P>

              <P>
                One that puts fresh buyers and sellers in <em>your</em> CRM every morning, under{" "}
                <em>your</em> name, on <em>your</em> domain…
              </P>

              <P>
                One that runs whether you&apos;re at a listing appointment, on a family trip, or picking
                the kids up from school…
              </P>

              <P>
                And one where you keep 100% of every commission — because the brand on the sign is
                finally <em>yours</em>…
              </P>

              <p className="text-[22px] md:text-[24px] font-black text-[#0B1220]">
                Then this is the most important letter you&apos;ll read all year.
              </p>

              <P>Here&apos;s why:</P>

              {/* ── Who I am ── */}
              <P>My name is Cade Ford.</P>

              <P>
                Nine years ago I picked up a camera and started shooting real estate — photos, video,
                drone footage. Solo agents. Small teams. Local brokerages. Whoever needed the footage.
              </P>

              <P>
                Somewhere along the way I took a day job at a digital marketing agency running paid ads
                for real estate teams across the country — everything from tiny $10-a-day budgets to
                seven-figure-a-month accounts.
              </P>

              <P>Two industries. Same industry, really. Just from two sides of the camera.</P>

              <P>And that&apos;s where I first saw the pattern.</P>

              <H>Some agents turned every lead into gold. The next agent, on the same ads, closed zero.</H>

              <P>
                Same market. Same campaigns. Same lead source. Same phone numbers coming through.
                Wildly different outcomes.
              </P>

              <P>
                At first I thought it was talent. Some agents were just better on the phone. Better
                closers. Better with clients.
              </P>

              <P>I was wrong.</P>

              <H>The winners had one thing in common.</H>

              <P>
                They didn&apos;t just have <em>ads</em>. They had a <strong>machine.</strong>
              </P>

              <P>
                A branded website that captured every visitor and tagged them by what they clicked.
              </P>

              <P>
                A CRM that automatically nurtured every lead — for years if it had to — until they
                were ready to buy or sell.
              </P>

              <P>
                Instant alerts that had them on the phone with a fresh lead in under 60 seconds.
              </P>

              <P>
                Behavior tracking that told them exactly which lead was heating up and which one to
                call next.
              </P>

              <P>
                The losers had… a Facebook ad. A Gmail inbox. And a hope they&apos;d remember to
                follow up.
              </P>

              <P>That&apos;s when it clicked.</P>

              <p className="text-[24px] md:text-[28px] font-black leading-[1.3] text-[#0B1220] my-6">
                <HL>Capturing leads was only half the problem.</HL>{" "}
                <HL>Converting them was the real problem.</HL>
              </p>

              <P>
                Anyone can generate leads. You can YouTube it. You can hire a $500 freelancer on
                Upwork. The internet is drowning in real estate lead-gen courses.
              </P>

              <P>
                But <strong>the entire back half</strong> — the CRM, the automations, the IDX
                integrations, the speed-to-lead alerts, the behavior scoring, the year-long nurture —
                that&apos;s where 90% of agents fall apart.
              </P>

              <P>
                Because real estate is a long-term play. If you&apos;re expecting to get a lead today
                and close it tomorrow, you&apos;re in the wrong business.
              </P>

              <P>
                The agents winning today aren&apos;t doing it because they&apos;re better closers.
                They&apos;re winning because their machine keeps working the 364 days a year they{" "}
                <em>aren&apos;t</em> closing.
              </P>

              <H>So I asked a simple question: who actually <em>has</em> that machine?</H>

              <P>Answer: the billion-dollar brokerages. Mega teams. eXp&apos;s top producers. The name-brand names.</P>

              <P>
                They&apos;ve got the ads, the site, the CRM, the follow-up, the whole stack — and they
                dangle it in front of solo agents as bait: <em>&ldquo;come hang your license with us and
                we&apos;ll hand you leads.&rdquo;</em>
              </P>

              <P>You know how that story ends.</P>

              <P>You close the deal. They take 30–50% of the check.</P>

              <P>
                And the leads they hand you were never really yours. The brand on the sign was never
                really yours. The whole book of business you&apos;re building?{" "}
                <em>Never really yours.</em>
              </P>

              <p className="text-[24px] md:text-[28px] font-black leading-[1.3] text-[#0B1220] my-6">
                <HL>You&apos;re building someone else&apos;s business. And giving them half the check for the privilege.</HL>
              </p>

              <InlineCTA location="inline-1" />

              {/* ── The false way out ── */}
              <H>&ldquo;So I&apos;ll just switch to a different team.&rdquo;</H>

              <P>Yeah, we hear that a lot.</P>

              <P>
                Some teams and brokerages have genuinely good systems. Some of those systems are
                actually ours — we install this stuff at the brokerage level too.
              </P>

              <P>
                But 99% of the time, the agents who go the &ldquo;switch route&rdquo; end up back at my
                door within 12 months. Same speech every time:
              </P>

              <p className="text-[22px] md:text-[24px] font-serif italic leading-[1.5] text-[#0B1220] border-l-4 border-brand-gold pl-6 my-10">
                &ldquo;They told me they were going to do everything you said you&apos;d do. Except
                I&apos;m the one managing it. I&apos;m the one building it. I&apos;m the one figuring
                out how to make it work. I just want to be a real estate agent.&rdquo;
              </p>

              <P>Sound familiar?</P>

              <H>Here&apos;s what most agents get wrong about doing it themselves.</H>

              <P>
                They think it takes multiple five or six figures a month in marketing spend to run
                what the big teams run.
              </P>

              <P>
                If you&apos;re a mega team feeding 40+ agents, sure. You need volume. You need a war
                chest. You need seven full-time marketing hires.
              </P>

              <P>
                But if you&apos;re a solo agent who just wants an extra 2, 3, 4 deals a quarter?{" "}
                <strong>$10–30 a day in ad spend is plenty.</strong>
              </P>

              <P>
                Most of our clients are running $500–$700/month on paid ads and it changes their
                whole business. That&apos;s a coffee habit&apos;s worth of spend, running the same
                stack the big brokerages spend seven figures on.
              </P>

              <p className="text-[24px] md:text-[28px] font-black leading-[1.3] text-[#0B1220] my-6">
                <HL>You don&apos;t need their budget. You need their machine.</HL>
              </p>

              {/* ── So I built it ── */}
              <H>So I built it. And I built it for you.</H>

              <P>
                Not another course. Not another CRM subscription. Not another &ldquo;coach&rdquo;
                telling you to post more Reels and hustle harder.
              </P>

              <P>
                A full-service marketing agency for solo agents and micro-teams — priced like the
                software subscription you were already going to pay for.
              </P>

              <P>Built one system at a time. Each one plugged into the next. All of them run for you.</P>

              <P>Let me walk you through them.</P>

              {/* ── System 1: Brand ── */}
              <H>01. The Brand Playbook.</H>

              <P>Most agents think they need a huge personal brand to compete.</P>

              <P>Millions of followers. Highly-edited million-dollar listing reels. Daily content grind.</P>

              <P>They don&apos;t.</P>

              <P>
                What you actually need is 10–20 curated posts and a page that makes a stranger land
                on it and go: <em>&ldquo;okay, this person is legit, they know my market, they know
                what they&apos;re doing.&rdquo;</em>
              </P>

              <P>That&apos;s the whole brand image. We help you build it — or if you want, we build it for you.</P>

              {/* ── System 2: Lead Gen ── */}
              <H>02. The Lead-Gen Playbook.</H>

              <P>
                Then we install the same proven Meta and Google ad campaigns the top teams in the
                country are running right now.
              </P>

              <P>
                We&apos;ve run almost every type of real estate ad in existence — every hook, every
                offer, every creative angle. We know which ones convert in your market before we
                launch.
              </P>

              <P>
                Every lead comes with a verified phone number attached. Real person. Not a bot. Not a
                landline. Not a duplicate.{" "}
                <strong>That&apos;s our Verified Lead Guarantee.</strong>
              </P>

              {/* ── System 3: Site + CRM ── */}
              <H>03. The Site + CRM Playbook.</H>

              <P>
                A custom-branded IDX website with live MLS listings — not a static landing page —
                connected directly to a CRM built around <em>your</em> pipeline.
              </P>

              <P>
                Every property view, every saved search, every return visit is tracked in the
                background. So when you finally call the lead, you already know exactly what
                they&apos;re looking at.
              </P>

              {/* ── System 4: Nurture ── */}
              <H>04. The Nurture Playbook.</H>

              <P>
                The second a lead opts in, they get an automated text and email in your name. Not
                24 hours later. Not tomorrow. The <em>second</em>.
              </P>

              <P>
                From there, we enroll them in a long-term nurture sequence — automated emails,
                property alerts, seasonal check-ins — that keeps them warm for years until they
                either buy from you or opt out.
              </P>

              <P>You&apos;re not losing leads to slow follow-up ever again.</P>

              {/* ── System 5: Speed-to-Lead ── */}
              <H>05. The Speed-to-Lead Playbook.</H>

              <P>
                This is the one that decides whether you actually convert or not. It&apos;s backed by
                the MIT Lead Response Management Study. Look it up.
              </P>

              <div className="my-8 space-y-4">
                <p className="text-[19px] md:text-[21px] leading-[1.5] text-[#111827] border-l-4 border-brand-gold pl-5">
                  <span className="font-black text-brand-gold text-[24px] md:text-[26px]">100×</span>{" "}
                  more likely to connect with a lead if you respond within{" "}
                  <strong>5 minutes</strong> instead of 30.
                </p>
                <p className="text-[19px] md:text-[21px] leading-[1.5] text-[#111827] border-l-4 border-brand-gold pl-5">
                  <span className="font-black text-brand-gold text-[24px] md:text-[26px]">391%</span>{" "}
                  higher conversion rate if you call within <strong>60 seconds</strong> of the form
                  submission.
                </p>
                <p className="text-[19px] md:text-[21px] leading-[1.5] text-[#111827] border-l-4 border-brand-gold pl-5">
                  <span className="font-black text-brand-gold text-[24px] md:text-[26px]">81%</span>{" "}
                  of sales reps give up after <strong>5 or fewer</strong> follow-up attempts. (Guess
                  which side of that line you want to be on.)
                </p>
              </div>

              <P>
                We give you instant text, email, and app alerts the second a lead hits your CRM —
                with all their info and notes attached — so you can call in under 30 seconds.
              </P>

              <p className="text-[24px] md:text-[28px] font-black leading-[1.3] text-[#0B1220] my-6">
                <HL>Your only job is to pick up the phone.</HL> Everything else is on us.
              </p>

              <InlineCTA location="inline-2" />

              {/* ── System 6: Dashboard ── */}
              <H>06. The Dashboard Playbook.</H>

              <P>
                Every number that matters — pipeline flow, ad performance, ROI, sales, lead quality —
                in one clean view.
              </P>

              <P>
                Your business, transparent to you the way it should have been the whole time.
              </P>

              {/* ── The result ── */}
              <H>Six playbooks. One machine. All of it, run for you.</H>

              <P>
                That&apos;s what took a $10-a-day Facebook ad and turned it into <strong>$1.2M in
                closed volume in 90 days</strong> for one of our clients.
              </P>

              <P>
                What put another client at <strong>five closed transactions in five months on $2,200
                total ad spend.</strong>
              </P>

              <P>
                What let another one text us: <em>&ldquo;I didn&apos;t even realize we only spent $900
                on the investor campaign — we&apos;re at a 10x return.&rdquo;</em>
              </P>

              <P>
                None of them are unicorns. None of them have huge brands. None of them are on the
                cover of Realtor Magazine.
              </P>

              <P>
                They&apos;re just ambitious solo agents running the same machine — quietly, in the
                background, while their team lead wonders how they&apos;re suddenly so busy.
              </P>

              {/* ── The offer ── */}
              <H>Here&apos;s what it costs.</H>

              <div className="my-10 bg-white border border-[#E5DBC5] rounded-2xl p-7 md:p-10 shadow-sm">
                <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-brand-gold mb-3">
                  Real Estate Business In A Box
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[56px] md:text-[64px] font-black text-[#0B1220] leading-none">
                    $497
                  </span>
                  <span className="text-[#6b6555] text-[18px]">/month</span>
                </div>
                <p className="text-[15px] text-[#6b6555] mb-6">
                  Plus a one-time $500 setup fee. Cancel anytime after the initial build.
                </p>
                <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#111827] border-t border-[#E5DBC5] pt-6">
                  <strong className="text-[#0B1220]">You&apos;ll also need:</strong> $500/mo minimum ad
                  spend paid directly to Facebook, and $100/mo for your IDX Broker Engage plan (the
                  provider that powers your live MLS listings).
                </p>
                <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#111827] mt-4">
                  <strong className="text-[#0B1220]">Total minimum monthly investment:</strong>{" "}
                  $1,097/month.
                </p>
                <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#111827] italic mt-4">
                  That&apos;s less than most agents spend on Zillow leads in a single month — for a
                  full agency running your entire client machine.
                </p>
              </div>

              {/* ── Guarantee ── */}
              <H>And here&apos;s the guarantee.</H>

              <P>
                If we don&apos;t deliver at least <strong>30 qualified leads inside the first 60 days
                of your ads going live</strong>, we keep running your entire system at no additional
                management fee.
              </P>

              <P>You keep paying ad spend directly to Facebook. We keep working — for free — until we hit the number.</P>

              <P>
                &ldquo;Qualified&rdquo; means a real, non-duplicate person with a verified phone number
                you can actually call. Not a bot. Not a fake. Not a duplicate.
              </P>

              <p className="text-[24px] md:text-[28px] font-black leading-[1.3] text-[#0B1220] my-6">
                <HL>You either get 30 real, callable leads in 60 days — or we work for free until you do.</HL>
              </p>

              {/* ── Objections ── */}
              <H>&ldquo;But I don&apos;t want to leave my brokerage.&rdquo;</H>

              <P>You don&apos;t have to. This whole thing runs in parallel with your current setup.</P>

              <P>
                Same closings. Same paychecks. Same Monday morning meetings. Nothing on the surface
                changes.
              </P>

              <P>
                In the background, a machine you actually own starts producing. Leads in your CRM. On
                your domain. In your name.
              </P>

              <P>
                Once it&apos;s producing — usually inside 90 days — you&apos;re looking at split math
                with real numbers instead of guesses. Negotiate a better split. Launch your own team.
                Go fully independent. Or pocket the extra commission while you stay put.
              </P>

              <P>The point isn&apos;t to leave. The point is to finally have the option.</P>

              <H>&ldquo;How is this different from RealGeeks or Follow Up Boss?&rdquo;</H>

              <P>
                RealGeeks and Follow Up Boss are <strong>software.</strong> You still have to build
                the ads, write the sequences, wire up the automations, watch the CRM, and troubleshoot
                when it breaks at 11pm on a Sunday.
              </P>

              <P>
                We&apos;re an <strong>agency.</strong> Same category of tools — built for you, run for
                you, tuned to your market every month.
              </P>

              <p className="text-[24px] md:text-[28px] font-black leading-[1.3] text-[#0B1220] my-6">
                <HL>Full agency service. At a software price. Zero DIY.</HL>
              </p>

              <H>&ldquo;Will my team actually let me do this?&rdquo;</H>

              <P>They&apos;ll probably be happy about it.</P>

              <P>
                You&apos;re not stealing their leads. You&apos;re not touching their brand. You&apos;re
                just generating your own business in the background — which means you&apos;re taking
                work off their plate and closing more deals under the roof.
              </P>

              <P>Every broker I know would take that trade.</P>

              {/* ── Sign off ── */}
              <H>Here&apos;s the last thing I&apos;ll say.</H>

              <P>
                You&apos;re at a fork right now. And you know it — you wouldn&apos;t have read this
                far otherwise.
              </P>

              <P>
                One road: stay where you are. Keep splitting checks. Keep waiting for leads to get
                handed down. Keep hoping something changes.
              </P>

              <P>
                Another road: switch brokerages. Chase a bigger split. Six months later, realize
                you&apos;re managing the same broken systems yourself, just with a new logo on your
                signature.
              </P>

              <P>
                Or the third road: <strong>build the machine that runs your own book of
                business — while you keep everything you already have.</strong>
              </P>

              <P>
                That&apos;s the one we built for you. And we&apos;ll build it for you inside 10 days
                once you say go.
              </P>

              <P>Book a discovery call. We&apos;ll walk through your market, your goals, and your current setup — and tell you straight up if this fits.</P>

              <P>If it doesn&apos;t, you&apos;ll walk away with the clearest picture of your business you&apos;ve had all year. Either way you win.</P>

              <div className="mt-10">
                <p className="text-[19px] md:text-[21px] leading-[1.7] text-[#111827]">Talk soon,</p>
                <p className="text-[22px] md:text-[24px] font-black leading-tight text-[#0B1220] mt-2">
                  Cade Ford
                </p>
                <p className="text-[15px] text-[#6b6555] mt-1">
                  Founder, Capital Growth Club
                </p>
              </div>

              <InlineCTA label="Yes — Book My Discovery Call" location="inline-final" />

              {/* ── PS ── */}
              <div className="mt-4 space-y-6">
                <p className="text-[19px] md:text-[21px] leading-[1.7] text-[#111827]">
                  <strong>P.S.</strong> Every day you wait is another day another agent in your
                  market is running this exact machine — quietly building the book of business you
                  could be building. Meta doesn&apos;t care whose ads run. It just serves the ones
                  that are live.
                </p>
                <p className="text-[19px] md:text-[21px] leading-[1.7] text-[#111827]">
                  <strong>P.P.S.</strong> The $497/month price is for the current client cohort.
                  When we hit capacity, it goes up. The clients we onboard now are locked in at this
                  rate for as long as they stay with us.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* ═════════════ FAQ ═════════════ */}
        <section className="pt-4 pb-24 bg-[#F1EAD5] border-t border-[#E5DBC5]">
          <div className="max-w-3xl mx-auto px-6 pt-16">
            <p className="text-[13px] font-bold tracking-[0.28em] uppercase text-brand-gold mb-4">
              FAQ
            </p>
            <h2 className="text-[32px] md:text-[42px] font-black leading-[1.15] text-[#0B1220] mb-10">
              Questions we get every week.
            </h2>

            <div className="divide-y divide-[#D9CFB6] border-y border-[#D9CFB6]">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <p className="text-[17px] md:text-[19px] font-bold text-[#0B1220] leading-snug">
                      {f.q}
                    </p>
                    <span className="shrink-0 mt-1 text-brand-gold text-2xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[17px] md:text-[18px] text-[#374151] leading-[1.7]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-[#F7F1E1] border-t border-[#E5DBC5]">
          <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6b6555] text-sm">
              &copy; 2026 Capital Growth Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-[#6b6555] hover:text-[#0B1220] transition-colors">
                Terms
              </Link>
              <Link href="/agents" className="text-[#6b6555] hover:text-[#0B1220] transition-colors">
                /agents (original)
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </SurveyProvider>
  );
}
