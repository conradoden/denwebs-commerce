import { readFileSync, writeFileSync } from "fs";

const path = "E:\\Agency\\denwebs-commerce\\src\\content\\portfolio.ts";
let raw = readFileSync(path, "utf8");
const helperStart = "\n/** Map each service slug";
const marker = "\nexport const portfolioCategoryFilters";
let helper = "";
if (raw.includes(helperStart)) {
  const i = raw.indexOf(helperStart);
  const j = raw.indexOf(marker);
  helper = raw.slice(i, j);
  raw = raw.slice(0, i) + raw.slice(j);
}
const m = raw.match(
  /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);\n\nexport const portfolioCategoryFilters/,
);
const projects = JSON.parse(m[1]);

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

const industrySet = new Set([
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

const targets = [
  ...Array(8).fill("Outdoor"),
  ...Array(8).fill("Fitness"),
  ...Array(8).fill("B2B"),
  ...Array(6).fill("Home & Lifestyle"),
];
let ti = 0;
for (const p of projects) {
  if (["Outdoor", "Fitness", "B2B", "Home & Lifestyle"].includes(p.industry)) continue;
  if (p.categories.includes("Jewelry") || p.featured) continue;
  if (ti >= targets.length) break;
  if (hash(p.url) % 3 !== 0) continue;
  const ind = targets[ti++];
  p.industry = ind;
  p.categories = [
    ...new Set([
      ind,
      ...p.categories.filter((c) => !industrySet.has(c)),
    ]),
  ];
}

const filters = ["All", ...[...new Set(projects.flatMap((p) => p.categories))].sort()];
const counts = {};
for (const p of projects) for (const c of p.categories) counts[c] = (counts[c] || 0) + 1;

const out = `import type { PortfolioProject } from "@/lib/types";

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
`;
writeFileSync(path, out);
console.log(
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n"),
);
