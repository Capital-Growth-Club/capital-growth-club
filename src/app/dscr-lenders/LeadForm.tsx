"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { getClickIds } from "@/lib/click-ids";
import { businessEmailError, emailDomain } from "@/lib/business-email";

/** GHL inbound webhook for /dscr-lenders form leads (fires after the SMS code checks out). */
const LEAD_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/gg2Mgpn5GTYN7nAwd00W/webhook-trigger/a7905f93-0be1-4707-ba1d-5816f9340020";

/**
 * Inline application form for /dscr-lenders. Same questions as the GHL survey
 * it replaces (optin.capitalgrowthclub.com/home-600484):
 *   1. Own/operate a DSCR or hard money lender with 3+ LOs? "No" disqualifies.
 *   2. Website URL or business name.
 *   3. First, last, email, phone + SMS consent (one step here, not four).
 * Then the SMS code check every other funnel in this repo uses, the
 * /dscr-lenders lead webhook, and the prefilled calendar on /dscr-lenders/book.
 */

const FUNNEL = "dscr-lenders";
const QUALIFY_QUESTION =
  "Do you own or operate a private DSCR or hard money lending business with at least 3 LOs under you?";
const YES = "Yes, I do";
const NO = "No, I don't";

type Stage = "qualify" | "business" | "contact" | "verify" | "disqualified";

const STEP_NUMBER: Record<Stage, number> = {
  qualify: 1,
  business: 2,
  contact: 3,
  verify: 3,
  disqualified: 1,
};
const TOTAL_STEPS = 3;
/** Pause after an option is picked so the filled circle registers before moving on. */
const ADVANCE_DELAY_MS = 350;

const input =
  "w-full rounded-xl border border-[#BB9A65]/40 bg-white px-4 py-3.5 text-base text-[#0E0E0E] placeholder-[#5F594B]/50 transition-colors focus:border-[#8C6B2E] focus:outline-none focus:ring-2 focus:ring-[#BB9A65]/25";
const label = "mb-1.5 block text-sm font-semibold text-[#0E0E0E]";
const primaryBtn =
  "flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E0E0E] px-6 py-4 text-base font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#262626] hover:shadow-lg disabled:pointer-events-none disabled:opacity-50";
const backBtn =
  "inline-flex items-center gap-1.5 text-sm font-medium text-[#5F594B] transition-colors hover:text-[#0E0E0E]";

function formatE164(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("1") && digits.length === 11) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return `+${digits}`;
}

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={back ? "rotate-180" : ""}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LeadForm() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("qualify");
  const [started, setStarted] = useState(false);
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [consent, setConsent] = useState(false);
  const [qualifyAnswer, setQualifyAnswer] = useState<string | null>(null);
  const advancingRef = useRef(false);
  const [emailError, setEmailError] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [resending, setResending] = useState(false);

  const step = STEP_NUMBER[stage];
  const progress =
    stage === "verify" ? 92 : stage === "disqualified" ? 0 : ((step - 1) / TOTAL_STEPS) * 100 + 8;

  function markStarted() {
    if (started) return;
    setStarted(true);
    track("form_open", { question_set: "lenders", funnel: FUNNEL });
  }

  /** Fills the chosen circle, holds briefly so the choice registers, then moves on. */
  function answerQualify(answer: string) {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setQualifyAnswer(answer);
    markStarted();
    track("form_answer", { funnel: FUNNEL, question: "owns_lending_business", answer });
    window.setTimeout(() => {
      advancingRef.current = false;
      if (answer === NO) {
        track("form_disqualified", { funnel: FUNNEL, reason: "owns_lending_business" });
        setStage("disqualified");
        return;
      }
      setStage("business");
    }, ADVANCE_DELAY_MS);
  }

  function submitBusiness(e: React.FormEvent) {
    e.preventDefault();
    if (!business.trim()) return;
    setStage("contact");
  }

  /** Validates the email, shows the inline message, and reports blocks. */
  function checkEmail(): boolean {
    const message = businessEmailError(contact.email);
    setEmailError(message);
    if (message) {
      track("form_email_blocked", { funnel: FUNNEL, email_domain: emailDomain(contact.email) });
    }
    return !message;
  }

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    if (!checkEmail()) {
      document.getElementById("email")?.focus();
      return;
    }
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formatE164(contact.phone) }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "We couldn't text that number. Please check it and try again.");
      } else {
        track("lead_submit_info", { question_set: "lenders", funnel: FUNNEL });
        setStage("verify");
      }
    } catch {
      setError("We couldn't text that number. Please try again.");
    }
    setBusy(false);
  }

  async function resendCode() {
    setResending(true);
    setError("");
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formatE164(contact.phone) }),
      });
      if (!res.ok) setError("We couldn't resend the code. Please try again.");
    } catch {
      setError("We couldn't resend the code. Please try again.");
    }
    setResending(false);
  }

  async function verifyAndSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formatE164(contact.phone), code }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "That code didn't match. Please try again.");
        setBusy(false);
        return;
      }
    } catch {
      setError("We couldn't check that code. Please try again.");
      setBusy(false);
      return;
    }

    const phone = formatE164(contact.phone);
    const payload = {
      first_name: contact.firstName.trim(),
      last_name: contact.lastName.trim(),
      name: `${contact.firstName} ${contact.lastName}`.trim(),
      email: contact.email.trim(),
      phone,
      organization: business.trim(),
      owns_lending_business: YES,
      sms_consent: consent ? "yes" : "no",
      question_set: "lenders",
      funnel: FUNNEL,
      qualified: "yes",
      ...getClickIds(),
      referrer: document.referrer,
      landing_url: window.location.href,
    };

    try {
      await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Continue to the calendar even if the webhook fails.
    }

    // Custom event only. See SurveyModal: the standard `Lead` event has been
    // mis-attributed as a Schedule conversion in Meta.
    track("lead_verified", { question_set: "lenders", funnel: FUNNEL, qualified: "yes" });

    const params = new URLSearchParams({
      first_name: payload.first_name,
      last_name: payload.last_name,
      email: payload.email,
      phone,
      organization: payload.organization,
    });
    router.push(`/dscr-lenders/book?${params.toString()}`);
  }

  return (
    <div className="overflow-hidden rounded-[22px] border border-[#0E0E0E]/80 bg-white text-left shadow-[0_30px_70px_-20px_rgba(14,14,14,0.35)]">
      {stage !== "disqualified" && (
        <div className="flex items-center justify-between gap-4 bg-[#0E0E0E] px-6 py-4 sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#BB9A65]">
            {stage === "verify" ? "Confirm your number" : `Step ${step} of ${TOTAL_STEPS}`}
          </span>
          <div
            className="h-1.5 w-28 overflow-hidden rounded-full bg-white/15"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#BB9A65] to-[#E9DCB0] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        {stage === "qualify" && (
          <fieldset>
            <legend className="mb-5 text-lg font-bold leading-snug tracking-tight text-[#0E0E0E] sm:text-xl">
              {QUALIFY_QUESTION}
            </legend>
            <div role="radiogroup" aria-label={QUALIFY_QUESTION} className="grid gap-3 sm:grid-cols-2">
              {[YES, NO].map((option) => {
                const selected = qualifyAnswer === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => answerQualify(option)}
                    className={`group flex items-center gap-3.5 rounded-xl border px-5 py-4 text-left text-base font-semibold text-[#0E0E0E] transition-all hover:-translate-y-0.5 hover:shadow-md ${
                      selected
                        ? "border-[#8C6B2E] bg-[#FFFCD8]/70 shadow-md"
                        : "border-[#BB9A65]/45 bg-white hover:border-[#8C6B2E] hover:bg-[#FFFCD8]/40"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                        selected ? "border-[#8C6B2E]" : "border-[#BB9A65]/70 group-hover:border-[#8C6B2E]"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full bg-[#8C6B2E] transition-transform duration-200 ${
                          selected ? "scale-100" : "scale-0"
                        }`}
                      />
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {stage === "business" && (
          <form onSubmit={submitBusiness}>
            <label htmlFor="organization" className="mb-5 block text-lg font-bold leading-snug tracking-tight text-[#0E0E0E] sm:text-xl">
              What is your website URL or business name?
            </label>
            <input
              id="organization"
              name="organization"
              autoFocus
              required
              autoComplete="organization"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="e.g. acmelending.com or Acme Lending"
              className={input}
            />
            <button type="submit" disabled={!business.trim()} className={`${primaryBtn} mt-5`}>
              Continue <Arrow />
            </button>
            <button type="button" onClick={() => setStage("qualify")} className={`${backBtn} mt-4`}>
              <Arrow back /> Back
            </button>
          </form>
        )}

        {stage === "contact" && (
          <form onSubmit={sendCode} className="space-y-4">
            <p className="text-lg font-bold leading-snug tracking-tight text-[#0E0E0E] sm:text-xl">
              Where should we send your call details?
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className={label}>First name</label>
                <input id="first_name" required autoComplete="given-name" value={contact.firstName}
                  onChange={(e) => setContact((c) => ({ ...c, firstName: e.target.value }))}
                  placeholder="First name" className={input} />
              </div>
              <div>
                <label htmlFor="last_name" className={label}>Last name</label>
                <input id="last_name" required autoComplete="family-name" value={contact.lastName}
                  onChange={(e) => setContact((c) => ({ ...c, lastName: e.target.value }))}
                  placeholder="Last name" className={input} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className={label}>Work email</label>
              <input id="email" type="email" required autoComplete="email" value={contact.email}
                onChange={(e) => {
                  setContact((c) => ({ ...c, email: e.target.value }));
                  if (emailError) setEmailError("");
                }}
                onBlur={() => { if (contact.email.includes("@")) checkEmail(); }}
                aria-invalid={emailError ? true : undefined}
                aria-describedby={emailError ? "email-error" : "email-hint"}
                placeholder="you@yourcompany.com"
                className={`${input} ${emailError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`} />
              {emailError ? (
                <p id="email-error" className="mt-1.5 text-sm font-medium text-red-600">{emailError}</p>
              ) : (
                <p id="email-hint" className="mt-1.5 text-xs text-[#5F594B]">Use your company email. Gmail, Yahoo, iCloud, etc. aren&apos;t accepted.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className={label}>Mobile phone</label>
              <input id="phone" type="tel" required minLength={10} autoComplete="tel" value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                placeholder="(555) 123-4567" className={input} />
            </div>
            <label className="flex items-start gap-3 text-xs leading-relaxed text-[#5F594B]">
              <input type="checkbox" required checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#8C6B2E]" />
              <span>
                I agree to the{" "}
                <Link href="/terms" target="_blank" className="underline underline-offset-2 hover:text-[#0E0E0E]">
                  terms &amp; conditions
                </Link>
                . By providing my phone number, I agree to receive text messages from Capital Growth Club.
              </span>
            </label>
            {error && <p className="text-sm font-medium text-red-600">{error}</p>}
            <button type="submit" disabled={busy} className={primaryBtn}>
              {busy ? "Sending your code…" : <>Continue to booking <Arrow /></>}
            </button>
            <button type="button" onClick={() => setStage("business")} className={backBtn}>
              <Arrow back /> Back
            </button>
          </form>
        )}

        {stage === "verify" && (
          <form onSubmit={verifyAndSubmit} className="space-y-4">
            <p className="text-lg font-bold leading-snug tracking-tight text-[#0E0E0E] sm:text-xl">
              Enter the 6-digit code we just texted you.
            </p>
            <p className="text-sm text-[#5F594B]">
              Sent to {formatE164(contact.phone)}. Your calendar opens right after.
            </p>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              autoFocus
              aria-label="Verification code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                setError("");
              }}
              placeholder="000000"
              className={`${input} text-center font-mono text-2xl tracking-[0.5em]`}
            />
            {error && <p className="text-sm font-medium text-red-600">{error}</p>}
            <button type="submit" disabled={busy || code.length < 6} className={primaryBtn}>
              {busy ? "Checking…" : <>Verify &amp; pick a time <Arrow /></>}
            </button>
            <div className="flex items-center justify-between">
              <button type="button" onClick={() => { setStage("contact"); setCode(""); setError(""); }} className={backBtn}>
                <Arrow back /> Change number
              </button>
              <button type="button" onClick={resendCode} disabled={resending}
                className="text-sm font-semibold text-[#8C6B2E] hover:text-[#0E0E0E] disabled:opacity-40">
                {resending ? "Sending…" : "Resend code"}
              </button>
            </div>
          </form>
        )}

        {stage === "disqualified" && (
          <div className="py-2 text-center">
            <p className="text-lg font-bold leading-snug text-[#0E0E0E] sm:text-xl">
              Thank you for applying, but based on your answers, we are not the best solution for your business.
            </p>
            <p className="mt-3 text-sm text-[#5F594B]">
              This program is built for private DSCR and hard money lenders with at least 3 loan officers.
            </p>
            <button type="button" onClick={() => { setQualifyAnswer(null); setStage("qualify"); }} className={`${backBtn} mt-5`}>
              <Arrow back /> Change my answer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
