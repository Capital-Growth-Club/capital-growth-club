import type { Metadata } from "next";
import { Suspense } from "react";
import QualifiedClient from "./QualifiedClient";

export const metadata: Metadata = {
  title: "You Qualify — Capital Growth Club",
  description: "Book your strategy call with Capital Growth Club.",
};

export default function QualifiedPage() {
  return (
    <Suspense fallback={null}>
      <QualifiedClient />
    </Suspense>
  );
}
