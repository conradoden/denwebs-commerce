import Reveal from "./Reveal";
import Button from "./Button";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

export default function CTABand({
  lang,
  t,
  quoteLabel,
  title,
  copy,
}: {
  lang: Locale;
  t: Messages["cta"];
  quoteLabel: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="hero-atmosphere relative overflow-hidden py-20 text-paper md:py-28">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[88rem] px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow" data-dark="true">
                {t.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">
                {title ?? t.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/65">{copy ?? t.copy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" lang={lang} variant="accent" arrow>
                {quoteLabel}
              </Button>
              <Button href="/contact?intent=discovery" lang={lang} variant="outlineLight" arrow>
                {t.discovery}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
