import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
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
    title: t.careers.metaTitle,
    description: t.careers.metaDesc,
    alternates: langAlternates(locale, "/careers"),
  };
}

export default async function Careers({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);

  return (
    <>
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24 lg:px-8">
        <p className="eyebrow">{t.careers.eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          {t.careers.h1a} <span className="accent-serif font-normal">{t.careers.h1b}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t.careers.copy}
        </p>

        <div className="mt-14 rounded-[5px] border border-line bg-paper-dim p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold tracking-[-0.01em]">{t.careers.roles.title}</h2>
          <p className="mt-3 text-muted">{t.careers.roles.copy}</p>
          <ul className="mt-8">
            {t.careers.roles.items.map((r) => (
              <li
                key={r.role}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-4 first:border-t"
              >
                <span className="font-medium">{r.role}</span>
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                  {r.type}
                </span>
              </li>
            ))}
          </ul>
          <Button href="/contact?intent=careers" lang={locale} variant="dark" arrow className="mt-8">
            {t.careers.cta}
          </Button>
        </div>
      </section>
      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
