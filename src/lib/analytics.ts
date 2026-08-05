/**
 * Fire-and-forget analytics event helper.
 * Sends the event to Google Analytics 4 (gtag) and Meta Pixel (fbq) if either is loaded.
 * Safe to call from server-side code — becomes a no-op.
 *
 * Every event is auto-enriched with:
 *   - `agents_variant` cookie (set by src/proxy.ts) for A/B slicing
 *   - all non-empty click IDs / UTMs (fbclid, gclid, ttclid, utm_*) so BigQuery
 *     can join click ID → user actions from a CSV export
 */
import { getNonEmptyClickIds } from "./click-ids";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      target: string,
      params?: Record<string, unknown>
    ) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function getAgentsVariant(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/(?:^|;\s*)agents_variant=([ab])/);
  return match ? match[1] : "";
}

export function track(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  const variant = getAgentsVariant();
  const enriched: Record<string, unknown> = {
    ...params,
    ...getNonEmptyClickIds(),
  };
  if (variant) enriched.agents_variant = variant;

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", name, enriched);
  }

  // Meta Pixel — send as a custom event so it doesn't collide with Meta's
  // reserved standard events (Lead, PageView, Schedule, etc.).
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, enriched);
  }
}
