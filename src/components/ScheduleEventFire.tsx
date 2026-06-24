"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Funnel = "service-business" | "agents";

interface Props {
  funnel: Funnel;
}

export default function ScheduleEventFire({ funnel }: Props) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;

    const params = new URLSearchParams(window.location.search);

    const rand =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.floor(Math.random() * 1e9).toString(36)}`;
    const eventId = `schedule_${funnel}_${rand}`;

    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "gclid",
      "fbclid",
    ];
    const utms: Record<string, string> = {};
    utmKeys.forEach((k) => {
      const fromUrl = params.get(k);
      if (fromUrl) {
        utms[k] = fromUrl;
        return;
      }
      try {
        const stored = sessionStorage.getItem(`cgc_${k}`);
        if (stored) utms[k] = stored;
      } catch {}
    });

    const contentCategory = funnel === "agents" ? "Agents" : "Services";
    const contentName =
      funnel === "agents" ? "Agents Strategy Call" : "Services Strategy Call";

    window.fbq(
      "track",
      "Schedule",
      {
        content_name: contentName,
        content_category: contentCategory,
        funnel,
        first_name: params.get("first_name") || "",
        last_name: params.get("last_name") || "",
        email: params.get("email") || "",
        phone: params.get("phone") || "",
        ...utms,
      },
      { eventID: eventId }
    );
  }, [funnel]);

  return null;
}
