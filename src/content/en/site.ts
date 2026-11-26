export const site = {
  name: "Denwebs",
  url: "https://www.denwebs.com",
  email: "hello@denwebs.com",
  phone: "", // TBD — hidden until real number is confirmed
  description:
    "Strategy, design, development, catalogue, inventory, OMS, and AI optimization for ambitious Shopify brands.",
};

// Mega-menu structure — every link must resolve to a real route.
export const megaMenu = [
  {
    title: "Strategy & Advisory",
    links: [
      { label: "Commerce consulting", href: "/services/consulting", desc: "Platform calls & roadmaps" },
      { label: "Shopify audits", href: "/services/audits", desc: "Forensic, prioritized findings" },
    ],
  },
  {
    title: "Design & Build",
    links: [
      { label: "UX / UI design", href: "/services/design", desc: "Design systems for Shopify" },
      { label: "Theme & custom development", href: "/services/development", desc: "OS 2.0, sections, Functions" },
      { label: "Migrations to Shopify", href: "/services/migrations", desc: "Replatform without the losses" },
    ],
  },
  {
    title: "Commerce Operations",
    links: [
      { label: "Catalogue management", href: "/services/catalogue", desc: "Product data, feed-ready" },
      { label: "Inventory systems", href: "/services/inventory", desc: "One stock truth" },
      { label: "Order management (OMS)", href: "/services/order-management", desc: "Routing, 3PL, returns" },
      { label: "Integrations (ERP / PIM / 3PL)", href: "/services/integrations", desc: "Connectors + custom" },
    ],
  },
  {
    title: "Growth & AI",
    links: [
      { label: "CRO & performance", href: "/services/cro", desc: "Experiments that compound" },
      { label: "AI services overview", href: "/services/ai", desc: "AEO · agentic · ops AI" },
      { label: "AI Search Optimization (AEO)", href: "/services/ai/aeo", desc: "Get cited by AI assistants" },
      { label: "Agentic commerce readiness", href: "/services/ai/agentic-commerce", desc: "Machine-sellable catalogue" },
      { label: "AI for store operations", href: "/services/ai/operations", desc: "Supervised automation" },
    ],
  },
];

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All services", href: "/services" },
      { label: "Migrations", href: "/services/migrations" },
      { label: "Catalogue & ops", href: "/services/catalogue" },
      { label: "AI / AEO", href: "/services/ai" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case studies", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Free Shopify audit", href: "/audit" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const projectTypes = [
  "Consulting",
  "Audit",
  "Redesign",
  "New build",
  "Migration",
  "Catalogue / Inventory / OMS",
  "Integrations",
  "AI / AEO",
  "CRO",
  "Retainer",
  "Other",
];

export const revenueRanges = [
  "Under $50k / month",
  "$50k–250k / month",
  "$250k–1M / month",
  "$1M+ / month",
  "Prefer not to say",
];

export const timelines = ["ASAP", "1–3 months", "3–6 months", "Exploring"];

export const hearAbout = [
  "Search",
  "AI (ChatGPT, etc.)",
  "Social",
  "Referral",
  "Event",
  "Other",
];
