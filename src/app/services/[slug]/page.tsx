import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services, getService } from "@/content/services";
import { caseStudies, relatedWorkByService } from "@/content/case-studies";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Shopify Services`,
    description: service.promise,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedSlugs = relatedWorkByService[slug] ?? [];
  const related = relatedSlugs.length
    ? caseStudies.filter((c) => relatedSlugs.includes(c.slug))
    : caseStudies.slice(0, 2);

  return (
    <ServicePage
      service={service}
      crumbs={[
        { label: "Services", href: "/services" },
        { label: service.title },
      ]}
      relatedStudies={related}
    />
  );
}
