"use client";

import { useMemo, useState } from "react";
import type { CaseStudy, PortfolioProject } from "@/lib/types";
import CaseStudyCard from "./CaseStudyCard";
import PortfolioCard from "./PortfolioCard";

function matchesCategory(
  category: string,
  industry: string,
  tags: string[],
) {
  if (category === "All") return true;
  return industry === category || tags.includes(category);
}

export default function WorkFilter({
  studies,
  portfolio,
  filters,
}: {
  studies: CaseStudy[];
  portfolio: PortfolioProject[];
  filters: string[];
}) {
  const [active, setActive] = useState("All");

  const visibleStudies = useMemo(
    () =>
      studies.filter((s) => matchesCategory(active, s.industry, s.tags)),
    [active, studies],
  );

  const visiblePortfolio = useMemo(() => {
    if (active === "All") return portfolio;
    return portfolio.filter(
      (p) =>
        p.industry === active ||
        p.categories.includes(active) ||
        p.capabilities.some((c) => c.toLowerCase() === active.toLowerCase()),
    );
  }, [active, portfolio]);

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter work">
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

      {visibleStudies.length > 0 && (
        <div className="mt-12">
          <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
            Case studies · {visibleStudies.length}
          </p>
          <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleStudies.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        </div>
      )}

      <div className={visibleStudies.length > 0 ? "mt-16" : "mt-12"}>
        <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
          Portfolio · {visiblePortfolio.length} of {portfolio.length} projects
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visiblePortfolio.map((p) => (
            <PortfolioCard key={`${p.slug}-${p.url}`} project={p} />
          ))}
        </div>
        {visiblePortfolio.length === 0 && visibleStudies.length === 0 && (
          <p className="mt-8 text-muted">No projects in this category yet.</p>
        )}
      </div>
    </>
  );
}
