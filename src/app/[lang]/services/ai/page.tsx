import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    title: t.aiHub.metaTitle,
    description: t.aiHub.metaDesc,
    alternates: langAlternates(locale, "/services/ai"),
  };
}

export default async function AIHub({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);
  // Match by slug — `category` text may be translated per locale.
  const aiSlugs = new Set(
    getContent("en").insights.filter((i) => i.category === "AI / AEO").map((i) => i.slug)
  );
  const aiPosts = c.insights.filter((i) => aiSlugs.has(i.slug));

  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden text-paper">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-12 md:pb-24 md:pt-16 lg:px-8">
          <Breadcrumbs
            dark
            lang={locale}
            items={[
              { label: t.aiHub.crumbServices, href: "/services" },
              { label: t.aiHub.crumbAi },
            ]}
          />
          <p className="eyebrow mt-6" data-dark="true">
            {t.aiHub.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
            {t.aiHub.h1a} <span className="accent-serif font-normal">{t.aiHub.h1b}</span>{" "}
            {t.aiHub.h1c} <span className="text-accent">{t.aiHub.h1d}</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
            {t.aiHub.copy}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact?intent=ai-audit" lang={locale} variant="accent" arrow>
              {t.aiHub.ctaAudit}
            </Button>
            <Button href="/audit?type=ai" lang={locale} variant="outlineLight" arrow>
              {t.aiHub.ctaFree}
            </Button>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            index={t.aiHub.shift.index}
            eyebrow={t.aiHub.shift.eyebrow}
            title={t.aiHub.shift.title}
            copy={t.aiHub.shift.copy}
          />
          <div className="space-y-4">
            {t.aiHub.shift.pains.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className="flex gap-4 rounded-[5px] border border-line bg-paper-dim p-5 text-[15px] leading-relaxed text-ink/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                  {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three offerings */}
      <section className="border-y border-line bg-paper-dim py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading index={t.aiHub.offerings.index} eyebrow={t.aiHub.offerings.eyebrow} title={t.aiHub.offerings.title} />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.aiHub.offerings.items.map((o, i) => (
              <Reveal key={o.title} delay={i * 90} className="h-full">
                <Link
                  href={localize(o.href, locale)}
                  className="group flex h-full flex-col rounded-[5px] border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink"
                >
                  <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.01em] group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px]">
                    {o.title}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                    {o.copy}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                    {o.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-ink/80">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-ink">
                    {t.common.learnMore} <span className="arrow-slide">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            index={t.aiHub.deliverables.index}
            eyebrow={t.aiHub.deliverables.eyebrow}
            title={t.aiHub.deliverables.title}
          />
          <ul className="space-y-0">
            {t.aiHub.deliverables.items.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-4 border-b border-line py-4 text-[15px] text-ink/85 first:border-t"
              >
                <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-16 md:pb-20 lg:px-8">
        <SectionHeading index={t.aiHub.faq.index} eyebrow={t.aiHub.faq.eyebrow} title={t.aiHub.faq.title} />
        <div className="mt-12">
          <FAQAccordion faqs={t.aiHub.faq.faqs} />
        </div>
      </section>

      {/* Related insights */}
      {aiPosts.length > 0 && (
        <section className="mx-auto max-w-[88rem] px-5 pb-20 lg:px-8">
          <SectionHeading eyebrow={t.aiHub.related.eyebrow} title={t.aiHub.related.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aiPosts.map((post) => (
              <Link
                key={post.slug}
                href={localize(`/insights/${post.slug}`, locale)}
                className="group rounded-[5px] border border-line p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(14,18,24,0.3)]"
              >
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-[-0.01em] group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTABand
        lang={locale}
        t={t.cta}
        quoteLabel={t.common.getQuote}
        title={t.aiHub.cta.title}
        copy={t.aiHub.cta.copy}
      />
    </>
  );
}
