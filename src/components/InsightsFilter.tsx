"use client";

import { useState } from "react";
import Link from "next/link";
import type { Insight } from "@/lib/types";
import { localize, type Locale } from "@/i18n/config";

export default function InsightsFilter({
  posts,
  categories,
  lang,
  labels,
  dateLocale,
}: {
  posts: Insight[];
  categories: string[];
  lang: Locale;
  labels: { all: string; empty: string; aria: string };
  dateLocale: string;
}) {
  const allFilters = [labels.all, ...categories];
  const [active, setActive] = useState(labels.all);

  const visible =
    active === labels.all ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label={labels.aria}>
        {allFilters.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(c)}
              className={`rounded-[3px] border px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] transition-colors duration-200 ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={localize(`/insights/${post.slug}`, lang)}
            className="group flex h-full flex-col rounded-[5px] border border-line bg-paper-dim p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(14,18,24,0.3)]"
          >
            <p className="eyebrow">{post.category}</p>
            <h2 className="mt-4 font-display text-xl font-bold leading-snug tracking-[-0.01em] group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px]">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <p className="mt-6 font-mono text-[12px] text-muted">
              {new Date(post.date).toLocaleDateString(dateLocale, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readTime} <span className="arrow-slide ml-1">→</span>
            </p>
          </Link>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-12 text-muted">{labels.empty}</p>
      )}
    </>
  );
}
