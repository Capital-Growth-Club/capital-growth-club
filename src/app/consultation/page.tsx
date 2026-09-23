import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book A 1-on-1 Call With Cade Ford",
  description:
    "Schedule a 1-on-1 consultation call with Cade Ford, founder of Capital Growth Club.",
  openGraph: {
    title: "Book A 1-on-1 Call With Cade Ford | Capital Growth Club",
    description:
      "Schedule a 1-on-1 consultation call with Cade Ford, founder of Capital Growth Club.",
    url: "https://capitalgrowthclub.com/consultation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book A 1-on-1 Call With Cade Ford | Capital Growth Club",
    description:
      "Schedule a 1-on-1 consultation call with Cade Ford, founder of Capital Growth Club.",
  },
  robots: { index: false, follow: false },
};

const CALENDAR_URL =
  "https://api.leadconnectorhq.com/widget/booking/DKG5LsepluUHj2ojaozg";

export default function ConsultationBookingPage() {
  return (
    <>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-24">
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.webp"
              alt="Capital Growth Club"
              width={140}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </div>

          <div className="text-center mb-10">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              1-On-1 Consultation
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Book A Call With{" "}
              <span className="gradient-text">Cade Ford.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Pick a time that works for you. We&apos;ll get on a call and talk
              through where you&apos;re at and how we can help.
            </p>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src={CALENDAR_URL}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="consultation-booking"
              className="min-h-[800px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
