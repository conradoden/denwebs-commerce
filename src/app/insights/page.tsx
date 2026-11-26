import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import InsightsFilter from "@/components/InsightsFilter";
import { insights, insightCategories } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on Shopify, migrations, commerce operations, CRO, and AI search, from the operators doing the work.",
};

export default function InsightsIndex() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-20 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          The operator&apos;s <span className="accent-serif font-normal">notebook</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          What we learn running commerce systems, migrations, catalogues, and
          the AI shift, written to be useful, not to rank.
        </p>

        <InsightsFilter posts={insights} categories={insightCategories} />

        <div className="mt-16">
          <SectionHeading
            eyebrow="Cadence"
            title="New notes 2-4× a month."
            copy="Shopify · Migrations · Operations · CRO · AI / AEO · Unified commerce."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
