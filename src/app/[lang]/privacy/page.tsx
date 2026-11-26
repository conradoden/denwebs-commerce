import type { Metadata } from "next";
import { getMessages } from "@/i18n/dictionaries";
import { langAlternates, resolveLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  return {
    title: t.privacy.metaTitle,
    description: t.privacy.metaDesc,
    alternates: langAlternates(locale, "/privacy"),
  };
}

export default async function Privacy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getMessages(resolveLocale(lang));

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-20 lg:px-8">
      <p className="font-mono text-[13px] uppercase tracking-widest text-muted">{t.privacy.legal}</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
        {t.privacy.title}
      </h1>
      <p className="mt-3 font-mono text-[12px] uppercase tracking-wide text-muted">
        {t.privacy.placeholder}
      </p>
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/85">
        {t.privacy.sections.map((s) => (
          <section key={s.h}>
            <h2 className="mb-2 font-display text-xl font-bold">{s.h}</h2>
            <p>{s.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
