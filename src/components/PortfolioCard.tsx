import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/types";

export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  const href = project.caseStudySlug
    ? `/work/${project.caseStudySlug}`
    : project.url;
  const external = !project.caseStudySlug;

  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.client} storefront`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-ink to-ink-soft p-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">
              {project.industry}
            </span>
            <span className="font-display text-xl font-bold text-paper">{project.client}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">
          {project.client} · {project.industry}
        </p>
        <p className="mt-2 text-[14px] leading-snug text-ink/85">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.capabilities.slice(0, 4).map((c) => (
            <li
              key={c}
              className="rounded-[2px] border border-line bg-paper-dim px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted"
            >
              {c}
            </li>
          ))}
        </ul>
        <span className="mt-auto flex items-center gap-2 pt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink">
          {external ? "Visit live store" : "Read case study"}{" "}
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
