import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";
import CaseStudyCard from "@/components/CaseStudyCard";
import SectionHeading from "@/components/SectionHeading";
import StatStrip from "@/components/StatStrip";
import PartnerLogos from "@/components/PartnerLogos";
import ProcessSteps from "@/components/ProcessSteps";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import { fmt, localize, resolveLocale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const c = getContent(locale);
  const t = getMessages(locale);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: c.site.name,
    url: c.site.url,
    email: c.site.email,
    description: c.site.description,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: c.site.name,
    url: c.site.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
      />
      {/* Hero: Shopify ecommerce consultant positioning */}
      <section className="hero-atmosphere relative overflow-hidden text-paper">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow" data-dark="true">
                {t.home.eyebrow}
              </p>
              <h1 className="mt-6 max-w-3xl font-display text-[3.25rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5rem]">
                {t.home.h1a}{" "}
                <span className="accent-serif font-normal">{t.home.h1b}</span>{" "}
                {t.home.h1c}{" "}
                <span className="text-accent">{t.home.h1d}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl">
                {t.home.sub}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact?intent=discovery#book" lang={locale} variant="accent" arrow>
                  {t.common.bookDiscovery}
                </Button>
                <Button href="/work" lang={locale} variant="outlineLight" arrow>
                  {t.common.seeOurWork}
                </Button>
              </div>
              <ul className="mt-10 flex flex-wrap gap-2">
                {t.home.heroServices.map((s) => (
                  <li
                    key={s}
                    className="rounded-[3px] border border-paper/15 bg-paper/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/65"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[6px] border border-paper/12 bg-ink-soft/90 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur-sm">
                <div className="border-b border-paper/10 px-5 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
                    {t.home.snapshot.title}
                  </p>
                </div>
                <dl className="grid grid-cols-2">
                  {t.home.snapshot.proof.map((item, i) => (
                    <div
                      key={item.label}
                      className={`p-5 md:p-6 ${i % 2 === 0 ? "border-r border-paper/10" : ""} ${
                        i < 2 ? "border-b border-paper/10" : ""
                      }`}
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/45">
                        {item.label}
                      </dt>
                      <dd className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-paper md:text-3xl">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-paper/10 px-5 py-4">
                  <p className="text-[13px] leading-relaxed text-paper/55">
                    {t.home.snapshot.footnote}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LogoMarquee label={t.logos.marqueeLabel} ariaLabel={t.logos.marqueeAria} />

      {/* Featured work */}
      <section className="mx-auto max-w-[88rem] px-5 py-20 md:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index={t.home.work.index}
            eyebrow={t.home.work.eyebrow}
            title={t.home.work.title}
            copy={t.home.work.copy}
          />
          <Link
            href={localize("/work", locale)}
            className="group font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:decoration-accent-deep"
          >
            {t.common.allWork} <span className="arrow-slide">→</span>
          </Link>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {c.caseStudies.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="h-full">
              <CaseStudyCard study={s} lang={locale} common={t.common} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Six pillars */}
      <section className="border-y border-line bg-paper-dim py-20 md:py-28">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading
            index={t.home.pillarsSection.index}
            eyebrow={t.home.pillarsSection.eyebrow}
            title={t.home.pillarsSection.title}
            copy={t.home.pillarsSection.copy}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[5px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.home.pillarsSection.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="h-full">
                <Link
                  href={localize(p.href, locale)}
                  className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-ink"
                >
                  <span className="font-mono text-[11px] tracking-[0.15em] text-muted group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.4rem] font-bold leading-snug tracking-[-0.01em] group-hover:text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted group-hover:text-paper/65">
                    {p.copy}
                  </p>
                  <span className="mt-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-ink group-hover:text-accent">
                    {t.common.explore} <span className="arrow-slide">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Denwebs */}
      <section className="mx-auto max-w-[88rem] px-5 py-20 md:py-28 lg:px-8">
        <SectionHeading
          index={t.home.why.index}
          eyebrow={t.home.why.eyebrow}
          title={t.home.why.title}
          copy={t.home.why.copy}
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.why.points.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <div className="border-t-2 border-accent pt-6">
                <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.01em]">{w.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <div className="mt-28">
          <SectionHeading index={t.home.process.index} eyebrow={t.home.process.eyebrow} title={t.home.process.title} />
          <div className="mt-12">
            <ProcessSteps steps={t.home.process.steps} />
          </div>
        </div>
      </section>

      {/* AI spotlight */}
      <section className="hero-atmosphere relative overflow-hidden py-20 text-paper md:py-28">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow" data-dark="true">
                {t.home.ai.index}. {t.home.ai.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
                {t.home.ai.h2a} <span className="accent-serif font-normal">{t.home.ai.h2b}</span>{" "}
                {t.home.ai.h2c}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-paper/65">
                {t.home.ai.copy}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/services/ai" lang={locale} variant="accent" arrow>
                  {t.home.ai.ctaExplore}
                </Button>
                <Button href="/contact?intent=ai-audit" lang={locale} variant="outlineLight" arrow>
                  {t.home.ai.ctaAudit}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-4">
                {t.home.ai.items.map((o, i) => (
                  <li key={o.t}>
                    <Link
                      href={localize(o.href, locale)}
                      className="group flex items-start gap-5 rounded-[5px] border border-line-dark bg-ink-soft/80 p-6 transition-colors duration-300 hover:border-accent/40"
                    >
                      <span className="font-mono text-[11px] tracking-[0.15em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-paper group-hover:text-accent">
                          {o.t}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-paper/55">{o.d}</p>
                      </div>
                      <span className="arrow-slide ml-auto mt-1 text-paper/40 group-hover:text-accent" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats + partners */}
      <section className="mx-auto max-w-[88rem] px-5 py-20 md:py-24 lg:px-8">
        <SectionHeading index={t.home.statsSection.index} eyebrow={t.home.statsSection.eyebrow} title={t.home.statsSection.title} className="mb-14" />
        <StatStrip stats={t.stats.items} />
        <div className="mt-16 border-t border-line pt-12">
          <PartnerLogos label={t.logos.partnersLabel} />
        </div>
      </section>

      {/* Insights teaser */}
      <section className="border-t border-line bg-paper-dim py-20 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading index={t.home.insightsSection.index} eyebrow={t.home.insightsSection.eyebrow} title={t.home.insightsSection.title} />
            <Link
              href={localize("/insights", locale)}
              className="group font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:decoration-accent-deep"
            >
              {t.common.allInsights} <span className="arrow-slide">→</span>
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {c.insights.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90} className="h-full">
                <Link
                  href={localize(`/insights/${post.slug}`, locale)}
                  className="group flex h-full flex-col rounded-[5px] border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(14,18,24,0.3)]"
                >
                  <p className="eyebrow">{post.category}</p>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-[-0.01em] group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-[6px]">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 font-mono text-[12px] text-muted">
                    {fmt(t.common.readTime, { time: post.readTime })} <span className="arrow-slide ml-1">→</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
