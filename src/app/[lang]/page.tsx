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
import { getMessages, type Messages } from "@/i18n/dictionaries";
import { fmt, localize, resolveLocale } from "@/i18n/config";

// Composed ops-dashboard mock for the hero — abstract UI, not a fake screenshot.
function OpsDashboard({ t }: { t: Messages["home"]["ops"] }) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-paper/12 bg-ink-soft/90 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-paper/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-paper/40">
          {t.title} — {t.live}
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {t.synced}
        </span>
      </div>
      <div className="grid gap-px bg-paper/8 p-px sm:grid-cols-[1.1fr_1fr_1fr]">
        {/* Revenue cell with sparkline */}
        <div className="bg-ink-soft p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
            {t.storefront}
          </p>
          <p className="mt-2.5 font-display text-2xl font-bold text-paper">$1.24M</p>
          <p className="mt-0.5 text-[12px] text-paper/45">{t.trailing}</p>
          <div className="mt-4 flex h-10 items-end gap-1" aria-hidden="true">
            {[35, 50, 40, 62, 55, 70, 58, 78, 85, 72, 92, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[2px] bg-accent/80"
                style={{ height: `${h}%`, opacity: 0.35 + (i / 12) * 0.65 }}
              />
            ))}
          </div>
        </div>
        <div className="bg-ink-soft p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
            {t.operations}
          </p>
          <ul className="mt-3 space-y-2.5">
            {t.opsRows.map(([k, v]) => (
              <li key={k} className="flex items-baseline justify-between gap-3 border-b border-paper/8 pb-2 text-[12px]">
                <span className="text-paper/70">{k}</span>
                <span className="font-mono text-[11px] text-paper/45">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ink-soft p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
            {t.aiLayer}
          </p>
          <ul className="mt-3 space-y-2.5">
            {t.aiRows.map(([k, v]) => (
              <li key={k} className="flex items-baseline justify-between gap-3 border-b border-paper/8 pb-2 text-[12px]">
                <span className="text-paper/70">{k}</span>
                <span className="font-mono text-[11px] text-accent">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

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
      {/* Hero — full-bleed, brand-level Denwebs */}
      <section className="hero-atmosphere relative overflow-hidden text-paper">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:px-8">
          <p className="eyebrow" data-dark="true">
            {t.home.eyebrow}
          </p>
          <h1 className="mt-7 max-w-5xl font-display text-[2.9rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {t.home.h1a}{" "}
            <span className="accent-serif font-normal">{t.home.h1b}</span>{" "}
            <span className="text-accent">{t.home.h1c}</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
            {t.home.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact" lang={locale} variant="accent" arrow>
              {t.common.getQuote}
            </Button>
            <Button href="/work" lang={locale} variant="outlineLight" arrow>
              {t.common.seeOurWork}
            </Button>
          </div>

          <Reveal className="mt-16 md:mt-20" delay={150}>
            <OpsDashboard t={t.home.ops} />
          </Reveal>
        </div>
      </section>

      <LogoMarquee label={t.logos.marqueeLabel} moreClients={t.logos.moreClients} ariaLabel={t.logos.marqueeAria} />

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
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {c.caseStudies.map((s, i) => (
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
                {t.home.ai.index} — {t.home.ai.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
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
