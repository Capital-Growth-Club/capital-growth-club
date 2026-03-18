"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "How long have you been in business?",
    options: [
      { label: "Less than 6 months", points: 1 },
      { label: "6 months – 1 year", points: 2 },
      { label: "1 – 3 years", points: 4 },
      { label: "3+ years", points: 5 },
    ],
  },
  {
    question: "Do you currently have paying customers or clients?",
    options: [
      { label: "No, not yet", points: 1 },
      { label: "A handful", points: 2 },
      { label: "Yes, consistently", points: 4 },
      { label: "Strong recurring base", points: 5 },
    ],
  },
  {
    question: "Do people in your market know solutions like yours exist?",
    options: [
      { label: "No, it's a brand new concept", points: 1 },
      { label: "Somewhat, still educating them", points: 2 },
      { label: "Yes, they know and shop around", points: 4 },
      { label: "Yes, it's a crowded market", points: 5 },
    ],
  },
  {
    question:
      "Do you have an existing audience? (email list, social, past customers, website traffic)",
    options: [
      { label: "None at all", points: 1 },
      { label: "Small — under 500 people", points: 2 },
      { label: "Medium — 500 to 5,000", points: 4 },
      { label: "Large — 5,000+", points: 5 },
    ],
  },
  {
    question:
      "Do you have proof? (results, testimonials, case studies, numbers)",
    options: [
      { label: "None yet", points: 1 },
      { label: "A couple informal reviews", points: 2 },
      { label: "Some solid case studies", points: 4 },
      { label: "Strong, specific proof with numbers", points: 5 },
    ],
  },
  {
    question: "What's your monthly ad budget?",
    options: [
      { label: "Under $500", points: 1 },
      { label: "$500 – $1,500", points: 2 },
      { label: "$1,500 – $5,000", points: 4 },
      { label: "$5,000+", points: 5 },
    ],
  },
  {
    question: "What happens after someone clicks your ad?",
    options: [
      { label: "Not sure yet / nothing built", points: 1 },
      { label: "They fill out a form or book a call", points: 3 },
      { label: "They land on an optimized funnel", points: 4 },
      { label: "Direct purchase — fully automated", points: 5 },
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentStep) / questions.length) * 100;
  const isLastQuestion = currentStep === questions.length - 1;

  const handleSelect = useCallback(
    (points: number, optionIndex: number) => {
      if (transitioning) return;
      setSelectedIndex(optionIndex);
      setTransitioning(true);

      const newAnswers = [...answers, points];
      setAnswers(newAnswers);

      if (isLastQuestion) {
        setTimeout(() => {
          setShowResults(true);
          setTransitioning(false);
        }, 300);
      } else {
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
          setSelectedIndex(null);
          setTransitioning(false);
        }, 300);
      }
    },
    [answers, isLastQuestion, transitioning]
  );

  const handleSeeResults = () => {
    const totalScore = answers.reduce((sum, pts) => sum + pts, 0);
    router.push(
      `/5-levels-of-awareness-quiz/results?score=${totalScore}`
    );
  };

  const q = questions[currentStep];

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="px-6 pt-8 pb-4 max-w-2xl mx-auto w-full">
          <p className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase mb-6 text-center">
            Levels of Awareness Quiz
          </p>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-brand-card rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${showResults ? 100 : progress}%`,
                background:
                  "linear-gradient(135deg, #BB9A65 0%, #FFFCD8 100%)",
              }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-brand-muted text-xs">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-brand-muted text-xs">
              {Math.round(showResults ? 100 : progress)}%
            </span>
          </div>
        </div>

        {/* Question area */}
        <div className="flex-1 flex items-center justify-center px-6 pb-12">
          <div className="max-w-2xl w-full">
            {!showResults ? (
              <div
                key={currentStep}
                className="animate-fade-in"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                  {q.question}
                </h2>

                <div className="grid gap-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.points, i)}
                      disabled={transitioning}
                      className={`w-full text-left px-6 py-5 rounded-xl border transition-all duration-200 cursor-pointer group
                        ${
                          selectedIndex === i
                            ? "border-brand-gold bg-brand-gold/10 scale-[1.02]"
                            : "border-white/[0.08] bg-brand-card hover:border-brand-gold/40 hover:bg-brand-card/80"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200
                            ${
                              selectedIndex === i
                                ? "border-brand-gold bg-brand-gold"
                                : "border-white/20 group-hover:border-brand-gold/50"
                            }
                          `}
                        >
                          {selectedIndex === i && (
                            <svg
                              className="w-4 h-4 text-brand-black"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`text-base md:text-lg transition-colors duration-200 ${
                            selectedIndex === i
                              ? "text-white font-medium"
                              : "text-brand-grey group-hover:text-white"
                          }`}
                        >
                          {opt.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* See Results state */
              <div className="animate-fade-in text-center">
                <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-brand-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Quiz Complete!
                </h2>
                <p className="text-brand-muted text-lg mb-10 max-w-md mx-auto">
                  We&apos;ve analyzed your answers. Ready to see which
                  awareness level you should target first?
                </p>
                <button onClick={handleSeeResults} className="btn-primary text-lg">
                  See My Results
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
