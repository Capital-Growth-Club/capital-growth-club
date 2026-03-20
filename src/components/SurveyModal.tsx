"use client";

import { useState, useEffect } from "react";

interface SurveyModalProps {
  open: boolean;
  onClose: () => void;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

const questions = [
  {
    id: "business-type",
    question: "What type of service business do you run?",
    options: [
      "Real Estate",
      "Home Services",
      "Legal",
      "Medical / Dental",
      "Financial Services",
      "Coaching / Consulting",
      "Other",
    ],
  },
  {
    id: "revenue",
    question: "What's your current monthly revenue?",
    options: [
      "$250K — $500K / month",
      "$500K — $750K / month",
      "$750K — $1M / month",
      "$1M+ / month",
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest challenge right now?",
    options: [
      "Not enough qualified leads coming in",
      "Getting leads but can't convert them to booked calls",
      "CRM is a mess — leads are falling through the cracks",
      "No system in place for follow-up & automations",
      "All of the above",
    ],
  },
  {
    id: "ads",
    question: "Are you currently running paid advertising?",
    options: [
      "Yes, spending $10K+ / month",
      "Yes, spending under $10K / month",
      "No, but I'm ready to start",
      "No, and I'm not interested in paid ads",
    ],
  },
  {
    id: "funnel",
    question: "How would you describe your current sales funnel?",
    options: [
      "We don't have one",
      "We have one but it's underperforming",
      "It works but needs serious optimization",
      "I'm not sure what a sales funnel is",
    ],
  },
  {
    id: "goal",
    question: "What's your revenue goal for the next 12 months?",
    options: ["$500K / month", "$750K / month", "$1M / month", "$2M+ / month"],
  },
  {
    id: "timeline",
    question: "How soon are you looking to get started?",
    options: [
      "Immediately — I need this yesterday",
      "Within 30 days",
      "Within 90 days",
      "Just exploring options",
    ],
  },
];

export default function SurveyModal({ open, onClose }: SurveyModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [verifyStep, setVerifyStep] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSending, setOtpSending] = useState(false);

  const totalSteps = questions.length + 1; // +1 for contact info
  const progress = verifyStep ? 100 : ((step + 1) / totalSteps) * 100;
  const isContactStep = step === questions.length;

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
    setContactInfo({ name: "", email: "", phone: "" });
    setSubmitted(false);
    setSubmitting(false);
    setDirection("forward");
    setVerifyStep(false);
    setOtpCode("");
    setOtpError("");
    setOtpSending(false);
  }

  function handleClose() {
    reset();
    onClose();
  }

  function selectOption(option: string) {
    const questionId = questions[step].id;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setDirection("forward");
    setTimeout(() => setStep((s) => s + 1), 200);
  }

  function goBack() {
    if (step > 0) {
      setDirection("back");
      setStep((s) => s - 1);
    }
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

  async function handleSubmit(e: React.FormEvent) {
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
        setOtpError(data.error || "Failed to send verification code. Please check your phone number.");
        setSubmitting(false);
        return;
      }

      setVerifyStep(true);
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

    // Phone verified — now send the webhook
    const payload = {
      name: contactInfo.name,
      email: contactInfo.email,
      phone: contactInfo.phone,
      business_type: answers["business-type"] || "",
      monthly_revenue: answers["revenue"] || "",
      biggest_challenge: answers["challenge"] || "",
      running_ads: answers["ads"] || "",
      current_funnel: answers["funnel"] || "",
      revenue_goal: answers["goal"] || "",
      timeline: answers["timeline"] || "",
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
      // Still show success — the webhook may not return CORS headers
    }

    setSubmitting(false);
    setSubmitted(true);
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl bg-brand-dark border border-white/10 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className="h-1 bg-white/5">
          <div
            className="h-full gradient-bg transition-all duration-500 ease-out"
            style={{ width: `${submitted ? 100 : progress}%` }}
          />
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/5"
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
          {submitted ? (
            /* Success State — shown after OTP verified */
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M12 20l6 6 12-12"
                    stroke="#0E0E0E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">You&apos;re In.</h3>
              <p className="text-white/60 text-lg mb-2">
                We&apos;ve received your application.
              </p>
              <p className="text-white/40 mb-8">
                A member of our team will reach out within 24 hours to schedule
                your strategy session.
              </p>
              <button onClick={handleClose} className="btn-primary">
                Close
              </button>
            </div>
          ) : verifyStep ? (
            /* Phone Verification Step */
            <div>
              <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Verify Your Phone
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Enter the code we sent to {maskedPhone()}
              </h3>
              <p className="text-white/50 mb-8">
                We sent a 6-digit verification code via SMS. Enter it below to
                confirm your phone number.
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
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
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
                  {submitting ? "Verifying..." : "Verify & Submit"}
                </button>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setVerifyStep(false);
                      setOtpCode("");
                      setOtpError("");
                    }}
                    className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          ) : isContactStep ? (
            /* Contact Info Step */
            <div>
              <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Step {step + 1} of {totalSteps}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Last step — where should we reach you?
              </h3>
              <p className="text-white/50 mb-8">
                We&apos;ll use this to schedule your free strategy session.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Full Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    value={contactInfo.name}
                    onChange={(e) =>
                      setContactInfo((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500/50"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Email Address <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500/50"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Phone Number <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    minLength={7}
                    value={contactInfo.phone}
                    onChange={(e) =>
                      setContactInfo((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 transition-colors invalid:[&:not(:placeholder-shown)]:border-red-500/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <p className="text-white/30 text-xs">
                  <span className="text-brand-gold">*</span> All fields are required
                </p>

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
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Question Steps */
            <div>
              <p className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Step {step + 1} of {totalSteps}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {questions[step].question}
              </h3>
              <p className="text-white/30 text-sm mb-6">Select one to continue</p>

              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                      answers[questions[step].id] === option
                        ? "bg-brand-gold/10 border-brand-gold/40 text-white"
                        : "bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={goBack}
                  className="mt-6 text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
