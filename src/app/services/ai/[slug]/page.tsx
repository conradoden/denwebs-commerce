import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { aiServices } from "@/content/services";
import { caseStudies, relatedWorkByService } from "@/content/case-studies";
import { getPortfolioForService } from "@/content/portfolio";

export function generateStaticParams() {
  return aiServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = aiServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | AI for Shopify`,
    description: service.promise,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = aiServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedSlugs = relatedWorkByService[slug] ?? [];
  const related = relatedSlugs.length
    ? caseStudies.filter((c) => relatedSlugs.includes(c.slug))
    : caseStudies.slice(0, 3);
  const relatedPortfolio = getPortfolioForService(slug);

  return (
    <ServicePage
      service={service}
      crumbs={[
        { label: "Services", href: "/services" },
        { label: "AI", href: "/services/ai" },
        { label: service.title },
      ]}
      relatedStudies={related}
      relatedPortfolio={relatedPortfolio}
    />
  );
}
