import type { Metadata } from "next";
import type { ReactNode } from "react";
import SectionTracker from "@/components/SectionTracker";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import FaqList from "./FaqList";
import LeadForm from "./LeadForm";
import BookCallButton from "./BookCallButton";
import { Accent, GuaranteeStrip, SiteFooter, poppins } from "./ui";

/**
 * /dscr-lenders — in-house rebuild of the GHL page at
 * optin.capitalgrowthclub.com/home-600484 ("Claim Your Offer").
 * Copy is carried over as-is; the form posts to the lenders GHL webhook
 * (funnel: "dscr-lenders") and books on /dscr-lenders/book.
 */

const TITLE = "Fill Your LOs' Calendars With Fundable DSCR Investors";
const DESCRIPTION =
  "Ads built for DSCR investors with a real deal and the cash to close. 54 qualified DSCR deals in your first 90 days, or you don't pay.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Capital Growth Club`,
    description: DESCRIPTION,
    url: "https://capitalgrowthclub.com/dscr-lenders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Capital Growth Club`,
    description: DESCRIPTION,
  },
  alternates: { canonical: "https://capitalgrowthclub.com/dscr-lenders" },
};

/* ── small building blocks ─────────────────────────────────────────── */

/** Bold phrase on a soft gold underline highlight, as on the original. */
function Hl({ children }: { children: ReactNode }) {
  return (
    <strong className="font-bold text-[#0E0E0E] [background:linear-gradient(transparent_58%,#EBDFB5_58%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
      {children}
    </strong>
  );
}

function SectionHead({
  number,
  eyebrow,
  title,
  intro,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
      <div className="mb-5 inline-flex items-center gap-3">
        <span className="text-lg font-extrabold text-[#8C6B2E]">{number}</span>
        <span className="h-5 w-px bg-[#BB9A65]/60" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E0E0E]/80">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0E0E0E] md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[#5F594B] md:text-xl">
          {intro}
        </p>
      )}
    </div>
  );
}

const ICONS: Record<string, ReactNode> = {
  handshake: <path d="M8 12.5 11 15.5a1.5 1.5 0 0 0 2.1 0l4.4-4.4M3 9l4-4 5 3 5-3 4 4-9 9-9-9Z" />,
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2" /></>,
  map: <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.3" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  userPlus: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6" /></>,
  list: <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />,
  tag: <><path d="M3 12V4h8l10 10-8 8L3 12Z" /><circle cx="7.5" cy="8.5" r="1.3" /></>,
  broadcast: <path d="M4 10v4h3l6 4V6L7 10H4ZM17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11" />,
};

function Card({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-[20px] border border-[#BB9A65]/40 bg-white p-7 shadow-[0_22px_54px_rgba(14,14,14,0.07)] md:p-8">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#BB9A65]/20 text-[#8C6B2E]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {ICONS[icon]}
        </svg>
      </div>
      <h3 className="text-balance text-xl font-extrabold leading-tight tracking-[-0.025em] text-[#0E0E0E]">
        {title}
      </h3>
      <div className="my-4 h-[3px] w-9 rounded-full bg-[#BB9A65]" />
      <p className="leading-relaxed text-[#5F594B]">{children}</p>
    </div>
  );
}

function Closer({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-lg font-semibold italic leading-relaxed text-[#0E0E0E] md:text-xl">
      {children}
    </p>
  );
}

function GoldItalic({ children }: { children: ReactNode }) {
  return <span className="font-bold text-[#8C6B2E]">{children}</span>;
}

/* ── content ───────────────────────────────────────────────────────── */

const STEPS = [
  {
    kicker: "Find the demand",
    title: "Find where investors are actively buying",
    body: <>First, we figure out where the demand is in the states you&apos;re licensed in, and <Hl>where you can stand out</Hl> from every other lender.</>,
  },
  {
    kicker: "Build the ads",
    title: "Ads built for the investors you'd actually want",
    body: <>Then we build ads for the investors you&apos;d actually want. <Hl>The right property, the cash to close, and realistic expectations</Hl>.</>,
  },
  {
    kicker: "Follow up right away",
    title: "Reach out the moment they raise their hand",
    body: <>When one of them raises their hand, we reach out right away and <Hl>keep them moving until they&apos;re talking to your team</Hl>.</>,
  },
  {
    kicker: "Feed every deal back",
    title: "Every deal makes the next ads better",
    body: <>And when an investor turns into a deal, we use <Hl>exactly what they said on that call</Hl> to create more winning ads and attract more investors just like them.</>,
  },
];

const FAQS = [
  { q: "What happens on the call?", a: "We'll look at three things: where your deals come from today, which of the states you're licensed in are barely sending you business, and what your LOs can actually fund. Then, if it makes sense, we'll show you how we'd bring investors straight to you in your markets." },
  { q: "What will I leave the call with?", a: "You'll walk away with a plan for where your next 60 days of deals come from, whether you work with us or not." },
  { q: "What should I bring to the call?", a: "Pull together two things if you have them: how many deals you funded last month and where they came from, and the list of states you're licensed in. That lets us build the plan around your real numbers instead of a guess." },
  { q: "What's the guarantee?", a: "54 qualified DSCR deals in your first 90 days, or you don't pay. Real investors, with a property that needs funding, inside your markets and your criteria." },
  { q: "How do you judge whether the ads are working?", a: "We judge ads by what your team can actually fund, not by what a lead costs. Most agencies judge ads by what a lead costs, so you end up with a pile of cheap leads your LOs can't fund." },
  { q: "What kind of investors will the ads bring in?", a: "We build ads for the investors you'd actually want. The right property, the cash to close, and realistic expectations." },
  { q: "What happens when an investor raises their hand?", a: "When one of them raises their hand, we reach out right away and keep them moving until the application's done and they're talking to your team." },
  { q: "Which states will you focus on?", a: "Before we spend anything on ads, we look at every state you're licensed in. Where investors are actively buying, and where you can stand out." },
  { q: "How do the ads get better over time?", a: "We listen to what happens on your calls. When an investor turns into a deal, we use exactly what they said to create more winning ads, so every round brings in more investors just like them." },
  { q: "Have you done this for another lender?", a: "We did this for one of our private DSCR and hard money lenders in San Diego. They turned 8K in ad spend into 80K in returns. That's a 10 to 1 ROI." },
];

/* ── page ──────────────────────────────────────────────────────────── */

export default function DscrLendersPage() {
  return (
    <main className={`${poppins.className} min-h-screen overflow-x-clip bg-white text-[#0E0E0E]`}>
      <SectionTracker />
      <ScrollDepthTracker />

      {/* ═════════ HERO + FORM ═════════ */}
      <section data-section-name="hero" className="relative px-4 pb-6 pt-8 sm:px-6 md:pb-8 md:pt-12">
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="gold-pulse-ring mb-9 inline-flex rounded-full p-[2.5px] md:mb-10">
            <div className="rounded-full bg-[#0E0E0E] px-4 py-2.5 sm:px-8 sm:py-2.5 md:px-10 md:py-3 lg:px-14 lg:py-3.5">
              <span className="whitespace-nowrap text-[clamp(11px,3.35vw,13px)] font-bold uppercase tracking-[0.02em] text-[#BB9A65] sm:text-lg sm:tracking-[0.1em] md:text-xl lg:text-[26px] xl:text-[28px]">
                For private DSCR and hard money lenders
              </span>
            </div>
          </div>

          <h1 className="mx-auto max-w-5xl text-balance text-[2.1rem] font-extrabold leading-[1.07] tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]">
            Fill your LOs&apos; calendars with DSCR investors who have{" "}
            <Accent>a real deal and the cash to close them</Accent>.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-[#5F594B] md:text-xl">
            Every deal you fund feeds our marketing intelligence, so we find{" "}
            <strong className="font-bold text-[#0E0E0E]">more investors just like the ones who close</strong>. One of our San Diego lenders{" "}
            <strong className="font-bold text-[#0E0E0E]">turned 8K in ad spend into 80K in returns</strong>.
          </p>

          <div className="mt-8">
            <GuaranteeStrip />
          </div>

          <div id="apply" className="mx-auto mt-10 max-w-xl scroll-mt-8">
            <LeadForm />
            <p className="mt-4 text-xs text-[#5F594B]">
              Takes under a minute. You&apos;ll pick a call time on the next page.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════ 01 THE PROBLEM ═════════ */}
      <section data-section-name="problem" className="px-4 pb-20 pt-10 sm:px-6 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            number="01"
            eyebrow="The problem"
            title="Almost every deal you fund still depends on someone else sending it your way."
            intro="Your DSCR lending company probably has deals closing this month. But look 60 days out, and it gets thin."
          />
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <Card icon="handshake" title="Referrals decide your pipeline">
              A few brokers and agents used to keep your LOs busy. But <Hl>those referrals have slowed down</Hl>.
            </Card>
            <Card icon="search" title="Your LOs hunt instead of close">
              You&apos;ve got good LOs who can close. But now they spend <Hl>half their day looking for the next deal</Hl> instead of closing one.
            </Card>
            <Card icon="map" title="Licensed everywhere, closing in a few states">
              You&apos;re licensed in all these states, but <Hl>barely doing business in half of them</Hl>. Everywhere else, nobody knows you&apos;re there.
            </Card>
            <Card icon="clock" title="Slow weeks still cost you">
              Every slow week, you&apos;re <Hl>paying for capacity nobody&apos;s using</Hl>.
            </Card>
          </div>
          <Closer>
            You don&apos;t need more referral partners. You need <GoldItalic>investors coming straight to you</GoldItalic>. Every single week.
          </Closer>
        </div>
      </section>

      {/* ═════════ BRIDGE ═════════ */}
      <section data-section-name="bridge" className="bg-[#0E0E0E] px-4 py-24 text-center sm:px-6 md:py-28">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#BB9A65]">
          Why the usual fixes fall short
        </p>
        <h2 className="mx-auto max-w-4xl text-balance text-[2rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-white md:text-5xl">
          The problem was never paid leads.
          <br />
          <Accent light>It&apos;s who the ads were built to bring in.</Accent>
        </h2>
      </section>

      {/* ═════════ 02 WHAT YOU'VE TRIED ═════════ */}
      <section data-section-name="tried" className="bg-[#FFFCD8] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            number="02"
            eyebrow="What you've tried"
            title="Why the usual fixes never fill your LOs' calendars."
            intro="If your DSCR lending company has ever bought mortgage leads, you know how it goes."
          />
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <Card icon="userPlus" title="More referral partners">
              You don&apos;t need more referral partners. You need <Hl>investors coming straight to you</Hl>.
            </Card>
            <Card icon="list" title="Buying mortgage leads">
              Your LOs work the list, and most of those people can&apos;t qualify, never asked to hear from you, or <Hl>already got called by five other lenders</Hl>. So your team stops calling.
            </Card>
            <Card icon="tag" title="Agencies that judge ads by lead cost">
              Most agencies judge ads by what a lead costs. So you end up with <Hl>a pile of cheap leads your LOs can&apos;t fund</Hl>.
            </Card>
            <Card icon="broadcast" title="Ads built to reach everyone">
              The ad decides who raises their hand. Build it to get as many people as possible, and you get <Hl>anyone who&apos;ll fill out a form</Hl>.
            </Card>
          </div>
          <Closer>
            And the way you get those investors is with <GoldItalic>ads built for them</GoldItalic>. Your own ads, so nobody else is calling the same person.
          </Closer>
        </div>
      </section>

      {/* ═════════ 03 THE SOLUTION ═════════ */}
      <section data-section-name="solution" className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            number="03"
            eyebrow="The solution"
            title="How we keep bringing you more fundable deals every month."
            intro="Run ads that bring investors to you directly. No middleman."
          />
          <ol className="space-y-5">
            {STEPS.map((s, i) => (
              <li
                key={s.kicker}
                className="flex flex-col gap-5 rounded-[20px] border border-[#BB9A65]/40 bg-white p-7 shadow-[0_22px_54px_rgba(14,14,14,0.06)] sm:flex-row sm:gap-8 md:p-10"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#BB9A65] to-[#DECBA0] text-xl font-extrabold text-[#0E0E0E] shadow-[0_12px_24px_rgba(187,154,101,0.3)] md:h-16 md:w-16">
                  {i + 1}
                </span>
                <div>
                  <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#8C6B2E]">{s.kicker}</p>
                  <h3 className="text-balance text-xl font-extrabold leading-tight tracking-[-0.025em] md:text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#5F594B]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-col items-start gap-3 rounded-[18px] border border-[#BB9A65]/40 bg-[#F6F1E8] px-6 py-5 sm:flex-row sm:items-center sm:gap-5">
            <span className="shrink-0 rounded-full bg-gradient-to-r from-[#BB9A65] to-[#DECBA0] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em]">
              Our standard
            </span>
            <p className="font-medium">We judge ads by what your team can actually fund, not by what a lead costs.</p>
          </div>

          <Closer>
            That&apos;s how we keep bringing you more fundable deals every month. So you <GoldItalic>control your pipeline</GoldItalic>, instead of waiting on referrals.
          </Closer>
          <BookCallButton location="solution" />
        </div>
      </section>

      {/* ═════════ 04 QUESTIONS ═════════ */}
      <section data-section-name="faq" className="px-4 pb-24 pt-8 sm:px-6 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <SectionHead number="04" eyebrow="Questions" title="Everything to know before you book your call." />
          <FaqList faqs={FAQS} />
          <BookCallButton location="faq" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
