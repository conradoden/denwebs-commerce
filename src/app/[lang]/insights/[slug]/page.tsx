import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import {
  dateLocales,
  fmt,
  langAlternates,
  locales,
  resolveLocale,
} from "@/i18n/config";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getContent(lang).insights.map((i) => ({ lang, slug: i.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const post = getContent(locale).getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date },
    alternates: langAlternates(locale, `/insights/${slug}`),
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const post = getContent(locale).getInsight(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Denwebs" },
    publisher: { "@type": "Organization", name: "Denwebs" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-3xl px-5 py-14 md:py-20 lg:px-8">
        <Breadcrumbs
          lang={locale}
          items={[
            { label: t.insights.eyebrow, href: "/insights" },
            { label: post.category },
          ]}
        />
        <p className="eyebrow">
          {post.category} ·{" "}
          {new Date(post.date).toLocaleDateString(dateLocales[locale], {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {fmt(t.common.readTime, { time: post.readTime })}
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-12 space-y-9">
          {post.body.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="mb-3.5 font-display text-2xl font-bold tracking-[-0.01em]">
                  {block.heading}
                </h2>
              )}
              <p className="text-lg leading-[1.8] text-ink/80">{block.text}</p>
            </div>
          ))}
        </div>
      </article>
      <CTABand lang={locale} t={t.cta} quoteLabel={t.common.getQuote} />
    </>
  );
}
