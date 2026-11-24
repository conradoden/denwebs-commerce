import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services, aiServices } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/services/ai",
    "/insights",
    "/about",
    "/partners",
    "/contact",
    "/audit",
    "/careers",
    "/privacy",
    "/terms",
  ].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const aiRoutes = aiServices.map((s) => ({
    url: `${site.url}/services/ai/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes = caseStudies.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${site.url}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...aiRoutes, ...workRoutes, ...insightRoutes];
}
