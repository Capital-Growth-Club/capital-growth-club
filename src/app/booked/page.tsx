import type { Metadata } from "next";
import Image from "next/image";
import TestimonialScroll from "@/components/TestimonialScroll";
import BookedThankYouVideo from "@/components/BookedThankYouVideo";
import FaqVideoGrid from "@/components/FaqVideoGrid";

export const metadata: Metadata = {
  title: "You're Booked",
  description:
    "Your strategy call is locked in. Watch the videos below to get the most out of our conversation.",
  robots: { index: false, follow: false },
};

export default function BookedPage() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* HERO */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6">
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

          <div className="text-center mb-10">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Call Confirmed
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Thanks for booking your call —{" "}
              <span className="gradient-text">watch this before we talk.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              You'll get a calendar invite and a confirmation text shortly.
              In the meantime, this short video walks you through exactly what
              to expect on the call so we can make the most of our time
              together.
            </p>
          </div>

          <BookedThankYouVideo />
        </div>
      </section>

      {/* SOCIAL PROOF STATS */}
      <section className="py-14 border-y border-white/5 bg-brand-dark/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                306+
              </p>
              <p className="text-white/40 text-xs md:text-sm mt-2">
                Service Businesses Served
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                $8.4B+
              </p>
              <p className="text-white/40 text-xs md:text-sm mt-2">
                Sales Volume Generated
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">
                52,984+
              </p>
              <p className="text-white/40 text-xs md:text-sm mt-2">
                Real Estate Leads Captured
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              From Other Service Businesses
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Service Business Owners{" "}
              <span className="gradient-text">Are Saying</span>
            </h2>
          </div>
        </div>

        <TestimonialScroll />
      </section>

      {/* FAQ EXPLAINER VIDEOS */}
      <section className="py-16 md:py-24 bg-brand-dark/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              Watch Before The Call
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions —{" "}
              <span className="gradient-text">Answered Before You Ask</span>
            </h2>
            <p className="text-white/50 text-lg">
              The most common questions service business owners have before
              working with us. Watch the ones that apply to you so we can spend
              the call on what matters most.
            </p>
          </div>

          <FaqVideoGrid />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/30 text-sm">
            &copy; 2026 Capital Growth Club. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
