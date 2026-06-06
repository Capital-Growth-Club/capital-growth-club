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
    id: "role",
    question: "Which best describes you?",
    type: "single",
    options: [
      "Solo agent",
      "Team lead with 5+ agents",
      "Boutique brokerage owner",
    ],
  },
  {
    id: "market",
    question: "What market are you located in?",
    type: "text",
    placeholder: "e.g. Charleston, SC",
  },
  {
    id: "nearest-major-city",
    question: "What's the nearest major city?",
    type: "text",
    placeholder: "e.g. Charlotte, NC",
  },
  {
    id: "market-tier",
    question: "Would you describe your market as:",
    subtitle: "Tier A = popular travel destination or $1M+ avg price point. Tier B = large city with high-volume mid-priced homes at $500K+.",
    type: "single",
    options: ["Tier A", "Tier B", "Not sure"],
  },
  {
    id: "isa",
    question: "Do you have a full-time ISA on payroll?",
    type: "single",
    options: [
      "Yes, full-time ISA",
      "We're hiring an ISA in the next 30 days",
      "No, but I have 5+ agents under me with strong conversion ability",
      "No, and we're not interested in hiring one",
    ],
  },
  {
    id: "conversion-ability",
    question:
      "How would you rate your team's ability to close deals 6–24 months after the first lead contact?",
    type: "single",
    options: [
      "Excellent — proven, systematized long-term follow-up",
      "Strong — we close consistently in this window",
      "Average — some leads convert long-term, not systematized",
      "Not sure / haven't measured",
    ],
  },
  {
    id: "lead-focus",
    question: "Are you looking for buyer leads, seller leads, or both?",
    type: "single",
    options: [
      "Buyer leads only",
      "Seller leads only",
      "Both — full engagement",
    ],
  },
  {
    id: "lead-sources",
    question: "Where do most of your leads come from right now?",
    subtitle: "Select all that apply",
    type: "multi",
    options: [
      "Referrals / past clients / sphere",
      "Zillow / Realtor.com / Redfin / paid platforms",
      "Google search / SEO / IDX traffic",
      "Paid Meta or Google ads",
      "Open houses / door knocking / cold outbound",
      "Organic social media",
      "Other",
    ],
  },
  {
    id: "ran-ads-with-agency",
    question: "Have you run ads with an agency before?",
    type: "single",
    options: ["Yes", "No"],
  },
  {
    id: "investment",
    question:
      "Are you able to invest at least $2,500/month between retainer and ad spend for a single market?",
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
  const [contactStage, setContactStage] = useState<"info" | "verify">("info");
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
    const isa = answers["isa"] as string | undefined;
    const disqualifiedByIsa = isa === "No, and we're not interested in hiring one";
    const disqualifiedByInvestment = investment === "No";
    const qualified = !disqualifiedByIsa && !disqualifiedByInvestment;

    const leadSources = answers["lead-sources"];
    const sourcesStr = Array.isArray(leadSources) ? leadSources.join(", ") : "";

    const payload = {
      first_name: contactInfo.firstName,
      last_name: contactInfo.lastName,
      name: `${contactInfo.firstName} ${contactInfo.lastName}`.trim(),
      email: contactInfo.email,
      phone: contactInfo.phone,
      role: (answers["role"] as string) || "",
      market: (answers["market"] as string) || "",
      nearest_major_city: (answers["nearest-major-city"] as string) || "",
      market_tier: (answers["market-tier"] as string) || "",
      isa: isa || "",
      conversion_ability: (answers["conversion-ability"] as string) || "",
      lead_focus: (answers["lead-focus"] as string) || "",
      lead_sources: sourcesStr,
      ran_ads_with_agency: (answers["ran-ads-with-agency"] as string) || "",
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
                  We'll text a 6-digit code to verify your phone after you continue.
                </p>

                <form onSubmit={handleSendOtp} className="space-y-5">
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
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
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
                        setContactStage("info");
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
