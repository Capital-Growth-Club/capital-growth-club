import type { Metadata } from "next";
import { Suspense } from "react";
import QualifiedClient from "./QualifiedClient";

export const metadata: Metadata = {
  title: "You Qualified — Book Your Call",
  description:
    "Congrats — you qualify. Book a call with one of our Cold Acquisition Advisors.",
  robots: { index: false, follow: false },
};

export default function QualifiedPage() {
  return (
    <Suspense fallback={null}>
      <QualifiedClient />
    </Suspense>
  );
}
