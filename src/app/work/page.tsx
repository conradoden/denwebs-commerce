import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import WorkFilter from "@/components/WorkFilter";
import { caseStudies } from "@/content/case-studies";
import {
  portfolioProjects,
  portfolioCategoryFilters,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies and a full Shopify portfolio across jewelry, health, outdoor, food & beverage, CRO, AI, custom apps, marketing, and operations.",
};

export default function WorkIndex() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">Work</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          The portfolio we <span className="accent-serif font-normal">built and shipped</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {portfolioProjects.length} projects across industries and practices:
          theme builds, CRO, AI, marketing, subscriptions, OMS, and ongoing
          store management. Filter a category to see the full split.
        </p>

        <WorkFilter
          studies={caseStudies}
          portfolio={portfolioProjects}
          filters={[...portfolioCategoryFilters]}
        />
      </section>

      <CTABand
        title="Start a project."
        copy="Migration, rebuild, operations, or AI, tell us what needs to change and we'll tell you honestly what it takes."
      />
    </>
  );
}
