import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cold Acquisition Mastery — Capital Growth Club",
  description:
    "Learn the cold client acquisition system our team uses for service businesses — same playbook, weekly live calls, $47/month.",
};

const SKOOL_URL = "https://www.skool.com/coldacquisition";

const features = [
  {
    title: "The full Cold Acquisition curriculum",
    desc: "The exact framework, frameworks, and SOPs our internal team uses to build cold client acquisition systems for service businesses paying us five and six figures.",
  },
  {
    title: "Weekly live implementation calls",
    desc: "Hop on with our team every week. Bring your campaigns, your funnels, your CRM, your numbers — we'll review them and tell you exactly what to fix next.",
  },
  {
    title: "Step-by-step builds",
    desc: "ICP research, offer creation, ad creative, funnel architecture, CRM setup, automations, follow-up sequences, tracking — every layer of the system, broken down and walked through.",
  },
  {
    title: "Community of operators",
    desc: "A working group of service business owners building the same system. Share what's working, troubleshoot what isn't, see real campaigns from people in your stage.",
  },
];

export default function SkoolOfferPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-24">
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="Capital Growth Club"
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Not Quite Ready For Done-For-You
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Based on your application, the done-for-you path isn&apos;t the right
            fit{" "}
            <span className="gradient-text">right now.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            But we built something for exactly your stage — the same cold
            acquisition curriculum and live implementation help our internal
            team uses, without the done-for-you price tag.
          </p>
        </div>

        <div className="bg-brand-dark border border-white/10 rounded-2xl p-8 md:p-12 mb-10">
          <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Cold Acquisition Mastery
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            Learn to build the system yourself —{" "}
            <span className="gradient-text">with our team in your corner</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Cold Acquisition Mastery is the curriculum our own team studies
            before they ever build a system for a paying client. You get the
            full playbook, plus weekly live calls where we help you implement
            the same strategies we&apos;d normally do for you.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3.5 7l2.5 2.5L10.5 4"
                        stroke="#0E0E0E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
              <div>
                <p className="text-white/40 text-sm mb-2 uppercase tracking-[0.15em]">
                  Current price
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-bold gradient-text">
                    $47
                  </span>
                  <span className="text-white/50 text-lg">/ month</span>
                </div>
                <p className="text-brand-gold/80 text-sm mt-3 font-medium">
                  ⚠ Price is going up soon — lock in the current rate now
                </p>
              </div>
            </div>

            <Link
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-lg !py-5 w-full text-center block"
            >
              Join Cold Acquisition Mastery
            </Link>

            <p className="text-white/30 text-sm text-center mt-5">
              Cancel anytime. Same curriculum and live support that powers our
              done-for-you engagements.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            ← Return to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
