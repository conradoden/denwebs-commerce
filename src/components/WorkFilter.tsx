"use client";

import { useMemo, useState } from "react";
import type { CaseStudy, PortfolioProject } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
import { fmt } from "@/i18n/config";
import CaseStudyCard from "./CaseStudyCard";
import PortfolioCard from "./PortfolioCard";

export default function WorkFilter({
  studies,
  portfolio,
  filters,
  lang,
  common,
  labels,
}: {
  studies: CaseStudy[];
  portfolio: PortfolioProject[];
  filters: string[];
  lang: Locale;
  common: Messages["common"];
  labels: { empty: string; aria: string; caseStudies: string; portfolio: string };
}) {
  // filters[0] is the "show all" entry from localized content.
  const [active, setActive] = useState(filters[0]);
  const showAll = active === filters[0];

  const visibleStudies = useMemo(
    () =>
      showAll
        ? studies
        : studies.filter(
            (s) => s.industry === active || s.tags.includes(active),
          ),
    [showAll, active, studies],
  );

  const visiblePortfolio = useMemo(() => {
    if (showAll) return portfolio;
    return portfolio.filter(
      (p) =>
        p.industry === active ||
        p.categories.includes(active) ||
        (p.services || []).includes(active) ||
        p.capabilities.some((c) => c.toLowerCase() === active.toLowerCase()),
    );
  }, [showAll, active, portfolio]);

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label={labels.aria}>
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
            {fmt(labels.caseStudies, { count: visibleStudies.length })}
          </p>
          <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleStudies.map((s) => (
              <CaseStudyCard key={s.slug} study={s} lang={lang} common={common} />
            ))}
          </div>
        </div>
      )}

      <div className={visibleStudies.length > 0 ? "mt-16" : "mt-12"}>
        <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
          {fmt(labels.portfolio, {
            visible: visiblePortfolio.length,
            total: portfolio.length,
          })}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visiblePortfolio.map((p) => (
            <PortfolioCard key={`${p.slug}-${p.url}`} project={p} lang={lang} common={common} />
          ))}
        </div>
        {visiblePortfolio.length === 0 && visibleStudies.length === 0 && (
          <p className="mt-8 text-muted">{labels.empty}</p>
        )}
      </div>
    </>
  );
}
