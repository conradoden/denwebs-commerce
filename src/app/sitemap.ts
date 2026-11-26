import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const c = getContent("en");
  const base = c.site.url;

  const staticPaths = [
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
  ];

  const dynamicPaths = [
    ...c.services.map((s) => `/services/${s.slug}`),
    ...c.aiServices.map((s) => `/services/ai/${s.slug}`),
    ...c.caseStudies.map((cs) => `/work/${cs.slug}`),
    ...c.insights.map((i) => `/insights/${i.slug}`),
  ];

  const toEntry = (path: string, priority: number, changeFrequency: "monthly" | "yearly") =>
    locales.map((lang) => ({
      url: `${base}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority: path === "" && lang === "en" ? 1 : priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}${path}`])
        ),
      },
    }));

  return [
    ...staticPaths.flatMap((p) => toEntry(p, 0.8, "monthly")),
    ...dynamicPaths.flatMap((p) =>
      toEntry(p, p.startsWith("/insights/") && p !== "/insights" ? 0.5 : 0.7, "monthly")
    ),
  ];
}
