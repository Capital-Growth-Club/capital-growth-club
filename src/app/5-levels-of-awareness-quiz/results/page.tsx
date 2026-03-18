"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useMemo } from "react";

interface Result {
  level: number;
  label: string;
  headline: string;
  summary: string;
  actions: string[];
}

const results: { min: number; max: number; data: Result }[] = [
  {
    min: 7,
    max: 14,
    data: {
      level: 5,
      label: "Completely Unaware",
      headline: "Plant the seed. Don't sell yet.",
      summary:
        "Your market doesn't know they have a problem yet. Don't waste budget trying to capture leads at this stage — they're not ready. The only job of these ads is to interrupt their scroll and introduce a problem they didn't know they had. Time and repetition will move them into Level 4 naturally, where your next campaign picks them up.",
      actions: [
        "Run curiosity-driven cold traffic ads only — no hard CTA",
        "Do NOT push a lead magnet here — they won't convert and it wastes spend",
        "Let the ad do one job: make them aware a problem exists",
        "Set up your Level 4 campaign in parallel so it catches them when they're ready",
      ],
    },
  },
  {
    min: 15,
    max: 21,
    data: {
      level: 4,
      label: "Problem Aware",
      headline: "Lead with the pain. This is your best lead magnet audience.",
      summary:
        "These people already feel the problem — which means they are motivated to take action. You don't need a big brand presence or a warm audience to convert them. A well-placed lead magnet that speaks directly to their frustration will outperform almost anything else at this stage. They're the most likely to hand over their email or even a small payment just to get relief.",
      actions: [
        "Run pain-driven cold ads that name their exact frustration (Level 4 hooks)",
        "Send them to a lead magnet that promises a specific solution to that pain (checklist, guide, mini course, quiz)",
        "Nurture leads with emails that bridge from problem → solution → your offer",
        "Retarget non-converters with promise-driven messaging (Level 3)",
      ],
    },
  },
  {
    min: 22,
    max: 27,
    data: {
      level: 3,
      label: "Solution Aware",
      headline:
        "Lead with the outcome. They're ready to pick a solution.",
      summary:
        "You have proof, an audience, and a real sales process. Your market knows solutions exist — now you need to position yours as the best one.",
      actions: [
        "Run promise-driven cold ads with a clear outcome and timeframe (Level 3)",
        "Layer in proof-driven retargeting for warm audiences (Level 2)",
        "Close hot audiences with an irresistible offer (Level 1)",
        "A/B test your hook angle — specificity wins at this stage",
      ],
    },
  },
  {
    min: 28,
    max: 35,
    data: {
      level: 2,
      label: "Product Aware",
      headline:
        "Lead with proof. They know you exist — now convince them.",
      summary:
        "You're established. People know you or know of you. Your cold audience needs to see why you're the obvious choice. Your warm audience is ready for an offer.",
      actions: [
        "Run proof-driven cold ads with specific results (Level 2 hooks)",
        "Hit warm retarget audiences with offer-driven ads (Level 1)",
        "Test curiosity hooks to reach brand new cold audiences (Level 5)",
        "Run all 3 campaign layers simultaneously — you have the budget and proof",
      ],
    },
  },
];

const allLevels = [
  { level: 5, label: "Completely Unaware" },
  { level: 4, label: "Problem Aware" },
  { level: 3, label: "Solution Aware" },
  { level: 2, label: "Product Aware" },
  { level: 1, label: "Most Aware" },
];

const confettiColors = [
  "#BB9A65",
  "#FFFCD8",
  "#C9AE84",
  "#D6C2A3",
  "#967B51",
  "#E8D5B5",
  "#F5E6C8",
];

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const score = parseInt(searchParams.get("score") || "0", 10);
  const result = results.find((r) => score >= r.min && score <= r.max)?.data;

  // Generate confetti once with useMemo so it doesn't re-randomize on re-renders
  const confettiParticles = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        width: `${6 + Math.random() * 10}px`,
        height: `${6 + Math.random() * 10}px`,
        backgroundColor: confettiColors[i % confettiColors.length],
        animationDuration: `${2 + Math.random() * 4}s`,
        animationDelay: `${Math.random() * 3}s`,
        drift: `${-50 + Math.random() * 100}px`,
        rotation: `${360 + Math.random() * 720}deg`,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      })),
    []
  );

  const burstLeft = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        left: `${Math.random() * 15}%`,
        width: `${5 + Math.random() * 8}px`,
        height: `${5 + Math.random() * 8}px`,
        backgroundColor: confettiColors[i % confettiColors.length],
        animationDuration: `${1.5 + Math.random() * 2.5}s`,
        animationDelay: `${Math.random() * 1.5}s`,
        burstX: `${20 + Math.random() * 80}px`,
        burstY: `${-150 - Math.random() * 300}px`,
        rotation: `${360 + Math.random() * 720}deg`,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      })),
    []
  );

  const burstRight = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        right: `${Math.random() * 15}%`,
        width: `${5 + Math.random() * 8}px`,
        height: `${5 + Math.random() * 8}px`,
        backgroundColor: confettiColors[i % confettiColors.length],
        animationDuration: `${1.5 + Math.random() * 2.5}s`,
        animationDelay: `${Math.random() * 1.5}s`,
        burstX: `${-20 - Math.random() * 80}px`,
        burstY: `${-150 - Math.random() * 300}px`,
        rotation: `${360 + Math.random() * 720}deg`,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      })),
    []
  );

  if (!result) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Invalid score
          </h2>
          <button
            onClick={() => router.push("/5-levels-of-awareness-quiz")}
            className="btn-primary"
          >
            Take the Quiz
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black relative overflow-hidden">
      {/* Confetti - falling */}
      {confettiParticles.map((p, i) => (
        <div
          key={`main-${i}`}
          className="confetti-particle"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            ["--drift" as string]: p.drift,
            ["--rotation" as string]: p.rotation,
            borderRadius: p.borderRadius,
          }}
        />
      ))}

      {/* Corner burst - bottom left */}
      {burstLeft.map((p, i) => (
        <div
          key={`bl-${i}`}
          className="confetti-burst-left"
          style={{
            left: p.left,
            bottom: "0%",
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            ["--burst-x" as string]: p.burstX,
            ["--burst-y" as string]: p.burstY,
            ["--rotation" as string]: p.rotation,
            borderRadius: p.borderRadius,
            position: "absolute" as const,
          }}
        />
      ))}

      {/* Corner burst - bottom right */}
      {burstRight.map((p, i) => (
        <div
          key={`br-${i}`}
          className="confetti-burst-right"
          style={{
            right: p.right,
            bottom: "0%",
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            ["--burst-x" as string]: p.burstX,
            ["--burst-y" as string]: p.burstY,
            ["--rotation" as string]: p.rotation,
            borderRadius: p.borderRadius,
            position: "absolute" as const,
          }}
        />
      ))}

      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 py-12 max-w-2xl mx-auto">
        {/* Score badge */}
        <div className="text-center mb-10 animate-fade-in">
          <p className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase mb-6">
            Your Result
          </p>
          <div className="inline-flex items-center gap-3 bg-brand-card border border-brand-gold/20 rounded-full px-6 py-3 mb-6">
            <span className="text-brand-gold text-2xl font-bold">
              {score}
            </span>
            <span className="text-brand-muted text-sm">/35</span>
          </div>
        </div>

        {/* Level indicator */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="bg-brand-card border border-white/[0.06] rounded-2xl p-6">
            <div className="flex flex-col gap-2">
              {allLevels.map((lvl) => (
                <div
                  key={lvl.level}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    lvl.level === result.level
                      ? "bg-brand-gold/10 border border-brand-gold/30"
                      : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      lvl.level === result.level
                        ? "gradient-bg text-brand-black"
                        : "bg-white/5 text-brand-muted"
                    }`}
                  >
                    {lvl.level}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      lvl.level === result.level
                        ? "text-white"
                        : "text-brand-muted"
                    }`}
                  >
                    Level {lvl.level}: {lvl.label}
                  </span>
                  {lvl.level === result.level && (
                    <div className="ml-auto">
                      <span className="gradient-text text-xs font-bold tracking-wider uppercase">
                        You are here
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result card */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-brand-card border border-white/[0.06] rounded-2xl p-8 mb-8">
            {/* Level tag */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <div className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                Level {result.level} — {result.label}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {result.headline}
            </h1>

            <p className="text-brand-grey text-base leading-relaxed mb-8">
              {result.summary}
            </p>

            {/* Action plan */}
            <div>
              <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-brand-gold mb-5">
                Your Action Plan
              </h3>
              <div className="grid gap-3">
                {result.actions.map((action, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4"
                  >
                    <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-black text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-brand-grey text-sm leading-relaxed">
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Audience strategy section */}
          <div
            className="bg-brand-card border border-white/[0.06] rounded-2xl p-8 mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                The Bigger Picture
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
              Your score tells you where to start — not where to stop.
            </h3>

            <p className="text-brand-grey text-sm leading-relaxed mb-6">
              {result.level >= 4
                ? "Even though you're starting at the bottom of the awareness ladder, this is exactly where the biggest opportunities live. Every business — no matter how established — needs cold traffic campaigns running at Levels 4 and 5. New customers who need your product or service enter the market every single day. You will never run out of people to reach with ads. The only thing that changes is volume — it fluctuates seasonally, but the demand never disappears."
                : "A high score doesn't mean you only run ads at the top of the awareness ladder. The biggest mistake established businesses make is ignoring cold traffic. New customers who need your product or service enter the market every single day. You will never run out of people to reach with ads. The only thing that changes is volume — it fluctuates seasonally, but the demand never disappears. Your job is to build campaigns across multiple awareness levels so you're always filling the top of the funnel while converting the bottom."}
            </p>

            <h4 className="text-sm font-medium tracking-[0.15em] uppercase text-brand-gold mb-4">
              How to Build Your Audience Layers in Meta Ads
            </h4>

            <div className="grid gap-3 mb-6">
              <div className="flex gap-4 items-start bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-gold text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Export your buyer list from your CRM</p>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    Upload your past customers and closed deals as a Custom Audience in Meta. These are your highest-value people — they already trust you and bought from you. Use this audience to create Lookalike Audiences that find more people just like them.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-gold text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Create Lookalike Audiences (1%–3%)</p>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    A 1% Lookalike of your buyer list is the closest match to your existing customers. This is your best cold traffic audience. Start here for Level 4 and 5 campaigns — these people look like buyers but don&apos;t know you yet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-gold text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Build retargeting audiences by engagement</p>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    Create audiences based on who watched your video ads (25%, 50%, 75%), who visited your landing page, and who engaged with your page or ads. Each of these groups is at a different awareness level — and should see different messaging.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white/[0.02] border border-white/[0.04] rounded-xl px-5 py-4">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-gold text-xs font-bold">4</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Layer your campaigns across awareness levels</p>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    Run cold traffic at the bottom (Levels 5 &amp; 4) to fill the funnel. Retarget engagers with solution and proof-driven ads (Levels 3 &amp; 2). Close warm audiences with direct offers (Level 1). Every layer feeds the next — this is how you scale without burning out your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold/[0.06] border border-brand-gold/10 rounded-xl px-5 py-4">
              <p className="text-brand-grey text-sm leading-relaxed">
                <span className="text-brand-gold font-medium">Remember:</span> No business should only target the top awareness levels. The goal is to always have campaigns running across multiple levels so that as new people enter your market, your ads are there to meet them — and your retargeting moves them up the ladder until they buy.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => router.push("/5-levels-of-awareness-quiz")}
              className="btn-secondary flex-1 text-center"
            >
              Retake the Quiz
            </button>
            <button
              onClick={handleShare}
              className="btn-primary flex-1 flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  Share Your Result
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-brand-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
