"use client";

import { useEffect } from "react";
import { getNonEmptyClickIds } from "@/lib/click-ids";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Funnel = "service-business" | "agents" | "lenders";

interface Props {
  funnel: Funnel;
}

/** Meta `content_category` / `content_name` sent with the Schedule event. */
const FUNNEL_LABELS: Record<Funnel, { category: string; name: string }> = {
  "service-business": { category: "Services", name: "Services Strategy Call" },
  agents: { category: "Agents", name: "Agents Strategy Call" },
  lenders: { category: "Lenders", name: "Lender Strategy Call" },
};

/**
 * Meta dedupes by (event_name, event_id) for 48h — match that window so a
 * refire inside it is either skipped outright or collapsed by Meta.
 */
const DEDUP_WINDOW_MS = 48 * 60 * 60 * 1000;
const STORAGE_PREFIX = "cgc_schedule_fired_";

/** How long to wait for the afterInteractive pixel script to define fbq. */
const FBQ_POLL_MS = 250;
const FBQ_TIMEOUT_MS = 10_000;

/**
 * Survives React re-mounts within a single page life — covers StrictMode's
 * double effect invoke in dev and any remount that localStorage can't see
 * (private browsing, storage blocked).
 */
const firedThisPageLoad = new Set<string>();

/** Stable per-booking key so a refresh / back-nav resolves to the same record. */
function identityKey(params: URLSearchParams, funnel: Funnel): string {
  const identity = (params.get("email") || params.get("phone") || "")
    .trim()
    .toLowerCase();
  return `${funnel}:${identity}`;
}

/** djb2 — only needs to be stable and short, not cryptographic. */
function hash(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

function alreadyFired(storageKey: string): boolean {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return false;
    const ts = Number(raw);
    if (!Number.isFinite(ts)) return false;
    return Date.now() - ts < DEDUP_WINDOW_MS;
  } catch {
    // Storage blocked — the deterministic eventID below is the fallback.
    return false;
  }
}

function markFired(storageKey: string): void {
  try {
    window.localStorage.setItem(storageKey, String(Date.now()));
  } catch {
    // ignore
  }
}

export default function ScheduleEventFire({ funnel }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // The GHL calendar redirect can navigate the embedding iframe to this
    // confirmation page in addition to the top-level window. Only the real
    // top-level landing counts as a booking.
    if (window.top !== window.self) return;

    const params = new URLSearchParams(window.location.search);
    const key = identityKey(params, funnel);

    if (firedThisPageLoad.has(key)) return;

    const storageKey = STORAGE_PREFIX + hash(key);
    if (alreadyFired(storageKey)) return;

    firedThisPageLoad.add(key);

    const identity = key.split(":")[1];
    // Deterministic when we know who booked, so any send that slips past the
    // guards above (blocked storage, second device tab) carries the same
    // eventID and Meta collapses it. Random only when we have no identity.
    const eventId = identity
      ? `schedule_${funnel}_${hash(key)}`
      : `schedule_${funnel}_${
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.floor(Math.random() * 1e9).toString(36)}`
        }`;

    const contentCategory = FUNNEL_LABELS[funnel].category;
    const contentName = FUNNEL_LABELS[funnel].name;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let waited = 0;

    function fire() {
      if (typeof window.fbq !== "function") {
        // Pixel loads afterInteractive, so it may not exist on first effect
        // run. Wait it out rather than silently dropping the conversion.
        if (waited >= FBQ_TIMEOUT_MS) {
          firedThisPageLoad.delete(key);
          return;
        }
        waited += FBQ_POLL_MS;
        timer = setTimeout(fire, FBQ_POLL_MS);
        return;
      }

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

      markFired(storageKey);
    }

    fire();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [funnel]);

  return null;
}
