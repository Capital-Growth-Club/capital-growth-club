"use client";

import { useSurvey } from "./SurveyProvider";
import { track } from "@/lib/analytics";

export default function SurveyButton({
  children,
  className = "",
  location,
}: {
  children: React.ReactNode;
  className?: string;
  location?: string;
}) {
  const openSurvey = useSurvey();
  const handleClick = () => {
    track("cta_click", {
      location: location || "unspecified",
      label:
        typeof children === "string"
          ? children
          : undefined,
      page_path:
        typeof window !== "undefined" ? window.location.pathname : "",
    });
    openSurvey();
  };
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
