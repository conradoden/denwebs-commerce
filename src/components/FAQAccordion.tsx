"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q}>
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-semibold tracking-[-0.01em] md:text-xl">
                  {faq.q}
                </span>
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                aria-hidden="true"
                className={`mt-1 shrink-0 self-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div
              id={`faq-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-7 pl-9 pr-10 text-[15px] leading-relaxed text-muted md:pl-9">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
