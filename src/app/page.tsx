import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capital Growth Club | Cold Client Acquisition for Service Businesses",
  description:
    "We build cold client acquisition systems for private lenders and real estate agents. Select which one you are to learn more.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black relative overflow-hidden flex flex-col">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-1/4 w-[700px] h-[700px] bg-brand-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Logo */}
      <header className="relative pt-10 px-6">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Capital Growth Club"
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </div>
      </header>

      {/* Gate */}
      <section className="relative flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Before You Go Any Further
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
            Let's make sure you're in the right place.{" "}
            <span className="gradient-text">Select which one you are.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            <Link
              href="/lenders"
              className="card-dark p-8 md:p-10 group transition-all duration-300 hover:border-brand-gold/40 hover:bg-brand-card/80 flex flex-col items-center justify-center gap-4 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M4 22h20M5 22V11l9-6 9 6v11M10 22v-6h8v6M9 11h10"
                    stroke="#BB9A65"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">
                I'm a Private Lender
              </span>
              <span className="text-white/40 text-sm flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                Continue
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/agents"
              className="card-dark p-8 md:p-10 group transition-all duration-300 hover:border-brand-gold/40 hover:bg-brand-card/80 flex flex-col items-center justify-center gap-4 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M14 3l11 9v13H3V12l11-9zM10 25v-8h8v8"
                    stroke="#BB9A65"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="14" cy="14" r="1.5" fill="#BB9A65" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">
                I'm a Real Estate Agent
              </span>
              <span className="text-white/40 text-sm flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                Continue
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6">
        <p className="text-center text-white/30 text-sm">
          &copy; 2026 Capital Growth Club. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
