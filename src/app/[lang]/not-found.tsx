import Link from "next/link";
import { headers } from "next/headers";
import { getMessages } from "@/i18n/dictionaries";
import { localize, resolveLocale } from "@/i18n/config";

// Locale comes from the middleware-injected request header — 404s may hit
// before [lang] params resolve, so this is more reliable than params here.
export default async function NotFound() {
  const locale = resolveLocale((await headers()).get("x-locale"));
  const t = getMessages(locale);

  return (
    <section className="hero-atmosphere relative flex min-h-[70vh] items-center overflow-hidden text-paper">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="font-mono text-[13px] uppercase tracking-widest text-accent">{t.notFound.code}</p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          {t.notFound.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-paper/70">{t.notFound.copy}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href={localize("/", locale)}
            className="rounded-sm bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink hover:bg-accent-deep"
          >
            {t.notFound.home}
          </Link>
          <Link
            href={localize("/services", locale)}
            className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper hover:border-paper"
          >
            {t.notFound.services}
          </Link>
          <Link
            href={localize("/contact", locale)}
            className="rounded-sm border border-paper/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper hover:border-paper"
          >
            {t.notFound.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
