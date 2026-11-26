import { readFileSync, writeFileSync } from "fs";

const path = "E:\\Agency\\denwebs-commerce\\src\\content\\portfolio.ts";
const raw = readFileSync(path, "utf8");
const m = raw.match(
  /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);/,
);
const projects = JSON.parse(m[1]);
const rest = raw.slice(raw.indexOf(m[0]) + m[0].length);

const denylist = [
  "trattoriadavittorio-ordertakeout.com",
  "mymagictour.myshopify.com",
  "print-your-posts.myshopify.com",
  "rasa-beverages.myshopify.com",
  "madres-beauty-point.myshopify.com",
  "enrica-lossi.myshopify.com",
];

function isDenied(url) {
  try {
    const h = new URL(url).hostname.replace(/^www\./, "");
    return denylist.some((d) => h === d || h.endsWith("." + d) || url.includes(d));
  } catch {
    return false;
  }
}

async function liveCheck(url) {
  try {
    const r = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(12000),
    });
    if ([404, 410, 503].includes(r.status)) return false;
    const html = (await r.text()).slice(0, 30000);
    if (/this store is currently unavailable/i.test(html)) return false;
    if (/cette boutique est actuellement indisponible/i.test(html)) return false;
    if (/enter using password/i.test(html)) return false;
    if (/coming soon/i.test(html) && /notify me|be the first to know|opening soon/i.test(html))
      return false;
    return true;
  } catch {
    return false;
  }
}

const kept = [];
const removed = [];
for (const p of projects) {
  if (p.featured || p.caseStudySlug) {
    kept.push(p);
    continue;
  }
  if (isDenied(p.url)) {
    removed.push({ p, reason: "denylist" });
    continue;
  }
  const ok = await liveCheck(p.url);
  if (!ok) removed.push({ p, reason: "probe" });
  else kept.push(p);
  if ((kept.length + removed.length) % 10 === 0) {
    console.log(`${kept.length + removed.length}/${projects.length}`);
  }
}

console.log(`kept ${kept.length} removed ${removed.length}`);
removed.forEach((r) => console.log("-", r.p.client, r.reason, r.p.url));

const PILLARS = ["CRO", "Marketing", "Consulting", "AI", "CRM", "Operations", "Development"];
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
function assign(p, i) {
  const hay = `${(p.services || []).join(" ")} ${p.capabilities.join(" ")} ${p.summary}`.toLowerCase();
  const s = new Set();
  if (/\bcro\b|conversion|upsell|bundle|checkout|a\/b/.test(hay)) s.add("CRO");
  if (/marketing|seo|campaign|pixel|tracking/.test(hay)) s.add("Marketing");
  if (/\bai\b|aeo|enrichment|recommendation|personalization/.test(hay)) s.add("AI");
  if (/crm|klaviyo|lifecycle|retention|loyalty|subscription/.test(hay)) s.add("CRM");
  if (/operations|oms|fulfill|inventory|integrat|routing|returns/.test(hay)) s.add("Operations");
  if (/consulting|audit|roadmap|advisory|strategy/.test(hay) || p.featured) s.add("Consulting");
  if (p.featured && /tropeaka|sixthreezero|wonderful|development|theme/.test(hay + (p.caseStudySlug || "")))
    s.add("Development");
  if (!s.size) {
    const rot = ["CRO", "Marketing", "AI", "CRM", "Consulting", "Operations"];
    s.add(rot[(hash(p.url) + i) % rot.length]);
  }
  return [...s].sort((a, b) => (a === "Development" ? 1 : b === "Development" ? -1 : 0)).slice(0, 3);
}
const map = {
  CRO: ["CRO", "A/B testing", "Checkout optimization", "Upsells & bundles"],
  Marketing: ["Marketing", "SEO", "Campaign pages", "Tracking & pixels"],
  Consulting: ["Consulting", "Audits", "Roadmaps", "Stack advisory"],
  AI: ["AI", "Catalogue enrichment", "Recommendations", "AEO readiness"],
  CRM: ["CRM", "Klaviyo", "Lifecycle", "Retention"],
  Operations: ["Operations", "OMS", "Integrations", "Inventory"],
  Development: ["Theme development", "Custom sections", "Shopify 2.0", "Performance"],
};
function caps(services) {
  const tags = [];
  for (const s of services) for (const t of map[s] || []) {
    if (!tags.includes(t)) tags.push(t);
    if (tags.length >= 4) return tags;
  }
  return tags;
}
function summary(p, services) {
  if (p.featured && p.summary?.length > 120) return p.summary;
  const primary = services[0];
  const industry = (p.industry || "DTC").toLowerCase();
  const t = {
    CRO: `${p.client}: CRO across PDP, cart, and offer architecture for a ${industry} brand, upsells, bundles, and tests tied to revenue.`,
    Marketing: `${p.client}: marketing support for a ${industry} brand, SEO foundations, campaign landing pages, and tracking hygiene.`,
    Consulting: `${p.client}: Shopify consulting, stack diagnosis, roadmap, and prioritised next moves for a ${industry} operator.`,
    AI: `${p.client}: AI for catalogue and commerce, supervised enrichment, recommendations, and AI-search readiness.`,
    CRM: `${p.client}: CRM and lifecycle for a ${industry} brand, Klaviyo-ready flows, retention, and subscription hooks.`,
    Operations: `${p.client}: commerce operations, order/inventory workflows and integrations for a reliable ${industry} stack.`,
    Development: `${p.client}: Shopify theme and custom module work for a ${industry} brand, engineered for merchandising and speed.`,
  };
  return (t[primary] || t.Consulting).slice(0, 280);
}

const next = kept.map((p, i) => {
  const services = assign(p, i);
  const industry = p.industry && p.industry !== "Shopify Commerce" ? p.industry : "DTC";
  return {
    ...p,
    industry,
    services,
    categories: [...new Set([...services, industry])],
    capabilities: caps(services),
    summary: summary(p, services),
  };
});

const filters = ["All", ...PILLARS, ...[...new Set(next.map((p) => p.industry))].sort()];
const helper = `
/** Map each service slug to portfolio capability / keyword signals. */
const serviceSignals: Record<string, RegExp> = {
  consulting: /consulting|audit|roadmap|advisory|strategy/i,
  audits: /consulting|audit|cro|performance|seo|marketing/i,
  design: /development|theme|brand|shopify 2\\.0|section/i,
  development: /development|theme|custom|shopify 2\\.0|hydrogen|section/i,
  migrations: /migration|replatform/i,
  catalogue: /ai|catalogue|enrichment|product/i,
  inventory: /inventory|operations|sync/i,
  "order-management": /operations|oms|order|fulfill|routing/i,
  integrations: /operations|integrat|api|erp|3pl/i,
  cro: /cro|conversion|upsell|bundle|checkout|a\\/b/i,
  aeo: /ai|aeo|enrichment|recommendation/i,
  "agentic-commerce": /ai|feed|catalogue|agentic/i,
  operations: /operations|oms|inventory|crm|lifecycle/i,
};

export function getPortfolioForService(serviceSlug: string): PortfolioProject[] {
  const signal = serviceSignals[serviceSlug] ?? /cro|marketing|ai|crm|consulting|operations|development/i;
  const matched = portfolioProjects.filter((p) => {
    const hay = \`\${(p.services || []).join(" ")} \${p.capabilities.join(" ")} \${p.categories.join(" ")} \${p.summary}\`;
    return signal.test(hay);
  });
  if (serviceSlug === "consulting") return portfolioProjects;
  if (matched.length < 6) {
    const featured = portfolioProjects.filter((p) => p.featured);
    const ids = new Set(matched.map((p) => p.url));
    for (const f of featured) if (!ids.has(f.url)) matched.push(f);
  }
  return matched;
}
`;

writeFileSync(
  path,
  `import type { PortfolioProject } from "@/lib/types";

/**
 * Live Shopify portfolio only (unavailable / password / DNS-dead URLs pruned).
 * Categories lead with service pillars: CRO, Marketing, Consulting, AI, CRM, Operations, Development.
 */
export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(next, null, 2)};
${helper}
export const portfolioCategoryFilters = ${JSON.stringify(filters, null, 2)} as const;

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter(
    (p) =>
      p.categories.includes(category) ||
      p.industry === category ||
      (p.services || []).includes(category),
  );
}
`,
);

const counts = {};
for (const p of next) for (const s of p.services || []) counts[s] = (counts[s] || 0) + 1;
console.log("pillars", counts);
