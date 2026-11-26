import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import StatStrip from "@/components/StatStrip";
import PartnerLogos from "@/components/PartnerLogos";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Denwebs is a Shopify agency built like an operator, consultants, builders, and commerce ops under one roof.",
};

const principles = [
  {
    title: "Diagnose before prescribe",
    body: "Every engagement starts with understanding what's actually broken. We turn down builds that shouldn't happen.",
  },
  {
    title: "Operators, not decorators",
    body: "Catalogue, inventory, and order flows are where commerce lives. We design and build for the Monday after launch.",
  },
  {
    title: "Honest scope",
    body: "Fixed-scope projects, measured retainers, and straight answers, including when the right answer is 'don't rebuild that.'",
  },
  {
    title: "AI, supervised",
    body: "We use AI where it compounds, enrichment, forecasting, triage, with humans approving anything that touches customers or money.",
  },
  {
    title: "Own the outcome",
    body: "One team accountable across strategy, build, and operations. No handoff gaps between the people who plan and the people who ship.",
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">About</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-[-0.02em] md:text-6xl">
          An agency built like <span className="accent-serif font-normal">an operator</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Denwebs started from a simple observation: most Shopify agencies can
          design a beautiful store, and most can&apos;t keep it running. We built
          the agency around the whole system, strategy, build, and the
          operational layer in between, with AI as a core practice.
        </p>
      </section>

      <section className="border-y border-line bg-paper-dim py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-8">
          <SectionHeading index="01" eyebrow="How we work" title="Principles that survive contact with reality." />
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="border-t-2 border-accent pt-6">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <SectionHeading index="02" eyebrow="The numbers" title="Denwebs at a glance." copy="Documented work history, 80+ Shopify projects across agency and client-side roles since 2017." />
        <div className="mt-12">
          <StatStrip />
        </div>
        <div className="mt-16 border-t border-line pt-12">
          <PartnerLogos />
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 pb-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[5px] border border-line bg-paper-dim p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] md:text-3xl">
              Want to build commerce systems that hold?
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              We hire operators who ship, developers, designers, and commerce
              people who&apos;ve actually run stores.
            </p>
          </div>
          <Button href="/careers" variant="dark" arrow>
            See careers
          </Button>
        </div>
      </section>

      <CTABand />
    </>
  );
}
