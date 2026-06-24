import type { Metadata } from "next";
import { Suspense } from "react";
import QualifiedAgentsClient from "./QualifiedAgentsClient";

export const metadata: Metadata = {
  title: "You Qualified — Book Your Call",
  description:
    "Congrats — you qualify. Book a call with one of our Cold Acquisition Advisors.",
  robots: { index: false, follow: false },
};

export default function QualifiedAgentsPage() {
  return (
    <Suspense fallback={null}>
      <QualifiedAgentsClient />
    </Suspense>
  );
}
