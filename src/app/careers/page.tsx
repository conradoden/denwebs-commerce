import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Denwebs, a Shopify agency for operators who ship. Remote-first, US / EU.",
};

export default function Careers() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24 lg:px-8">
        <p className="eyebrow">Careers</p>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] md:text-7xl">
          Work on commerce that <span className="accent-serif font-normal">has to hold</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Denwebs hires operators: people who&apos;ve run stores, built systems,
          and know that launch day is the easy part. Remote-first across US and
          EU time zones.
        </p>

        <div className="mt-14 rounded-[5px] border border-line bg-paper-dim p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold tracking-[-0.01em]">Open roles</h2>
          <p className="mt-3 text-muted">
            We hire deliberately rather than continuously. If no role is listed
            below, send a note anyway, operators who can point at real work
            always get a reply.
          </p>
          <ul className="mt-8">
            {[
              { role: "Senior Shopify Developer", type: "Contract / full-time · Remote" },
              { role: "Commerce Operations Lead", type: "Full-time · Remote (US/EU)" },
            ].map((r) => (
              <li
                key={r.role}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-4 first:border-t"
              >
                <span className="font-medium">{r.role}</span>
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
                  {r.type}
                </span>
              </li>
            ))}
          </ul>
          <Button href="/contact?intent=careers" variant="dark" arrow className="mt-8">
            Introduce yourself
          </Button>
        </div>
      </section>
      <CTABand />
    </>
  );
}
