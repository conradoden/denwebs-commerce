"use client";

import { useMemo, useState } from "react";
import type { PortfolioProject } from "@/lib/types";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({
  projects,
  filters,
}: {
  projects: PortfolioProject[];
  filters: readonly string[] | string[];
}) {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(
      (p) =>
        p.categories.includes(active) ||
        p.industry === active ||
        p.capabilities.some((c) => c.toLowerCase().includes(active.toLowerCase())),
    );
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter portfolio">
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

      <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
        Showing {visible.length} of {projects.length} storefronts
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p) => (
          <PortfolioCard key={`${p.slug}-${p.url}`} project={p} />
        ))}
      </div>
    </div>
  );
}
