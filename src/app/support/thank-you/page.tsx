import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support Call Confirmed",
  description:
    "Your support call with the Capital Growth Club team has been booked. Check your email for the calendar invite and prep instructions.",
  openGraph: {
    title: "Support Call Confirmed | Capital Growth Club",
    description:
      "Your support call has been booked. Check your email for the calendar invite and prep instructions.",
    url: "https://capitalgrowthclub.com/support/thank-you",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Call Confirmed | Capital Growth Club",
    description:
      "Your support call has been booked. Check your email for the calendar invite and prep instructions.",
  },
  robots: { index: false, follow: false },
};

const PREP_ITEMS = [
  {
    title: "Check your email",
    desc: "You'll receive a confirmation email shortly, followed by a Google Calendar invitation. The Google Meet link will be inside that calendar invite.",
  },
  {
    title: "Write down what you want to cover",
    desc: "Whether it's a CRM question, a sales process issue, an ad campaign setup, or something else entirely — having your specific questions or issues written down ahead of time makes the call faster and more useful.",
  },
  {
    title: "Have the relevant accounts pulled up",
    desc: "If your question involves your CRM, ad account, funnel, or anything else we'd need to look at together — have it open and ready to share so we can dig in right away.",
  },
  {
    title: "Join on a desktop if possible",
    desc: "Google Meet works on mobile, but a desktop or laptop makes it easier to share screens and review work together.",
  },
];

export default function SupportThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden flex flex-col">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

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

      <section className="relative flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M11 18l5 5 10-12"
                stroke="#0E0E0E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Call Confirmed
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Thanks for booking your{" "}
            <span className="gradient-text">call with our team.</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            You&apos;ll get a confirmation email shortly, followed by a Google
            Calendar invitation with the Meet link. Here&apos;s how to make the
            most of our time together.
          </p>

          <div className="bg-brand-card border border-white/10 rounded-2xl p-6 md:p-8 mb-10 text-left">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Before the Call
            </p>
            <ul className="space-y-5">
              {PREP_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3.5 7l2.5 2.5L10.5 4"
                        stroke="#0E0E0E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-white/40 text-sm mb-2">
            Need to reschedule? Use the link in your calendar invite.
          </p>
          <Link
            href="/support"
            className="text-brand-gold/70 hover:text-brand-gold transition-colors text-sm"
          >
            ← Back to scheduling
          </Link>
        </div>
      </section>

      <footer className="relative py-8 px-6">
        <p className="text-center text-white/30 text-sm">
          &copy; 2026 Capital Growth Club. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
