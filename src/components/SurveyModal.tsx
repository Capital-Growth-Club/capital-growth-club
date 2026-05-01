"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SurveyModalProps {
  open: boolean;
  onClose: () => void;
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
  conditional?: { dependsOn: string; values: string[] };
};

const questions: Question[] = [
  {
    id: "business-type",
    question: "What kind of service business do you own/operate?",
    type: "single",
    options: [
      "Real Estate Team / Brokerage",
      "Coaching / Consulting",
      "Legal / Law Firm",
      "Medical / Dental Practice",
      "Home Services (HVAC, Roofing, Plumbing, Solar, etc.)",
      "Financial Advisory / Lending / Insurance",
      "Med Spa / Aesthetics",
      "Other",
    ],
  },
  {
    id: "customer-sources",
    question: "Where are most of your customers coming from right now?",
    subtitle: "Select all that apply",
    type: "multi",
    options: [
      "Referrals / word-of-mouth",
      "SEO / organic Google",
      "Google Local Services (LSA)",
      "Google Ads",
      "Meta Ads (Facebook/Instagram)",
      "Organic social (TikTok, IG, LinkedIn, YouTube)",
      "Email / SMS",
      "Cold outbound",
      "Past customers / repeat business",
      "Other",
    ],
  },
  {
    id: "current-revenue",
    question: "What's your current monthly revenue?",
    type: "single",
    options: [
      "$100K – $250K / month",
      "$250K – $500K / month",
      "$500K – $1M / month",
      "$1M+ / month",
    ],
  },
  {
    id: "target-revenue",
    question: "What's your target monthly revenue 12 months from now?",
    type: "single",
    options: [
      "$500K – $1M / month",
      "$1M – $3M / month",
      "$3M – $5M / month",
      "$5M – $10M / month",
      "$10M+ / month",
    ],
  },
  {
    id: "blocker",
    question: "In your own words, what's stopping you from getting there?",
    type: "textarea",
    placeholder: "Tell us what's actually broken or holding you back...",
  },
  {
    id: "running-ads",
    question: "Are you currently running paid ads?",
    type: "single",
    options: [
      "Yes, currently running",
      "I've run them before, not currently",
      "No, never run paid ads",
    ],
  },
  {
    id: "ad-spend",
    question: "What's your daily ad spend (current or last campaign)?",
    type: "single",
    options: [
      "Under $100 / day",
      "$100 – $300 / day",
      "$300 – $1,000 / day",
      "$1,000 – $3,000 / day",
      "$3,000+ / day",
    ],
    conditional: {
      dependsOn: "running-ads",
      values: ["Yes, currently running", "I've run them before, not currently"],
    },
  },
  {
    id: "ads-not-working",
    question: "Why do you think the ads aren't / weren't working?",
    type: "textarea",
    placeholder: "What did you try? What broke down?",
    conditional: {
      dependsOn: "running-ads",
      values: ["Yes, currently running", "I've run them before, not currently"],
    },
  },
  {
    id: "cac",
    question: "What's your current cost-per-customer (CAC)?",
    subtitle: 'Best estimate is fine — write "Don\'t know" if you\'re not sure.',
    type: "text",
    placeholder: "e.g. $250 or Don't know",
  },
  {
    id: "ltv",
    question: "What's your average customer lifetime value (LTV)?",
    subtitle: 'Best estimate or "N/A" if it doesn\'t apply.',
    type: "text",
    placeholder: "e.g. $5,000 or N/A",
  },
  {
    id: "crm-size",
    question: "How many email contacts do you have in your CRM?",
    type: "single",
    options: [
      "Don't have a CRM",
      "0 – 500",
      "500 – 2,000",
      "2,000 – 10,000",
      "10,000 – 50,000",
      "50,000 – 100,000",
      "100,000+",
    ],
  },
  {
    id: "investment",
    question:
      "Are you willing and able to invest $15K+ per month between ad spend and retainers (not including performance bonuses) to build a real cold client acquisition system?",
    type: "single",
    options: ["Yes", "I'd need to discuss this on the call", "No"],
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

function visibleStepCount(answers: Record<string, AnswerValue>): number {
  return questions.filter((q) => isQuestionVisible(q, answers)).length;
}

function findNextVisibleStep(
  currentStep: number,
  answers: Record<string, AnswerValue>
): number {
  for (let i = currentStep + 1; i < questions.length; i++) {
    if (isQuestionVisible(questions[i], answers)) return i;
  }
  return questions.length; // -> contact step
}

function findPrevVisibleStep(
  currentStep: number,
  answers: Record<string, AnswerValue>
): number {
  for (let i = currentStep - 1; i >= 0; i--) {
    if (isQuestionVisible(questions[i], answers)) return i;
  }
  return -1;
}

export default function SurveyModal({ open, onClose }: SurveyModalProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [contactStage, setContactStage] = useState<"info" | "phone" | "verify">(
    "info"
  );
  const [submitting, setSubmitting] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSending, setOtpSending] = useState(false);

  const isContactStep = step >= questions.length;
  const totalVisibleQuestions = visibleStepCount(answers);
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
    const next = findNextVisibleStep(step, answers);
    setStep(next);
  }

  function selectSingle(option: string) {
    const id = questions[step].id;
    setAnswer(id, option);
    setTimeout(() => {
      const nextAnswers = { ...answers, [id]: option };
      const next = findNextVisibleStep(step, nextAnswers);
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
    const prev = findPrevVisibleStep(step, answers);
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

    const investment = answers["investment"] as string | undefined;
    const qualified =
      investment === "Yes" || investment === "I'd need to discuss this on the call";

    const customerSources = answers["customer-sources"];
    const sourcesStr = Array.isArray(customerSources)
      ? customerSources.join(", ")
      : "";

    const payload = {
      first_name: contactInfo.firstName,
      last_name: contactInfo.lastName,
      name: `${contactInfo.firstName} ${contactInfo.lastName}`.trim(),
      email: contactInfo.email,
      phone: contactInfo.phone,
      business_type: (answers["business-type"] as string) || "",
      customer_sources: sourcesStr,
      current_revenue: (answers["current-revenue"] as string) || "",
      target_revenue: (answers["target-revenue"] as string) || "",
      blocker: (answers["blocker"] as string) || "",
      running_ads: (answers["running-ads"] as string) || "",
      ad_spend: (answers["ad-spend"] as string) || "",
      ads_not_working: (answers["ads-not-working"] as string) || "",
      cac: (answers["cac"] as string) || "",
      ltv: (answers["ltv"] as string) || "",
      crm_size: (answers["crm-size"] as string) || "",
      investment: investment || "",
      qualified: qualified ? "yes" : "no",
    };

    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/gg2Mgpn5GTYN7nAwd00W/webhook-trigger/0358546e-8759-4e2d-b640-31a01361f620",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
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
      router.push(`/qualified?${params.toString()}`);
    } else {
      router.push("/skool-offer");
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
    typeof currentAnswer === "string" &&
    currentAnswer.trim().length > 0;
  const canContinueMulti =
    currentQuestion?.type === "multi" &&
    Array.isArray(currentAnswer) &&
    currentAnswer.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-dark border border-white/10 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-brand-dark">
          <div className="h-1 bg-white/5">
            <div
              className="h-full gradient-bg transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/5"
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
                <p className="text-white/50 mb-8">
                  Last step before we review your application.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactStage("phone");
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
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
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
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
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
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
                    <button type="submit" className="btn-primary flex-1">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            ) : contactStage === "phone" ? (
              <div>
                <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                  Verify your phone
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Enter your mobile number
                </h3>
                <p className="text-white/50 mb-8">
                  We&apos;ll text you a 6-digit code to verify it&apos;s really
                  you. This is the last step.
                </p>

                <form onSubmit={handleSendOtp} className="space-y-5">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Mobile phone <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      minLength={7}
                      autoFocus
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo((p) => ({
                          ...p,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {otpError && (
                    <p className="text-red-400 text-sm">{otpError}</p>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setContactStage("info")}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
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
                      {submitting ? "Sending code..." : "Send verification code"}
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
                <p className="text-white/50 mb-8">
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
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white text-center text-2xl tracking-[0.5em] font-mono placeholder-white/20 focus:outline-none focus:border-brand-gold/50 transition-colors"
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
                        setContactStage("phone");
                        setOtpCode("");
                        setOtpError("");
                      }}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
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
                <p className="text-white/40 text-sm mb-6">
                  {currentQuestion.subtitle}
                </p>
              )}
              {!currentQuestion.subtitle && (
                <p className="text-white/30 text-sm mb-6">
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
                          ? "bg-brand-gold/10 border-brand-gold/40 text-white"
                          : "bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20"
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
                              ? "bg-brand-gold/10 border-brand-gold/40 text-white"
                              : "bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              selected
                                ? "bg-brand-gold border-brand-gold"
                                : "border-white/30"
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
                  <input
                    type="text"
                    value={(currentAnswer as string) || ""}
                    onChange={(e) =>
                      setAnswer(currentQuestion.id, e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && canContinueText) {
                        e.preventDefault();
                        advance();
                      }
                    }}
                    autoFocus
                    placeholder={currentQuestion.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors"
                  />
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
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
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
                  className="mt-6 text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
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
