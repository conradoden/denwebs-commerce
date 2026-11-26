import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import WorkFilter from "@/components/WorkFilter";
import { caseStudies, industryFilters } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies across migrations, redesigns, operations, and AI-driven commerce.",
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
          Stores built from scratch, platforms replaced with custom apps, and
          catalogues run by AI pipelines, real engagements with live
          storefronts to show for it.
        </p>

        <WorkFilter studies={caseStudies} filters={industryFilters} />
      </section>

      {/* Beyond the featured studies, the broader record */}
      <section className="border-t border-line bg-paper-dim py-16 md:py-20">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">Beyond the case studies</p>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">
                Four studies on the page. 80+ in the record.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                The featured work above is what we can show end-to-end. Behind
                it sits a longer trail, 80+ Shopify projects and 30+ CMS builds
                delivered through agency and client-side engagements: theme
                work, migrations, custom apps, performance fixes, and ops
                support across categories like these.
              </p>
            </div>
            <div>
              <p className="eyebrow">Categories shipped</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {[
                  "Jewelry & watches",
                  "Fashion & apparel",
                  "Beauty & cosmetics",
                  "Food & beverage",
                  "Health & medical",
                  "Fitness & activewear",
                  "Pets",
                  "Home & furniture",
                  "B2B & wholesale",
                  "Dropshipping",
                ].map((c) => (
                  <li
                    key={c}
                    className="rounded-[3px] border border-line bg-paper px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink/70"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                Since 2017 · Agency + client-side · Shopify & Plus
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Start a project." copy="Migration, rebuild, operations, or AI, tell us what needs to change and we'll tell you honestly what it takes." />
    </>
  );
}
