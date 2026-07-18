/**
 * Fire-and-forget analytics event helper.
 * Sends the event to Google Analytics 4 (gtag) and Meta Pixel (fbq) if either is loaded.
 * Safe to call from server-side code — becomes a no-op.
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

export function track(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // Meta Pixel — send as a custom event so it doesn't collide with Meta's
  // reserved standard events (Lead, PageView, Schedule, etc.).
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params);
  }
}
