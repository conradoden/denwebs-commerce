import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import { fmt, langAlternates, localize, locales, resolveLocale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getContent(lang).caseStudies.map((cs) => ({ lang, slug: cs.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const study = getContent(locale).getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client}, ${study.title}`,
    description: fmt(t.caseStudy.metaDesc, {
      title: study.title,
      industry: study.industry,
      platform: study.platform,
    }),
    alternates: langAlternates(locale, `/work/${slug}`),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);
  const study = c.getCaseStudy(slug);
  if (!study) notFound();

  const related = c.caseStudies.filter((cs) => cs.slug !== slug).slice(0, 2);
  const [clientLabel, industryLabel, servicesLabel, platformLabel] = t.caseStudy.snapshotLabels;

  return (
    <>
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden text-paper">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 pb-16 pt-12 md:pb-20 md:pt-16 lg:px-8">
          <Breadcrumbs
            dark
            lang={locale}
            items={[
              { label: t.caseStudy.crumbWork, href: "/work" },
              { label: study.client },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="eyebrow" data-dark="true">
              {study.client}
            </p>
            {study.sample && (
              <span className="rounded-[3px] border border-paper/25 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/70">
                {t.caseStudy.sampleBadge}
              </span>
            )}
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.03] tracking-[-0.03em] md:text-7xl">
            {study.title}
          </h1>
          {study.url && (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-paper/70 underline decoration-paper/30 underline-offset-[6px] hover:text-accent hover:decoration-accent"
            >
              {t.common.visitLiveStore} <span className="arrow-slide">↗</span>
            </a>
          )}
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-accent pl-5">
                <p className="font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">{m.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{m.label}</p>
              </div>
            ))}
          </div>
          {study.image && (
            <div className="relative mt-14 aspect-[21/9] overflow-hidden rounded-[6px] border border-paper/15">
              <Image
                src={study.image}
                alt={study.imageAlt ?? fmt(t.common.storefrontAlt, { client: study.client })}
                fill
                priority
                sizes="(max-width: 1408px) 100vw, 1408px"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Snapshot */}
      <section className="border-b border-line bg-paper-dim">
        <dl className="mx-auto grid max-w-[88rem] grid-cols-2 gap-6 px-5 py-9 md:grid-cols-4 lg:px-8">
          {[
            [clientLabel, study.client],
            [industryLabel, study.industry],
            [servicesLabel, study.services.join(", ")],
            [platformLabel, study.platform],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-2.5 text-[15px] font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="eyebrow">{t.caseStudy.s01}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85 md:text-xl">{study.challenge}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="eyebrow">{t.caseStudy.s02}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/85 md:text-xl">{study.approach}</p>
          </Reveal>
        </div>

        <div className="mt-16 rounded-[5px] border border-line bg-paper-dim p-8 md:p-12">
          <h2 className="eyebrow">{t.caseStudy.s03}</h2>
          <ul className="mt-8 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {study.built.map((b, i) => (
              <li key={b} className="flex items-baseline gap-4 border-b border-line py-4 text-[15px] text-ink/85 last:border-0 md:last:border-b">
                <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16 max-w-3xl">
          <h2 className="eyebrow">{t.caseStudy.s04}</h2>
          <p className="mt-5 font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
            {study.resultsNote}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {study.sample ? t.caseStudy.sampleNote : t.caseStudy.realNote}
          </p>
        </Reveal>

        {study.gallery && study.gallery.length > 0 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {study.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-[5px] border border-line">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Related */}
      <section className="mx-auto max-w-[88rem] px-5 pb-20 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-[-0.01em]">{t.caseStudy.relatedTitle}</h2>
        <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="h-full">
              <CaseStudyCard study={s} lang={locale} common={t.common} />
            </Reveal>
          ))}
          <Reveal delay={180} className="h-full">
            <Link
              href={localize("/work", locale)}
              className="flex h-full min-h-40 items-center justify-center rounded-md border border-line bg-paper-dim font-mono text-[13px] uppercase tracking-wide text-ink hover:bg-paper"
            >
              {t.common.allCaseStudies} →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
