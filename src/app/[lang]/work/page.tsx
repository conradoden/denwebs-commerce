import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import WorkFilter from "@/components/WorkFilter";
import { portfolioProjects, portfolioCategoryFilters } from "@/content/portfolio";
import { fmt } from "@/i18n/config";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import { langAlternates, resolveLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  return {
    title: t.work.metaTitle,
    description: t.work.metaDesc,
    alternates: langAlternates(locale, "/work"),
  };
}

export default async function WorkIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">{t.work.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          {t.work.h1a} <span className="accent-serif font-normal">{t.work.h1b}</span>
          {t.work.h1c}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {fmt(t.work.copy, { count: portfolioProjects.length })}
        </p>

        <WorkFilter
          studies={c.caseStudies}
          portfolio={portfolioProjects}
          filters={[...portfolioCategoryFilters]}
          lang={locale}
          common={t.common}
          labels={{
            empty: t.work.empty,
            aria: t.work.filterAria,
            caseStudies: t.work.caseStudiesLabel,
            portfolio: t.work.portfolioLabel,
          }}
        />
      </section>


      <CTABand
        lang={locale}
        t={t.cta}
        quoteLabel={t.common.getQuote}
        title={t.work.cta.title}
        copy={t.work.cta.copy}
      />
    </>
  );
}
