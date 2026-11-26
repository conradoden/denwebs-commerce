import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import StatStrip from "@/components/StatStrip";
import PartnerLogos from "@/components/PartnerLogos";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
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
    title: t.about.metaTitle,
    description: t.about.metaDesc,
    alternates: langAlternates(locale, "/about"),
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          {t.about.h1a} <span className="accent-serif font-normal">{t.about.h1b}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t.about.copy}
        </p>
      </section>

      <section className="border-y border-line bg-paper-dim py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading index={t.about.principles.index} eyebrow={t.about.principles.eyebrow} title={t.about.principles.title} />
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {t.about.principles.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="border-t-2 border-accent pt-6">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <SectionHeading index={t.about.numbers.index} eyebrow={t.about.numbers.eyebrow} title={t.about.numbers.title} copy={t.about.numbers.copy} />
        <div className="mt-12">
          <StatStrip stats={t.stats.items} />
        </div>
        <div className="mt-16 border-t border-line pt-12">
          <PartnerLogos label={t.logos.partnersLabel} />
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 pb-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[5px] border border-line bg-paper-dim p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] md:text-3xl">
              {t.about.careers.title}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{t.about.careers.copy}</p>
          </div>
          <Button href="/careers" lang={locale} variant="dark" arrow>
            {t.common.seeCareers}
          </Button>
        </div>
      </section>

      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
