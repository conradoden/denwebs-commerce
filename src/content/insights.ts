import type { Insight } from "@/lib/types";

export const insightCategories = [
  "Shopify",
  "Migrations",
  "Operations",
  "CRO",
  "AI / AEO",
  "Unified commerce",
];

// Starter articles — outlines expanded into working drafts. Replace or
// extend on a 2–4 post/month cadence.
export const insights: Insight[] = [
  {
    slug: "aeo-shopify-products-ai-search",
    title: "How to make your Shopify products visible in AI search",
    category: "AI / AEO",
    excerpt:
      "AI assistants are becoming a real discovery channel. Here's the structured-data, entity, and content work that gets Shopify products cited instead of skipped.",
    date: "2026-11-10",
    readTime: "8 min",
    body: [
      {
        text: "When a buyer asks ChatGPT or Perplexity for a product recommendation, the assistant doesn't crawl your homepage — it assembles an answer from sources it can parse and trust. Whether your products appear in that answer is decided by work that looks nothing like traditional keyword SEO.",
      },
      {
        heading: "Machines read structure, not design",
        text: "Your PDP may convert beautifully for humans while being nearly opaque to AI. Product schema, complete attributes, clean taxonomy, and policies written in plain language are what assistants use to understand — and recommend — what you sell.",
      },
      {
        heading: "Entities before keywords",
        text: "AI assistants reason about entities: your brand, your products, the categories you compete in. Organization schema, consistent naming across the web, and unambiguous product data build the entity clarity that gets you cited rather than confused with someone else.",
      },
      {
        heading: "Answer-first content wins citations",
        text: "Content that directly answers the questions buyers ask AI — comparisons, use-case fit, compatibility — earns citations. Thin collection descriptions and marketing-speak don't. A small library of genuinely useful answer content outperforms a large blog of filler.",
      },
      {
        heading: "Measure visibility like a channel",
        text: "Track a fixed set of category and product queries across ChatGPT, Perplexity, Gemini, and AI Overviews on a recurring basis. Record who gets cited and which sources are referenced. Without a baseline you're guessing — with one, AEO becomes a manageable program.",
      },
      {
        text: "This is the foundation of our AI Search Optimization work at Denwebs. If you want to know how your brand currently surfaces, the AI visibility audit is the fastest way to find out.",
      },
    ],
  },
  {
    slug: "shopify-migration-seo-checklist",
    title: "The Shopify migration SEO checklist nobody gives you",
    category: "Migrations",
    excerpt:
      "Most migrations lose rankings because the SEO work starts at redirect time instead of at inventory time. A field checklist from the unglamorous parts of replatforming.",
    date: "2026-10-21",
    readTime: "10 min",
    body: [
      {
        text: "Every migration guide mentions 301 redirects. Almost none mention that redirects are the last 10% of SEO preservation — the first 90% is knowing exactly what exists on your current platform before anything moves.",
      },
      {
        heading: "Inventory every URL — including the ones you forgot",
        text: "Crawl the current site, export platform URL reports, and merge with analytics landing pages and Search Console data. Legacy PDFs, old collection paths, paginated URLs, and app-generated routes all need a decision: redirect, canonicalize, or deliberately drop.",
      },
      {
        heading: "Preserve what search engines actually see",
        text: "Metadata, structured data, heading structure, internal linking patterns, and content depth all carry ranking weight. Migrating to a prettier theme that guts your content depth is a rankings regression dressed as a redesign.",
      },
      {
        heading: "Rehearse the cutover",
        text: "Dry-run redirects against a staging store. Validate a statistically meaningful sample — not ten URLs, hundreds. The cutover runbook should assign every check an owner and every failure a rollback trigger.",
      },
      {
        heading: "Watch rankings like a launch metric",
        text: "For the first four weeks post-migration, monitor priority queries daily and Search Console coverage continuously. Small redirect bugs found in week one are cheap. Found in month two, they've already cost you a season.",
      },
      {
        text: "Done this way, most migrations stabilize within weeks — and the performance gains from a modern Shopify build often lift rankings beyond their old baseline. This is how we run migrations at Denwebs: like operations, not events.",
      },
    ],
  },
  {
    slug: "catalogue-operations-shopify-scale",
    title: "Catalogue operations: the Shopify work nobody posts about",
    category: "Operations",
    excerpt:
      "Design shops get the case-study glory, but catalogue hygiene is where revenue quietly leaks. What a real product-data operating model looks like on Shopify.",
    date: "2026-09-30",
    readTime: "7 min",
    body: [
      {
        text: "Nobody writes case studies about metafield governance. Yet for any brand past a few hundred SKUs, catalogue quality determines whether feeds get accepted, whether AI assistants can recommend you, and whether your team spends Fridays fixing CSVs.",
      },
      {
        heading: "Design the model before touching the data",
        text: "Taxonomy, attributes, variant logic, and metafields should be designed around how customers shop your category — not around whatever shape the data arrived in. The model is the asset; the data is an instance of it.",
      },
      {
        heading: "Enrichment is a pipeline, not a project",
        text: "One-time cleanup decays the day it finishes. Sustainable catalogues run enrichment as a recurring workflow — new products onboarded to spec, seasonal attributes refreshed, gaps flagged automatically.",
      },
      {
        heading: "AI belongs in the pipeline — supervised",
        text: "LLMs are genuinely good at drafting attributes, normalizing values, and writing first-pass copy at catalogue scale. They're not good unsupervised. The pattern that works: machines draft, merchandisers approve, audit logs stay permanent.",
      },
      {
        heading: "One catalogue, every channel",
        text: "Google Shopping, Meta, marketplaces, retail partners, and AI shopping agents all consume the same product truth. When that truth lives in one governed model instead of six spreadsheets, channel expansion stops being a data project every time.",
      },
      {
        text: "This is the operational layer most agencies skip and where Denwebs lives. If your catalogue has outgrown your spreadsheets, it's fixable — and the fix compounds.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
