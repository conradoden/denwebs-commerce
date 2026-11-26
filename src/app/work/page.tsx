import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import WorkFilter from "@/components/WorkFilter";
import PortfolioGrid from "@/components/PortfolioGrid";
import { caseStudies, industryFilters } from "@/content/case-studies";
import {
  portfolioProjects,
  portfolioCategoryFilters,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies and a full Shopify portfolio across jewelry, health, outdoor, food & beverage, CRO, AI, custom apps, and operations.",
};

export default function WorkIndex() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">Work</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          Case studies with <span className="accent-serif font-normal">metrics</span>, not mood boards.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Featured builds with challenge, approach, and outcomes, plus the broader
          Shopify portfolio behind them: themes, apps, CRO, AI pipelines,
          subscriptions, and ops.
        </p>

        <WorkFilter studies={caseStudies} filters={industryFilters} />
      </section>

      <section className="border-t border-line bg-paper-dim py-16 md:py-20">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <p className="eyebrow">Full portfolio</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">
            {portfolioProjects.length}+ storefronts across categories.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Every URL from the documented Shopify work history. Filter by
            category, open live stores, or jump into a full case study when one
            exists.
          </p>
          <div className="mt-10">
            <PortfolioGrid
              projects={portfolioProjects}
              filters={portfolioCategoryFilters}
            />
          </div>
        </div>
      </section>

      <CTABand
        title="Start a project."
        copy="Migration, rebuild, operations, or AI, tell us what needs to change and we'll tell you honestly what it takes."
      />
    </>
  );
}
