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
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { site } from "@/content/site";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

const pillars = [
  {
    title: "Consulting & audits",
    copy: "Honest diagnosis before dollars, strategy, platform calls, and prioritized fix lists.",
    href: "/services/consulting",
  },
  {
    title: "Design & development",
    copy: "Online Store 2.0 builds, custom sections, and headless where the case is real.",
    href: "/services/development",
  },
  {
    title: "Catalogue & inventory",
    copy: "Product data and stock engineered like infrastructure, clean, unified, feed-ready.",
    href: "/services/catalogue",
  },
  {
    title: "Order management & integrations",
    copy: "Orders routed, ERP connected, systems reconciled. The ops layer most agencies skip.",
    href: "/services/order-management",
  },
  {
    title: "Growth / CRO",
    copy: "Disciplined experimentation that compounds, not random app installs.",
    href: "/services/cro",
  },
  {
    title: "AI, AEO, agentic, ops",
    copy: "Be the brand AI recommends, the store AI can sell, and the operation AI assists.",
    href: "/services/ai",
  },
];

const whyPoints = [
  {
    title: "Human-led",
    body: "Senior operators on every engagement. You talk to the people doing the work, not an account layer.",
  },
  {
    title: "Tech-backed",
    body: "We build the systems we recommend: themes, integrations, data pipelines, and supervised AI tooling.",
  },
  {
    title: "Operator mindset",
    body: "We've run catalogues, inventory, and order flows, so we design for the Monday after launch, not just launch day.",
  },
  {
    title: "Proven process",
    body: "Mapped before built. Rehearsed before cutover. Measured after shipped. Commerce is operations, not events.",
  },
];

const process = [
  { title: "Audit", body: "We map your stack, catalogue, data flows, and AI visibility to find where revenue leaks." },
  { title: "Plan", body: "A sequenced roadmap, effort, impact, dependencies, agreed before any build starts." },
  { title: "Build", body: "Design, development, migrations, and integrations executed with staging previews throughout." },
  { title: "Operate & optimize", body: "Retainers for catalogue, inventory, OMS, CRO, and AI visibility, the work that compounds." },
];

const heroProof = [
  { value: "100+", label: "Shopify storefronts shipped" },
  { value: "CRO + AI", label: "growth practices in-house" },
  { value: "$10k/mo", label: "OMS cost cut for one client" },
  { value: "Senior", label: "operators on every engagement" },
];

const heroServices = [
  "Strategy & audits",
  "Theme & custom apps",
  "Catalogue & inventory",
  "OMS & integrations",
  "CRO & lifecycle",
  "AI / AEO",
];

export default function Home() {
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
                Shopify ecommerce consultants
              </p>
              <h1 className="mt-6 max-w-3xl font-display text-[2.65rem] font-bold leading-[1.04] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                The Shopify partner that connects{" "}
                <span className="accent-serif font-normal">strategy</span>, build,{" "}
                <span className="text-accent">and growth</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl">
                Senior operators for audits, theme builds, catalogue ops, CRO,
                lifecycle, and AI visibility, so your store sells more and runs
                cleaner after launch day.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/contact?intent=discovery#book" variant="accent" arrow>
                  Book a discovery call
                </Button>
                <Button href="/work" variant="outlineLight" arrow>
                  See client work
                </Button>
              </div>
              <ul className="mt-10 flex flex-wrap gap-2">
                {heroServices.map((s) => (
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
                    Engagement snapshot
                  </p>
                </div>
                <dl className="grid grid-cols-2">
                  {heroProof.map((item, i) => (
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
                    Built like a commerce consultancy: diagnose first, ship what
                    compounds, stay for the operational layer.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* Featured work */}
      <section className="mx-auto max-w-[88rem] px-5 py-20 md:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            eyebrow="Work"
            title="Proof, not adjectives."
            copy="Every engagement judged by metrics that matter, rankings kept, hours returned, systems that hold under load."
          />
          <Link
            href="/work"
            className="group font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:decoration-accent-deep"
          >
            All work <span className="arrow-slide">→</span>
          </Link>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90} className="h-full">
              <CaseStudyCard study={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Six pillars */}
      <section className="border-y border-line bg-paper-dim py-20 md:py-28">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="What we do"
            title="The full commerce stack, one agency."
            copy="Most agencies design and leave. We plan, build, and run the whole system, including the operational layer pure design shops can't touch."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[5px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="h-full">
                <Link
                  href={p.href}
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
                    Explore <span className="arrow-slide">→</span>
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
          index="03"
          eyebrow="Why Denwebs"
          title="Where commerce comes together."
          copy="Consultant, auditor, builder, and operator. One team accountable for the whole system, with AI as a core practice rather than a footnote."
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((w, i) => (
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
          <SectionHeading index="04" eyebrow="How we work" title="Mapped. Built. Run." />
          <div className="mt-12">
            <ProcessSteps steps={process} />
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
                05. AI practice
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Be the brand AI <span className="accent-serif font-normal">recommends</span>, and the
                store AI can sell.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-paper/65">
                AI assistants already shape how buyers discover products. We make
                your catalogue machine-readable, your content citable, and your
                operations AI-assisted, supervised, always.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/services/ai" variant="accent" arrow>
                  Explore AI services
                </Button>
                <Button href="/contact?intent=ai-audit" variant="outlineLight" arrow>
                  AI visibility audit
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-4">
                {[
                  {
                    t: "AI Search Optimization (AEO / GEO)",
                    d: "Visibility inside ChatGPT, Perplexity, Gemini, and AI Overviews. Measured, not guessed.",
                    href: "/services/ai/aeo",
                  },
                  {
                    t: "Agentic commerce readiness",
                    d: "Product data and feeds structured so AI shopping agents can evaluate and sell your products.",
                    href: "/services/ai/agentic-commerce",
                  },
                  {
                    t: "AI for store operations",
                    d: "Enrichment pipelines, forecasting assists, order triage, machines draft, humans approve.",
                    href: "/services/ai/operations",
                  },
                ].map((o, i) => (
                  <li key={o.t}>
                    <Link
                      href={o.href}
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
        <SectionHeading index="06" eyebrow="In numbers" title="An honest ledger." className="mb-14" />
        <StatStrip />
        <div className="mt-16 border-t border-line pt-12">
          <PartnerLogos />
        </div>
      </section>

      {/* Insights teaser */}
      <section className="border-t border-line bg-paper-dim py-20 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading index="07" eyebrow="Insights" title="From the operator's notebook." />
            <Link
              href="/insights"
              className="group font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:decoration-accent-deep"
            >
              All insights <span className="arrow-slide">→</span>
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90} className="h-full">
                <Link
                  href={`/insights/${post.slug}`}
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
                    {post.readTime} read <span className="arrow-slide ml-1">→</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
