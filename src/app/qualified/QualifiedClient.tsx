"use client";

import { useEffect, useMemo } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const confettiColors = ["#BB9A65", "#FFFCD8", "#C9AE84", "#D4B87A", "#CEAE78"];
const GHL_BASE_URL =
  "https://api.leadconnectorhq.com/widget/booking/smS8o14HpHl3OfWubAt7";

export default function QualifiedClient() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("first_name") || "";
  const lastName = searchParams.get("last_name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const calendarUrl = useMemo(() => {
    const url = new URL(GHL_BASE_URL);
    if (firstName) url.searchParams.set("first_name", firstName);
    if (lastName) url.searchParams.set("last_name", lastName);
    if (email) url.searchParams.set("email", email);
    if (phone) url.searchParams.set("phone", phone);
    return url.toString();
  }, [firstName, lastName, email, phone]);

  const burstLeft = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        left: `${40 + Math.random() * 20}%`,
        width: `${5 + Math.random() * 8}px`,
        height: `${5 + Math.random() * 8}px`,
        backgroundColor: confettiColors[i % confettiColors.length],
        animationDuration: `${1.2 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 0.3}s`,
        burstX: `${20 + Math.random() * 200}px`,
        burstY: `${-200 - Math.random() * 350}px`,
        rotation: `${360 + Math.random() * 720}deg`,
      })),
    []
  );

  const burstRight = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        left: `${40 + Math.random() * 20}%`,
        width: `${5 + Math.random() * 8}px`,
        height: `${5 + Math.random() * 8}px`,
        backgroundColor: confettiColors[i % confettiColors.length],
        animationDuration: `${1.2 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 0.3}s`,
        burstX: `${-20 - Math.random() * 200}px`,
        burstY: `${-200 - Math.random() * 350}px`,
        rotation: `${-360 - Math.random() * 720}deg`,
      })),
    []
  );

  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <Script
        src="https://api.leadconnectorhq.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-brand-black relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

        {/* Confetti burst from bottom */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {burstLeft.map((p, i) => (
            <div
              key={`bl-${i}`}
              className="confetti-burst-left"
              style={
                {
                  left: p.left,
                  bottom: "0%",
                  width: p.width,
                  height: p.height,
                  backgroundColor: p.backgroundColor,
                  animationDuration: p.animationDuration,
                  animationDelay: p.animationDelay,
                  "--burst-x": p.burstX,
                  "--burst-y": p.burstY,
                  "--rotation": p.rotation,
                } as React.CSSProperties
              }
            />
          ))}
          {burstRight.map((p, i) => (
            <div
              key={`br-${i}`}
              className="confetti-burst-right"
              style={
                {
                  left: p.left,
                  bottom: "0%",
                  width: p.width,
                  height: p.height,
                  backgroundColor: p.backgroundColor,
                  animationDuration: p.animationDuration,
                  animationDelay: p.animationDelay,
                  "--burst-x": p.burstX,
                  "--burst-y": p.burstY,
                  "--rotation": p.rotation,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-24">
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
              Application Approved
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Congrats — you qualify, and{" "}
              <span className="gradient-text">applications are currently open.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Please book your call with one of our client acquisition leads
              below. We&apos;ll review your application before the call so we can
              cover the right ground when we connect.
            </p>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl overflow-hidden">
            <iframe
              src={calendarUrl}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="ghl-booking"
              className="min-h-[800px]"
            />
          </div>

          <p className="text-center text-white/30 text-sm mt-8">
            Spots are limited. Booking takes less than 60 seconds.
          </p>
        </div>
      </main>
    </>
  );
}
