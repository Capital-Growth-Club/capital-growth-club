"use client";

/**
 * Real User Monitoring — captures Core Web Vitals from actual visitors and
 * fires them to GA4 (via track()) as `web_vital` events. Turns the "what does
 * Lighthouse THINK the LCP is" question into "what LCP are real users on real
 * networks/devices actually seeing."
 *
 * One event per metric per pageload — final measured value only. Attaches
 * connection type, device memory, and CPU core count so we can slice by
 * device class in BigQuery.
 */

import { useEffect } from "react";
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";
import { track } from "@/lib/analytics";

type NavigatorWithConnection = Navigator & {
  connection?: { effectiveType?: string; downlink?: number; rtt?: number };
  deviceMemory?: number;
};

export default function WebVitalsTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const nav = navigator as NavigatorWithConnection;
    const conn = nav.connection;

    const send = (m: Metric) => {
      // CLS is a unitless ratio; everything else is milliseconds. Round for readability.
      const value =
        m.name === "CLS"
          ? Math.round(m.value * 1000) / 1000
          : Math.round(m.value);

      track("web_vital", {
        metric_name: m.name,
        metric_value: value,
        metric_value_num: value,
        metric_rating: m.rating,
        metric_id: m.id,
        metric_delta:
          m.name === "CLS"
            ? Math.round(m.delta * 1000) / 1000
            : Math.round(m.delta),
        page_path: window.location.pathname,
        connection_type: conn?.effectiveType || "unknown",
        connection_downlink: conn?.downlink ?? 0,
        connection_rtt: conn?.rtt ?? 0,
        device_memory_gb: nav.deviceMemory ?? 0,
        cpu_cores: navigator.hardwareConcurrency ?? 0,
      });
    };

    onLCP(send);
    onCLS(send);
    onINP(send);
    onFCP(send);
    onTTFB(send);
  }, []);

  return null;
}
