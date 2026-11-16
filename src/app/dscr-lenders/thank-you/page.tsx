import type { Metadata } from "next";
import ScheduleEventFire from "@/components/ScheduleEventFire";
import ThankYouVideo from "./ThankYouVideo";
import { Accent, SiteFooter, poppins } from "../ui";

/**
 * Rebuild of optin.capitalgrowthclub.com/thank-you-970331-9024. The GHL
 * calendar (NciqSKRJyQmogfsYQ9Sm) should redirect here after a booking.
 * Fires the Meta `Schedule` conversion once per booking (see ScheduleEventFire).
 */

export const metadata: Metadata = {
  title: "You're Booked",
  description: "Your call is booked. Watch this before your call.",
  robots: { index: false, follow: false },
};

export default function DscrLendersThankYouPage() {
  return (
    <main className={`${poppins.className} min-h-screen overflow-x-clip bg-white text-[#0E0E0E]`}>
      <ScheduleEventFire funnel="lenders" />

      <section className="bg-[#0E0E0E] px-4 pb-32 pt-12 text-center text-white sm:px-6 md:pb-40 md:pt-16">
        <h1 className="text-5xl font-extrabold tracking-[-0.045em] md:text-7xl">You&apos;re booked.</h1>
        <div className="mx-auto my-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-[#8C6B2E] via-[#E9DCB0] to-[#8C6B2E] md:w-56" />
        <p className="text-2xl font-extrabold tracking-[-0.03em] md:text-4xl">
          <Accent light>Watch this</Accent> before your call.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
          A working session on your pipeline. <strong className="font-bold text-white">Leave with a plan</strong> for your next 60 days of deals,{" "}
          <strong className="font-bold text-white">whether you work with us or not</strong>.
        </p>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto -mt-24 max-w-4xl md:-mt-32">
          <ThankYouVideo />

          <div className="relative mt-8 flex items-center gap-4 rounded-2xl border border-[#BB9A65]/50 bg-white px-5 py-5 shadow-[0_18px_40px_-18px_rgba(14,14,14,0.25)] before:absolute before:inset-x-6 before:top-0 before:h-[3px] before:rounded-b-full before:bg-gradient-to-r before:from-[#8C6B2E] before:via-[#E9DCB0] before:to-[#8C6B2E] sm:px-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#BB9A65]/20 text-[#0E0E0E]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
                <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" />
              </svg>
            </span>
            <p className="text-base leading-relaxed md:text-lg">
              Your call time is in your confirmation email. <strong className="font-bold">Add it to your calendar now</strong> so it&apos;s locked in.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
