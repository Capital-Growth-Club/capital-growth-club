import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

/** Shared look for the /dscr-lenders funnel: landing, booking, thank-you. */

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Gold gradient text for the emphasised half of a headline. */
export function Accent({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`bg-clip-text text-transparent [box-decoration-break:clone] [-webkit-box-decoration-break:clone] ${
        light
          ? "bg-gradient-to-r from-[#BB9A65] via-[#E9DCB0] to-[#BB9A65]"
          : "bg-gradient-to-r from-[#8C6B2E] to-[#A4844A]"
      }`}
    >
      {children}
    </span>
  );
}

/** "54 qualified DSCR deals…" strip with the gold top edge. */
export function GuaranteeStrip() {
  return (
    <div className="relative mx-auto inline-block rounded-2xl border border-[#BB9A65]/50 bg-white px-6 py-4 shadow-[0_18px_40px_-18px_rgba(14,14,14,0.25)] before:absolute before:inset-x-6 before:top-0 before:h-[3px] before:rounded-b-full before:bg-gradient-to-r before:from-[#8C6B2E] before:via-[#E9DCB0] before:to-[#8C6B2E] md:px-9 md:py-5">
      <p className="text-lg font-extrabold tracking-[-0.015em] md:text-2xl">
        54 qualified DSCR deals in your first 90 days, <Accent>or you don&apos;t pay.</Accent>
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#BB9A65]/25 bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <Image src="/logo.png" alt="Capital Growth Club" width={480} height={141} className="h-8 w-auto" />
          <p className="text-sm text-[#5F594B]">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-[#8C6B2E]">Capital Growth Club</span>
          </p>
          <Link href="/terms" className="text-sm text-[#5F594B] hover:text-[#0E0E0E]">
            Terms &amp; Privacy
          </Link>
        </div>
        <div className="mt-10 space-y-4 text-xs leading-relaxed text-[#5F594B]/90">
          <p>
            <strong className="text-[#0E0E0E]/80">Earnings Disclaimer:</strong> Results may vary and testimonials are not claimed to represent typical results. All testimonials are real. These results are meant as a showcase of what the best, most motivated clients have done and should not be taken as average or typical results. You should assume that products, programs or personal recommendations made by Capital Growth Club may result in compensation paid to me by those I recommend. I recommend resources that I use myself, unless it specifically states that I do not use that resource. I do recommend many products and services to my clients which I do not use myself. If you would rather that I not be compensated for these recommendations, go to Google and search for the item and find a non-affiliate link to use. You should perform your own due diligence and use your own best judgment prior to making any investment decision pertaining to your business. By virtue of visiting this site or interacting with any portion of this site, you agree that you&apos;re fully responsible for the investments you make and any outcomes that may result.
          </p>
          <p>
            This site is not a part of the YouTube, Bing, Google or Facebook website; Google Inc, Microsoft Inc or Meta Inc. Additionally, this site is NOT endorsed by YouTube, Google, Bing or Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. YOUTUBE is a trademark of GOOGLE Inc. BING is a trademark of MICROSOFT Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
