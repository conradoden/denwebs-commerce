import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactPanel from "@/components/ContactPanel";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import { langAlternates, localize, resolveLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  return {
    title: t.contact.metaTitle,
    description: t.contact.metaDesc,
    alternates: langAlternates(locale, "/contact"),
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);

  return (
    <section className="mx-auto max-w-[88rem] px-5 py-16 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.03] tracking-[-0.03em] md:text-6xl lg:text-7xl">
            {t.contact.h1a} <span className="accent-serif font-normal">{t.contact.h1b}</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.contact.copy}</p>
          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <p className="eyebrow">{t.contact.emailEyebrow}</p>
              <a
                href={`mailto:${c.site.email}`}
                className="mt-2 inline-block font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
              >
                {c.site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow">{t.contact.bookEyebrow}</p>
              <a
                href="#book"
                className="mt-2 inline-block font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
              >
                {t.contact.bookLink} →
              </a>
            </div>
            <div>
              <p className="eyebrow">{t.contact.responseEyebrow}</p>
              <p className="mt-2 font-medium">{t.contact.responseValue}</p>
            </div>
            <div>
              <p className="eyebrow">{t.contact.lighterEyebrow}</p>
              <Link
                href={localize("/audit", locale)}
                className="mt-2 inline-block font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
              >
                {t.contact.lighterLink} →
              </Link>
            </div>
          </div>
        </div>
        <Suspense fallback={<p className="text-muted">{t.common.loadingForm}</p>}>
          <ContactPanel
            t={t.contactPanel}
            form={t.form}
            site={c.site}
            options={{
              revenueRanges: c.revenueRanges,
              timelines: c.timelines,
              hearAbout: c.hearAbout,
            }}
          />
        </Suspense>
      </div>
    </section>
  );
}
