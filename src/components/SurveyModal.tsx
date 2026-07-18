"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type QuestionSet = "real-estate" | "service-business";

interface SurveyModalProps {
  open: boolean;
  onClose: () => void;
  questionSet?: QuestionSet;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

type AnswerValue = string | string[];

type Question = {
  id: string;
  question: string;
  subtitle?: string;
  type: "single" | "multi" | "text" | "textarea";
  options?: string[];
  placeholder?: string;
  optional?: boolean;
  maxLength?: number;
  numeric?: boolean;
  prefix?: string;
  conditional?: { dependsOn: string; values: string[] };
};

const realEstateQuestions: Question[] = [
  {
    id: "role",
    question: "Pick what describes you best.",
    type: "single",
    options: ["Solo agent", "Broker", "Team lead"],
  },
  {
    id: "market",
    question: "What market are you in?",
    subtitle: "City / County",
    type: "text",
    placeholder: "e.g. Charleston, SC",
  },
  {
    id: "annual-deals",
    question: "How many deals do you close a year?",
    type: "single",
    options: ["0–10", "11–25", "26+"],
  },
  {
    id: "lead-frustration",
    question: "What's your biggest frustration with your business right now?",
    type: "textarea",
    placeholder: "Tell us what's not working...",
  },
];

const serviceBusinessQuestions: Question[] = [
  {
    id: "running-ads",
    question: "Are you currently running paid ads?",
    type: "single",
    options: ["Yes", "No"],
  },
  {
    id: "business-type",
    question: "What type of service business do you run?",
    type: "single",
    options: [
      "Real estate (not commercial)",
      "Home services (plumbing, HVAC, roofing, solar, etc.)",
      "Health & wellness (med spa, dental, chiropractic, etc.)",
      "Professional services (law, accounting, consulting, financial)",
      "Coaching / Education / Information products",
      "Other",
    ],
  },
  {
    id: "monthly-revenue",
    question: "What's your current monthly revenue?",
    subtitle: "Enter a number — digits only.",
    type: "text",
    numeric: true,
    prefix: "$",
    placeholder: "50000",
  },
  {
    id: "top-lead-source",
    question: "What is your top lead source (where your leads come from)?",
    type: "text",
    placeholder: "e.g. Referrals, Google Ads, Facebook Ads, SEO, cold outreach...",
    maxLength: 250,
  },
  {
    id: "lead-struggle",
    question:
      "Are you struggling to capture leads or convert your leads?",
    type: "single",
    options: ["Capturing leads", "Converting leads", "Both"],
  },
];

function isQuestionVisible(
  q: Question,
  answers: Record<string, AnswerValue>
): boolean {
  if (!q.conditional) return true;
  const dep = answers[q.conditional.dependsOn];
  if (typeof dep !== "string") return false;
  return q.conditional.values.includes(dep);
}

function visibleStepCount(
  questions: Question[],
  answers: Record<string, AnswerValue>
): number {
  return questions.filter((q) => isQuestionVisible(q, answers)).length;
}

function findNextVisibleStep(
  questions: Question[],
  currentStep: number,
  answers: Record<string, AnswerValue>
): number {
  for (let i = currentStep + 1; i < questions.length; i++) {
    if (isQuestionVisible(questions[i], answers)) return i;
  }
  return questions.length; // -> contact step
}

function findPrevVisibleStep(
  questions: Question[],
  currentStep: number,
  answers: Record<string, AnswerValue>
): number {
  for (let i = currentStep - 1; i >= 0; i--) {
    if (isQuestionVisible(questions[i], answers)) return i;
  }
  return -1;
}

export default function SurveyModal({ open, onClose, questionSet = "real-estate" }: SurveyModalProps) {
  const questions =
    questionSet === "service-business" ? serviceBusinessQuestions : realEstateQuestions;
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [contactStage, setContactStage] = useState<"info" | "verify">("info");
  const [submitting, setSubmitting] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSending, setOtpSending] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "gclid",
      "fbclid",
      "ttclid",
      "li_fat_id",
      "msclkid",
      "ref",
    ];
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    keys.forEach((k) => {
      const fromUrl = params.get(k);
      if (fromUrl) {
        captured[k] = fromUrl;
        try {
          sessionStorage.setItem(`cgc_${k}`, fromUrl);
        } catch {}
      } else {
        try {
          const stored = sessionStorage.getItem(`cgc_${k}`);
          if (stored) captured[k] = stored;
        } catch {}
      }
    });
    if (document.referrer) captured.referrer = document.referrer;
    captured.landing_url = window.location.href;
    setUtmParams(captured);
  }, []);

  const isContactStep = step >= questions.length;
  const totalVisibleQuestions = visibleStepCount(questions, answers);
  const visibleIndex =
    step < questions.length
      ? questions
          .slice(0, step + 1)
          .filter((q) => isQuestionVisible(q, answers)).length
      : totalVisibleQuestions + 1;
  const totalSteps = totalVisibleQuestions + 1; // +1 contact info
  const progress = (visibleIndex / totalSteps) * 100;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function reset() {
    setStep(0);
    setAnswers({});
    setContactInfo({ firstName: "", lastName: "", email: "", phone: "" });
    setContactStage("info");
    setSubmitting(false);
    setOtpCode("");
    setOtpError("");
    setOtpSending(false);
  }

  function handleClose() {
    reset();
    onClose();
  }

  function setAnswer(id: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function advance() {
    const next = findNextVisibleStep(questions, step, answers);
    setStep(next);
  }

  function selectSingle(option: string) {
    const id = questions[step].id;
    setAnswer(id, option);
    setTimeout(() => {
      const nextAnswers = { ...answers, [id]: option };
      const next = findNextVisibleStep(questions, step, nextAnswers);
      setStep(next);
    }, 200);
  }

  function toggleMulti(option: string) {
    const id = questions[step].id;
    const current = (answers[id] as string[]) || [];
    const exists = current.includes(option);
    const updated = exists
      ? current.filter((o) => o !== option)
      : [...current, option];
    setAnswer(id, updated);
  }

  function goBack() {
    if (step >= questions.length) {
      // From contact step back to last visible question
      let last = questions.length - 1;
      while (last >= 0 && !isQuestionVisible(questions[last], answers)) last--;
      if (last >= 0) setStep(last);
      return;
    }
    const prev = findPrevVisibleStep(questions, step, answers);
    if (prev >= 0) setStep(prev);
  }

  function formatE164(phone: string): string {
    const digits = phone.replace(/\D/g, "");
    if (digits.startsWith("1") && digits.length === 11) return `+${digits}`;
    if (digits.length === 10) return `+1${digits}`;
    return `+${digits}`;
  }

  function maskedPhone(): string {
    const e164 = formatE164(contactInfo.phone);
    if (e164.length < 5) return e164;
    return e164.slice(0, 2) + "•".repeat(e164.length - 6) + e164.slice(-4);
  }

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setOtpError("");

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formatE164(contactInfo.phone) }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setOtpError(
          data.error ||
            "Failed to send verification code. Please check your phone number."
        );
        setSubmitting(false);
        return;
      }

      setContactStage("verify");
    } catch {
      setOtpError("Failed to send verification code. Please try again.");
    }

    setSubmitting(false);
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setOtpError("");

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formatE164(contactInfo.phone),
          code: otpCode,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setOtpError(data.error || "Invalid code. Please try again.");
        setSubmitting(false);
        return;
      }
    } catch {
      setOtpError("Verification failed. Please try again.");
      setSubmitting(false);
      return;
    }

    const role = answers["role"] as string | undefined;
    const annualDeals = answers["annual-deals"] as string | undefined;
    const leadFrustration = answers["lead-frustration"] as string | undefined;
    const businessType = answers["business-type"] as string | undefined;
    const monthlyRevenue = answers["monthly-revenue"] as string | undefined;
    const topLeadSource = answers["top-lead-source"] as string | undefined;

    // Real-estate flow: no auto-disqualifiers — every submission qualifies
    // for a call. Filtering happens on the call.

    // Service-business disqualifier — under $50k/mo
    const monthlyRevenueNum = parseInt(
      (monthlyRevenue || "").replace(/\D/g, ""),
      10
    );
    const disqualifiedByRevenue =
      questionSet === "service-business" &&
      (!Number.isFinite(monthlyRevenueNum) || monthlyRevenueNum < 50000);

    const qualified = !disqualifiedByRevenue;

    const payload = {
      first_name: contactInfo.firstName,
      last_name: contactInfo.lastName,
      name: `${contactInfo.firstName} ${contactInfo.lastName}`.trim(),
      email: contactInfo.email,
      phone: contactInfo.phone,
      question_set: questionSet,
      role: role || "",
      annual_deals: annualDeals || "",
      lead_frustration: leadFrustration || "",
      market: (answers["market"] as string) || "",
      business_type: businessType || "",
      monthly_revenue: monthlyRevenue || "",
      top_lead_source: topLeadSource || "",
      qualified: qualified ? "yes" : "no",
      utm_source: utmParams.utm_source || "",
      utm_medium: utmParams.utm_medium || "",
      utm_campaign: utmParams.utm_campaign || "",
      utm_content: utmParams.utm_content || "",
      utm_term: utmParams.utm_term || "",
      gclid: utmParams.gclid || "",
      fbclid: utmParams.fbclid || "",
      ttclid: utmParams.ttclid || "",
      li_fat_id: utmParams.li_fat_id || "",
      msclkid: utmParams.msclkid || "",
      ref: utmParams.ref || "",
      referrer: utmParams.referrer || "",
      landing_url: utmParams.landing_url || "",
    };

    const webhookUrl =
      questionSet === "service-business"
        ? "https://services.leadconnectorhq.com/hooks/gg2Mgpn5GTYN7nAwd00W/webhook-trigger/0358546e-8759-4e2d-b640-31a01361f620"
        : "https://services.leadconnectorhq.com/hooks/gg2Mgpn5GTYN7nAwd00W/webhook-trigger/wpLWR0drvTgP0GRt0D0U";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // proceed even if webhook fails
    }

    if (qualified) {
      const params = new URLSearchParams({
        first_name: contactInfo.firstName,
        last_name: contactInfo.lastName,
        email: contactInfo.email,
        phone: formatE164(contactInfo.phone),
      });
      const dest =
        questionSet === "service-business" ? "/qualified" : "/qualified-agents";
      router.push(`${dest}?${params.toString()}`);
    } else if (questionSet === "service-business") {
      router.push("/skooloffer");
    } else {
      router.push("/not-a-fit");
    }
  }

  async function resendOtp() {
    setOtpSending(true);
    setOtpError("");

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formatE164(contactInfo.phone) }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setOtpError(data.error || "Failed to resend code.");
      }
    } catch {
      setOtpError("Failed to resend code. Please try again.");
    }

    setOtpSending(false);
  }

  if (!open) return null;

  const currentQuestion = !isContactStep ? questions[step] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;

  const canContinueText =
    currentQuestion?.type === "text" &&
    typeof currentAnswer === "string" &&
    currentAnswer.trim().length > 0;
  const canContinueTextarea =
    currentQuestion?.type === "textarea" &&
    (currentQuestion.optional ||
      (typeof currentAnswer === "string" && currentAnswer.trim().length > 0));
  const canContinueMulti =
    currentQuestion?.type === "multi" &&
    Array.isArray(currentAnswer) &&
    currentAnswer.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-neutral-200 rounded-2xl shadow-2xl text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white">
          <div className="h-1 bg-neutral-100">
            <div
              className="h-full gradient-bg transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5l10 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {isContactStep ? (
            contactStage === "info" ? (
              <div>
                <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                  Almost done
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Where should we reach you?
                </h3>
                <p className="text-neutral-600 mb-8">
                  We'll text a 6-digit code to verify your phone after you continue.
                </p>

                <form onSubmit={handleSendOtp} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2 font-medium">
                        First name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        minLength={1}
                        value={contactInfo.firstName}
                        onChange={(e) =>
                          setContactInfo((p) => ({
                            ...p,
                            firstName: e.target.value,
                          }))
                        }
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2 font-medium">
                        Last name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        minLength={1}
                        value={contactInfo.lastName}
                        onChange={(e) =>
                          setContactInfo((p) => ({
                            ...p,
                            lastName: e.target.value,
                          }))
                        }
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2 font-medium">
                      Email address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo((p) => ({
                          ...p,
                          email: e.target.value,
                        }))
                      }
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2 font-medium">
                      Mobile phone <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      minLength={7}
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo((p) => ({
                          ...p,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {otpError && (
                    <p className="text-red-400 text-sm">{otpError}</p>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10 12L6 8l4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending code..." : "Continue & Verify Phone"}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                  Final step
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Enter the code we sent to {maskedPhone()}
                </h3>
                <p className="text-neutral-600 mb-8">
                  We sent a 6-digit verification code via SMS. Enter it below to
                  submit your application.
                </p>

                <form onSubmit={handleVerifyOtp} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      required
                      autoFocus
                      value={otpCode}
                      onChange={(e) => {
                        const val = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6);
                        setOtpCode(val);
                        setOtpError("");
                      }}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-4 text-neutral-900 text-center text-2xl tracking-[0.5em] font-mono placeholder-neutral-300 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors"
                      placeholder="000000"
                    />
                  </div>

                  {otpError && (
                    <p className="text-red-400 text-sm">{otpError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting || otpCode.length < 6}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Verifying..." : "Verify & submit application"}
                  </button>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setContactStage("info");
                        setOtpCode("");
                        setOtpError("");
                      }}
                      className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10 12L6 8l4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Change number
                    </button>
                    <button
                      type="button"
                      onClick={resendOtp}
                      disabled={otpSending}
                      className="text-brand-gold/70 hover:text-brand-gold transition-colors text-sm disabled:opacity-40"
                    >
                      {otpSending ? "Sending..." : "Resend code"}
                    </button>
                  </div>
                </form>
              </div>
            )
          ) : currentQuestion ? (
            <div>
              <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Question {visibleIndex} of {totalSteps}
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-2 leading-snug">
                {currentQuestion.question}
              </h3>
              {currentQuestion.subtitle && (
                <p className="text-neutral-500 text-sm mb-6">
                  {currentQuestion.subtitle}
                </p>
              )}
              {!currentQuestion.subtitle && (
                <p className="text-neutral-400 text-sm mb-6">
                  {currentQuestion.type === "single"
                    ? "Select one to continue"
                    : currentQuestion.type === "multi"
                      ? ""
                      : ""}
                </p>
              )}

              {currentQuestion.type === "single" && (
                <div className="space-y-3">
                  {currentQuestion.options!.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectSingle(option)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                        currentAnswer === option
                          ? "bg-brand-gold/10 border-brand-gold/60 text-neutral-900 shadow-sm shadow-brand-gold/20"
                          : "bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-brand-gold/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === "multi" && (
                <>
                  <div className="space-y-3">
                    {currentQuestion.options!.map((option) => {
                      const selected =
                        Array.isArray(currentAnswer) &&
                        currentAnswer.includes(option);
                      return (
                        <button
                          key={option}
                          onClick={() => toggleMulti(option)}
                          className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                            selected
                              ? "bg-brand-gold/10 border-brand-gold/60 text-neutral-900 shadow-sm shadow-brand-gold/20"
                              : "bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-brand-gold/40"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              selected
                                ? "bg-brand-gold border-brand-gold"
                                : "border-neutral-300"
                            }`}
                          >
                            {selected && (
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2.5 6l2.5 2.5L9.5 3"
                                  stroke="#0E0E0E"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </span>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={advance}
                    disabled={!canContinueMulti}
                    className="btn-primary w-full mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </>
              )}

              {currentQuestion.type === "text" && (
                <>
                  <div className="relative">
                    {currentQuestion.prefix && (
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
                        {currentQuestion.prefix}
                      </span>
                    )}
                    <input
                      type="text"
                      inputMode={currentQuestion.numeric ? "numeric" : undefined}
                      pattern={currentQuestion.numeric ? "[0-9,]*" : undefined}
                      value={
                        currentQuestion.numeric && currentAnswer
                          ? Number(
                              (currentAnswer as string).replace(/\D/g, "")
                            ).toLocaleString("en-US")
                          : (currentAnswer as string) || ""
                      }
                      onChange={(e) => {
                        const v = currentQuestion.numeric
                          ? e.target.value.replace(/\D/g, "")
                          : e.target.value;
                        setAnswer(currentQuestion.id, v);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && canContinueText) {
                          e.preventDefault();
                          advance();
                        }
                      }}
                      autoFocus
                      maxLength={currentQuestion.maxLength}
                      placeholder={currentQuestion.placeholder}
                      className={`w-full bg-neutral-50 border border-neutral-200 rounded-lg py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors ${
                        currentQuestion.prefix ? "pl-8 pr-4" : "px-4"
                      }`}
                    />
                  </div>
                  {currentQuestion.maxLength && (
                    <div className="mt-2 text-xs text-neutral-500 text-right">
                      {((currentAnswer as string) || "").length}/
                      {currentQuestion.maxLength}
                    </div>
                  )}
                  <button
                    onClick={advance}
                    disabled={!canContinueText}
                    className="btn-primary w-full mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </>
              )}

              {currentQuestion.type === "textarea" && (
                <>
                  <textarea
                    value={(currentAnswer as string) || ""}
                    onChange={(e) =>
                      setAnswer(currentQuestion.id, e.target.value)
                    }
                    autoFocus
                    rows={5}
                    placeholder={currentQuestion.placeholder}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-gold focus:bg-white transition-colors resize-none"
                  />
                  <button
                    onClick={advance}
                    disabled={!canContinueTextarea}
                    className="btn-primary w-full mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </>
              )}

              {step > 0 && (
                <button
                  onClick={goBack}
                  className="mt-6 text-neutral-500 hover:text-neutral-900 transition-colors text-sm flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 12L6 8l4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Back
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
