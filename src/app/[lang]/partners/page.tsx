import type { Metadata } from "next";
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
    title: t.partners.metaTitle,
    description: t.partners.metaDesc,
    alternates: langAlternates(locale, "/partners"),
  };
}

export default async function Partners({
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
        <p className="eyebrow">{t.partners.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          {t.partners.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t.partners.copy}
        </p>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 pb-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {t.partners.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 80} className="h-full">
              <div className="h-full rounded-[5px] border border-line bg-paper-dim p-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.01em]">{g.name}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{g.copy}</p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-[3px] border border-line bg-paper px-3 py-1.5 text-sm text-ink/80"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 border-t border-line pt-10">
          <PartnerLogos label={t.logos.partnersLabel} />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            {t.partners.note}
          </p>
        </div>
      </section>

      <CTABand
        lang={locale}
        t={t.cta}
        quoteLabel={t.common.getQuote}
        title={t.partners.cta.title}
        copy={t.partners.cta.copy}
      />
    </>
  );
}
