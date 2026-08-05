/**
 * Cross-tab, long-lived attribution capture.
 *
 * Every visitor's click IDs and UTM params are pinned to a 1-year cookie on
 * first landing (see ClickIdCapture.tsx). Every analytics event enriches with
 * them (see analytics.ts). Every webhook / pixel payload reads them (see
 * SurveyModal.tsx, ScheduleEventFire.tsx). Cookie beats sessionStorage here
 * because a user landing on /agents in one tab, then completing on
 * /qualified-agents in a new tab, would otherwise lose attribution.
 */

export const CLICK_ID_KEYS = [
  "fbclid",
  "gclid",
  "ttclid",
  "li_fat_id",
  "msclkid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
] as const;

export type ClickIdKey = (typeof CLICK_ID_KEYS)[number];

const COOKIE_PREFIX = "cgc_";
const ONE_YEAR_SEC = 60 * 60 * 24 * 365;

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(
    new RegExp("(?:^|;\\s*)" + name + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : "";
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${ONE_YEAR_SEC}; path=/; samesite=lax${secure}`;
}

/**
 * Returns the current click-ID / UTM bag from cookies. Empty strings for
 * anything not set — never returns `undefined` values so consumers can spread
 * the result into a payload without conditionals.
 */
export function getClickIds(): Record<ClickIdKey, string> {
  const out = {} as Record<ClickIdKey, string>;
  for (const k of CLICK_ID_KEYS) {
    out[k] = readCookie(COOKIE_PREFIX + k);
  }
  return out;
}

/**
 * Read URL query for click IDs, persist any present values to cookies.
 * First-write-wins per key inside the 1-year window: once fbclid=abc is
 * pinned, arriving later at /agents with no fbclid does NOT clear it.
 * Arriving with a NEW fbclid overwrites (last-touch attribution).
 */
export function captureFromUrl(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  for (const k of CLICK_ID_KEYS) {
    const v = params.get(k);
    if (v) writeCookie(COOKIE_PREFIX + k, v);
  }
}

/**
 * Non-empty subset — useful for GHL webhook payloads where we still want to
 * send blanks (schema stability) but for GA4 events where blanks are noise.
 */
export function getNonEmptyClickIds(): Partial<Record<ClickIdKey, string>> {
  const all = getClickIds();
  const out: Partial<Record<ClickIdKey, string>> = {};
  for (const k of CLICK_ID_KEYS) {
    if (all[k]) out[k] = all[k];
  }
  return out;
}
