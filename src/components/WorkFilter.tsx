"use client";

import { useState } from "react";
import type { CaseStudy } from "@/lib/types";
import CaseStudyCard from "./CaseStudyCard";

export default function WorkFilter({
  studies,
  filters,
}: {
  studies: CaseStudy[];
  filters: string[];
}) {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? studies
      : studies.filter(
          (s) => s.industry === active || s.tags.includes(active)
        );

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(f)}
              className={`rounded-[3px] border px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] transition-colors duration-200 ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <CaseStudyCard key={s.slug} study={s} />
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-12 text-muted">No case studies in this category yet.</p>
      )}
    </>
  );
}
