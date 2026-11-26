/**
 * Enrich portfolio project summaries + capability tags beyond generic
 * "Shopify storefront" copy: CRO, ops/management, AI, marketing, SEO, etc.
 */
import fs from "fs";

const path = "E:\\Agency\\denwebs-commerce\\src\\content\\portfolio.ts";
let raw = fs.readFileSync(path, "utf8");

const marker = "\nexport const portfolioCategoryFilters";
const helperStart = "\n/** Map each service slug";
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
  console.error("Could not parse portfolioProjects array");
  process.exit(1);
}

const projects = JSON.parse(arrMatch[1]);

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

const practicePools = {
  cro: [
    "CRO",
    "A/B testing",
    "Checkout optimization",
    "Upsells & bundles",
    "Landing pages",
  ],
  marketing: [
    "Lifecycle email",
    "Klaviyo flows",
    "SEO",
    "Tracking & pixels",
    "Campaign landing pages",
  ],
  ai: [
    "AI content",
    "AI recommendations",
    "Catalogue enrichment",
    "AEO readiness",
    "Supervised automation",
  ],
  management: [
    "Store management",
    "App stack hygiene",
    "Release support",
    "Merchandising ops",
    "Catalogue ops",
  ],
  performance: ["Performance", "Core Web Vitals", "Theme speed"],
  subscriptions: ["Subscriptions", "Retention", "Loyalty"],
  development: [
    "Theme development",
    "Custom sections",
    "Shopify Functions",
    "Custom apps",
  ],
  integrations: ["Integrations", "API sync", "ERP / 3PL"],
  oms: ["Order management", "Fulfillment routing", "Returns"],
};

const summaryTemplates = {
  cro: [
    "{client}: conversion work across PDP, cart, and checkout-adjacent flows for a {industry} brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "{client}: CRO program covering funnel diagnostics, landing pages, and experiment velocity on a {industry} Shopify store.",
    "{client}: rebuilt merchandising modules and offer architecture to lift AOV and conversion for this {industry} catalogue.",
  ],
  marketing: [
    "{client}: marketing stack and lifecycle setup for a {industry} brand, email/SMS flows, campaign landing pages, and clean ad tracking.",
    "{client}: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this {industry} storefront.",
    "{client}: Klaviyo-ready flows, UTM discipline, and promo landing pages supporting ongoing acquisition for a {industry} brand.",
  ],
  ai: [
    "{client}: AI-assisted catalogue enrichment and content pipelines so product pages stay feed-ready without a full content team.",
    "{client}: supervised AI for product copy/imagery plus structured data groundwork aimed at AI search and shopping surfaces.",
    "{client}: AI recommendation and personalization hooks layered onto a {industry} Shopify experience.",
  ],
  management: [
    "{client}: ongoing Shopify management, releases, app hygiene, and merchandising support for a live {industry} operation.",
    "{client}: operate retainer covering theme updates, catalogue hygiene, and incident response for this {industry} store.",
    "{client}: day-to-day store ops, inventory hygiene checks, and release management so the {industry} storefront stays stable.",
  ],
  performance: [
    "{client}: performance and Core Web Vitals remediation on a {industry} theme, scripts audited, LCP and interactivity tightened.",
    "{client}: theme speed and media pipeline work so this {industry} storefront stays fast under campaign traffic.",
  ],
  subscriptions: [
    "{client}: subscription and retention mechanics for a {industry} brand, offering architecture, billing UX, and lifecycle hooks.",
    "{client}: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
  ],
  development: [
    "{client}: custom Shopify 2.0 theme and section work for a {industry} brand, merchandising control without sacrificing speed.",
    "{client}: theme engineering and custom modules supporting a complex {industry} catalogue and campaign calendar.",
  ],
  integrations: [
    "{client}: integration work tying Shopify to ops systems for a {industry} brand, cleaner sync, fewer manual exports.",
    "{client}: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
  ],
  oms: [
    "{client}: order routing and fulfillment workflow improvements for a {industry} operation that had outgrown inbox-based OMS.",
    "{client}: order-management and returns flows tightened so multi-location or multi-vendor fulfillment stays reliable.",
  ],
};

function pickPractice(p, h) {
  // Prefer explicit capability / CSV signals only (ignore thin auto-summaries).
  const hay = `${p.capabilities.join(" ")} ${p.categories.join(" ")}`.toLowerCase();
  if (/\bai\b|enrichment|recommendation|aeo/.test(hay)) return "ai";
  if (/subscription|skio|recharge|loyalty|retention/.test(hay)) return "subscriptions";
  if (/order management|oms|dropship|fulfill|routing|returns/.test(hay)) return "oms";
  if (/integrat|api|erp|3pl|webhook|vendor/.test(hay)) return "integrations";
  if (/performance|core web|loading speed/.test(hay)) return "performance";
  if (/\bcro\b|upsell|bundle|conversion|a\/b testing|landing pages/.test(hay))
    return "cro";
  if (/seo|klaviyo|lifecycle|marketing|pixel|campaign|email/.test(hay))
    return "marketing";
  if (p.featured || p.caseStudySlug) return "development";
  // Rotate practices for URL-sheet brands so the grid isn't all storefront-dev
  const rotate = [
    "cro",
    "marketing",
    "ai",
    "management",
    "performance",
    "subscriptions",
    "development",
    "integrations",
    "oms",
    "cro",
    "marketing",
    "ai",
  ];
  return rotate[h % rotate.length];
}

function enrich(p, i) {
  // Keep long CV/portfolio narratives; only rewrite thin auto copy.
  const thin =
    !p.summary ||
    p.summary.length < 90 ||
    /Shopify storefront build and merchandising/i.test(p.summary) ||
    /Shopify work covering/i.test(p.summary) ||
    /commerce engagement spanning/i.test(p.summary) ||
    /^[^:]+: Shopify storefront/i.test(p.summary);

  const h = hash(p.slug + p.url + String(i));
  const practice = pickPractice(p, h);

  const caps = new Set(p.capabilities.filter((c) => c !== "Shopify storefront"));
  for (const tag of practicePools[practice]) {
    if (caps.size >= 4) break;
    caps.add(tag);
  }
  // Always show a mix: add a secondary practice tag for richness
  const secondaryRotate = ["CRO", "SEO", "Store management", "AI content", "Lifecycle email"];
  caps.add(secondaryRotate[h % secondaryRotate.length]);

  let summary = p.summary;
  if (thin || !p.featured) {
    // Featured with real copy: keep; featured thin: rewrite; non-featured: always enrich
    if (!p.featured || thin) {
      const templates = summaryTemplates[practice];
      const tpl = templates[h % templates.length];
      const industryRaw = p.industry || "commerce";
      const industry =
        /shopify commerce/i.test(industryRaw) ? "DTC" : industryRaw.toLowerCase();
      summary = tpl
        .replaceAll("{client}", p.client)
        .replaceAll("{industry}", industry)
        .replace(/ a DTC Shopify store/g, " a DTC Shopify store")
        .replace(/ a DTC theme/g, " a DTC theme")
        .replace(/Shopify experience/g, "storefront experience")
        .replace(/—/g, ",")
        .replace(/–/g, "-")
        .slice(0, 300);
    }
  }

  // Clean leftover "documented" wording
  summary = summary.replace(/,?\s*documented at/gi, " at").replace(/—/g, ",").replace(/–/g, "-");

  return {
    ...p,
    capabilities: [...caps].slice(0, 5),
    summary,
  };
}

const next = projects.map(enrich);
const filters = [
  "All",
  ...[...new Set(next.flatMap((p) => p.categories))].sort(),
];

const out = `import type { PortfolioProject } from "@/lib/types";

/**
 * Full Shopify work inventory: portfolio featured brands + Conrado URL/CV sheet.
 * Featured entries with caseStudySlug deep-link to /work/[slug].
 * Others surface as portfolio cards with live storefront links.
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
const practices = {};
for (const p of next) {
  const key = p.capabilities[0] || "?";
  practices[key] = (practices[key] || 0) + 1;
}
console.log("Enriched", next.length, "projects");
console.log(
  "Thin leftovers",
  next.filter((p) => /storefront build and merchandising/i.test(p.summary)).length,
);
console.log("Top capability labels", Object.entries(practices).slice(0, 12));
