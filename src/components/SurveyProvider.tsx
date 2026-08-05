"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import SurveyModal, { type QuestionSet } from "./SurveyModal";
import { track } from "@/lib/analytics";

const SurveyContext = createContext<() => void>(() => {});

export function useSurvey() {
  return useContext(SurveyContext);
}

export default function SurveyProvider({
  children,
  questionSet,
}: {
  children: ReactNode;
  questionSet?: QuestionSet;
}) {
  const [open, setOpen] = useState(false);
  const openSurvey = useCallback(() => {
    setOpen(true);
    track("form_open", { question_set: questionSet || "real-estate" });
  }, [questionSet]);

  return (
    <SurveyContext value={openSurvey}>
      {children}
      <SurveyModal open={open} onClose={() => setOpen(false)} questionSet={questionSet} />
    </SurveyContext>
  );
}
