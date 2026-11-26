import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import WorkFilter from "@/components/WorkFilter";
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
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          {t.work.h1a} <span className="accent-serif font-normal">{t.work.h1b}</span>
          {t.work.h1c}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t.work.copy}
        </p>

        <WorkFilter
          studies={c.caseStudies}
          filters={c.industryFilters}
          lang={locale}
          common={t.common}
          labels={{ empty: t.work.empty, aria: t.work.filterAria }}
        />
      </section>

      {/* Beyond the featured studies — the broader record */}
      <section className="border-t border-line bg-paper-dim py-16 md:py-20">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">{t.work.beyond.eyebrow}</p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">
                {t.work.beyond.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {t.work.beyond.copy}
              </p>
            </div>
            <div>
              <p className="eyebrow">{t.work.categories.eyebrow}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {t.work.categories.items.map((cat) => (
                  <li
                    key={cat}
                    className="rounded-[3px] border border-line bg-paper px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink/70"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                {t.work.categories.note}
              </p>
            </div>
          </div>
        </div>
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
