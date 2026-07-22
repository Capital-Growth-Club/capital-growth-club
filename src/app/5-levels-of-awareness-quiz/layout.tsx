import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Levels of Awareness Quiz",
  description:
    "Find out which awareness level to target first with your ads. Take the free quiz and get a custom action plan for your business.",
  openGraph: {
    title: "5 Levels of Awareness Quiz | Capital Growth Club",
    description:
      "Find out which awareness level to target first with your ads. Take the free quiz and get a custom action plan for your business.",
    url: "https://capitalgrowthclub.com/5-levels-of-awareness-quiz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Levels of Awareness Quiz | Capital Growth Club",
    description:
      "Find out which awareness level to target first with your ads. Take the free quiz and get a custom action plan.",
  },
  alternates: {
    canonical: "https://capitalgrowthclub.com/5-levels-of-awareness-quiz",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
