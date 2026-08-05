"use client";

import { useEffect } from "react";
import { captureFromUrl } from "@/lib/click-ids";

export default function ClickIdCapture() {
  useEffect(() => {
    captureFromUrl();
  }, []);
  return null;
}
