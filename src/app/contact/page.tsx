import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us about your Shopify project. We reply within one business day.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
            Tell us what <span className="accent-serif font-normal">needs to change</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Migration, rebuild, operations, AI — a few sentences is enough to
            start. A senior person reads every submission.
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
        <div className="rounded-[5px] border border-line bg-paper-dim p-6 md:p-10">
          <Suspense fallback={<p className="text-muted">Loading form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
