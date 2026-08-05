import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import QualifiedAgentsClient from "./QualifiedAgentsClient";

const editorialSerif = localFont({
  src: "../../../public/fonts/maison-galliard-serif.otf",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-editorial",
});

const helveticaBold = localFont({
  src: "../../../public/fonts/HelveticaNeueBold.otf",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Book Your Strategy Call — Capital Growth Club",
  description:
    "Pick an open time below to book your strategy call with the Capital Growth Club team.",
  openGraph: {
    title: "Book Your Strategy Call | Capital Growth Club",
    description:
      "Pick an open time below to book your strategy call with the Capital Growth Club team.",
    url: "https://capitalgrowthclub.com/qualified-agents",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Strategy Call | Capital Growth Club",
    description:
      "Pick an open time below to book your strategy call.",
  },
  robots: { index: false, follow: false },
};

export default function QualifiedAgentsPage() {
  return (
    <div className={`${helveticaBold.variable} ${editorialSerif.variable}`}>
      <Suspense fallback={null}>
        <QualifiedAgentsClient />
      </Suspense>
    </div>
  );
}
