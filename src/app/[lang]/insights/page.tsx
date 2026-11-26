import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import InsightsFilter from "@/components/InsightsFilter";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import { dateLocales, langAlternates, resolveLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  return {
    title: t.insights.metaTitle,
    description: t.insights.metaDesc,
    alternates: langAlternates(locale, "/insights"),
  };
}

export default async function InsightsIndex({
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
      <section className="mx-auto max-w-[88rem] px-5 pb-20 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">{t.insights.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          {t.insights.h1a} <span className="accent-serif font-normal">{t.insights.h1b}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t.insights.copy}
        </p>

        <InsightsFilter
          posts={c.insights}
          categories={c.insightCategories}
          lang={locale}
          labels={{ all: t.common.all, empty: t.insights.empty, aria: t.insights.filterAria }}
          dateLocale={dateLocales[locale]}
        />

        <div className="mt-16">
          <SectionHeading
            eyebrow={t.insights.cadence.eyebrow}
            title={t.insights.cadence.title}
            copy={t.insights.cadence.copy}
          />
        </div>
      </section>

      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
