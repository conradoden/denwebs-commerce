import fs from "fs";

const csvPath =
  process.argv[2] ||
  "c:\\Users\\Administrator\\.cursor\\projects\\e-Agency\\attachments\\c38ecce0-5322-418c-9c61-9991fcf2a16d\\Shopify-URLs-with-Conrado.csv";
const out =
  process.argv[3] ||
  "E:\\Agency\\denwebs-commerce\\src\\content\\portfolio.ts";

const raw = fs.readFileSync(csvPath, "utf8");
const lines = raw.trim().split(/\r?\n/);

function parseLine(line) {
  const cols = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQ = !inQ;
      continue;
    }
    if (c === "," && !inQ) {
      cols.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  cols.push(cur);
  return cols;
}

const headers = parseLine(lines[0]).map((h) => h.trim());
const rows = lines.slice(1).map(parseLine);
const idx = Object.fromEntries(headers.map((h, i) => [h, i]));

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function brandFromUrl(url) {
  try {
    const h = new URL(url).hostname.replace(/^www\./, "");
    const base = h.replace(/\.myshopify\.com$/, "").split(".")[0];
    return base
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  } catch {
    return url;
  }
}

const flagMap = {
  Fashion: "Fashion",
  Beauty_Cosmetics: "Beauty",
  Hair: "Beauty",
  Food_Beverage: "Food & Beverage",
  Yoga_Fitness: "Fitness",
  Jewelry: "Jewelry",
  Flower: "Flowers",
  Medical: "Health & Medical",
  Dropshipping: "Dropshipping",
  Custom_Dev: "Theme & custom development",
  Custom_OMS: "Order management / custom app",
  Ring_Builder: "Custom Shopify app",
  AI_Integration: "AI",
  Shopify_Plus: "Shopify Plus",
  Wordpress_Migration: "Migration",
  WooCommerce_Migration: "Migration",
};

const portfolioExtras = [
  {
    url: "https://tropeaka.com",
    client: "Tropeaka",
    industry: "Health & Wellness",
    categories: ["Health & Wellness", "CRO"],
    capabilities: ["Shopify 2.0 theme", "CRO", "Performance"],
    summary:
      "Custom Shopify 2.0 theme built from Figma into a conversion-focused health brand storefront, documented at 6%+ conversion.",
    image: "/images/work/tropeaka.jpg",
    caseStudySlug: "tropeaka",
  },
  {
    url: "https://wonderfuldental.com",
    client: "Wonderful Dental",
    industry: "Health & Medical",
    categories: ["Health & Medical", "B2B"],
    capabilities: ["Shopify 2.0", "Motion / GSAP", "Performance"],
    summary:
      "Animated B2B dental-supply storefront balancing immersive motion with performance.",
    image: "/images/work/wonderful-dental.jpg",
    caseStudySlug: "wonderful-dental",
  },
  {
    url: "https://www.sixthreezero.com",
    client: "Sixthreezero",
    industry: "Outdoor",
    categories: ["Outdoor", "Fitness"],
    capabilities: ["Hydrogen", "Shopify Functions", "Guided selling", "Custom apps"],
    summary:
      "Guided-selling and personalized shopping experience for a U.S. bike brand, lifting AOV and conversion.",
    image: "/images/work/sixthreezero.jpg",
    caseStudySlug: "sixthreezero",
  },
  {
    url: "https://origintea.com",
    client: "Origin Tea",
    industry: "Food & Beverage",
    categories: ["Food & Beverage", "CRO"],
    capabilities: ["Shopify 2.0", "CRO", "Klaviyo", "Loyalty"],
    summary:
      "Premium tea and iced-syrup storefront with lead-capture and loyalty mechanics; 800+ reviews, shipping to 100+ countries.",
    image: "/images/work/origin-tea.jpg",
    caseStudySlug: "origin-tea",
  },
  {
    url: "https://prymesnacks.com.au",
    client: "Pryme",
    industry: "Food & Beverage",
    categories: ["Food & Beverage"],
    capabilities: ["Subscriptions", "Shopify 2.0", "Branding"],
    summary:
      "Subscription-first Shopify storefront for an Australian Wagyu beef jerky brand.",
    image: "/images/work/pryme.jpg",
    caseStudySlug: "pryme",
  },
  {
    url: "https://nicerice.com.au",
    client: "Nice Rice",
    industry: "Food & Beverage",
    categories: ["Food & Beverage", "CRO"],
    capabilities: ["Shopify 2.0", "Content / recipes", "UGC"],
    summary:
      "Branded rice storefront with a community recipe hub driving repeat visits.",
    image: "/images/work/nice-rice.jpg",
    caseStudySlug: "nice-rice",
  },
  {
    url: "https://sipcoco.com.au",
    client: "Sip Coco",
    industry: "Food & Beverage",
    categories: ["Food & Beverage"],
    capabilities: ["Shopify 2.0", "UGC", "Brand systems"],
    summary:
      "Flavor-driven coconut water storefront with distinct flavor identity and UGC-heavy homepage.",
    image: "/images/work/sip-coco.jpg",
    caseStudySlug: "sip-coco",
  },
  {
    url: "https://primecutsjerky.com",
    client: "Prime Cuts Jerky",
    industry: "Food & Beverage",
    categories: ["Food & Beverage", "CRO"],
    capabilities: ["Subscriptions", "Bundles", "CRO"],
    summary:
      "Bundle and monthly subscription club storefront built to lift AOV and recurring revenue.",
    image: "/images/work/prime-cuts-jerky.jpg",
    caseStudySlug: "prime-cuts-jerky",
  },
];

const seen = new Set();
const projects = [];

function add(p) {
  const key = (p.url || "").replace(/\/$/, "").toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  projects.push(p);
}

for (const ex of portfolioExtras) {
  add({
    slug: slugify(ex.client),
    client: ex.client,
    url: ex.url,
    industry: ex.industry,
    categories: ex.categories,
    capabilities: ex.capabilities,
    summary: ex.summary,
    image: ex.image,
    featured: true,
    caseStudySlug: ex.caseStudySlug,
  });
}

const imageMap = {
  "marc robinson jewelers": "/images/work/marc-robinson-watch.jpg",
  thejewelleryroom: "/images/work/thejewelleryroom.jpg",
  "m robinson fine jewelers": "/images/work/m-robinson-watch.webp",
  "treasures jeweler": "/images/work/treasures-editorial.png",
};
const caseMap = {
  "marc robinson jewelers": "marc-robinson-jewelers",
  thejewelleryroom: "thejewelleryroom",
  "m robinson fine jewelers": "m-robinson-fine-jewelers",
  "treasures jeweler": "treasures-jeweler",
};

for (const cols of rows) {
  const url = (cols[idx["Shopify URL"]] || "").trim();
  if (!url) continue;
  const company = (cols[idx["Company / Project"]] || "").trim();
  const summaryCsv = (cols[idx["Summary"]] || "").trim();
  const details = (cols[idx["Details"]] || "").trim();
  const source = (cols[idx["Source"]] || "").trim();

  const categories = [];
  const capabilities = [];
  for (const [flag, label] of Object.entries(flagMap)) {
    const v = (cols[idx[flag]] || "").trim();
    if (v.toLowerCase() !== "yes") continue;
    const catLabels = [
      "Fashion",
      "Beauty",
      "Food & Beverage",
      "Fitness",
      "Jewelry",
      "Flowers",
      "Health & Medical",
      "Dropshipping",
    ];
    if (catLabels.includes(label)) {
      if (!categories.includes(label)) categories.push(label);
    } else if (!capabilities.includes(label)) {
      capabilities.push(label);
    }
  }

  const sLower = `${summaryCsv} ${details}`.toLowerCase();
  if (/upsell|bundle|cro|conversion/.test(sLower) && !capabilities.includes("CRO"))
    capabilities.push("CRO");
  if (
    /subscription|skio|recharge/.test(sLower) &&
    !capabilities.includes("Subscriptions")
  )
    capabilities.push("Subscriptions");
  if (
    /loading speed|performance|core web/.test(sLower) &&
    !capabilities.includes("Performance")
  )
    capabilities.push("Performance");
  if (/seo/.test(sLower) && !capabilities.includes("SEO")) capabilities.push("SEO");
  if (!capabilities.length) capabilities.push("Shopify storefront");

  if (!categories.length) {
    if (/pet/.test(sLower)) categories.push("Pets");
    else if (/coffee|tea|food|beverage|jerky|rice|wine/.test(sLower))
      categories.push("Food & Beverage");
    else if (/jewelry|watch|ring/.test(sLower)) categories.push("Jewelry");
    else if (/beauty|cosmetic|hair|skin/.test(sLower)) categories.push("Beauty");
    else if (/fashion|clothing|swim|lingerie|apparel/.test(sLower))
      categories.push("Fashion");
    else categories.push("Shopify Commerce");
  }

  const client = company
    ? company
        .replace(/ via Useryze/i, "")
        .replace(/ \(Copenhagen\)/i, "")
        .trim()
    : brandFromUrl(url);

  let summary = details || "";
  if (!summary || summary.length < 40) {
    const caps = capabilities.slice(0, 3).join(", ");
    summary = `${client}: Shopify commerce engagement spanning ${caps.toLowerCase()} across a ${categories[0].toLowerCase()} storefront.`;
  }
  summary = summary.replace(/—/g, ",").replace(/–/g, "-").slice(0, 280);

  const imgKey = client.toLowerCase();
  add({
    slug: slugify(client) || slugify(url),
    client,
    url: url.replace(/^http:/, "https:"),
    industry: categories[0],
    categories,
    capabilities: [...new Set(capabilities)].slice(0, 6),
    summary,
    image: imageMap[imgKey],
    featured: Boolean(caseMap[imgKey]),
    caseStudySlug: caseMap[imgKey],
    source: source || "URL sheet",
  });
}

const filters = [
  "All",
  ...[...new Set(projects.flatMap((p) => p.categories))].sort(),
];

const file = `import type { PortfolioProject } from "@/lib/types";

/**
 * Full Shopify work inventory: portfolio featured brands + Conrado URL/CV sheet.
 * Featured entries with caseStudySlug deep-link to /work/[slug].
 * Others surface as portfolio cards with live storefront links.
 */
export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(projects, null, 2)};

export const portfolioCategoryFilters = ${JSON.stringify(filters, null, 2)} as const;

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter(
    (p) => p.categories.includes(category) || p.industry === category,
  );
}
`;

fs.writeFileSync(out, file);
console.log(`Wrote ${projects.length} projects`);
console.log("Categories:", filters.join(", "));
