"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SurveyButton from "./SurveyButton";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-brand-black/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Capital Growth Club"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden sm:inline text-white/60 text-sm font-light border-l border-white/10 pl-3">
            Capital Growth Club
          </span>
        </a>

        <SurveyButton className="btn-primary !py-3 !px-6 !text-sm">
          Apply And Book Call
        </SurveyButton>
      </div>
    </nav>
  );
}
