"use client";

import { useEffect, useMemo, useRef } from "react";
import Script from "next/script";
import { useRouter, useSearchParams } from "next/navigation";
import { track } from "@/lib/analytics";

/** GHL calendar for the /dscr-lenders funnel. */
const CALENDAR_ID = "NciqSKRJyQmogfsYQ9Sm";
const CALENDAR_URL = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;
const THANK_YOU_PATH = "/dscr-lenders/thank-you";

/**
 * Query params the GHL booking form prefills from. Checked against the live
 * form: `full_name` fills "Full Name" (first_name/last_name alone don't),
 * `organization` fills "Organization", `email` and `phone` fill theirs.
 */
const PREFILL_KEYS = ["first_name", "last_name", "email", "phone", "organization"] as const;

/** Carried to the thank-you page so its Schedule event dedupes per person. */
const CARRY_KEYS = ["first_name", "last_name", "email", "phone"] as const;

/**
 * Embeds the booking widget, prefilled with what the lead entered on the form,
 * and sends the lead to the thank-you page once they book.
 *
 * On a successful booking the GHL widget posts
 * `["msgsndr-booking-complete", { fingerprint, calendarId }]` to this page.
 * `redirect=false` on the widget URL stops GHL's own redirect, so this page
 * owns the hand-off no matter what the calendar's redirect setting is.
 */
export default function BookingCalendar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const handledRef = useRef(false);

  const calendarUrl = useMemo(() => {
    const url = new URL(CALENDAR_URL);
    for (const key of PREFILL_KEYS) {
      const value = searchParams.get(key);
      if (value) url.searchParams.set(key, value);
    }
    const fullName = [searchParams.get("first_name"), searchParams.get("last_name")]
      .filter(Boolean)
      .join(" ");
    if (fullName) url.searchParams.set("full_name", fullName);
    url.searchParams.set("redirect", "false");
    return url.toString();
  }, [searchParams]);

  useEffect(() => {
    // Clear any scroll lock left over from the previous page.
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (handledRef.current) return;
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) return;
      const data = event.data;
      if (!Array.isArray(data) || data[0] !== "msgsndr-booking-complete") return;
      const detail = (data[1] ?? {}) as { calendarId?: string };
      if (detail.calendarId && detail.calendarId !== CALENDAR_ID) return;

      handledRef.current = true;
      track("booking_complete", { funnel: "dscr-lenders", calendar_id: CALENDAR_ID });

      const params = new URLSearchParams();
      for (const key of CARRY_KEYS) {
        const value = searchParams.get(key);
        if (value) params.set(key, value);
      }
      const query = params.toString();
      router.push(query ? `${THANK_YOU_PATH}?${query}` : THANK_YOU_PATH);
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router, searchParams]);

  return (
    <>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <iframe
        ref={iframeRef}
        src={calendarUrl}
        allow="payment"
        scrolling="no"
        id={`${CALENDAR_ID}_1794853506081`}
        title="Book your call"
        className="block min-h-[800px] w-full overflow-hidden border-0"
      />
    </>
  );
}
