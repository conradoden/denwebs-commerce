import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Denwebs website.",
};

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-20 lg:px-8">
      <p className="font-mono text-[13px] uppercase tracking-widest text-muted">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-3 font-mono text-[12px] uppercase tracking-wide text-muted">
        Placeholder, replace with counsel-reviewed terms before launch.
      </p>
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/85">
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">This website</h2>
          <p>
            Content on this site is provided for general information. Case
            studies marked as samples are illustrative until replaced with
            verified client work. Nothing here constitutes a binding offer or
            professional advice.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">Engagements</h2>
          <p>
            Client work is governed by individual statements of work and
            master service agreements, not by this website&apos;s content.
            Metrics and timelines referenced in sample content are illustrative.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">Intellectual property</h2>
          <p>
            Site content, copy, and design are property of Denwebs unless
            otherwise noted. &quot;Shopify&quot; and partner marks belong to
            their respective owners.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-bold">Contact</h2>
          <p>Questions about these terms: hello@denwebs.com.</p>
        </section>
      </div>
    </article>
  );
}
