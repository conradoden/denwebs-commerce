import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { allServices, serviceGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Shopify Services",
  description:
    "Launch, operate, and grow your Shopify store with consulting, builds, operations, and AI.",
};

const engagementModes = [
  {
    name: "Launch",
    promise: "Research, design, build, migrate.",
    copy: "A new store, a redesign, or a replatform, scoped as a project with a defined end. You get a store that works and a team that knows how to run it.",
    items: ["Shopify builds & redesigns", "Platform migrations", "Design systems & UX", "Integration architecture"],
  },
  {
    name: "Operate",
    promise: "Catalogue, inventory, OMS, integrations, support.",
    copy: "The ongoing operational layer, the work most agencies leave behind. Retainers that keep product data clean, stock accurate, and orders flowing.",
    items: ["Catalogue & feed management", "Inventory & allocation rules", "Order routing & returns", "Release management & support"],
  },
  {
    name: "Grow",
    promise: "CRO, lifecycle, AI visibility, retainers.",
    copy: "Compounding optimization, experimentation, AI search visibility, and continuous improvement measured in revenue, not deliverables.",
    items: ["CRO programs", "AI / AEO visibility", "Analytics & measurement", "Advisory & fractional counsel"],
  },
];

const engagementFaqs = [
  {
    q: "Project, retainer, or advisory, which do we need?",
    a: "Projects fit defined outcomes: a migration, a redesign, an audit implementation. Retainers fit ongoing operations or optimization. Advisory fits teams that execute in-house but want senior direction. Many clients run one of each, we'll recommend the lightest model that covers your need.",
  },
  {
    q: "How are projects scoped and priced?",
    a: "Fixed scope, fixed price for defined builds. We don't do open-ended hourly for projects, you'll know cost, timeline, and what's included before signing.",
  },
  {
    q: "What does an Operate retainer cover?",
    a: "Catalogue management, inventory and order ops, integration monitoring, releases, and support. Scoped monthly against your SKU count, order volume, and systems.",
  },
  {
    q: "Can we start small?",
    a: "Yes, an audit is the most common entry point. It's fixed-scope, gives you a prioritized findings list you own, and creates a natural basis for deciding what to do next.",
  },
  {
    q: "Do you work with our existing partners?",
    a: "Yes. We coordinate with ERP implementers, lifecycle agencies, PR firms, and in-house teams. Our job is the commerce system working as a whole, whoever touches each part.",
  },
];

export default function ServicesHub() {
  let serviceIndex = 0;

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">Services</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          Launch it. Operate it. Grow it, with{" "}
          <span className="accent-serif font-normal">AI in the loop</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Denwebs covers the whole commerce lifecycle: strategy and audits,
          design and builds, catalogue and operations, growth and AI. Pick the
          layer that hurts, or hand us the system.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/contact" variant="dark" arrow>
            Get a quote
          </Button>
          <Button href="/audit" variant="outlineDark" arrow>
            Free audit
          </Button>
        </div>
      </section>

      {/* Engagement modes */}
      <section className="border-y border-line bg-paper-dim py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading
            index="01"
            eyebrow="Engagement modes"
            title="Three ways to work with us."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {engagementModes.map((m, i) => (
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
          index="02"
          eyebrow="Capabilities"
          title="Everything we do, organized by outcome."
        />
        <div className="mt-14 space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.name} className="grid gap-6 lg:grid-cols-[1fr_2.2fr]">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.01em]">
                  {group.name}
                </h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">
                  {group.blurb}
                </p>
              </div>
              <ul>
                {group.slugs.map((slug) => {
                  const s = allServices.find((x) => x.slug === slug);
                  if (!s) return null;
                  serviceIndex += 1;
                  return (
                    <li key={slug}>
                      <Link
                        href={slug === "ai" ? "/services/ai" : `/services/${slug}`}
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
                {group.name === "Growth & AI" &&
                  [
                    { slug: "aeo", title: "AI Search Optimization (AEO / GEO)", promise: "Get cited inside ChatGPT, Perplexity, Gemini, and AI Overviews." },
                    { slug: "agentic-commerce", title: "Agentic commerce readiness", promise: "Product data and feeds structured so AI shopping agents can sell you." },
                    { slug: "operations", title: "AI for store operations", promise: "Supervised automation for enrichment, forecasting, and triage." },
                  ].map((s) => {
                    serviceIndex += 1;
                    return (
                      <li key={s.slug}>
                        <Link
                          href={`/services/ai/${s.slug}`}
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
        <SectionHeading index="03" eyebrow="FAQ" title="Working with Denwebs." />
        <div className="mt-12">
          <FAQAccordion faqs={engagementFaqs} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
