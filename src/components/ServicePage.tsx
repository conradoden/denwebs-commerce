import type { CaseStudy, PortfolioProject, Service } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CaseStudyCard from "@/components/CaseStudyCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export default function ServicePage({
  service,
  crumbs,
  relatedStudies = [],
  relatedPortfolio = [],
}: {
  service: Service;
  crumbs: { label: string; href?: string }[];
  relatedStudies?: CaseStudy[];
  relatedPortfolio?: PortfolioProject[];
}) {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pt-12 md:pt-16 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <div className="grid gap-10 pb-16 md:pb-20 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow">{service.group}</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {service.promise}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" variant="dark" arrow>
                Get a quote
              </Button>
              <Button href="/contact?intent=discovery#book" variant="outlineDark" arrow>
                Talk to an expert
              </Button>
            </div>
          </div>
          <div className="h-fit rounded-[5px] border border-line bg-paper-dim p-7 lg:sticky lg:top-24">
            <p className="eyebrow">Who it&apos;s for</p>
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

      <section className="border-y border-line bg-paper-dim py-16 md:py-20">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading index="01" eyebrow="What's included" title="Deliverables." />
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

      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-20 lg:px-8">
        <SectionHeading index="02" eyebrow="Process" title="How it runs." />
        <div className="mt-12">
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      {relatedStudies.length > 0 && (
        <section className="mx-auto max-w-[88rem] px-5 pb-16 md:pb-20 lg:px-8">
          <SectionHeading index="03" eyebrow="Case studies" title="Deep dives." />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {relatedStudies.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90} className="h-full">
                <CaseStudyCard study={s} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {relatedPortfolio.length > 0 && (
        <section className="border-t border-line bg-paper-dim py-16 md:py-20">
          <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
            <SectionHeading
              index={relatedStudies.length > 0 ? "04" : "03"}
              eyebrow="Portfolio"
              title="Stores we shipped in this practice."
              copy={`${relatedPortfolio.length} projects from the portfolio mapped to this service.`}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {relatedPortfolio.map((p) => (
                <PortfolioCard key={`${p.slug}-${p.url}`} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-20 lg:px-8">
        <SectionHeading
          index={relatedPortfolio.length > 0 ? "05" : relatedStudies.length > 0 ? "04" : "03"}
          eyebrow="FAQ"
          title="Common questions."
        />
        <div className="mt-12">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
