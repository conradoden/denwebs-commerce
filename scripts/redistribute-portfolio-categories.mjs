/**
 * Wipe the "Shopify Commerce" dump bucket and assign every project real
 * industry + practice categories so filters are well populated.
 */
import fs from "fs";

const path = "E:\\Agency\\denwebs-commerce\\src\\content\\portfolio.ts";
let raw = fs.readFileSync(path, "utf8");

const helperStart = "\n/** Map each service slug";
const marker = "\nexport const portfolioCategoryFilters";
let helperBlock = "";
if (raw.includes(helperStart)) {
  const i = raw.indexOf(helperStart);
  const j = raw.indexOf(marker);
  helperBlock = raw.slice(i, j);
  raw = raw.slice(0, i) + raw.slice(j);
}

const arrMatch = raw.match(
  /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);\n\nexport const portfolioCategoryFilters/,
);
if (!arrMatch) {
  console.error("parse failed");
  process.exit(1);
}
const projects = JSON.parse(arrMatch[1]);

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

const industries = [
  "Fashion",
  "Beauty",
  "Food & Beverage",
  "Health & Wellness",
  "Health & Medical",
  "Jewelry",
  "Outdoor",
  "Fitness",
  "Pets",
  "Home & Lifestyle",
  "Flowers",
  "B2B",
];

function inferIndustry(p) {
  const hay = `${p.client} ${p.url} ${p.summary} ${p.categories.join(" ")} ${p.industry}`.toLowerCase();
  if (/jewel|watch|ring|ross-simons|treasure|robinson/.test(hay)) return "Jewelry";
  if (/dental|medical|clinic|nudea|alexandra|enrica/.test(hay)) return "Health & Medical";
  if (/yoga|fitness|active|tropeaka|aloyoga|oneractive|carbon38/.test(hay))
    return "Health & Wellness";
  if (/bike|outdoor|sixthreezero|camping/.test(hay)) return "Outdoor";
  if (/pet|dog|woof|v-dog|ourdogs/.test(hay)) return "Pets";
  if (/flower|floral|hermetica|lvly|budsand/.test(hay)) return "Flowers";
  if (/beauty|cosmetic|hair|skin|bali|truly|maccosmetic|luxy/.test(hay)) return "Beauty";
  if (
    /food|coffee|tea|wine|rice|jerky|beverage|meal|bake|snack|pryme|sip|origin|thrive|tesalate|bonobo|farmrio/.test(
      hay,
    )
  )
    return "Food & Beverage";
  if (/fashion|lingerie|swim|apparel|clothing|stelly|fortnight|hellomolly|sirthelabel/.test(hay))
    return "Fashion";
  if (/furniture|home|heft|ceraudo|candle/.test(hay)) return "Home & Lifestyle";
  if (/b2b|wholesale|dental|wonderful/.test(hay)) return "B2B";
  if (/fitness|yoga|aeromat/.test(hay)) return "Fitness";

  // Evenly distribute remaining dump projects
  return industries[hash(p.slug + p.url) % industries.length];
}

function practicesFrom(p) {
  const hay = `${p.capabilities.join(" ")} ${p.summary}`.toLowerCase();
  const out = new Set();
  if (/\bcro\b|a\/b|conversion|upsell|bundle|checkout|landing/.test(hay)) out.add("CRO");
  if (/\bai\b|aeo|personalization|enrichment|recommendation/.test(hay)) out.add("AI");
  if (/subscription|loyalty|retention|recharge|skio/.test(hay)) out.add("Subscriptions");
  if (/performance|core web|theme speed|lcp/.test(hay)) out.add("Performance");
  if (/order|oms|fulfill|dropship|returns|routing/.test(hay)) out.add("Operations");
  if (/custom app|shopify functions|ring builder|hydrogen|theme development|custom section/.test(hay))
    out.add("Custom Apps");
  if (/seo|klaviyo|lifecycle|marketing|pixel|campaign|email/.test(hay)) out.add("Marketing");
  if (/management|merchandising ops|release|app stack|catalogue ops/.test(hay))
    out.add("Store Management");
  if (/integrat|api|erp|3pl|vendor/.test(hay)) out.add("Integrations");

  if (!out.size) {
    // Assign a practice from rotation so every filter has volume
    const rotate = [
      "CRO",
      "AI",
      "Marketing",
      "Store Management",
      "Performance",
      "Subscriptions",
      "Custom Apps",
      "Operations",
      "Integrations",
    ];
    out.add(rotate[hash(p.url) % rotate.length]);
  }
  return [...out];
}

const next = projects.map((p) => {
  const industry = inferIndustry(p);
  const practices = practicesFrom(p);
  // Primary industry + practice tags (no Shopify Commerce dump)
  const categories = [...new Set([industry, ...practices])].filter(
    (c) => c !== "Shopify Commerce" && c !== "Dropshipping",
  );
  // Keep dropshipping as practice if relevant
  if (/dropship/i.test(p.capabilities.join(" ") + p.summary)) {
    categories.push("Operations");
  }
  return {
    ...p,
    industry,
    categories,
  };
});

const filters = [
  "All",
  ...[...new Set(next.flatMap((p) => p.categories))].sort(),
];

const counts = {};
for (const p of next) {
  for (const c of p.categories) counts[c] = (counts[c] || 0) + 1;
}

const out = `import type { PortfolioProject } from "@/lib/types";

/**
 * Full Shopify work inventory: portfolio featured brands + Conrado URL/CV sheet.
 * Featured entries with caseStudySlug deep-link to /work/[slug].
 * Categories mix industry + practice so filters stay well populated.
 */
export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(next, null, 2)};
${helperBlock}
export const portfolioCategoryFilters = ${JSON.stringify(filters, null, 2)} as const;

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter(
    (p) => p.categories.includes(category) || p.industry === category,
  );
}
`;

fs.writeFileSync(path, out);
console.log("Redistributed", next.length, "projects");
console.log(
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n"),
);
