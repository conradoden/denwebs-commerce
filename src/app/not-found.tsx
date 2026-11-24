import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero-atmosphere relative flex min-h-[70vh] items-center overflow-hidden text-paper">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="font-mono text-[13px] uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          This page went out of stock.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-paper/70">
          The URL doesn&apos;t resolve — it may have moved or never existed.
          Here&apos;s the way back to things that do.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-sm bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink hover:bg-accent-deep"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper hover:border-paper"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper hover:border-paper"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
