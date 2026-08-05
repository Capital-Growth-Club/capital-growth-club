"use client";

import { useEffect } from "react";
import { getNonEmptyClickIds } from "@/lib/click-ids";

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
        ...getNonEmptyClickIds(),
      },
      { eventID: eventId }
    );
  }, [funnel]);

  return null;
}
