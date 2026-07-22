import type { Metadata } from "next";
import { Suspense } from "react";
import QualifiedAgentsClient from "./QualifiedAgentsClient";

export const metadata: Metadata = {
  title: "You Qualified — Book Your Real Estate Business In A Box Call",
  description:
    "Congrats — you qualify for Real Estate Business In A Box. Book a call with one of our Cold Acquisition Advisors to get set up.",
  openGraph: {
    title: "You Qualified — Real Estate Business In A Box | Capital Growth Club",
    description:
      "You qualified for Real Estate Business In A Box. Book a call with one of our Cold Acquisition Advisors.",
    url: "https://capitalgrowthclub.com/qualified-agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You Qualified — Real Estate Business In A Box | Capital Growth Club",
    description:
      "You qualified. Book a call with one of our Cold Acquisition Advisors.",
  },
  robots: { index: false, follow: false },
};

export default function QualifiedAgentsPage() {
  return (
    <Suspense fallback={null}>
      <QualifiedAgentsClient />
    </Suspense>
  );
}
