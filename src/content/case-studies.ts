import type { CaseStudy } from "@/lib/types";

// Case studies drawn from real Shopify work history.
// Sources: Conrado CV projects (Useryze engagements + TheJewelleryRoom) plus featured brand builds.
// Keep claims to what's documented, don't inflate metrics.
export const caseStudies: CaseStudy[] = [
  {
    slug: "marc-robinson-jewelers",
    client: "Marc Robinson Jewelers",
    industry: "Jewelry",
    tags: ["Jewelry", "AI", "Custom Apps"],
    title:
      "A 4,000-product jewelry store built from scratch, with AI doing the data work",
    services: ["Development", "Catalogue", "AI", "Integrations"],
    platform: "Shopify",
    url: "https://marcrobinsonjewelers.com",
    image: "/images/work/marc-robinson-watch.jpg",
    imageAlt: "Pre-owned luxury watch from the Marc Robinson Jewelers catalogue",
    gallery: [
      { src: "/images/work/marc-robinson-bracelet.jpg", alt: "Diamond bracelet product photography" },
    ],
    heroMetric: "4,000+",
    metrics: [
      { value: "4,000+", label: "products live at launch, fine jewelry to pre-owned luxury watches" },
      { value: "AI", label: "product content & imagery pipeline across the full catalogue" },
      { value: "Custom", label: "Ring Builder for semi-mount and custom ring orders" },
    ],
    challenge:
      "A fine jeweler with thousands of SKUs, fine jewelry, pre-owned luxury watches, custom rings, needed a real online store, not a brochure site. Product data lived inside vendor systems, and hand-writing four thousand product pages wasn't an option.",
    approach:
      "Built the Shopify store from scratch around the catalogue: a vendor-API product pipeline feeding live inventory, supervised AI drafting product content and imagery, and a custom Ring Builder for semi-mount and bespoke orders. Multi-location inventory and a store locator tied the physical business to the site.",
    built: [
      "Shopify storefront built from scratch (Online Store 2.0)",
      "Vendor API integration with live inventory sync",
      "Supervised AI product-content and imagery pipeline",
      "Custom Ring Builder for semi-mount and custom rings",
      "Collections architecture for fine jewelry + pre-owned watches",
      "Multi-location store locator",
    ],
    resultsNote:
      "A catalogue that would have taken months to write went live feed-ready, and the Ring Builder turned custom-order inquiries into a self-serve flow.",
    sample: false,
  },
  {
    slug: "thejewelleryroom",
    client: "TheJewelleryRoom",
    industry: "Jewelry",
    tags: ["Jewelry", "Custom Apps", "Operations"],
    title: "A custom order-management app that replaced a $10k/month platform",
    services: ["Order Management", "Development", "Integrations"],
    platform: "Shopify + custom app (Laravel)",
    url: "https://thejewelleryroom.com",
    image: "/images/work/thejewelleryroom.jpg",
    imageAlt: "TheJewelleryRoom brand photography",
    gallery: [
      { src: "/images/work/thejewelleryroom-flatlay.jpg", alt: "TheJewelleryRoom product photography, gift box with fine jewelry" },
      { src: "/images/work/thejewelleryroom-model.jpg", alt: "Editorial jewelry photography for TheJewelleryRoom" },
    ],
    heroMetric: "$10k",
    metrics: [
      { value: "$10k/mo", label: "platform cost eliminated by replacing Jetti Onport" },
      { value: "50+", label: "independent jewelry designers routed through one OMS" },
      { value: "DKK M+", label: "in monthly revenue managed through the store" },
    ],
    challenge:
      "TheJewelleryRoom ran a Copenhagen designer marketplace on Shopify, 50+ independent jewelry designers shipping through one storefront. Jetti Onport handled the dropship order routing at roughly $10k/month, and the fit was never right for how the marketplace actually operated.",
    approach:
      "As lead developer, designed and built a custom order-management Shopify app, Laravel on Heroku, shaped exactly around the marketplace's dropship flows: order splitting, designer routing, and fulfillment status syncing back to Shopify. Replaced the third-party platform outright rather than bending the operation to fit it.",
    built: [
      "Custom embedded Shopify order-management app (Laravel / Heroku)",
      "Dropship order routing across 50+ designer accounts",
      "Fulfillment and order-status sync back into Shopify",
      "Marketplace operations tooling replacing Jetti Onport",
    ],
    resultsNote:
      "A five-figure monthly platform line went to zero, dropshipping operations got smoother, and the marketplace ran on tooling built for its actual flow, not the other way around.",
    sample: false,
  },
  {
    slug: "m-robinson-fine-jewelers",
    client: "M Robinson Fine Jewelers",
    industry: "Jewelry",
    tags: ["Jewelry", "Luxury", "AI"],
    title: "A ring builder that turns browsers into booked appointments",
    services: ["Development", "AI", "CRO"],
    platform: "Shopify",
    url: "https://mrobinsonjewelers.com",
    image: "/images/work/m-robinson-watch.webp",
    imageAlt: "High-complication luxury watch sold by M Robinson Fine Jewelers",
    gallery: [
      { src: "/images/work/m-robinson-storefront.jpg", alt: "M Robinson Fine Jewelers storefront in Austin, Texas" },
    ],
    heroMetric: "100%",
    metrics: [
      { value: "100%", label: "of catalogue content drafted by supervised AI pipelines" },
      { value: "Custom", label: "Ring Builder, semi-mount through fully bespoke" },
      { value: "Lead", label: "capture + appointment flows built into the storefront" },
    ],
    challenge:
      "A boutique fine jeweler sells high-consideration products, engagement rings, timepieces, custom work, where the website's job is to earn the appointment, not just the click. The storefront needed luxury feel, a real ring-configuration tool, and a content pipeline the small team could sustain.",
    approach:
      "Built a boutique Shopify storefront with a custom Ring Builder for semi-mount and bespoke configurations, a vendor + AI content pipeline keeping the catalogue fresh without headcount, Edge inventory sync, and appointment and lead-capture flows designed around how fine jewelry actually sells.",
    built: [
      "Boutique luxury Shopify storefront",
      "Custom Ring Builder for semi-mount and bespoke rings",
      "Vendor + AI product content pipeline",
      "Edge inventory synchronization",
      "Appointment booking and lead-capture flows",
    ],
    resultsNote:
      "The store does the work a showroom visit used to do first, customers configure, compare, and book, and the catalogue stays current without a content team.",
    sample: false,
  },
  {
    slug: "treasures-jeweler",
    client: "Treasures Jeweler",
    industry: "Jewelry",
    tags: ["Jewelry", "AI", "Operations"],
    title: "Mobile-first storefront with a vendor-API product pipeline",
    services: ["Development", "Catalogue", "Integrations", "AI"],
    platform: "Shopify",
    url: "https://treasuresjeweler.com",
    image: "/images/work/treasures-editorial.png",
    imageAlt: "Treasures Jeweler editorial brand photography",
    gallery: [
      { src: "/images/work/treasures-chain.jpg", alt: "Gold chain product photography" },
    ],
    heroMetric: "3",
    metrics: [
      { value: "3", label: "systems unified: storefront, vendor API, AI content pipeline" },
      { value: "Live", label: "Edge inventory sync against vendor stock" },
      { value: "Mobile-first", label: "storefront designed for how buyers actually browse" },
    ],
    challenge:
      "An Austin jeweler needed an online storefront where none existed, but the harder problem was operational: products arriving through a vendor API, inventory that changes daily, and no internal team to write or maintain product content.",
    approach:
      "Built a mobile-first Shopify store wired directly to the vendor's product API, with supervised AI generating product content and imagery at pipeline scale and Edge inventory sync keeping availability honest. The managed online funnel carried traffic through to inquiry and sale.",
    built: [
      "Mobile-first Shopify storefront",
      "Vendor API product pipeline (catalogue + media)",
      "Supervised AI product content and imagery",
      "Edge inventory synchronization",
      "Managed online funnel, traffic to inquiry",
    ],
    resultsNote:
      "The store stays stocked, described, and accurate without manual catalogue labor, the pipeline does the work the team never had.",
    sample: false,
  },
  {
    slug: "tropeaka",
    client: "Tropeaka",
    industry: "Health & Wellness",
    tags: ["Health", "CRO", "Theme"],
    title: "Figma to Shopify 2.0 for a conversion-focused health brand",
    services: ["Design", "Development", "CRO"],
    platform: "Shopify 2.0",
    url: "https://tropeaka.com",
    image: "/images/work/tropeaka.jpg",
    imageAlt: "Tropeaka health and wellness product photography",
    heroMetric: "6%+",
    metrics: [
      { value: "6%+", label: "conversion rate on the rebuilt storefront" },
      { value: "2.0", label: "custom Online Store theme from approved Figma" },
      { value: "API", label: "Storefront API surfaces for high-intent product flows" },
    ],
    challenge:
      "Tropeaka needed a health-brand storefront that matched a polished Figma system and still converted at scale. The previous theme couldn't carry the visual density, product storytelling, or CRO experiments the brand wanted without fighting the platform.",
    approach:
      "Translated the Figma into a custom Shopify 2.0 theme with Liquid and Tailwind, then wired Storefront API surfaces where the UI needed faster, more intentional product discovery. Conversion paths, PDP structure, and homepage hierarchy were designed around measured purchase behavior, not decoration.",
    built: [
      "Custom Shopify 2.0 theme from Figma (Liquid + Tailwind)",
      "Conversion-focused homepage, collection, and PDP templates",
      "Storefront API-backed product and discovery surfaces",
      "Performance-minded section architecture for CRO iteration",
    ],
    resultsNote:
      "The brand shipped a storefront that looked like the design system and behaved like a CRO engine, documented at 6%+ conversion.",
    sample: false,
  },
  {
    slug: "wonderful-dental",
    client: "Wonderful Dental",
    industry: "Health & Medical",
    tags: ["B2B", "Performance", "Motion"],
    title: "GSAP motion on a B2B dental-supply storefront without killing speed",
    services: ["Design", "Development", "Performance"],
    platform: "Shopify 2.0",
    url: "https://wonderfuldental.com",
    image: "/images/work/wonderful-dental.jpg",
    imageAlt: "Wonderful Dental B2B storefront imagery",
    heroMetric: "GSAP",
    metrics: [
      { value: "B2B", label: "dental-supply catalogue and buying flows for clinics" },
      { value: "Motion", label: "GSAP-driven storytelling kept performance-safe" },
      { value: "2.0", label: "Shopify Online Store theme built for immersion + speed" },
    ],
    challenge:
      "Wonderful Dental wanted a B2B storefront that felt premium and animated, not like a parts list, while still loading fast enough for busy clinic buyers. Heavy motion usually costs Core Web Vitals, and that tradeoff was off the table.",
    approach:
      "Built a Shopify 2.0 theme where GSAP animation carried brand presence without blocking first paint. Motion was scoped, lazy-initialized, and paired with lean Liquid templates so the catalogue stayed usable for repeat B2B purchasing.",
    built: [
      "Shopify 2.0 B2B storefront for dental supply",
      "GSAP animation system with performance budgets",
      "Catalogue and buying UX for clinic purchasers",
      "Theme architecture balancing immersion and load speed",
    ],
    resultsNote:
      "The store reads as a brand experience first, and still behaves like a fast wholesale tool when clinics come back to reorder.",
    sample: false,
  },
  {
    slug: "sixthreezero",
    client: "Sixthreezero",
    industry: "Outdoor",
    tags: ["Hydrogen", "Custom Apps", "CRO"],
    title: "Guided selling on Hydrogen that lifts AOV for a bike brand",
    services: ["Development", "Custom Apps", "CRO", "Integrations"],
    platform: "Shopify Hydrogen",
    url: "https://www.sixthreezero.com",
    image: "/images/work/sixthreezero.jpg",
    imageAlt: "Sixthreezero outdoor bike brand storefront",
    heroMetric: "AOV",
    metrics: [
      { value: "Hydrogen", label: "headless storefront for personalized shopping flows" },
      { value: "Functions", label: "Shopify Functions shaping cart and offer logic" },
      { value: "Guided", label: "selling paths that match riders to the right bike" },
    ],
    challenge:
      "Sixthreezero sells bikes and accessories where fit, use case, and upsells matter more than a flat catalogue grid. A standard theme couldn't express guided selling, metafield-driven personalization, or the custom commerce logic the brand needed to grow average order value.",
    approach:
      "Built on Hydrogen with Shopify Functions and metafields powering recommendation and configuration logic. Guided selling flows walked shoppers from intent to the right bike and attach products, while custom app surfaces kept merchandising and personalization under brand control.",
    built: [
      "Hydrogen storefront with personalized shopping experiences",
      "Shopify Functions for cart, offers, and commerce rules",
      "Metafield-driven product data and guided selling paths",
      "Custom app surfaces for merchandising and AOV lifts",
    ],
    resultsNote:
      "Shoppers get steered to the right bike and the right add-ons, and the storefront's commerce logic works for conversion instead of against it.",
    sample: false,
  },
  {
    slug: "origin-tea",
    client: "Origin Tea",
    industry: "Food & Beverage",
    tags: ["CRO", "Loyalty", "Lifecycle"],
    title: "Premium tea commerce with loyalty, lifecycle, and global reach",
    services: ["CRO", "Integrations", "Development"],
    platform: "Shopify 2.0",
    url: "https://origintea.com",
    image: "/images/work/origin-tea.jpg",
    imageAlt: "Origin Tea premium tea and iced syrup products",
    heroMetric: "800+",
    metrics: [
      { value: "800+", label: "customer reviews reinforcing product trust" },
      { value: "100+", label: "countries reached through the storefront" },
      { value: "Klaviyo", label: "lifecycle and loyalty programs wired into Shopify" },
    ],
    challenge:
      "Origin Tea sells premium tea and iced syrups to a global audience. The store needed more than pretty PDPs: lead capture, loyalty, and lifecycle messaging had to pull first-time buyers into repeat orders without feeling like a generic DTC stack.",
    approach:
      "Built a Shopify 2.0 storefront around conversion and retention, then connected Klaviyo and loyalty mechanics so reviews, offers, and post-purchase flows reinforced the brand. Merchandising and capture points were tuned for international shoppers as much as local ones.",
    built: [
      "Shopify 2.0 premium tea and syrup storefront",
      "Klaviyo lifecycle flows and lead-capture surfaces",
      "Loyalty mechanics tied into the purchase journey",
      "CRO-focused collection and PDP patterns for repeat buying",
    ],
    resultsNote:
      "The brand ships with social proof at scale, loyalty that keeps people coming back, and a storefront built for customers in 100+ countries.",
    sample: false,
  },
  {
    slug: "pryme",
    client: "Pryme",
    industry: "Food & Beverage",
    tags: ["Subscriptions"],
    title: "Subscription-first Shopify for Australian Wagyu jerky",
    services: ["Development", "Subscriptions", "Design"],
    platform: "Shopify 2.0",
    url: "https://prymesnacks.com.au",
    image: "/images/work/pryme.jpg",
    imageAlt: "Pryme Wagyu beef jerky product photography",
    heroMetric: "Sub",
    metrics: [
      { value: "Sub-first", label: "storefront designed around recurring Wagyu jerky orders" },
      { value: "2.0", label: "Shopify theme shaped for snack brand storytelling" },
      { value: "AU", label: "Australian DTC brand built for retention, not one-offs" },
    ],
    challenge:
      "Pryme sells premium Wagyu beef jerky where the business model is recurring revenue, not single bags. A typical product grid would leave the subscription offer as an afterthought instead of the primary purchase path.",
    approach:
      "Designed and built a Shopify 2.0 storefront that leads with subscription: plan selection, flavor continuity, and brand storytelling that makes joining the recurring model feel like the default, not an upsell buried on the PDP.",
    built: [
      "Subscription-first Shopify 2.0 storefront",
      "Plan and flavor selection flows for recurring orders",
      "Brand-led PDP and homepage storytelling for Wagyu jerky",
      "Commerce patterns oriented to retention over one-time AOV",
    ],
    resultsNote:
      "The store sells membership to a snack habit, not just a bag of jerky, which is how a subscription brand actually grows.",
    sample: false,
  },
  {
    slug: "nice-rice",
    client: "Nice Rice",
    industry: "Food & Beverage",
    tags: ["Content", "CRO"],
    title: "A recipe hub that turns content into repeat store visits",
    services: ["Development", "CRO", "Catalogue"],
    platform: "Shopify 2.0",
    url: "https://nicerice.com.au",
    image: "/images/work/nice-rice.jpg",
    imageAlt: "Nice Rice branded rice products and packaging",
    heroMetric: "Recipes",
    metrics: [
      { value: "Hub", label: "community recipe content driving return visits" },
      { value: "CRO", label: "paths from recipe inspiration into product purchase" },
      { value: "2.0", label: "Shopify theme built for brand + content commerce" },
    ],
    challenge:
      "Nice Rice is a branded staple, and staples need reasons to come back. Without content that made the product part of weekly cooking, the store risked becoming a one-and-done pantry fill.",
    approach:
      "Built a Shopify 2.0 storefront with a community recipe hub at the center of discovery. Recipes pull shoppers back, then CRO paths move them from inspiration into the right SKUs without breaking the brand voice.",
    built: [
      "Shopify 2.0 branded rice storefront",
      "Community recipe hub as a content commerce surface",
      "CRO pathways from recipes into product pages",
      "UGC-friendly layouts that keep the brand warm and usable",
    ],
    resultsNote:
      "Content became a retention loop: cook, return, restock, instead of a blog bolted onto a shop.",
    sample: false,
  },
  {
    slug: "sip-coco",
    client: "Sip Coco",
    industry: "Food & Beverage",
    tags: ["UGC", "Branding"],
    title: "Flavor identity and UGC for a coconut water brand",
    services: ["Design", "Development", "CRO"],
    platform: "Shopify 2.0",
    url: "https://sipcoco.com.au",
    image: "/images/work/sip-coco.jpg",
    imageAlt: "Sip Coco coconut water flavor packaging",
    heroMetric: "UGC",
    metrics: [
      { value: "Flavor", label: "identity system that makes each SKU feel distinct" },
      { value: "UGC", label: "homepage storytelling built around real customer content" },
      { value: "2.0", label: "Shopify theme carrying brand systems into commerce" },
    ],
    challenge:
      "Sip Coco sells coconut water in a category that looks interchangeable on the shelf and online. Without a strong flavor identity and social proof, the brand would blend into every other hydration SKU on a collection page.",
    approach:
      "Built a Shopify 2.0 storefront where each flavor has a clear visual voice, and UGC carries the homepage. Brand systems, packaging cues, and customer content work together so shoppers pick a flavor they feel, not just a size they need.",
    built: [
      "Shopify 2.0 coconut water storefront",
      "Flavor identity system across PDP and collection templates",
      "UGC-heavy homepage and social proof modules",
      "Brand systems translated into theme sections and merchandising",
    ],
    resultsNote:
      "The store sells character as much as hydration: shoppers recognize flavors, see real people drinking them, and buy with less hesitation.",
    sample: false,
  },
  {
    slug: "prime-cuts-jerky",
    client: "Prime Cuts Jerky",
    industry: "Food & Beverage",
    tags: ["Subscriptions", "CRO"],
    title: "Bundles and a monthly club built to lift AOV and retention",
    services: ["Development", "Subscriptions", "CRO"],
    platform: "Shopify",
    url: "https://primecutsjerky.com",
    image: "/images/work/prime-cuts-jerky.jpg",
    imageAlt: "Prime Cuts Jerky product and packaging photography",
    heroMetric: "Club",
    metrics: [
      { value: "Bundles", label: "multi-pack offers designed to raise average order value" },
      { value: "Monthly", label: "subscription club for recurring jerky revenue" },
      { value: "CRO", label: "purchase paths that favor club and bundle over single packs" },
    ],
    challenge:
      "Prime Cuts Jerky needed recurring revenue and bigger carts. One-off single packs kept AOV flat, and without a clear club or bundle path, shoppers defaulted to the smallest purchase.",
    approach:
      "Structured the storefront around bundles and a monthly subscription club. Merchandising, PDP offers, and CRO patterns make the higher-value paths obvious, so shoppers graduate from sampling into recurring orders.",
    built: [
      "Bundle merchandising and multi-pack purchase flows",
      "Monthly subscription club for recurring jerky orders",
      "CRO-oriented PDP and cart patterns favoring higher AOV",
      "Shopify storefront architecture for retention and club growth",
    ],
    resultsNote:
      "The brand sells the club and the bundle first, which is how snack commerce compounds instead of resetting every order.",
    sample: false,
  },
];

export const industryFilters = [
  "All",
  "Jewelry",
  "Health & Wellness",
  "Health & Medical",
  "Outdoor",
  "Food & Beverage",
  "AI",
  "Custom Apps",
  "Operations",
  "CRO",
  "Subscriptions",
  "Performance",
];

// Maps service slugs to the case studies that best demonstrate them.
export const relatedWorkByService: Record<string, string[]> = {
  consulting: [
    "tropeaka",
    "sixthreezero",
    "origin-tea",
    "marc-robinson-jewelers",
    "thejewelleryroom",
  ],
  audits: [
    "tropeaka",
    "wonderful-dental",
    "origin-tea",
    "thejewelleryroom",
    "marc-robinson-jewelers",
  ],
  design: [
    "tropeaka",
    "wonderful-dental",
    "sip-coco",
    "nice-rice",
    "m-robinson-fine-jewelers",
    "pryme",
  ],
  development: [
    "tropeaka",
    "sixthreezero",
    "wonderful-dental",
    "marc-robinson-jewelers",
    "m-robinson-fine-jewelers",
    "thejewelleryroom",
  ],
  migrations: [
    "tropeaka",
    "sixthreezero",
    "treasures-jeweler",
    "marc-robinson-jewelers",
    "wonderful-dental",
  ],
  catalogue: [
    "marc-robinson-jewelers",
    "treasures-jeweler",
    "nice-rice",
    "origin-tea",
    "sip-coco",
  ],
  inventory: [
    "treasures-jeweler",
    "marc-robinson-jewelers",
    "sixthreezero",
    "thejewelleryroom",
  ],
  "order-management": [
    "thejewelleryroom",
    "pryme",
    "prime-cuts-jerky",
    "sixthreezero",
  ],
  integrations: [
    "sixthreezero",
    "origin-tea",
    "thejewelleryroom",
    "marc-robinson-jewelers",
    "treasures-jeweler",
  ],
  cro: [
    "tropeaka",
    "origin-tea",
    "sixthreezero",
    "prime-cuts-jerky",
    "nice-rice",
    "m-robinson-fine-jewelers",
  ],
  aeo: [
    "nice-rice",
    "origin-tea",
    "sip-coco",
    "m-robinson-fine-jewelers",
    "treasures-jeweler",
  ],
  "agentic-commerce": [
    "sixthreezero",
    "marc-robinson-jewelers",
    "treasures-jeweler",
    "m-robinson-fine-jewelers",
  ],
  operations: [
    "thejewelleryroom",
    "pryme",
    "prime-cuts-jerky",
    "origin-tea",
    "treasures-jeweler",
  ],
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
