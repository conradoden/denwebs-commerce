// TODO: Japanese translation needed — currently English source copy.
// Translate string VALUES only. Do NOT change keys or remove entries.
// Keep "{placeholder}" tokens (e.g. {year}, {time}, {email}) untranslated.
import type { Messages } from "./en";

export const ja: Messages = {
  meta: {
    titleDefault: "Denwebs — Shopify Agency for Commerce & AI",
    titleTemplate: "%s — Denwebs",
  },

  nav: {
    work: "Work",
    services: "Services",
    insights: "Insights",
    about: "About",
    getQuote: "Get a quote",
    freeAudit: "Free Shopify audit",
    megaTagline: "Strategy → AI. One agency across the whole commerce stack.",
    viewAllServices: "View all services",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeLabel: "Denwebs home",
    primaryAria: "Primary",
    mobileAria: "Mobile",
    language: "Language",
  },

  footer: {
    contactEyebrow: "Contact",
    tagline: "We reply within one business day. US / EU · Remote-first.",
    copyright: "© {year} Denwebs. All rights reserved.",
    bottomTagline: "Shopify commerce, end to end — strategy to AI.",
    navAria: "Footer",
    skipToContent: "Skip to content",
  },

  common: {
    getQuote: "Get a quote",
    seeOurWork: "See our work",
    allWork: "All work",
    allInsights: "All insights",
    allCaseStudies: "All case studies",
    readCaseStudy: "Read case study",
    learnMore: "Learn more",
    explore: "Explore",
    sample: "Sample",
    all: "All",
    loadingForm: "Loading form…",
    bookDiscovery: "Book a discovery call",
    talkToExpert: "Talk to an expert",
    freeAudit: "Free audit",
    seeCareers: "See careers",
    visitLiveStore: "Visit live store",
    readTime: "{time} read",
    storefrontAlt: "{client} storefront",
  },

  cta: {
    eyebrow: "Next step",
    title: "Let's talk about your store.",
    copy: "Tell us what you're building, migrating, or untangling. We reply within one business day.",
    discovery: "Book a discovery call",
  },

  logos: {
    marqueeLabel: "Selected client storefronts",
    marqueeAria: "Client logos",
    moreClients: "…and 80+ more Shopify projects via agency work",
    partnersLabel: "Platforms & partners we work with",
  },

  stats: {
    items: [
      { value: "80+", label: "Shopify projects delivered" },
      { value: "30+", label: "CMS builds alongside" },
      { value: "$10k/mo", label: "platform cost eliminated for one client" },
      { value: "2017", label: "in commerce engineering since" },
    ],
  },

  home: {
    eyebrow: "Denwebs — Shopify agency",
    h1a: "Shopify commerce that works",
    h1b: "as a",
    h1c: "system",
    sub: "Strategy, design, development, catalogue & operations, and AI — connected so your store sells and scales.",
    ops: {
      title: "denwebs / commerce-ops",
      live: "live",
      synced: "Synced",
      storefront: "Storefront",
      trailing: "trailing 30d revenue",
      operations: "Operations",
      aiLayer: "AI layer",
      opsRows: [
        ["Catalogue", "12,408 SKUs · clean"],
        ["Inventory", "11 locations · synced"],
        ["Orders", "routing · 3PL live"],
      ],
      aiRows: [
        ["AEO citations", "+38% q/q"],
        ["Agentic feeds", "4 surfaces live"],
        ["Ops automation", "human-approved"],
      ],
    },
    work: {
      index: "01",
      eyebrow: "Work",
      title: "Proof, not adjectives.",
      copy: "Every engagement judged by metrics that matter — rankings kept, hours returned, systems that hold under load.",
    },
    pillarsSection: {
      index: "02",
      eyebrow: "What we do",
      title: "The full commerce stack — one agency.",
      copy: "Most agencies design and leave. We plan, build, and run the whole system — including the operational layer pure design shops can't touch.",
      pillars: [
        {
          title: "Consulting & audits",
          copy: "Honest diagnosis before dollars — strategy, platform calls, and prioritized fix lists.",
          href: "/services/consulting",
        },
        {
          title: "Design & development",
          copy: "Online Store 2.0 builds, custom sections, and headless where the case is real.",
          href: "/services/development",
        },
        {
          title: "Catalogue & inventory",
          copy: "Product data and stock engineered like infrastructure — clean, unified, feed-ready.",
          href: "/services/catalogue",
        },
        {
          title: "Order management & integrations",
          copy: "Orders routed, ERP connected, systems reconciled. The ops layer most agencies skip.",
          href: "/services/order-management",
        },
        {
          title: "Growth / CRO",
          copy: "Disciplined experimentation that compounds — not random app installs.",
          href: "/services/cro",
        },
        {
          title: "AI — AEO, agentic, ops",
          copy: "Be the brand AI recommends, the store AI can sell, and the operation AI assists.",
          href: "/services/ai",
        },
      ],
    },
    why: {
      index: "03",
      eyebrow: "Why Denwebs",
      title: "Where commerce comes together.",
      copy: "Consultant, auditor, builder, and operator — one team accountable for the whole system, with AI as a core practice rather than a footnote.",
      points: [
        {
          title: "Human-led",
          body: "Senior operators on every engagement. You talk to the people doing the work — not an account layer.",
        },
        {
          title: "Tech-backed",
          body: "We build the systems we recommend: themes, integrations, data pipelines, and supervised AI tooling.",
        },
        {
          title: "Operator mindset",
          body: "We've run catalogues, inventory, and order flows — so we design for the Monday after launch, not just launch day.",
        },
        {
          title: "Proven process",
          body: "Mapped before built. Rehearsed before cutover. Measured after shipped. Commerce is operations, not events.",
        },
      ],
    },
    process: {
      index: "04",
      eyebrow: "How we work",
      title: "Mapped. Built. Run.",
      steps: [
        { title: "Audit", body: "We map your stack, catalogue, data flows, and AI visibility to find where revenue leaks." },
        { title: "Plan", body: "A sequenced roadmap — effort, impact, dependencies — agreed before any build starts." },
        { title: "Build", body: "Design, development, migrations, and integrations executed with staging previews throughout." },
        { title: "Operate & optimize", body: "Retainers for catalogue, inventory, OMS, CRO, and AI visibility — the work that compounds." },
      ],
    },
    ai: {
      index: "05",
      eyebrow: "AI practice",
      h2a: "Be the brand AI",
      h2b: "recommends",
      h2c: "— and the store AI can sell.",
      copy: "AI assistants already shape how buyers discover products. We make your catalogue machine-readable, your content citable, and your operations AI-assisted — supervised, always.",
      ctaExplore: "Explore AI services",
      ctaAudit: "AI visibility audit",
      items: [
        {
          t: "AI Search Optimization (AEO / GEO)",
          d: "Visibility inside ChatGPT, Perplexity, Gemini, and AI Overviews — measured, not guessed.",
          href: "/services/ai/aeo",
        },
        {
          t: "Agentic commerce readiness",
          d: "Product data and feeds structured so AI shopping agents can evaluate and sell your products.",
          href: "/services/ai/agentic-commerce",
        },
        {
          t: "AI for store operations",
          d: "Enrichment pipelines, forecasting assists, order triage — machines draft, humans approve.",
          href: "/services/ai/operations",
        },
      ],
    },
    statsSection: { index: "06", eyebrow: "In numbers", title: "An honest ledger." },
    insightsSection: {
      index: "07",
      eyebrow: "Insights",
      title: "From the operator's notebook.",
    },
  },

  work: {
    metaTitle: "Our Work",
    metaDesc: "Case studies across migrations, redesigns, operations, and AI-driven commerce.",
    eyebrow: "Work",
    h1a: "Case studies with",
    h1b: "metrics",
    h1c: ", not mood boards.",
    copy: "Stores built from scratch, platforms replaced with custom apps, and catalogues run by AI pipelines — real engagements with live storefronts to show for it.",
    filterAria: "Filter case studies",
    empty: "No case studies in this category yet.",
    beyond: {
      eyebrow: "Beyond the case studies",
      title: "Four studies on the page. 80+ in the record.",
      copy: "The featured work above is what we can show end-to-end. Behind it sits a longer trail — 80+ Shopify projects and 30+ CMS builds delivered through agency and client-side engagements: theme work, migrations, custom apps, performance fixes, and ops support across categories like these.",
    },
    categories: {
      eyebrow: "Categories shipped",
      items: [
        "Jewelry & watches",
        "Fashion & apparel",
        "Beauty & cosmetics",
        "Food & beverage",
        "Health & medical",
        "Fitness & activewear",
        "Pets",
        "Home & furniture",
        "B2B & wholesale",
        "Dropshipping",
      ],
      note: "Since 2017 · Agency + client-side · Shopify & Plus",
    },
    cta: {
      title: "Start a project.",
      copy: "Migration, rebuild, operations, or AI — tell us what needs to change and we'll tell you honestly what it takes.",
    },
  },

  caseStudy: {
    crumbWork: "Work",
    sampleBadge: "Sample case study",
    snapshotLabels: ["Client", "Industry", "Services", "Platform"],
    s01: "01 — The challenge",
    s02: "02 — The approach",
    s03: "03 — What we built",
    s04: "04 — The result",
    sampleNote: "Sample study — replace with verified client results.",
    realNote: "Real engagement — metrics as documented in project records.",
    relatedTitle: "Related work",
    metaDesc: "{title}. {industry} case study on {platform}.",
  },

  servicesHub: {
    metaTitle: "Shopify Services",
    metaDesc: "Launch, operate, and grow your Shopify store with consulting, builds, operations, and AI.",
    eyebrow: "Services",
    h1a: "Launch it. Operate it. Grow it — with",
    h1b: "AI in the loop",
    copy: "Denwebs covers the whole commerce lifecycle: strategy and audits, design and builds, catalogue and operations, growth and AI. Pick the layer that hurts — or hand us the system.",
    modes: {
      index: "01",
      eyebrow: "Engagement modes",
      title: "Three ways to work with us.",
      items: [
        {
          name: "Launch",
          promise: "Research, design, build, migrate.",
          copy: "A new store, a redesign, or a replatform — scoped as a project with a defined end. You get a store that works and a team that knows how to run it.",
          items: ["Shopify builds & redesigns", "Platform migrations", "Design systems & UX", "Integration architecture"],
        },
        {
          name: "Operate",
          promise: "Catalogue, inventory, OMS, integrations, support.",
          copy: "The ongoing operational layer — the work most agencies leave behind. Retainers that keep product data clean, stock accurate, and orders flowing.",
          items: ["Catalogue & feed management", "Inventory & allocation rules", "Order routing & returns", "Release management & support"],
        },
        {
          name: "Grow",
          promise: "CRO, lifecycle, AI visibility, retainers.",
          copy: "Compounding optimization — experimentation, AI search visibility, and continuous improvement measured in revenue, not deliverables.",
          items: ["CRO programs", "AI / AEO visibility", "Analytics & measurement", "Advisory & fractional counsel"],
        },
      ],
    },
    capabilities: {
      index: "02",
      eyebrow: "Capabilities",
      title: "Everything we do, organized by outcome.",
      aiChildren: [
        { slug: "aeo", title: "AI Search Optimization (AEO / GEO)", promise: "Get cited inside ChatGPT, Perplexity, Gemini, and AI Overviews." },
        { slug: "agentic-commerce", title: "Agentic commerce readiness", promise: "Product data and feeds structured so AI shopping agents can sell you." },
        { slug: "operations", title: "AI for store operations", promise: "Supervised automation for enrichment, forecasting, and triage." },
      ],
    },
    faq: {
      index: "03",
      eyebrow: "FAQ",
      title: "Working with Denwebs.",
      faqs: [
        {
          q: "Project, retainer, or advisory — which do we need?",
          a: "Projects fit defined outcomes: a migration, a redesign, an audit implementation. Retainers fit ongoing operations or optimization. Advisory fits teams that execute in-house but want senior direction. Many clients run one of each — we'll recommend the lightest model that covers your need.",
        },
        {
          q: "How are projects scoped and priced?",
          a: "Fixed scope, fixed price for defined builds. We don't do open-ended hourly for projects — you'll know cost, timeline, and what's included before signing.",
        },
        {
          q: "What does an Operate retainer cover?",
          a: "Catalogue management, inventory and order ops, integration monitoring, releases, and support. Scoped monthly against your SKU count, order volume, and systems.",
        },
        {
          q: "Can we start small?",
          a: "Yes — an audit is the most common entry point. It's fixed-scope, gives you a prioritized findings list you own, and creates a natural basis for deciding what to do next.",
        },
        {
          q: "Do you work with our existing partners?",
          a: "Yes. We coordinate with ERP implementers, lifecycle agencies, PR firms, and in-house teams. Our job is the commerce system working as a whole, whoever touches each part.",
        },
      ],
    },
  },

  aiHub: {
    metaTitle: "AI for Shopify Brands",
    metaDesc: "AEO, agentic commerce readiness, and AI-assisted store operations for Shopify brands.",
    crumbServices: "Services",
    crumbAi: "AI",
    eyebrow: "AI practice",
    h1a: "Be the brand AI",
    h1b: "recommends",
    h1c: "— and the store",
    h1d: "AI can sell",
    copy: "AI search and AI shopping are reshaping product discovery. Unstructured catalogues and thin content get ignored. Denwebs makes Shopify brands visible to machines — and operational with them.",
    ctaAudit: "Get an AI visibility audit",
    ctaFree: "Free AI audit",
    shift: {
      index: "01",
      eyebrow: "The shift",
      title: "Discovery is moving to answers.",
      copy: "Buyers increasingly ask assistants instead of searching lists. Those assistants recommend brands they can understand — and skip the ones they can't parse.",
      pains: [
        "Your PDP converts humans but confuses machines — incomplete attributes, no schema, vague policies.",
        "Competitors with cleaner data get cited in AI answers for your category.",
        "AI agents can't evaluate your products for shoppers, so you're absent from agentic purchase flows.",
        "Meanwhile your ops team hand-enriches products and hand-triages orders that AI could draft.",
      ],
    },
    offerings: {
      index: "02",
      eyebrow: "What we do",
      title: "Three AI practices, one foundation.",
      items: [
        {
          title: "AI Search Optimization (AEO / GEO)",
          copy: "Get cited inside ChatGPT, Perplexity, Gemini, and Google AI Overviews. Entity clarity, structured data, and answer-first content — measured with recurring visibility tracking.",
          href: "/services/ai/aeo",
          items: ["AI visibility baseline & tracking", "Entity & schema strategy", "Answer-first content program"],
        },
        {
          title: "Agentic commerce readiness",
          copy: "AI agents are starting to research, compare, and transact on buyers' behalf. We make your catalogue machine-readable and machine-sellable before your competitors' are.",
          href: "/services/ai/agentic-commerce",
          items: ["Product data for machine parsing", "Feeds for AI shopping surfaces", "Agentic protocol roadmap"],
        },
        {
          title: "AI for operations",
          copy: "Applied where operations actually bleed — catalogue enrichment, inventory forecasting assists, and order triage. Machines draft, humans approve, audit trails stay permanent.",
          href: "/services/ai/operations",
          items: ["Supervised enrichment pipelines", "Forecasting assists", "Order triage automation"],
        },
      ],
    },
    deliverables: {
      index: "03",
      eyebrow: "Deliverables",
      title: "What an AI engagement produces.",
      items: [
        "AI visibility audit across ChatGPT, Perplexity, Gemini, and AI Overviews",
        "Entity and structured-data remediation (Organization, Product, FAQ, Review)",
        "Answer-first content program targeting buyer questions",
        "Product feed and attribute readiness for AI shopping surfaces",
        "Supervised AI ops pipelines: enrichment, forecasting, triage",
        "Recurring measurement — citation tracking, not vibes",
      ],
    },
    faq: {
      index: "04",
      eyebrow: "FAQ",
      title: "AI questions, straight answers.",
      faqs: [
        {
          q: "What's the difference between AEO and SEO?",
          a: "SEO optimizes for ranked links; AEO optimizes for cited answers. AI assistants assemble responses from sources they can parse and trust — entity clarity, structured data, and answer-formatted content matter more than keyword position.",
        },
        {
          q: "Is AI search actually sending traffic and sales?",
          a: "Yes and growing. AI assistants already shape product research and comparison at scale, and agent-initiated checkout is rolling out. Brands measuring it treat it as a channel; brands ignoring it are invisible in a growing share of discovery.",
        },
        {
          q: "Can you guarantee we'll appear in ChatGPT answers?",
          a: "Nobody can honestly guarantee that. What we guarantee: a measured baseline, structural fixes that make you citable, content that earns citations, and recurring tracking so movement is visible.",
        },
        {
          q: "How does AI for operations stay safe?",
          a: "Every AI output that touches customers, money, or catalogue data passes a human approval step. We design supervision boundaries deliberately and keep audit logs permanent.",
        },
        {
          q: "Where do we start?",
          a: "With an AI visibility audit — a fixed-scope engagement showing how AI describes your brand and products today, plus the prioritized gaps. From there, most clients run a scoped implementation or retainer.",
        },
      ],
    },
    related: {
      eyebrow: "Related reading",
      title: "AI notes from the notebook.",
    },
    cta: {
      title: "Find out how AI sees your brand.",
      copy: "The AI visibility audit shows exactly how ChatGPT, Perplexity, Gemini, and AI Overviews describe and rank you today — and what to fix first.",
    },
  },

  servicePage: {
    crumbServices: "Services",
    crumbAi: "AI",
    whoEyebrow: "Who it's for",
    deliverables: { index: "01", eyebrow: "What's included", title: "Deliverables." },
    process: { index: "02", eyebrow: "Process", title: "How it runs." },
    related: { index: "03", eyebrow: "Related work", title: "It in practice." },
    faq: { index: "04", eyebrow: "FAQ", title: "Common questions." },
  },

  insights: {
    metaTitle: "Insights",
    metaDesc: "Notes on Shopify, migrations, commerce operations, CRO, and AI search — from the operators doing the work.",
    eyebrow: "Insights",
    h1a: "The operator's",
    h1b: "notebook",
    copy: "What we learn running commerce systems — migrations, catalogues, and the AI shift — written to be useful, not to rank.",
    filterAria: "Filter articles",
    empty: "No articles in this category yet.",
    cadence: {
      eyebrow: "Cadence",
      title: "New notes 2–4× a month.",
      copy: "Shopify · Migrations · Operations · CRO · AI / AEO · Unified commerce.",
    },
  },

  about: {
    metaTitle: "About",
    metaDesc: "Denwebs is a Shopify agency built like an operator — consultants, builders, and commerce ops under one roof.",
    eyebrow: "About",
    h1a: "An agency built like",
    h1b: "an operator",
    copy: "Denwebs started from a simple observation: most Shopify agencies can design a beautiful store, and most can't keep it running. We built the agency around the whole system — strategy, build, and the operational layer in between — with AI as a core practice.",
    principles: {
      index: "01",
      eyebrow: "How we work",
      title: "Principles that survive contact with reality.",
      items: [
        {
          title: "Diagnose before prescribe",
          body: "Every engagement starts with understanding what's actually broken. We turn down builds that shouldn't happen.",
        },
        {
          title: "Operators, not decorators",
          body: "Catalogue, inventory, and order flows are where commerce lives. We design and build for the Monday after launch.",
        },
        {
          title: "Honest scope",
          body: "Fixed-scope projects, measured retainers, and straight answers — including when the right answer is 'don't rebuild that.'",
        },
        {
          title: "AI, supervised",
          body: "We use AI where it compounds — enrichment, forecasting, triage — with humans approving anything that touches customers or money.",
        },
        {
          title: "Own the outcome",
          body: "One team accountable across strategy, build, and operations. No handoff gaps between the people who plan and the people who ship.",
        },
      ],
    },
    numbers: {
      index: "02",
      eyebrow: "The numbers",
      title: "Denwebs at a glance.",
      copy: "Documented work history — 80+ Shopify projects across agency and client-side roles since 2017.",
    },
    careers: {
      title: "Want to build commerce systems that hold?",
      copy: "We hire operators who ship — developers, designers, and commerce people who've actually run stores.",
    },
  },

  partners: {
    metaTitle: "Technology Partners",
    metaDesc: "The platforms and tools Denwebs builds and integrates for Shopify brands — ecommerce, lifecycle, search, ERP, and 3PL.",
    eyebrow: "Partners",
    h1: "The stack we work inside.",
    copy: "We recommend tools by fit, not referral fees. This is the ecosystem we build, integrate, and operate in every day — capability, not badges.",
    groups: [
      {
        name: "Commerce platform",
        copy: "Shopify and Shopify Plus are home base — Online Store 2.0, POS, B2B, Functions, and Hydrogen where warranted.",
        items: ["Shopify", "Shopify Plus", "Shopify POS", "Hydrogen"],
      },
      {
        name: "Lifecycle & retention",
        copy: "Email, SMS, subscriptions, loyalty, and support tooling we integrate and optimize alongside lifecycle specialists.",
        items: ["Klaviyo", "Recharge", "Gorgias", "Yotpo", "Loyalty platforms"],
      },
      {
        name: "Discovery & merchandising",
        copy: "Search, reviews, and merchandising layers — plus the structured data that feeds AI surfaces.",
        items: ["Algolia", "Searchspring", "Reviews platforms", "Feed tooling"],
      },
      {
        name: "Back-office & operations",
        copy: "ERP, PIM, and fulfillment — integrated with explicit data ownership and monitoring, with implementation partners where needed.",
        items: ["NetSuite", "SAP", "Dynamics", "PIMs", "3PLs / ShipBob", "iPaaS middleware"],
      },
    ],
    note: "Note: we list platforms we work with, not certifications we claim. Partner-tier claims get added only when verified.",
    cta: {
      title: "Integrating something unusual?",
      copy: "Custom ERPs, legacy systems, niche tools — if it touches your commerce stack, we've probably connected stranger.",
    },
  },

  audit: {
    metaTitle: "Free Shopify & AI Visibility Audit",
    metaDesc: "Request a focused audit of your storefront or AI search presence. High-level findings call — no obligation.",
    eyebrow: "Free audit",
    h1a: "See what we'd fix",
    h1b: "first",
    h1c: "— free.",
    copy: "Pick a track, send your store URL, and get a high-level findings call. It's a focused look, not a free rebuild — deep audits are a scoped engagement if you want the full picture.",
    tracks: [
      {
        track: "Shopify store audit",
        items: [
          "UX / conversion friction in templates, cart, and checkout-adjacent flows",
          "Theme, performance, and Core Web Vitals snapshot",
          "App and integration surface review",
          "Prioritized findings — fix-first order, not a wish list",
        ],
      },
      {
        track: "AI visibility audit",
        items: [
          "How ChatGPT, Perplexity, Gemini & AI Overviews describe your brand today",
          "Product structured-data and entity gaps",
          "Citation sources AI uses in your category",
          "The first three moves that would shift your visibility",
        ],
      },
    ],
    formTitle: "Request your audit",
  },

  careers: {
    metaTitle: "Careers",
    metaDesc: "Join Denwebs — a Shopify agency for operators who ship. Remote-first, US / EU.",
    eyebrow: "Careers",
    h1a: "Work on commerce that",
    h1b: "has to hold",
    copy: "Denwebs hires operators: people who've run stores, built systems, and know that launch day is the easy part. Remote-first across US and EU time zones.",
    roles: {
      title: "Open roles",
      copy: "We hire deliberately rather than continuously. If no role is listed below, send a note anyway — operators who can point at real work always get a reply.",
      items: [
        { role: "Senior Shopify Developer", type: "Contract / full-time · Remote" },
        { role: "Commerce Operations Lead", type: "Full-time · Remote (US/EU)" },
      ],
    },
    cta: "Introduce yourself",
  },

  contact: {
    metaTitle: "Get a Quote",
    metaDesc: "Tell us about your Shopify project. We reply within one business day.",
    eyebrow: "Contact",
    h1a: "Tell us what",
    h1b: "needs to change",
    copy: "Migration, rebuild, operations, AI — a few sentences is enough to start. A senior person reads every submission.",
    emailEyebrow: "Email",
    responseEyebrow: "Response time",
    responseValue: "We reply within 1 business day",
    lighterEyebrow: "Prefer a lighter start?",
    lighterLink: "Request a free audit instead",
  },

  form: {
    selectPlaceholder: "Select…",
    honeypot: "Leave this field empty",
    firstName: "First name *",
    lastName: "Last name *",
    workEmail: "Work email *",
    company: "Company name *",
    websiteUrl: "Website URL *",
    storeUrl: "Store URL *",
    websitePlaceholder: "https://yourstore.com",
    auditType: "Audit type *",
    auditStore: "Shopify store audit",
    auditAi: "AI visibility audit",
    revenue: "Monthly revenue range",
    timeline: "Timeline",
    message: "How can we help? *",
    messagePlaceholder: "Tell us about the project, the problem, or what's not working.",
    messagePlaceholderDiscovery: "What would you like to cover on a discovery call?",
    messageDefaultDiscovery: "I'd like to book a discovery call. ",
    messageDefaultAiAudit: "I'd like an AI visibility audit. ",
    hearAbout: "How did you hear about us?",
    sending: "Sending…",
    requestAudit: "Request audit",
    submitQuote: "Get a quote",
    errorGeneric: "Something went wrong.",
    errorEmailSuffix: "You can also email {email}.",
    footnote: "We reply within one business day. No spam, no list — your details go to a human.",
    successEyebrow: "Received",
    successTitle: "Thanks — we've got it.",
    successCopy: "We reply within one business day. If it's urgent, email",
    errors: {
      invalidRequest: "Invalid request.",
      missingField: "Please fill in all required fields.",
      invalidEmail: "Invalid email address.",
      deliveryFailed: "Delivery failed. Email us directly.",
    },
  },

  privacy: {
    metaTitle: "Privacy Policy",
    metaDesc: "How Denwebs collects, uses, and protects your information.",
    legal: "Legal",
    title: "Privacy Policy",
    placeholder: "Placeholder — replace with counsel-reviewed policy before launch.",
    sections: [
      {
        h: "What we collect",
        p: "Information you submit through our forms (name, email, company, store URL, project details) and standard analytics data if analytics is enabled. We do not collect payment information on this site.",
      },
      {
        h: "How we use it",
        p: "To respond to your inquiry, prepare for conversations you requested, and improve this site. We do not sell your information or add you to marketing lists without consent.",
      },
      {
        h: "Retention & your rights",
        p: "We keep inquiry data as long as needed to serve the conversation and legitimate business records. You may request access, correction, or deletion of your data at any time via hello@denwebs.com.",
      },
      {
        h: "Contact",
        p: "Privacy questions: hello@denwebs.com. This placeholder policy must be reviewed against applicable law (GDPR, CCPA, etc.) before launch.",
      },
    ],
  },

  terms: {
    metaTitle: "Terms of Service",
    metaDesc: "Terms governing use of the Denwebs website.",
    legal: "Legal",
    title: "Terms of Service",
    placeholder: "Placeholder — replace with counsel-reviewed terms before launch.",
    sections: [
      {
        h: "This website",
        p: "Content on this site is provided for general information. Case studies marked as samples are illustrative until replaced with verified client work. Nothing here constitutes a binding offer or professional advice.",
      },
      {
        h: "Engagements",
        p: "Client work is governed by individual statements of work and master service agreements, not by this website's content. Metrics and timelines referenced in sample content are illustrative.",
      },
      {
        h: "Intellectual property",
        p: 'Site content, copy, and design are property of Denwebs unless otherwise noted. "Shopify" and partner marks belong to their respective owners.',
      },
      {
        h: "Contact",
        p: "Questions about these terms: hello@denwebs.com.",
      },
    ],
  },

  notFound: {
    code: "404",
    title: "This page went out of stock.",
    copy: "The URL doesn't resolve — it may have moved or never existed. Here's the way back to things that do.",
    home: "Home",
    services: "Services",
    contact: "Contact",
  },
};


