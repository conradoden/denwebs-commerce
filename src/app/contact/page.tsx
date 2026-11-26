import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPanel from "@/components/ContactPanel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us about your Shopify project, or book a 30-minute discovery call. We reply within one business day.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.03] tracking-[-0.03em] md:text-6xl lg:text-7xl">
            Tell us what <span className="accent-serif font-normal">needs to change</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Migration, rebuild, operations, or AI. Send a message, or book a
            30-minute discovery call and pick a slot that works.
          </p>
          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow">Book a call</p>
              <a
                href="#book"
                className="mt-2 inline-block font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
              >
                30-minute discovery →
              </a>
            </div>
            <div>
              <p className="eyebrow">Response time</p>
              <p className="mt-2 font-medium">We reply within 1 business day</p>
            </div>
            <div>
              <p className="eyebrow">Prefer a lighter start?</p>
              <a
                href="/audit"
                className="mt-2 inline-block font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
              >
                Request a free audit instead →
              </a>
            </div>
          </div>
        </div>
        <Suspense fallback={<p className="text-muted">Loading…</p>}>
          <ContactPanel />
        </Suspense>
      </div>
    </section>
  );
}
