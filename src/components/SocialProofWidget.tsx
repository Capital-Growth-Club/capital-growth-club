"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";

// 75 names — deep enough that no name repeats even in a 15-minute session
// at max frequency (~56 shows worst case).
const NAMES = [
  "Sarah M.", "David K.", "Michael R.", "Jennifer L.", "Chris B.",
  "Amanda S.", "Robert H.", "Nicole P.", "Anthony C.", "Ashley T.",
  "Kevin D.", "Rachel W.", "Justin M.", "Stephanie G.", "Brandon N.",
  "Melissa F.", "Ryan O.", "Katie V.", "Nick H.", "Erin A.",
  "Jason B.", "Kimberly J.", "Steven P.", "Lauren D.", "Emily H.",
  "Matt R.", "Rebecca T.", "Josh P.", "Danielle K.", "Adam W.",
  "Christina L.", "Tyler J.", "Meagan S.", "Aaron B.", "Michelle D.",
  "Cody M.", "Alexis F.", "Trevor N.", "Vanessa G.", "Blake H.",
  "Kelsey O.", "Zach P.", "Angela V.", "Derek A.", "Samantha C.",
  "Marcus T.", "Erica L.", "Jared K.", "Britt R.", "Nathan D.",
  "Whitney G.", "Cole P.", "Alicia M.", "Devin S.", "Julie H.",
  "Grant N.", "Bethany F.", "Tim W.", "Kayla J.", "Scott O.",
  "Hannah B.", "Peter M.", "Julia R.", "Colby T.", "Morgan K.",
  "Wesley D.", "Kelly F.", "Preston C.", "Cassidy N.", "Owen H.",
  "Sabrina P.", "Landon G.", "Emma B.", "Trent A.", "Riley J.",
];

const CITIES = [
  "Frisco, TX", "Scottsdale, AZ", "Naples, FL", "Charleston, SC",
  "Nashville, TN", "Plano, TX", "Chandler, AZ", "Boise, ID",
  "Bentonville, AR", "Franklin, TN", "Park City, UT", "Sarasota, FL",
  "Colorado Springs, CO", "Cary, NC", "Fort Collins, CO", "Reno, NV",
  "Round Rock, TX", "Overland Park, KS", "Austin, TX", "Raleigh, NC",
  "Charlotte, NC", "Tampa, FL", "Denver, CO", "Salt Lake City, UT",
  "Las Vegas, NV", "Atlanta, GA", "Orlando, FL", "Fort Worth, TX",
  "Kansas City, MO", "Boulder, CO", "Bend, OR", "Asheville, NC",
  "Savannah, GA", "Greenville, SC", "Grand Rapids, MI",
];

// Timing (ms) — first show after page load, then jittered gap between shows.
const FIRST_DELAY_MIN = 3_000;
const FIRST_DELAY_MAX = 10_000;
const REPEAT_DELAY_MIN = 12_000;
const REPEAT_DELAY_MAX = 20_000;
const SHOW_DURATION_MS = 6_000;

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

// Pick a value that hasn't been shown yet this session. Resets once every
// value in the pool has been used, so we cycle through the whole list before
// repeating any.
const pickUnique = (pool: readonly string[], shown: Set<string>): string => {
  const available = pool.filter((v) => !shown.has(v));
  const source = available.length > 0 ? available : (shown.clear(), pool);
  const chosen = source[Math.floor(Math.random() * source.length)];
  shown.add(chosen);
  return chosen;
};

export default function SocialProofWidget() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [minutesAgo, setMinutesAgo] = useState(0);
  const shownNamesRef = useRef<Set<string>>(new Set());
  const shownCitiesRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;

    let showTimer: ReturnType<typeof setTimeout> | null = null;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let disposed = false;

    const showOne = () => {
      if (disposed) return;
      const n = pickUnique(NAMES, shownNamesRef.current);
      const c = pickUnique(CITIES, shownCitiesRef.current);
      const m = rand(2, 28);
      setName(n);
      setCity(c);
      setMinutesAgo(m);
      setVisible(true);
      track("social_proof_shown", { proof_name: n, proof_city: c });

      hideTimer = setTimeout(() => {
        if (disposed) return;
        setVisible(false);
        showTimer = setTimeout(
          showOne,
          rand(REPEAT_DELAY_MIN, REPEAT_DELAY_MAX)
        );
      }, SHOW_DURATION_MS);
    };

    showTimer = setTimeout(showOne, rand(FIRST_DELAY_MIN, FIRST_DELAY_MAX));

    return () => {
      disposed = true;
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const initial = name.charAt(0);

  return (
    <div
      className={`fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 max-w-[280px] md:max-w-xs transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      aria-hidden={!visible}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white rounded-xl border border-neutral-200 shadow-lg shadow-neutral-900/10 px-4 py-3 flex items-center gap-3">
        <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brand-gold to-[#D4B87A] flex items-center justify-center text-neutral-900 font-bold text-sm">
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-neutral-900 leading-tight">
            {name || " "}
          </p>
          <p className="text-xs text-neutral-600 leading-tight mt-0.5">
            booked a strategy call from {city}
          </p>
          <p className="text-[10px] text-neutral-400 leading-tight mt-1">
            {minutesAgo} min ago
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="shrink-0 w-5 h-5 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 flex items-center justify-center transition-colors"
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 2l8 8M10 2l-8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
