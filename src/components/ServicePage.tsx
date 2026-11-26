import type { CaseStudy, Service } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

export default function ServicePage({
  service,
  crumbs,
  relatedStudies,
  lang,
  t,
  common,
  cta,
}: {
  service: Service;
  crumbs: { label: string; href?: string }[];
  relatedStudies?: CaseStudy[];
  lang: Locale;
  t: Messages["servicePage"];
  common: Messages["common"];
  cta: Messages["cta"];
}) {
  const related = relatedStudies ?? [];

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pt-12 md:pt-16 lg:px-8">
        <Breadcrumbs items={crumbs} lang={lang} />
        <div className="grid gap-10 pb-16 md:pb-20 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow">{t.groupNames[service.group]}</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {service.promise}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" lang={lang} variant="dark" arrow>
                {common.getQuote}
              </Button>
              <Button href="/contact?intent=discovery" lang={lang} variant="outlineDark" arrow>
                {common.talkToExpert}
              </Button>
            </div>
          </div>
          {/* Who it's for — sticky meta card */}
          <div className="h-fit rounded-[5px] border border-line bg-paper-dim p-7 lg:sticky lg:top-24">
            <p className="eyebrow">{t.whoEyebrow}</p>
            <ul className="mt-5 space-y-3.5">
              {service.whoItsFor.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] leading-snug text-ink/85">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-y border-line bg-paper-dim py-16 md:py-20">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading index={t.deliverables.index} eyebrow={t.deliverables.eyebrow} title={t.deliverables.title} />
          <ul className="mt-12 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <li
                key={d}
                className="flex items-baseline gap-4 border-b border-line py-4.5 text-[15px] text-ink/85"
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

      {/* Process */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-20 lg:px-8">
        <SectionHeading index={t.process.index} eyebrow={t.process.eyebrow} title={t.process.title} />
        <div className="mt-12">
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[88rem] px-5 pb-16 md:pb-20 lg:px-8">
          <SectionHeading index={t.related.index} eyebrow={t.related.eyebrow} title={t.related.title} />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90} className="h-full">
                <CaseStudyCard study={s} lang={lang} common={common} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-20 md:pb-24 lg:px-8">
        <SectionHeading index={t.faq.index} eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="mt-12">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      <CTABand lang={lang} t={cta} quoteLabel={common.getQuote} />
    </>
  );
}
