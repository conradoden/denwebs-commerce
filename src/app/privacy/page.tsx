import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Denwebs collects, uses, and protects your information.",
};

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-20 lg:px-8">
      <p className="font-mono text-[13px] uppercase tracking-widest text-muted">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 font-mono text-[12px] uppercase tracking-wide text-muted">
        Placeholder, replace with counsel-reviewed policy before launch.
      </p>
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/85">
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">What we collect</h2>
          <p>
            Information you submit through our forms (name, email, company,
            store URL, project details) and standard analytics data if analytics
            is enabled. We do not collect payment information on this site.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">How we use it</h2>
          <p>
            To respond to your inquiry, prepare for conversations you requested,
            and improve this site. We do not sell your information or add you to
            marketing lists without consent.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">Retention & your rights</h2>
          <p>
            We keep inquiry data as long as needed to serve the conversation and
            legitimate business records. You may request access, correction, or
            deletion of your data at any time via hello@denwebs.com.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">Contact</h2>
          <p>
            Privacy questions: hello@denwebs.com. This placeholder policy must
            be reviewed against applicable law (GDPR, CCPA, etc.) before launch.
          </p>
        </section>
      </div>
    </article>
  );
}
