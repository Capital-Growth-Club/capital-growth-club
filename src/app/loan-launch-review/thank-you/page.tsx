import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Loan Launch Review Call Confirmed",
  description:
    "Your Loan Launch Review call with Capital Growth Club has been booked. Check your email for the calendar invite.",
  openGraph: {
    title: "Loan Launch Review Call Confirmed | Capital Growth Club",
    description:
      "Your Loan Launch Review call has been booked. Check your email for the calendar invite.",
    url: "https://capitalgrowthclub.com/loan-launch-review/thank-you",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Launch Review Call Confirmed | Capital Growth Club",
    description:
      "Your Loan Launch Review call has been booked. Check your email for the calendar invite.",
  },
  robots: { index: false, follow: false },
};

export default function LoanLaunchReviewThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden flex flex-col">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <header className="relative pt-10 px-6">
        <div className="flex justify-center">
          <Image
            src="/logo.webp"
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
            <span className="gradient-text">Loan Launch Review call.</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            You&apos;ll get a confirmation email shortly, followed by a
            calendar invitation with the call details. Keep an eye on your
            inbox and text messages so you don&apos;t miss it.
          </p>
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
