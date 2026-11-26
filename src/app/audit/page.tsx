import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Free Shopify & AI Visibility Audit",
  description:
    "Request a focused audit of your storefront or AI search presence. High-level findings call, no obligation.",
};

const whatYouGet = [
  {
    track: "Shopify store audit",
    items: [
      "UX / conversion friction in templates, cart, and checkout-adjacent flows",
      "Theme, performance, and Core Web Vitals snapshot",
      "App and integration surface review",
      "Prioritized findings, fix-first order, not a wish list",
    ],
  },
  {
    track: "AI visibility audit",
    items: [
      "How ChatGPT, Perplexity, Gemini & AI Overviews describe your brand today",
      "Product structured-data and entity gaps",
      "Citation sources AI uses in your category",
      "The first three moves that would shift your visibility",
    ],
  },
];

export default function Audit() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Free audit</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.03] tracking-[-0.03em] md:text-7xl">
            See what we&apos;d fix <span className="accent-serif font-normal">first</span>, free.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            Pick a track, send your store URL, and get a high-level findings
            call. It&apos;s a focused look, not a free rebuild, deep audits are
            a scoped engagement if you want the full picture.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {whatYouGet.map((t, i) => (
            <div key={t.track} className="rounded-[5px] border border-line bg-paper-dim p-8">
              <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.01em]">{t.track}</h2>
              <ul className="mt-5 space-y-3">
                {t.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-snug text-ink/85">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-[-0.01em]">Request your audit</h2>
          <div className="mt-8 rounded-[5px] border border-line bg-paper p-6 md:p-10">
            <Suspense fallback={<p className="text-muted">Loading form…</p>}>
              <ContactForm auditMode />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
