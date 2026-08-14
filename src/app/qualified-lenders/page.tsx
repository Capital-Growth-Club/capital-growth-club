import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import QualifiedLendersClient from "./QualifiedLendersClient";

const editorialSerif = localFont({
  src: "../../../public/fonts/maison-galliard-serif.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-editorial",
});

const helveticaBold = localFont({
  src: "../../../public/fonts/HelveticaNeueBold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Book Your Lending Strategy Call — Capital Growth Club",
  description:
    "Pick an open time below to book your lending strategy call with the Capital Growth Club team.",
  openGraph: {
    title: "Book Your Lending Strategy Call | Capital Growth Club",
    description:
      "Pick an open time below to book your lending strategy call with the Capital Growth Club team.",
    url: "https://capitalgrowthclub.com/qualified-lenders",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Lending Strategy Call | Capital Growth Club",
    description: "Pick an open time below to book your lending strategy call.",
  },
  robots: { index: false, follow: false },
};

export default function QualifiedLendersPage() {
  return (
    <div className={`${helveticaBold.variable} ${editorialSerif.variable}`}>
      <Suspense fallback={null}>
        <QualifiedLendersClient />
      </Suspense>
    </div>
  );
}
