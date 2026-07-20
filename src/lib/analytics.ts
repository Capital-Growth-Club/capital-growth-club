/**
 * Fire-and-forget analytics event helper.
 * Sends the event to Google Analytics 4 (gtag) and Meta Pixel (fbq) if either is loaded.
 * Safe to call from server-side code — becomes a no-op.
 *
 * Also auto-attaches the `agents_variant` cookie value (set by middleware.ts)
 * to every event, so every metric can be sliced by A vs B in GA4.
 */
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

  // Auto-attach the A/B variant if the cookie is set
  const variant = getAgentsVariant();
  const enriched = variant ? { ...params, agents_variant: variant } : params;

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
