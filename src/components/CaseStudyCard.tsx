import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/types";
import { fmt, localize, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

const industryAccent: Record<string, string> = {
  Jewelry: "#e3c87f",
  Luxury: "#d8b56a",
  Outdoor: "#8fb98a",
  Beauty: "#d8a7c3",
  "CPG / Food": "#e0b878",
  Fashion: "#9fb6d8",
  B2B: "#8ec9c2",
};

// Composed storefront mock — abstract browser UI, not a fake screenshot.
function StorefrontMock({ accent, label }: { accent: string; label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-ink p-4 transition-transform duration-500 group-hover:scale-[1.02]">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 pb-3">
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="h-2 w-2 rounded-full bg-paper/20" />
        <span className="h-2 w-2 rounded-full" style={{ background: accent, opacity: 0.8 }} />
        <span className="ml-2 h-3.5 flex-1 rounded-full bg-paper/10" />
      </div>
      {/* Storefront body */}
      <div className="grid flex-1 grid-cols-[1fr_2fr] gap-2.5">
        <div className="flex flex-col gap-2">
          <div className="h-1.5 w-2/3 rounded-full bg-paper/25" />
          <div className="h-1.5 w-1/2 rounded-full bg-paper/15" />
          <div className="h-1.5 w-3/5 rounded-full bg-paper/15" />
          <div className="mt-auto truncate rounded-[3px] px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-ink" style={{ background: accent }}>
            {label}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-[3px] bg-paper/10" />
          <div className="rounded-[3px] bg-paper/[0.06]" />
          <div className="col-span-2 rounded-[3px] bg-paper/[0.06]" style={{ boxShadow: `inset 0 0 0 1px ${accent}33` }} />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyCard({
  study,
  lang,
  common,
}: {
  study: CaseStudy;
  lang: Locale;
  common: Messages["common"];
}) {
  const accent = industryAccent[study.industry] ?? "#5b8cff";
  return (
    <Link
      href={localize(`/work/${study.slug}`, lang)}
      className="group flex h-full flex-col overflow-hidden rounded-[5px] border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(14,18,24,0.35)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-ink">
        {study.image ? (
          <>
            <Image
              src={study.image}
              alt={study.imageAlt ?? fmt(common.storefrontAlt, { client: study.client })}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute bottom-3 left-3 rounded-[3px] bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper backdrop-blur-sm">
              {study.client}
            </span>
          </>
        ) : (
          <StorefrontMock accent={accent} label={study.client} />
        )}
        {study.sample && (
          <span className="absolute right-4 top-4 rounded-[3px] border border-paper/25 bg-ink/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/70 backdrop-blur-sm">
            {common.sample}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="eyebrow">
          {study.client} · {study.industry}
        </p>
        <h3 className="mt-3 font-display text-[1.35rem] font-bold leading-snug tracking-[-0.01em] group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px]">
          {study.title}
        </h3>
        <ul className="mt-4 space-y-2 border-t border-line pt-4">
          {study.metrics.slice(0, 2).map((m) => (
            <li key={m.label} className="flex items-baseline gap-3 text-sm text-muted">
              <span className="shrink-0 font-display text-lg font-bold text-ink">{m.value}</span>
              <span className="leading-snug">{m.label}</span>
            </li>
          ))}
        </ul>
        <span className="mt-auto flex items-center gap-2 pt-6 font-mono text-[12px] uppercase tracking-[0.08em] text-ink">
          {common.readCaseStudy} <span className="arrow-slide">→</span>
        </span>
      </div>
    </Link>
  );
}
