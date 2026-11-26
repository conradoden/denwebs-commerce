import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PartnerLogos from "@/components/PartnerLogos";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Technology Partners",
  description:
    "The platforms and tools Denwebs builds and integrates for Shopify brands, ecommerce, lifecycle, search, ERP, and 3PL.",
};

const partnerGroups = [
  {
    name: "Commerce platform",
    copy: "Shopify and Shopify Plus are home base, Online Store 2.0, POS, B2B, Functions, and Hydrogen where warranted.",
    items: ["Shopify", "Shopify Plus", "Shopify POS", "Hydrogen"],
  },
  {
    name: "Lifecycle & retention",
    copy: "Email, SMS, subscriptions, loyalty, and support tooling we integrate and optimize alongside lifecycle specialists.",
    items: ["Klaviyo", "Recharge", "Gorgias", "Yotpo", "Loyalty platforms"],
  },
  {
    name: "Discovery & merchandising",
    copy: "Search, reviews, and merchandising layers, plus the structured data that feeds AI surfaces.",
    items: ["Algolia", "Searchspring", "Reviews platforms", "Feed tooling"],
  },
  {
    name: "Back-office & operations",
    copy: "ERP, PIM, and fulfillment, integrated with explicit data ownership and monitoring, with implementation partners where needed.",
    items: ["NetSuite", "SAP", "Dynamics", "PIMs", "3PLs / ShipBob", "iPaaS middleware"],
  },
];

export default function Partners() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 pb-16 pt-16 md:pt-24 lg:px-8">
        <p className="eyebrow">Partners</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          The stack we work inside.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          We recommend tools by fit, not referral fees. This is the ecosystem we
          build, integrate, and operate in every day, capability, not badges.
        </p>
      </section>

      <section className="mx-auto max-w-[88rem] px-5 pb-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {partnerGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 80} className="h-full">
              <div className="h-full rounded-[5px] border border-line bg-paper-dim p-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.01em]">{g.name}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{g.copy}</p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-[3px] border border-line bg-paper px-3 py-1.5 text-sm text-ink/80"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 border-t border-line pt-10">
          <PartnerLogos />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Note: we list platforms we work with, not certifications we claim.
            Partner-tier claims get added only when verified.
          </p>
        </div>
      </section>

      <CTABand
        title="Integrating something unusual?"
        copy="Custom ERPs, legacy systems, niche tools, if it touches your commerce stack, we've probably connected stranger."
      />
    </>
  );
}
