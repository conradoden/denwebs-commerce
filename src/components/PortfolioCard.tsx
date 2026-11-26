"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { PortfolioProject } from "@/lib/types";
import { localize, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

const industryAccent: Record<string, string> = {
  Jewelry: "#e3c87f",
  Fashion: "#9fb6d8",
  Beauty: "#d8a7c3",
  "Food & Beverage": "#e0b878",
  Fitness: "#8fb98a",
  Outdoor: "#8fb98a",
  "Health & Wellness": "#7ec8a3",
  "Health & Medical": "#8ec9c2",
  Flowers: "#d8a7c3",
  Pets: "#c4a484",
  B2B: "#8ec9c2",
  CRO: "#5b8cff",
  Marketing: "#6b8cae",
  Consulting: "#7a8a9a",
  AI: "#6a9cff",
  CRM: "#8ec9c2",
  Operations: "#94a3b8",
  Development: "#94a3b8",
  DTC: "#94a3b8",
};

function screenshotUrl(url: string) {
  return `https://image.thum.io/get/width/960/crop/600/noanimate/${url}`;
}

export default function PortfolioCard({
  project,
  lang,
  common,
}: {
  project: PortfolioProject;
  lang: Locale;
  common: Messages["common"];
}) {
  const href = project.caseStudySlug
    ? localize(`/work/${project.caseStudySlug}`, lang)
    : project.url;
  const external = !project.caseStudySlug;
  const accent =
    industryAccent[project.services?.[0] || ""] ||
    industryAccent[project.industry] ||
    "#5b8cff";
  const [imgFailed, setImgFailed] = useState(false);
  const imgSrc = project.image ?? screenshotUrl(project.url);
  const primaryService = project.services?.[0] || project.categories[0] || project.industry;

  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-dim">
        {!imgFailed ? (
          <Image
            src={imgSrc}
            alt={`${project.client} project`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            unoptimized={!project.image}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-paper-dim to-line/40 p-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {primaryService}
            </span>
            <span className="font-display text-xl font-bold text-ink">{project.client}</span>
          </div>
        )}
        {!imgFailed && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/55 to-transparent"
            aria-hidden="true"
          />
        )}
        <span
          className="absolute bottom-3 left-3 rounded-[3px] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink"
          style={{ background: accent }}
        >
          {project.client}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">
          {primaryService} · {project.industry}
        </p>
        <p className="mt-2 text-[14px] leading-snug text-ink/85">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {(project.services?.length ? project.services : project.capabilities)
            .slice(0, 4)
            .map((c) => (
              <li
                key={c}
                className="rounded-[2px] border border-line bg-paper-dim px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted"
              >
                {c}
              </li>
            ))}
        </ul>
        <span className="mt-auto flex items-center gap-2 pt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink">
          {external ? common.visitLiveStore : common.readCaseStudy}{" "}
          <span className="arrow-slide">{external ? "↗" : "→"}</span>
        </span>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-[5px] border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(14,18,24,0.3)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
