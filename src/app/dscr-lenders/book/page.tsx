import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import BookingCalendar from "./BookingCalendar";
import { Accent, SiteFooter, poppins } from "../ui";

/** Rebuild of optin.capitalgrowthclub.com/booking-4572. */

export const metadata: Metadata = {
  title: "Book Your Call",
  description:
    "Pick a time to see how we'd bring DSCR investors straight to your team, without waiting on referrals.",
  robots: { index: false, follow: false },
};

export default function DscrLendersBookPage() {
  return (
    <main className={`${poppins.className} min-h-screen overflow-x-clip bg-white text-[#0E0E0E]`}>
      <section className="relative px-4 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] max-w-full -translate-x-1/2 rounded-full bg-[#FFFCD8] opacity-70 blur-[110px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Image src="/logo.png" alt="Capital Growth Club" width={480} height={141} priority className="mx-auto mb-8 h-9 w-auto md:mb-10" />

          <h1 className="mx-auto max-w-4xl text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.2rem]">
            On this call, we&apos;ll show you how to bring DSCR investors{" "}
            <Accent>straight to your team</Accent>, without waiting on referrals.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed md:text-lg">
            <strong className="font-bold">Pick a time below</strong>, and we&apos;ll show you{" "}
            <strong className="font-bold">which of your states has the most deals waiting</strong>, and how you&apos;d start getting them.
          </p>
        </div>

        <div
          id="calendar"
          className="relative mx-auto mt-8 max-w-5xl scroll-mt-6 overflow-hidden rounded-[22px] border border-[#0E0E0E]/80 bg-white shadow-[0_30px_70px_-20px_rgba(14,14,14,0.35)]"
        >
          <div className="bg-[#0E0E0E] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#BB9A65] sm:px-8">
            Choose your time
          </div>
          <Suspense fallback={<div className="min-h-[800px]" />}>
            <BookingCalendar />
          </Suspense>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
