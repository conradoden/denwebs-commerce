import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getContent } from "@/content";
import { getPortfolioForService } from "@/content/portfolio";
import { getMessages } from "@/i18n/dictionaries";
import { langAlternates, locales, resolveLocale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getContent(lang).aiServices.map((s) => ({ lang, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const service = getContent(locale).aiServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${t.servicePage.crumbAi}`,
    description: service.promise,
    alternates: langAlternates(locale, `/services/ai/${slug}`),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);
  const service = c.aiServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedSlugs = c.relatedWorkByService[slug] ?? [];
  const related = relatedSlugs.length
    ? c.caseStudies.filter((cs) => relatedSlugs.includes(cs.slug))
    : c.caseStudies.slice(0, 3);
  const relatedPortfolio = getPortfolioForService(slug);

  return (
    <ServicePage
      service={service}
      lang={locale}
      t={t.servicePage}
      common={t.common}
      cta={t.cta}
      crumbs={[
        { label: t.servicePage.crumbServices, href: "/services" },
        { label: t.servicePage.crumbAi, href: "/services/ai" },
        { label: service.title },
      ]}
      relatedStudies={related}
      relatedPortfolio={relatedPortfolio}
    />
  );
}
