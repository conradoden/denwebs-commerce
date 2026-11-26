"use client";

import { useEffect, useId } from "react";
import { site } from "@/content/site";

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, unknown>;
      q?: unknown[];
    };
  }
}

/** Inline Cal.com slot picker for the configured discovery event. */
export default function CalBooking({
  calLink = site.calLink,
  className = "",
}: {
  calLink?: string;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const elementId = `cal-booking-${uid}`;

  useEffect(() => {
    const init = () => {
      if (typeof window.Cal !== "function") return;
      window.Cal("init", { origin: "https://cal.com" });
      window.Cal("inline", {
        elementOrSelector: `#${elementId}`,
        calLink,
        layout: "month_view",
      });
      window.Cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    if (typeof window.Cal === "function") {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = init;
    document.head.appendChild(script);
  }, [calLink, elementId]);

  return (
    <div
      id={elementId}
      className={`w-full min-h-[620px] overflow-auto rounded-[3px] ${className}`}
    />
  );
}
