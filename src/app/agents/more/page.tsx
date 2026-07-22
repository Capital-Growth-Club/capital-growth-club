import type { Metadata } from "next";
import Image from "next/image";
import SurveyProvider from "@/components/SurveyProvider";
import SurveyButton from "@/components/SurveyButton";

export const metadata: Metadata = {
  title: "Real Estate Packages — Starter, Expansion & Market Dominator",
  description:
    "Scale your real estate lead gen by adding more campaigns. Same engine, more reach. Pricing for the Starter, Expansion, and Market Dominator packages.",
  openGraph: {
    title: "Real Estate Packages | Capital Growth Club",
    description:
      "Scale your real estate lead gen by adding more campaigns. Starter, Expansion, and Market Dominator packages.",
    url: "https://capitalgrowthclub.com/agents/more",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Packages | Capital Growth Club",
    description:
      "Starter, Expansion, and Market Dominator packages for real estate teams.",
  },
  robots: { index: false, follow: false },
};

export default function StarterPlusPage() {
  return (
    <SurveyProvider>
      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <header className="relative pt-10 px-6">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Capital Growth Club"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>
        </header>

        {/* Pricing Section */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                Pricing
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Scale by adding{" "}
                <span className="gradient-text">more campaigns.</span>
              </h1>
              <p className="text-white/50 text-lg">
                Same engine, more reach. Each tier unlocks more concurrent ad
                campaigns so you can run multiple offers, target multiple zip
                codes, or expand into new markets. Mix Meta or Google as you
                want.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-5 items-stretch">
              {/* Starter — left on desktop, second on mobile */}
              <div className="card-dark p-8 flex flex-col order-2 md:order-1">
                <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Starter
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">$497</span>
                  <span className="text-white/40 text-sm">/month per campaign</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed mb-5">
                  $1,000 one-time setup fee. Plus $750/month minimum ad
                  spend per campaign.
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Run 1 ad campaign in your market — Meta or Google. The
                  fastest way in.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "1 ad campaign (Meta or Google)",
                    "Custom buyer or seller funnel",
                    "Leads delivered straight to your CRM",
                    "Initial handoff automations",
                    "Conversion tracking & dashboards",
                    "50% off Expansion setup fee if you upgrade within 60 days of launch",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6l2.5 2.5L9.5 3"
                            stroke="#0E0E0E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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

              {/* Expansion — middle, highlighted */}
              <div
                className="card-dark p-8 flex flex-col border-brand-gold/40 relative md:-translate-y-6 order-1 md:order-2"
                style={{ boxShadow: "0 0 60px rgba(187,154,101,0.15)" }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-brand-black px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                  Most Popular
                </div>
                <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Expansion
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold gradient-text">$1,497</span>
                  <span className="text-white/40 text-sm">/month</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed mb-5">
                  $3,000 one-time setup fee. Plus $750/month minimum ad
                  spend per campaign.
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Run 3 ad campaigns. Stack more in your current market,
                  expand into new zip codes, or test new offers.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Everything in Starter, plus:",
                    "3 ad campaigns (Meta and/or Google)",
                    "Multiple campaigns in your market or expand into new ones",
                    "50% off Market Dominator setup fee if you upgrade within 60 days of new campaigns going live",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6l2.5 2.5L9.5 3"
                            stroke="#0E0E0E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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

              {/* Market Dominator — right on desktop, third on mobile */}
              <div className="card-dark p-8 flex flex-col order-3 md:order-3">
                <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Market Dominator
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">$2,497</span>
                  <span className="text-white/40 text-sm">/month</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed mb-5">
                  $5,000 one-time setup fee. Plus $750/month minimum ad
                  spend per campaign.
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Run 5 ad campaigns at once and own the market. Built for
                  agents and teams scaling aggressively.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Everything in Expansion, plus:",
                    "5 ad campaigns live at once",
                    "Quarterly strategy reviews with leadership",
                    "Change markets and campaigns at a reduced setup fee",
                    "Priority support",
                    "Private lead conversion consulting (email, SMS, and cold call SOPs)",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6l2.5 2.5L9.5 3"
                            stroke="#0E0E0E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
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
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24">
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
                      <th className="p-4 md:p-5 text-center text-white font-semibold">
                        Starter
                      </th>
                      <th className="p-4 md:p-5 text-center font-semibold gradient-text relative">
                        Expansion
                        <span className="absolute -top-1 right-1/2 translate-x-[44px] text-[9px] tracking-[0.15em] uppercase text-brand-gold/80 font-bold">
                          Popular
                        </span>
                      </th>
                      <th className="p-4 md:p-5 text-center text-white font-semibold">
                        Market Dominator
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "Concurrent ad campaigns",
                        values: ["1", "3", "5"],
                      },
                      {
                        label: "Monthly retainer",
                        values: ["$497 per campaign", "$1,497/month", "$2,497/month"],
                      },
                      {
                        label: "One-time setup fee",
                        values: ["$1,000", "$3,000", "$5,000"],
                      },
                      {
                        label: "Minimum ad spend per campaign",
                        values: ["$750/mo", "$750/mo", "$750/mo"],
                      },
                      {
                        label: "Meta or Google campaigns",
                        values: [true, true, true],
                      },
                      {
                        label: "Custom buyer/seller funnels",
                        values: [true, true, true],
                      },
                      {
                        label: "Leads delivered to your CRM",
                        values: [true, true, true],
                      },
                      {
                        label: "Initial handoff automations",
                        values: [true, true, true],
                      },
                      {
                        label: "Conversion tracking & dashboards",
                        values: [true, true, true],
                      },
                      {
                        label: "Multiple markets / zip codes",
                        values: [false, true, true],
                      },
                      {
                        label: "Quarterly strategy review with leadership",
                        values: [false, false, true],
                      },
                      {
                        label: "Change markets/campaigns at reduced setup fee",
                        values: [false, false, true],
                      },
                      {
                        label: "Priority support",
                        values: [false, false, true],
                      },
                      {
                        label: "Private lead conversion consulting (email, SMS, cold call SOPs)",
                        values: [false, false, true],
                      },
                      {
                        label: "Upgrade in 60 days — 50% off next setup fee",
                        values: [true, true, false],
                      },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.label}
                        className={
                          i !== arr.length - 1
                            ? "border-b border-white/5"
                            : ""
                        }
                      >
                        <td className="p-4 md:p-5 text-white/70">{row.label}</td>
                        {row.values.map((v, j) => (
                          <td
                            key={j}
                            className={`p-4 md:p-5 text-center ${
                              j === 1 ? "bg-brand-gold/[0.04]" : ""
                            }`}
                          >
                            {typeof v === "boolean" ? (
                              v ? (
                                <svg
                                  className="inline-block"
                                  width="20"
                                  height="20"
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
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-white/30 text-sm">
              &copy; 2026 Capital Growth Club. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </SurveyProvider>
  );
}
