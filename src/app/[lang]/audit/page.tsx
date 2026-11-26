import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { getContent } from "@/content";
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
    title: t.audit.metaTitle,
    description: t.audit.metaDesc,
    alternates: langAlternates(locale, "/audit"),
  };
}

export default async function Audit({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);

  return (
    <>
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.audit.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            {t.audit.h1a} <span className="accent-serif font-normal">{t.audit.h1b}</span>{" "}
            {t.audit.h1c}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            {t.audit.copy}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.audit.tracks.map((tr, i) => (
            <div key={tr.track} className="rounded-[5px] border border-line bg-paper-dim p-8">
              <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.01em]">{tr.track}</h2>
              <ul className="mt-5 space-y-3">
                {tr.items.map((it) => (
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
          <h2 className="font-display text-3xl font-bold tracking-[-0.01em]">{t.audit.formTitle}</h2>
          <div className="mt-8 rounded-[5px] border border-line bg-paper p-6 md:p-10">
            <Suspense fallback={<p className="text-muted">{t.common.loadingForm}</p>}>
              <ContactForm
                auditMode
                form={t.form}
                email={c.site.email}
                options={{
                  revenueRanges: c.revenueRanges,
                  timelines: c.timelines,
                  hearAbout: c.hearAbout,
                }}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
