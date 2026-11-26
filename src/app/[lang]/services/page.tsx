import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import { langAlternates, localize, resolveLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  return {
    title: t.servicesHub.metaTitle,
    description: t.servicesHub.metaDesc,
    alternates: langAlternates(locale, "/services"),
  };
}

export default async function ServicesHub({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);
  let serviceIndex = 0;

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">{t.servicesHub.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          {t.servicesHub.h1a}{" "}
          <span className="accent-serif font-normal">{t.servicesHub.h1b}</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t.servicesHub.copy}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/contact" lang={locale} variant="dark" arrow>
            {t.common.getQuote}
          </Button>
          <Button href="/audit" lang={locale} variant="outlineDark" arrow>
            {t.common.freeAudit}
          </Button>
        </div>
      </section>

      {/* Engagement modes */}
      <section className="border-y border-line bg-paper-dim py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading
            index={t.servicesHub.modes.index}
            eyebrow={t.servicesHub.modes.eyebrow}
            title={t.servicesHub.modes.title}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.servicesHub.modes.items.map((m, i) => (
              <Reveal key={m.name} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-[5px] border border-line bg-paper p-8">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em]">
                    {m.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                    {m.promise}
                  </p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                    {m.copy}
                  </p>
                  <ul className="mt-7 space-y-2.5 border-t border-line pt-6">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-ink/80">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full capability index */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <SectionHeading
          index={t.servicesHub.capabilities.index}
          eyebrow={t.servicesHub.capabilities.eyebrow}
          title={t.servicesHub.capabilities.title}
        />
        <div className="mt-14 space-y-16">
          {c.serviceGroups.map((group) => (
            <div key={group.name} className="grid gap-6 lg:grid-cols-[1fr_2.2fr]">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.01em]">
                  {t.servicePage.groupNames[group.name]}
                </h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">
                  {group.blurb}
                </p>
              </div>
              <ul>
                {group.slugs.map((slug) => {
                  const s = c.allServices.find((x) => x.slug === slug);
                  if (!s) return null;
                  serviceIndex += 1;
                  return (
                    <li key={slug}>
                      <Link
                        href={localize(slug === "ai" ? "/services/ai" : `/services/${slug}`, locale)}
                        className="group flex items-baseline gap-6 border-b border-line py-5 transition-colors first:border-t hover:bg-paper-dim/60"
                      >
                        <span className="w-8 shrink-0 font-mono text-[12px] tracking-[0.1em] text-muted">
                          {String(serviceIndex).padStart(2, "0")}
                        </span>
                        <span className="flex-1">
                          <span className="block font-display text-xl font-bold tracking-[-0.01em] group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px] md:text-2xl">
                            {s.title}
                          </span>
                          <span className="mt-1 hidden max-w-xl text-sm leading-relaxed text-muted md:block">
                            {s.promise}
                          </span>
                        </span>
                        <span className="arrow-slide shrink-0 font-mono text-lg text-muted group-hover:text-ink" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
                {(group.slugs as readonly string[]).includes("ai") &&
                  t.servicesHub.capabilities.aiChildren.map((s) => {
                    serviceIndex += 1;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={localize(`/services/ai/${s.slug}`, locale)}
                          className="group flex items-baseline gap-6 border-b border-line py-5 pl-8 transition-colors hover:bg-paper-dim/60"
                        >
                          <span className="w-8 shrink-0 font-mono text-[12px] tracking-[0.1em] text-muted">
                            {String(serviceIndex).padStart(2, "0")}
                          </span>
                          <span className="flex-1">
                            <span className="block font-display text-lg font-bold tracking-[-0.01em] text-ink/85 group-hover:text-ink md:text-xl">
                              {s.title}
                            </span>
                            <span className="mt-1 hidden max-w-xl text-sm leading-relaxed text-muted md:block">
                              {s.promise}
                            </span>
                          </span>
                          <span className="arrow-slide shrink-0 font-mono text-lg text-muted group-hover:text-ink" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-20 md:pb-28 lg:px-8">
        <SectionHeading index={t.servicesHub.faq.index} eyebrow={t.servicesHub.faq.eyebrow} title={t.servicesHub.faq.title} />
        <div className="mt-12">
          <FAQAccordion faqs={t.servicesHub.faq.faqs} />
        </div>
      </section>

      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
