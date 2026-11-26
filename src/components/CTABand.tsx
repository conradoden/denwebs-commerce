import Reveal from "./Reveal";
import Button from "./Button";

export default function CTABand({
  title = "Let's talk about your store.",
  copy = "Tell us what you're building, migrating, or untangling. We reply within one business day.",
}: {
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
                Next step
              </p>
              <h2 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/65">{copy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="accent" arrow>
                Get a quote
              </Button>
              <Button href="/contact?intent=discovery#book" variant="outlineLight" arrow>
                Book a discovery call
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
