import type { Service } from "@/lib/types";

export const serviceGroups = [
  {
    name: "Strategy & Advisory",
    blurb: "Decide the right move before you spend on the wrong one.",
    slugs: ["consulting", "audits"],
  },
  {
    name: "Design & Build",
    blurb: "Storefronts and systems built to run, not just launch.",
    slugs: ["design", "development", "migrations"],
  },
  {
    name: "Commerce Operations",
    blurb: "Catalogue, inventory, orders, and the integrations between them.",
    slugs: ["catalogue", "inventory", "order-management", "integrations"],
  },
  {
    name: "Growth & AI",
    blurb: "Convert more of the traffic you have, and get found by AI.",
    slugs: ["cro", "ai"],
  },
] as const;

export const services: Service[] = [
  {
    slug: "consulting",
    title: "Commerce consulting",
    promise:
      "Senior Shopify counsel for brands that need a plan, not a pitch. We map strategy, stack, and sequence before a dollar goes to build.",
    group: "Strategy & Advisory",
    whoItsFor: [
      "DTC brands deciding between replatforming and fixing what they have",
      "Retail + DTC operators planning unified commerce",
      "Teams with an in-house dev bench that need senior direction",
      "Founders who want a second opinion before a six-figure rebuild",
    ],
    deliverables: [
      "Unified commerce strategy and channel roadmap",
      "Platform evaluation, stay on Shopify vs. migrate, with honest trade-offs",
      "KPI and roadmap workshops with your operators",
      "Tech stack recommendations across ERP, PIM, 3PL, and marketing",
      "Fractional commerce counsel on retainer",
    ],
    process: [
      { title: "Discovery", body: "We interview stakeholders and audit your stack, data flows, and unit economics." },
      { title: "Diagnosis", body: "We map what's broken, what's missing, and what it costs you each month." },
      { title: "Roadmap", body: "Sequenced initiatives with effort, impact, and dependencies, not a wish list." },
      { title: "Advise or build", body: "Your team executes with our support, or we carry the build ourselves." },
    ],
    faqs: [
      { q: "Do you only recommend Shopify?", a: "No. We specialize in Shopify because it's the right answer for most mid-market commerce brands, but platform evaluations are honest, if staying put or going headless is correct, we'll say so." },
      { q: "Can you work alongside our in-house team?", a: "Yes. Advisory engagements are built for exactly that, we set direction, review work, and stay accountable for outcomes while your team ships." },
      { q: "How long does a strategy engagement take?", a: "A focused platform evaluation or roadmap engagement typically runs 3-6 weeks depending on stakeholder availability and systems complexity." },
      { q: "What does fractional commerce counsel cover?", a: "A monthly retainer for senior guidance: roadmap reviews, vendor selection, architecture decisions, and a standing channel to pressure-test decisions." },
    ],
  },
  {
    slug: "audits",
    title: "Shopify audits",
    promise:
      "A forensic look at your storefront, theme, data flows, and AI visibility, with a prioritized fix list, not a generic checklist.",
    group: "Strategy & Advisory",
    whoItsFor: [
      "Stores with traffic that isn't converting",
      "Brands inheriting a theme they didn't build",
      "Operators who suspect their integrations are leaking revenue",
      "Teams preparing for a rebuild who want to fix cheap wins first",
    ],
    deliverables: [
      "UX and conversion audit across templates, cart, and checkout-adjacent flows",
      "Technical, theme, and performance audit with Core Web Vitals baselines",
      "Accessibility review with a remediation path",
      "Integration and data-flow audit across ERP, PIM, 3PL, and apps",
      "AI visibility audit, how your brand and products surface in AI search",
      "Prioritized findings deck with effort/impact scoring",
    ],
    process: [
      { title: "Scope", body: "We agree the audit surface, storefront, backend ops, AI presence, or all three." },
      { title: "Investigate", body: "Hands-on review of theme code, analytics, apps, feeds, and order flows." },
      { title: "Findings", body: "Every issue documented with evidence, severity, and a recommended fix." },
      { title: "Readout", body: "A working session to walk your team through priorities and next steps." },
    ],
    faqs: [
      { q: "Is the audit a sales document?", a: "No. You own the findings and can execute them with any team. Roughly a third of audit clients fix items internally, that's a good outcome." },
      { q: "How long does an audit take?", a: "Two to four weeks depending on scope and how quickly we get access to your store, analytics, and key systems." },
      { q: "What access do you need?", a: "Read-only where possible: Shopify collaborator access, analytics, and docs or walkthroughs for backend systems. We never need payment or customer credentials." },
      { q: "What's the AI visibility audit?", a: "We test how ChatGPT, Perplexity, Gemini, and AI Overviews describe and recommend your brand and products, then map the content and structured-data gaps." },
      { q: "Do audits include implementation?", a: "The audit is diagnostic. Most clients roll findings into a project or retainer, but there's no obligation." },
    ],
  },
  {
    slug: "design",
    title: "UX / UI design",
    promise:
      "Design systems for Shopify that are opinionated about conversion and honest about operations, built to be themed, not just pictured.",
    group: "Design & Build",
    whoItsFor: [
      "Brands whose site no longer matches their product quality",
      "Teams redesigning ahead of a migration or new market launch",
      "Merchants with complex catalogues that need clearer IA",
      "DTC brands that want a design system, not a one-off mockup",
    ],
    deliverables: [
      "UX research, analytics review, and information architecture",
      "Design system with Shopify-native components and tokens",
      "PDP, collection, cart, and content module design",
      "Brand-consistent editorial and campaign modules",
      "Developer-ready specs mapped to Online Store 2.0 sections",
    ],
    process: [
      { title: "Research", body: "Analytics, heatmaps, customer feedback, and catalogue structure inform the IA." },
      { title: "Direction", body: "Two to three creative directions tested against your brand and ops reality." },
      { title: "System design", body: "Components, templates, and modules designed as a buildable system." },
      { title: "Handoff", body: "Specs, assets, and a working relationship with whoever builds, often us." },
    ],
    faqs: [
      { q: "Do you design for conversion or for brand?", a: "Both, deliberately. Every visual decision is checked against how it affects findability, PDP comprehension, and checkout confidence." },
      { q: "Can you design within our existing theme?", a: "Yes. We design to whatever build reality exists, new build, theme reskin, or incremental module work." },
      { q: "Do you do brand identity work?", a: "We design brand-consistent commerce experiences but partner with identity studios for logo and core brand work." },
      { q: "How do designs handle large catalogues?", a: "We start from your real product data, variant structures, metafields, collection logic, so designs survive contact with the catalogue." },
      { q: "What tools do you use?", a: "Figma for design systems and specs, with prototypes for key flows like PDP configurators and checkout-adjacent experiences." },
    ],
  },
  {
    slug: "development",
    title: "Theme & custom development",
    promise:
      "Shopify builds engineered for speed, merchandising control, and the operational complexity most agencies ignore.",
    group: "Design & Build",
    whoItsFor: [
      "Brands that need a new Online Store 2.0 build",
      "Merchants hitting the limits of a purchased theme",
      "Stores needing custom sections, apps, or Shopify Functions",
      "Teams who need performance and accessibility built in, not patched on",
    ],
    deliverables: [
      "Shopify theme builds on Online Store 2.0 architecture",
      "Custom sections, blocks, and merchandising modules",
      "Custom apps, metafield tooling, and Shopify Functions",
      "Performance engineering with Core Web Vitals budgets",
      "Accessibility implementation to WCAG 2.2 AA",
      "Headless builds (Hydrogen or custom) where the case is real",
    ],
    process: [
      { title: "Architecture", body: "Theme structure, section schema, and app boundaries decided before code." },
      { title: "Build", body: "Component-driven development with staging previews your team can touch." },
      { title: "Harden", body: "Performance, accessibility, and edge cases across devices and catalogue extremes." },
      { title: "Launch & handover", body: "Documented theme, training for merchandisers, and a stabilization window." },
    ],
    faqs: [
      { q: "Custom theme or customized theme?", a: "Depends on catalogue complexity and budget. We'll recommend the cheapest path that doesn't box you in, sometimes that's a heavily customized premium theme." },
      { q: "Do you build on Shopify Plus only?", a: "No. Most work is plan-agnostic. Plus unlocks checkout extensibility and B2B features we use when the case warrants." },
      { q: "When is headless the right call?", a: "Rarely for mid-market. We build Hydrogen when content velocity, app-like UX, or multi-surface requirements genuinely justify it, and say when it doesn't." },
      { q: "How do you handle performance?", a: "Budgets set before build, enforced in review. We audit apps and scripts since they're the usual Core Web Vitals killers." },
      { q: "Do you support what you build?", a: "Yes. Most builds roll into an Operate retainer covering releases, support, and continuous improvement." },
    ],
  },
  {
    slug: "migrations",
    title: "Migrations to Shopify",
    promise:
      "Replatform without losing your rankings, your order history, or your weekends. Migrations planned like operations, not events.",
    group: "Design & Build",
    whoItsFor: [
      "Brands on Magento / Adobe Commerce, SFCC, BigCommerce, or WooCommerce",
      "Merchants on custom or aging stacks with rising maintenance costs",
      "Headless stores consolidating back to a Shopify theme",
      "Retail + DTC businesses unifying channels on Shopify POS",
    ],
    deliverables: [
      "Full replatforming plan with parallel-run and cutover strategy",
      "Data migration: products, customers, orders, gift cards, subscriptions",
      "URL mapping, redirects, and SEO preservation",
      "Integration re-platforming across ERP, 3PL, email, and reviews",
      "Post-launch monitoring and rollback plan",
    ],
    process: [
      { title: "Map", body: "Every data object, URL, integration, and edge case inventoried before anything moves." },
      { title: "Build in parallel", body: "New Shopify store built and populated while the old platform keeps selling." },
      { title: "Rehearse", body: "Dry-run cutovers with data validation checklists and sign-offs." },
      { title: "Cut over & monitor", body: "Redirect checks, ranking watch, and rapid-response support through stabilization." },
    ],
    faqs: [
      { q: "Will we lose SEO rankings?", a: "Migrations handled carelessly do. We map every URL, preserve metadata, stage redirects, and monitor rankings post-launch, most clients see rankings stabilize within weeks." },
      { q: "How long does a migration take?", a: "Simple WooCommerce moves run 6-8 weeks. Complex Magento/SFCC migrations with ERP dependencies typically run 3-6 months." },
      { q: "Does order history migrate?", a: "Yes, orders, customers, and product data migrate in full. We validate counts and spot-check records before cutover." },
      { q: "What about subscriptions and gift cards?", a: "Both migrate with platform-specific handling. We coordinate with apps like Recharge and native gift card tooling to keep customer balances intact." },
      { q: "Can we keep selling during migration?", a: "Yes. The build happens in parallel on a development store. Cutover is typically a controlled, low-traffic-window event, not a shutdown." },
    ],
  },
  {
    slug: "catalogue",
    title: "Catalogue management",
    promise:
      "Product data engineered like infrastructure, structured, enriched, and ready to feed every channel including AI shopping.",
    group: "Commerce Operations",
    whoItsFor: [
      "Brands with hundreds to hundreds of thousands of SKUs",
      "Merchants whose product data lives in spreadsheets and someone's head",
      "Teams preparing feeds for marketplaces, retail, or AI shopping",
      "Operators drowning in variant, bundle, and metafield chaos",
    ],
    deliverables: [
      "Product data model and metafield/metafobject strategy",
      "Catalogue enrichment: attributes, imagery standards, copy templates",
      "Variant, bundle, and kit architecture",
      "Feed readiness for Google, Meta, marketplaces, and AI shopping",
      "PIM advisory and implementation (where a PIM is actually warranted)",
    ],
    process: [
      { title: "Model", body: "We design the product schema, taxonomy, attributes, metafields, around how you sell." },
      { title: "Cleanse", body: "Existing data audited, deduplicated, and normalized against the new model." },
      { title: "Enrich", body: "Attributes, copy, and media brought to feed-grade quality, AI-assisted where safe." },
      { title: "Operationalize", body: "Workflows and tooling so the catalogue stays clean as it grows." },
    ],
    faqs: [
      { q: "Do we need a PIM?", a: "Often no. Shopify metafields plus disciplined workflows cover most mid-market catalogues. We recommend a PIM only when channel count or SKU velocity genuinely demands it." },
      { q: "Can you fix our existing catalogue?", a: "Yes, remediation is the most common starting point: audit, model, cleanse, then enrich in prioritized waves." },
      { q: "What is feed readiness?", a: "Product data structured so Google Shopping, Meta, marketplaces, and AI shopping agents can parse and recommend it, complete attributes, clean taxonomy, valid structured data." },
      { q: "How do you handle ongoing updates?", a: "Through Operate retainers: seasonal enrichment, new product onboarding, bundle builds, and feed maintenance." },
      { q: "Do you use AI for enrichment?", a: "Yes, supervised. AI drafts attributes and copy at scale; humans approve before anything ships to the store." },
    ],
  },
  {
    slug: "inventory",
    title: "Inventory systems",
    promise:
      "One source of truth for stock across locations, channels, and systems, so you stop overselling and under-ordering.",
    group: "Commerce Operations",
    whoItsFor: [
      "Retail + DTC brands selling from stores and warehouses at once",
      "Merchants overselling during launches or understocking winners",
      "Teams syncing Shopify inventory with an ERP",
      "Operators managing safety stock and allocation rules by hand",
    ],
    deliverables: [
      "Multi-location inventory architecture in Shopify",
      "Shopify ↔ ERP inventory sync patterns and implementation",
      "Low-stock, allocation, and safety-stock rule design",
      "Retail + DTC inventory unification (POS + online)",
      "Forecasting-assist workflows with human sign-off",
    ],
    process: [
      { title: "Audit flows", body: "We map where stock lives, where it's promised, and where the sync gaps are." },
      { title: "Design truth source", body: "Decide which system owns which inventory decisions, deliberately." },
      { title: "Integrate", body: "Sync built and tested against edge cases: oversells, transfers, returns restock." },
      { title: "Tune rules", body: "Allocation, buffers, and reorder points calibrated to your demand patterns." },
    ],
    faqs: [
      { q: "Should Shopify or the ERP own inventory?", a: "Depends on your operation. We design the ownership model first, that's the decision most teams skip and regret." },
      { q: "Can you unify store and online stock?", a: "Yes. Shopify POS plus correct multi-location setup gives a unified view; we handle the routing and availability rules." },
      { q: "How do you prevent overselling during drops?", a: "Buffer stock, allocation rules, and sync timing tuned for launch spikes, tested before the event, not during." },
      { q: "Do you build forecasting?", a: "We build forecasting-assist workflows, AI and analytics propose, your operators approve. Fully automated purchasing is rarely wise at mid-market scale." },
    ],
  },
  {
    slug: "order-management",
    title: "Order management (OMS)",
    promise:
      "Orders routed, fulfilled, returned, and reconciled without manual heroics, whether you ship from one warehouse or twenty stores.",
    group: "Commerce Operations",
    whoItsFor: [
      "Brands routing orders across warehouses, 3PLs, and stores",
      "Merchants with painful returns and exchange workflows",
      "B2B or wholesale operations on Shopify",
      "Teams whose 'OMS' is a spreadsheet and a Slack channel",
    ],
    deliverables: [
      "OMS selection and Shopify order-management architecture",
      "Fulfillment routing logic across locations and 3PLs",
      "Returns and exchange flows that don't bleed margin",
      "B2B and wholesale order flows (drafts, terms, bulk)",
      "Exception handling and order triage workflows",
    ],
    process: [
      { title: "Map the lifecycle", body: "Every order path documented, capture, routing, fulfillment, return, refund." },
      { title: "Design routing", body: "Rules for which location ships what, when, and why." },
      { title: "Integrate & automate", body: "3PL, returns platform, and notification systems connected and tested." },
      { title: "Handle exceptions", body: "Triage workflows for the orders that break the happy path." },
    ],
    faqs: [
      { q: "Do we need a dedicated OMS?", a: "Many brands don't | Shopify's native order management plus good 3PL integration covers a lot. We scope the actual need before recommending software." },
      { q: "Can you do ship-from-store?", a: "Yes. Routing logic across retail locations is a common pattern we implement with Shopify POS and fulfillment rules." },
      { q: "How do you handle returns?", a: "We design flows with your returns platform (or recommend one) covering exchanges, restocking, and margin protection." },
      { q: "What about wholesale/B2B?", a: "Shopify B2B features or custom draft-order flows depending on complexity, including terms, approvals, and bulk ordering." },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations (ERP / PIM / 3PL)",
    promise:
      "Connectors where they work, custom where it matters. Your systems talking to each other reliably, not through hope.",
    group: "Commerce Operations",
    whoItsFor: [
      "Brands on NetSuite, SAP, Dynamics, or other ERPs",
      "Merchants stitching together PIM, 3PL, subscriptions, loyalty, search, reviews",
      "Teams burned by brittle iPaaS flows nobody understands",
      "Operators who need data flowing correctly more than they need new features",
    ],
    deliverables: [
      "Integration architecture and system-of-record design",
      "ERP integration (NetSuite, SAP, Dynamics and others, with partners as needed)",
      "PIM, 3PL, subscription, loyalty, search, and reviews connections",
      "Middleware / iPaaS implementation or custom sync services",
      "Monitoring, alerting, and reconciliation tooling",
    ],
    process: [
      { title: "Inventory systems", body: "Every system, data object, and direction of flow documented." },
      { title: "Assign ownership", body: "Which system is the source of truth for each data object, decided explicitly." },
      { title: "Connect", body: "Prebuilt connectors where reliable; custom middleware where the edge cases demand it." },
      { title: "Monitor", body: "Alerting and reconciliation so silent sync failures get caught before customers do." },
    ],
    faqs: [
      { q: "iPaaS or custom integration?", a: "iPaaS (middleware) handles standard flows well and keeps costs sane. Custom earns its cost for complex transformations, high volume, or flows that are your competitive edge." },
      { q: "Can you integrate our ERP?", a: "Yes, NetSuite, SAP, Dynamics, and others, often alongside implementation partners who own the ERP side while we own the commerce side." },
      { q: "What breaks most integrations?", a: "Unclear data ownership and silent failures. We fix both by design: explicit source-of-truth per object, and monitoring that alerts on drift." },
      { q: "Do you maintain integrations after launch?", a: "Yes, most integration work runs inside Operate retainers covering monitoring, API changes, and incident response." },
    ],
  },
  {
    slug: "cro",
    title: "CRO & performance",
    promise:
      "A disciplined experimentation program that compounds, measured wins on PDP, cart, and checkout-adjacent flows.",
    group: "Growth & AI",
    whoItsFor: [
      "Brands with traffic but flat conversion",
      "Merchants whose 'CRO' has been random app installs",
      "Teams wanting landing pages, upsells, and bundles that actually get tested",
      "Stores preparing analytics for GA4 and beyond",
    ],
    deliverables: [
      "Experimentation roadmap scored by impact and effort",
      "Landing pages, upsells, bundles, quizzes, built and tested",
      "GA4 / GTM analytics implementation and reporting",
      "SEO fundamentals with a clean handoff path to AEO",
      "Monthly test velocity with documented learnings",
    ],
    process: [
      { title: "Baseline", body: "Analytics audit, funnel analysis, and heatmaps establish where money leaks." },
      { title: "Prioritize", body: "Hypotheses scored, we test what moves revenue, not what's trendy." },
      { title: "Test", body: "Structured experiments with proper sample sizes and honest read calls." },
      { title: "Compound", body: "Winners shipped, learnings documented, roadmap updated monthly." },
    ],
    faqs: [
      { q: "How many tests run per month?", a: "Depends on your traffic. We set test velocity to what your sample sizes can honestly support, usually 2-4 meaningful tests monthly." },
      { q: "What tools do you use?", a: "Shopify-native testing where possible, plus established experimentation platforms. We recommend the lightest stack that answers the question." },
      { q: "Do you do SEO?", a: "Technical and on-page SEO fundamentals yes, and it's the natural on-ramp to our AEO work for AI search visibility." },
      { q: "What results should we expect?", a: "Honest answer: compounding, not magic. Programs typically show meaningful conversion gains within 2-3 months of disciplined testing." },
    ],
  },
];

export const aiServices: Service[] = [
  {
    slug: "aeo",
    title: "AI Search Optimization (AEO / GEO)",
    promise:
      "Get your brand cited and your products recommended inside ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    group: "Growth & AI",
    whoItsFor: [
      "Brands invisible in AI answers for their category",
      "Merchants watching competitors get cited by AI assistants",
      "Teams whose SEO didn't translate to AI visibility",
      "Product-led brands whose catalogue data isn't AI-readable",
    ],
    deliverables: [
      "AI visibility baseline: how major assistants describe and rank you today",
      "Entity and schema strategy, Organization, Product, FAQ, Review markup done right",
      "AEO content program: answer-first content structured for citation",
      "Citation and authority strategy (with PR partners where needed)",
      "Measurement: recurring AI answer tracking across priority queries",
    ],
    process: [
      { title: "Baseline", body: "We query ChatGPT, Perplexity, Gemini, and AI Overviews for your category and record who gets cited, and why." },
      { title: "Structure", body: "Schema, entity clarity, and product data fixed so machines can parse you." },
      { title: "Publish", body: "Answer-first content targeting the questions buyers actually ask AI." },
      { title: "Measure", body: "Recurring visibility tracking shows citation movement, not vibes." },
    ],
    faqs: [
      { q: "Is AEO just SEO renamed?", a: "No. AI assistants cite sources differently than search engines rank pages, entity clarity, structured data, and answer-formatted content matter more than keyword position." },
      { q: "How do you measure AI visibility?", a: "We track a fixed set of category and product queries across major AI assistants on a recurring basis, recording citations, sentiment, and which sources get referenced." },
      { q: "How fast does it work?", a: "Schema and entity fixes can shift AI descriptions in weeks. Citation authority compounds over months, like SEO, but earlier-stage." },
      { q: "Do you guarantee AI rankings?", a: "Nobody honestly can. We guarantee a measurable baseline, a defensible strategy, and transparent tracking of movement." },
      { q: "What does it cost?", a: "AI visibility audits are fixed-scope. Ongoing AEO programs run as retainers scoped to your catalogue and content velocity." },
    ],
  },
  {
    slug: "agentic-commerce",
    title: "Agentic commerce readiness",
    promise:
      "Make your store sellable by AI agents, product data, feeds, and structured content ready for shopping assistants that buy on customers' behalf.",
    group: "Growth & AI",
    whoItsFor: [
      "Brands preparing for AI-agent checkout and shopping assistants",
      "Merchants whose product data would confuse a machine buyer",
      "Retailers who want catalogue feeds ready for AI commerce channels",
      "Operators who'd rather shape this shift than react to it",
    ],
    deliverables: [
      "Agentic readiness assessment across product data, feeds, and policies",
      "Product structured data and attribute completeness for machine parsing",
      "Catalogue feed architecture for AI shopping surfaces",
      "Policy and content clarity, shipping, returns, pricing readable by agents",
      "Roadmap for emerging agentic protocols and checkout integrations",
    ],
    process: [
      { title: "Assess", body: "We simulate how an AI agent would interpret your catalogue, and log where it fails." },
      { title: "Fix the data", body: "Attributes, taxonomy, pricing, availability, and policy content made machine-legible." },
      { title: "Expose feeds", body: "Structured feeds and endpoints prepared for AI shopping surfaces." },
      { title: "Stay current", body: "Agentic commerce is moving fast, we track protocol changes and adjust." },
    ],
    faqs: [
      { q: "What is agentic commerce?", a: "AI agents that research, compare, and increasingly complete purchases on a customer's behalf. Your store needs to be machine-readable to be machine-sellable." },
      { q: "Is this actually happening yet?", a: "Assistants already recommend products and compare options at scale; agent-initiated checkout is rolling out across platforms. Readiness now beats retrofitting later." },
      { q: "What changes on our store?", a: "Mostly data work: complete attributes, structured policies, clean feeds, and schema. The storefront your humans see barely changes." },
      { q: "Does this overlap with AEO?", a: "AEO gets you recommended; agentic readiness lets an agent actually evaluate and transact your products. They share a data foundation." },
    ],
  },
  {
    slug: "operations",
    title: "AI for store operations",
    promise:
      "AI applied where operations actually bleed, catalogue enrichment, inventory forecasting assists, and order triage, all human-supervised.",
    group: "Growth & AI",
    whoItsFor: [
      "Ops teams manually tagging and enriching thousands of products",
      "Merchants forecasting inventory from gut and spreadsheets",
      "Support leads triaging the same order issues by hand",
      "Brands that want operational AI, not a chatbot gimmick",
    ],
    deliverables: [
      "Catalogue enrichment pipelines, AI-drafted attributes and copy with human approval",
      "Inventory forecasting assists and anomaly flagging",
      "Order triage automation, classification, routing, and drafted resolutions",
      "Support macros and internal tooling for recurring operational work",
      "Supervision design: what AI does, what humans approve, and audit trails",
    ],
    process: [
      { title: "Find the bleed", body: "We quantify which repetitive ops work costs the most hours and errors." },
      { title: "Pilot supervised", body: "AI drafts, humans approve, quality proven on a narrow slice first." },
      { title: "Scale what works", body: "Expand automation scope only where accuracy holds." },
      { title: "Keep humans in", body: "Approval gates and audit logs stay permanent. Autonomy earned, not assumed." },
    ],
    faqs: [
      { q: "How supervised is 'supervised'?", a: "Every AI output that touches customers, money, or catalogue data passes a human approval step. Internal drafts and classifications can run freer, we design the boundary deliberately." },
      { q: "What tools do you build on?", a: "Shopify-native tooling plus established LLM APIs, wired into your existing workflows. We don't sell a platform, we build what your operation needs." },
      { q: "What's the realistic ROI?", a: "Enrichment pipelines routinely cut per-product ops time by an order of magnitude. Triage automation saves support hours weekly. We quantify before we build." },
      { q: "Is our data safe?", a: "Pipelines are designed to minimize data exposure, no customer PII in prompts by default, and we document exactly what data flows where." },
    ],
  },
];

export const allServices = [...services,...aiServices];

export function getService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}
