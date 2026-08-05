"use client";

import { useEffect, useMemo } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const CALENDAR_URL =
  "https://api.leadconnectorhq.com/widget/booking/safoTRE7XxjjvWJ8HIWN";

export default function QualifiedAgentsClient() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("first_name") || "";
  const lastName = searchParams.get("last_name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const calendarUrl = useMemo(() => {
    const url = new URL(CALENDAR_URL);
    if (firstName) url.searchParams.set("first_name", firstName);
    if (lastName) url.searchParams.set("last_name", lastName);
    if (email) url.searchParams.set("email", email);
    if (phone) url.searchParams.set("phone", phone);
    return url.toString();
  }, [firstName, lastName, email, phone]);

  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <Script
        src="https://api.leadconnectorhq.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-white text-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand-gold/[0.10] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[60vh] left-0 w-[700px] h-[700px] bg-brand-gold/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/70">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Capital Growth Club"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
              <span className="hidden sm:inline text-neutral-500 text-sm font-medium border-l border-neutral-200 pl-3">
                Capital Growth Club
              </span>
            </Link>
          </div>
        </nav>

        <section className="relative pt-32 pb-20 md:pt-36 md:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight uppercase text-neutral-900 mb-5 font-[family-name:var(--font-heading)]">
                Pick a time for your{" "}
                <span className="bg-gradient-to-r from-brand-gold via-[#D4B87A] to-brand-gold bg-clip-text text-transparent">
                  strategy call.
                </span>
              </h1>

              <p className="text-neutral-600 text-lg leading-relaxed">
                Choose an open slot below. You&apos;ll get an instant text and email
                confirmation once you&apos;re booked in.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm shadow-neutral-900/5">
              <iframe
                src={calendarUrl}
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                id="ghl-booking"
                className="min-h-[800px]"
              />
            </div>

            <p className="text-center text-neutral-500 text-sm mt-8">
              Spots are limited. Booking takes less than 60 seconds.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
