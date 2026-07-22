import type { Metadata } from "next";
import { Suspense } from "react";
import QualifiedClient from "./QualifiedClient";

export const metadata: Metadata = {
  title: "You Qualified — Book Your Strategy Call",
  description:
    "Congrats — you qualify for our done-for-you cold client acquisition program. Book a call with one of our Cold Acquisition Advisors.",
  openGraph: {
    title: "You Qualified — Book Your Strategy Call | Capital Growth Club",
    description:
      "You qualified for our done-for-you cold client acquisition program. Book a call with one of our Cold Acquisition Advisors.",
    url: "https://capitalgrowthclub.com/qualified",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You Qualified — Book Your Strategy Call | Capital Growth Club",
    description:
      "You qualified. Book a call with one of our Cold Acquisition Advisors.",
  },
  robots: { index: false, follow: false },
};

export default function QualifiedPage() {
  return (
    <Suspense fallback={null}>
      <QualifiedClient />
    </Suspense>
  );
}
