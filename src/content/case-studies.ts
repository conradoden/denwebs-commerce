import type { CaseStudy } from "@/lib/types";

// Case studies drawn from real Shopify work history.
// Sources: Conrado CV projects (Useryze engagements + TheJewelleryRoom).
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
    image: "/images/work/thejewelleryroom-flatlay.jpg",
    imageAlt: "TheJewelleryRoom product photography, gift box with fine jewelry",
    gallery: [
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
];

export const industryFilters = [
  "All",
  "Jewelry",
  "Luxury",
  "AI",
  "Custom Apps",
  "Operations",
];

// Maps service slugs to the case studies that best demonstrate them.
export const relatedWorkByService: Record<string, string[]> = {
  consulting: ["marc-robinson-jewelers", "thejewelleryroom"],
  audits: ["thejewelleryroom", "marc-robinson-jewelers"],
  design: ["m-robinson-fine-jewelers", "treasures-jeweler"],
  development: ["marc-robinson-jewelers", "m-robinson-fine-jewelers", "thejewelleryroom"],
  migrations: ["treasures-jeweler", "marc-robinson-jewelers"],
  catalogue: ["marc-robinson-jewelers", "treasures-jeweler"],
  inventory: ["treasures-jeweler", "marc-robinson-jewelers"],
  "order-management": ["thejewelleryroom"],
  integrations: ["thejewelleryroom", "marc-robinson-jewelers", "treasures-jeweler"],
  cro: ["m-robinson-fine-jewelers", "treasures-jeweler"],
  aeo: ["m-robinson-fine-jewelers", "treasures-jeweler"],
  "agentic-commerce": ["marc-robinson-jewelers", "treasures-jeweler"],
  operations: ["treasures-jeweler", "thejewelleryroom"],
};

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
