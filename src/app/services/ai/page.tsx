import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "AI for Shopify Brands",
  description:
    "AEO, agentic commerce readiness, and AI-assisted store operations for Shopify brands.",
};

const offerings = [
  {
    title: "AI Search Optimization (AEO / GEO)",
    copy: "Get cited inside ChatGPT, Perplexity, Gemini, and Google AI Overviews. Entity clarity, structured data, and answer-first content, measured with recurring visibility tracking.",
    href: "/services/ai/aeo",
    items: ["AI visibility baseline & tracking", "Entity & schema strategy", "Answer-first content program"],
  },
  {
    title: "Agentic commerce readiness",
    copy: "AI agents are starting to research, compare, and transact on buyers' behalf. We make your catalogue machine-readable and machine-sellable before your competitors' are.",
    href: "/services/ai/agentic-commerce",
    items: ["Product data for machine parsing", "Feeds for AI shopping surfaces", "Agentic protocol roadmap"],
  },
  {
    title: "AI for operations",
    copy: "Applied where operations actually bleed, catalogue enrichment, inventory forecasting assists, and order triage. Machines draft, humans approve, audit trails stay permanent.",
    href: "/services/ai/operations",
    items: ["Supervised enrichment pipelines", "Forecasting assists", "Order triage automation"],
  },
];

const deliverables = [
  "AI visibility audit across ChatGPT, Perplexity, Gemini, and AI Overviews",
  "Entity and structured-data remediation (Organization, Product, FAQ, Review)",
  "Answer-first content program targeting buyer questions",
  "Product feed and attribute readiness for AI shopping surfaces",
  "Supervised AI ops pipelines: enrichment, forecasting, triage",
  "Recurring measurement, citation tracking, not vibes",
];

const aiFaqs = [
  {
    q: "What's the difference between AEO and SEO?",
    a: "SEO optimizes for ranked links; AEO optimizes for cited answers. AI assistants assemble responses from sources they can parse and trust, entity clarity, structured data, and answer-formatted content matter more than keyword position.",
  },
  {
    q: "Is AI search actually sending traffic and sales?",
    a: "Yes and growing. AI assistants already shape product research and comparison at scale, and agent-initiated checkout is rolling out. Brands measuring it treat it as a channel; brands ignoring it are invisible in a growing share of discovery.",
  },
  {
    q: "Can you guarantee we'll appear in ChatGPT answers?",
    a: "Nobody can honestly guarantee that. What we guarantee: a measured baseline, structural fixes that make you citable, content that earns citations, and recurring tracking so movement is visible.",
  },
  {
    q: "How does AI for operations stay safe?",
    a: "Every AI output that touches customers, money, or catalogue data passes a human approval step. We design supervision boundaries deliberately and keep audit logs permanent.",
  },
  {
    q: "Where do we start?",
    a: "With an AI visibility audit, a fixed-scope engagement showing how AI describes your brand and products today, plus the prioritized gaps. From there, most clients run a scoped implementation or retainer.",
  },
];

export default function AIHub() {
  const aiPosts = insights.filter((i) => i.category === "AI / AEO");

  return (
    <>
      <section className="hero-atmosphere relative overflow-hidden text-paper">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-5 pb-20 pt-12 md:pb-24 md:pt-16 lg:px-8">
          <Breadcrumbs
            dark
            items={[
              { label: "Services", href: "/services" },
              { label: "AI" },
            ]}
          />
          <p className="eyebrow mt-6" data-dark="true">
            AI practice
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
            Be the brand AI <span className="accent-serif font-normal">recommends</span>,{" "}
            and the store <span className="text-accent">AI can sell</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
            AI search and AI shopping are reshaping product discovery.
            Unstructured catalogues and thin content get ignored. Denwebs makes
            Shopify brands visible to machines, and operational with them.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact?intent=ai-audit" variant="accent" arrow>
              Get an AI visibility audit
            </Button>
            <Button href="/audit?type=ai" variant="outlineLight" arrow>
              Free AI audit
            </Button>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            index="01"
            eyebrow="The shift"
            title="Discovery is moving to answers."
            copy="Buyers increasingly ask assistants instead of searching lists. Those assistants recommend brands they can understand, and skip the ones they can't parse."
          />
          <div className="space-y-4">
            {[
              "Your PDP converts humans but confuses machines, incomplete attributes, no schema, vague policies.",
              "Competitors with cleaner data get cited in AI answers for your category.",
              "AI agents can't evaluate your products for shoppers, so you're absent from agentic purchase flows.",
              "Meanwhile your ops team hand-enriches products and hand-triages orders that AI could draft.",
            ].map((p, i) => (
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
          <SectionHeading index="02" eyebrow="What we do" title="Three AI practices, one foundation." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 90} className="h-full">
                <Link
                  href={o.href}
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
                    Learn more <span className="arrow-slide">→</span>
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
            index="03"
            eyebrow="Deliverables"
            title="What an AI engagement produces."
          />
          <ul className="space-y-0">
            {deliverables.map((d, i) => (
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
        <SectionHeading index="04" eyebrow="FAQ" title="AI questions, straight answers." />
        <div className="mt-12">
          <FAQAccordion faqs={aiFaqs} />
        </div>
      </section>

      {/* Related insights */}
      {aiPosts.length > 0 && (
        <section className="mx-auto max-w-[88rem] px-5 pb-20 lg:px-8">
          <SectionHeading eyebrow="Related reading" title="AI notes from the notebook." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aiPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
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
        title="Find out how AI sees your brand."
        copy="The AI visibility audit shows exactly how ChatGPT, Perplexity, Gemini, and AI Overviews describe and rank you today, and what to fix first."
      />
    </>
  );
}
