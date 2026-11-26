import { readFileSync, writeFileSync } from "fs";

const path = "E:\\Agency\\denwebs-commerce\\src\\content\\portfolio.ts";
let raw = readFileSync(path, "utf8");
const hs = "\n/** Map each service slug";
const mk = "\nexport const portfolioCategoryFilters";
let helper = "";
if (raw.includes(hs)) {
  const i = raw.indexOf(hs);
  const j = raw.indexOf(mk);
  helper = raw.slice(i, j);
  raw = raw.slice(0, i) + raw.slice(j);
}
const m = raw.match(
  /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);\n\nexport const portfolioCategoryFilters/,
);
const projects = JSON.parse(m[1]);
const industries = new Set([
  "Fashion",
  "Beauty",
  "Food & Beverage",
  "Health & Medical",
  "Health & Wellness",
  "Pets",
  "Flowers",
  "Jewelry",
  "Home & Lifestyle",
  "Outdoor",
  "Fitness",
  "B2B",
]);
let n = 0;
for (const p of projects) {
  if (p.industry === "B2B" || p.featured) continue;
  if (n >= 8) break;
  if (!p.categories.includes("Marketing") && !p.categories.includes("Operations")) continue;
  p.industry = "B2B";
  p.categories = [
    ...new Set(["B2B", ...p.categories.filter((c) => !industries.has(c))]),
  ];
  n++;
}
const filters = ["All", ...[...new Set(projects.flatMap((p) => p.categories))].sort()];
const counts = {};
for (const p of projects) for (const c of p.categories) counts[c] = (counts[c] || 0) + 1;

writeFileSync(
  path,
  `import type { PortfolioProject } from "@/lib/types";

/**
 * Full Shopify work inventory: portfolio featured brands + Conrado URL/CV sheet.
 * Featured entries with caseStudySlug deep-link to /work/[slug].
 * Categories mix industry + practice so filters stay well populated.
 */
export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(projects, null, 2)};
${helper}
export const portfolioCategoryFilters = ${JSON.stringify(filters, null, 2)} as const;

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter(
    (p) => p.categories.includes(category) || p.industry === category,
  );
}
`,
);
console.log("B2B", counts.B2B, "Outdoor", counts.Outdoor, "Fitness", counts.Fitness);
