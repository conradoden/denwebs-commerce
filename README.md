# Denwebs | Shopify Agency Website

Marketing site for Denwebs, a Shopify-focused commerce agency
(strategy → build → operations → AI). Built from
`Denwebs-Agency-Website-Build-Guide`; see that doc for IA, copy, and
design intent.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Content-driven: services, case studies, and articles live as typed
  modules in `src/content/` (no CMS required for v1)
- Forms post to `app/api/contact` (Resend-ready, honeypot + validation)
- SEO/AEO: sitemap, robots, `llms.txt`, OG image route, JSON-LD

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

Node 18.18+ required. Copy `.env.example` → `.env.local` to wire form
delivery (Resend) and analytics (Plausible).

## Editing content

| What | Where |
| --- | --- |
| Services (all 15 pages) | `src/content/services.ts` |
| Case studies | `src/content/case-studies.ts` |
| Insights articles | `src/content/insights.ts` |
| Nav, footer, form options | `src/content/site.ts` |
| Design tokens | `src/app/globals.css` (`@theme`) |

## Before launch: placeholder checklist

- [ ] Replace sample case studies / client names / stats with verified data
- [ ] Set `RESEND_API_KEY` + `CONTACT_TO` for form delivery
- [ ] Confirm `site.url`, email, phone in `src/content/site.ts`
- [ ] Replace placeholder Privacy / Terms with counsel-reviewed docs
- [ ] Partner tier claims (e.g. Shopify Platinum) only if verified
