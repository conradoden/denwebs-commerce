import type { PortfolioProject } from "@/lib/types";

/**
 * Full Shopify work inventory: portfolio featured brands + Conrado URL/CV sheet.
 * Featured entries with caseStudySlug deep-link to /work/[slug].
 * Categories mix industry + practice so filters stay well populated.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    "slug": "tropeaka",
    "client": "Tropeaka",
    "url": "https://tropeaka.com",
    "industry": "Health & Wellness",
    "categories": [
      "Health & Wellness",
      "CRO",
      "AI",
      "Performance"
    ],
    "capabilities": [
      "Shopify 2.0 theme",
      "CRO",
      "Performance",
      "Core Web Vitals",
      "AI content"
    ],
    "summary": "Custom Shopify 2.0 theme built from Figma into a conversion-focused health brand storefront at 6%+ conversion.",
    "image": "/images/work/tropeaka.jpg",
    "featured": true,
    "caseStudySlug": "tropeaka"
  },
  {
    "slug": "wonderful-dental",
    "client": "Wonderful Dental",
    "url": "https://wonderfuldental.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "Performance",
      "Store Management"
    ],
    "capabilities": [
      "Shopify 2.0",
      "Motion / GSAP",
      "Performance",
      "Core Web Vitals",
      "Store management"
    ],
    "summary": "Wonderful Dental: performance and Core Web Vitals remediation on a health & medical theme, scripts audited, LCP and interactivity tightened.",
    "image": "/images/work/wonderful-dental.jpg",
    "featured": true,
    "caseStudySlug": "wonderful-dental"
  },
  {
    "slug": "sixthreezero",
    "client": "Sixthreezero",
    "url": "https://www.sixthreezero.com",
    "industry": "Health & Wellness",
    "categories": [
      "Health & Wellness",
      "CRO",
      "Custom Apps",
      "Store Management"
    ],
    "capabilities": [
      "Hydrogen",
      "Shopify Functions",
      "Guided selling",
      "Custom apps",
      "Store management"
    ],
    "summary": "Guided-selling and personalized shopping experience for a U.S. bike brand, lifting AOV and conversion.",
    "image": "/images/work/sixthreezero.jpg",
    "featured": true,
    "caseStudySlug": "sixthreezero"
  },
  {
    "slug": "origin-tea",
    "client": "Origin Tea",
    "url": "https://origintea.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "CRO",
      "AI",
      "Subscriptions",
      "Marketing"
    ],
    "capabilities": [
      "Shopify 2.0",
      "CRO",
      "Klaviyo",
      "Loyalty",
      "AI content"
    ],
    "summary": "Premium tea and iced-syrup storefront with lead-capture and loyalty mechanics; 800+ reviews, shipping to 100+ countries.",
    "image": "/images/work/origin-tea.jpg",
    "featured": true,
    "caseStudySlug": "origin-tea"
  },
  {
    "slug": "pryme",
    "client": "Pryme",
    "url": "https://prymesnacks.com.au",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Shopify 2.0",
      "Branding",
      "Retention",
      "SEO"
    ],
    "summary": "Pryme: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "image": "/images/work/pryme.jpg",
    "featured": true,
    "caseStudySlug": "pryme"
  },
  {
    "slug": "nice-rice",
    "client": "Nice Rice",
    "url": "https://nicerice.com.au",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Shopify 2.0",
      "Content / recipes",
      "UGC",
      "CRO",
      "Lifecycle email"
    ],
    "summary": "Nice Rice: rebuilt merchandising modules and offer architecture to lift AOV and conversion for this food & beverage catalogue.",
    "image": "/images/work/nice-rice.jpg",
    "featured": true,
    "caseStudySlug": "nice-rice"
  },
  {
    "slug": "sip-coco",
    "client": "Sip Coco",
    "url": "https://sipcoco.com.au",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "Custom Apps",
      "Marketing"
    ],
    "capabilities": [
      "Shopify 2.0",
      "UGC",
      "Brand systems",
      "Theme development",
      "Lifecycle email"
    ],
    "summary": "Flavor-driven coconut water storefront with distinct flavor identity and UGC-heavy homepage.",
    "image": "/images/work/sip-coco.jpg",
    "featured": true,
    "caseStudySlug": "sip-coco"
  },
  {
    "slug": "prime-cuts-jerky",
    "client": "Prime Cuts Jerky",
    "url": "https://primecutsjerky.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Subscriptions",
      "Operations",
      "Store Management"
    ],
    "capabilities": [
      "Subscriptions",
      "Bundles",
      "CRO",
      "Retention",
      "Store management"
    ],
    "summary": "Prime Cuts Jerky: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "image": "/images/work/prime-cuts-jerky.jpg",
    "featured": true,
    "caseStudySlug": "prime-cuts-jerky"
  },
  {
    "slug": "marc-robinson-jewelers",
    "client": "Marc Robinson Jewelers",
    "url": "https://marcrobinsonjewelers.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "AI",
      "Custom Apps",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Theme & custom development",
      "Custom Shopify app",
      "AI",
      "AI content",
      "SEO"
    ],
    "summary": "Useryze project aligned with CV: Shopify store built from scratch (4,000+ products), collections for fine jewelry and pre-owned luxury watches, vendor API + live inventory, AI product content/images, custom Ring Builder, multi-location store locator.",
    "image": "/images/work/marc-robinson-watch.jpg",
    "featured": true,
    "caseStudySlug": "marc-robinson-jewelers",
    "source": "Conrado CV (Useryze)"
  },
  {
    "slug": "m-robinson-fine-jewelers",
    "client": "M Robinson Fine Jewelers",
    "url": "https://mrobinsonjewelers.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "AI",
      "Custom Apps",
      "Store Management",
      "Integrations"
    ],
    "capabilities": [
      "Theme & custom development",
      "Custom Shopify app",
      "AI",
      "AI content",
      "Store management"
    ],
    "summary": "Useryze boutique Shopify build matching CV jewelry + ring-builder work: luxury storefront, vendor/AI content pipeline, Edge inventory, custom Ring Builder for semi-mount / custom rings, appointment and lead flows.",
    "image": "/images/work/m-robinson-watch.webp",
    "featured": true,
    "caseStudySlug": "m-robinson-fine-jewelers",
    "source": "Conrado CV (Useryze)"
  },
  {
    "slug": "thejewelleryroom",
    "client": "TheJewelleryRoom",
    "url": "https://thejewelleryroom.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "AI",
      "Operations",
      "Custom Apps",
      "Store Management",
      "Operations"
    ],
    "capabilities": [
      "Theme & custom development",
      "Order management / custom app",
      "Order management",
      "Fulfillment routing",
      "AI content"
    ],
    "summary": "Managed millions of DKK in monthly revenue on Shopify; worked with 50+ jewelry designers; built a custom order-management Shopify app (Laravel on Heroku) replacing Jetti Onport (~$10k/mo), improving sales and dropshipping operations.",
    "image": "/images/work/thejewelleryroom.jpg",
    "featured": true,
    "caseStudySlug": "thejewelleryroom",
    "source": "Conrado CV"
  },
  {
    "slug": "treasures-jeweler",
    "client": "Treasures Jeweler",
    "url": "https://treasuresjeweler.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "AI",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Theme & custom development",
      "AI",
      "AI content",
      "AI recommendations",
      "SEO"
    ],
    "summary": "Useryze Shopify storefront for an Austin jeweler: mobile-first store, vendor API product pipeline with AI content/images, Edge inventory sync, managed online funnel.",
    "image": "/images/work/treasures-editorial.png",
    "featured": true,
    "caseStudySlug": "treasures-jeweler",
    "source": "Conrado CV (Useryze)"
  },
  {
    "slug": "activleggings",
    "client": "Activleggings",
    "url": "https://www.activleggings.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "CRO",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "CRO"
    ],
    "summary": "Activleggings: AI recommendation and personalization hooks layered onto a food & beverage storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "eleganza",
    "client": "Eleganza",
    "url": "https://www.eleganza.ca",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "Store management"
    ],
    "summary": "Eleganza: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "aeromat-ecowise",
    "client": "Aeromat Ecowise",
    "url": "https://aeromat-ecowise.myshopify.com",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Operations",
      "Marketing",
      "Store Management",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "Store management"
    ],
    "summary": "Aeromat Ecowise: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "agileofficefurniture",
    "client": "Agileofficefurniture",
    "url": "https://agileofficefurniture.co.nz",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops",
      "Lifecycle email"
    ],
    "summary": "Agileofficefurniture: ongoing Shopify management, releases, app hygiene, and merchandising support for a live DTC operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "alisa",
    "client": "Alisa",
    "url": "https://alisa.ua",
    "industry": "Home & Lifestyle",
    "categories": [
      "Home & Lifestyle",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness"
    ],
    "summary": "Alisa: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "beforeyouspeakcoffee",
    "client": "Beforeyouspeakcoffee",
    "url": "https://beforeyouspeakcoffee.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "CRO",
      "Performance"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "CRO"
    ],
    "summary": "Beforeyouspeakcoffee: performance and Core Web Vitals remediation on a DTC theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "bluecoolers",
    "client": "Bluecoolers",
    "url": "https://bluecoolers.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "CRO",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops",
      "CRO"
    ],
    "summary": "Bluecoolers: ongoing Shopify management, releases, app hygiene, and merchandising support for a live DTC operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "bonobos",
    "client": "Bonobos",
    "url": "https://bonobos.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "Performance",
      "Store Management"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "Store management"
    ],
    "summary": "Bonobos: performance and Core Web Vitals remediation on a food & beverage theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "bostontemporarytattoos",
    "client": "Bostontemporarytattoos",
    "url": "https://bostontemporarytattoos.com",
    "industry": "Flowers",
    "categories": [
      "Flowers",
      "CRO",
      "Performance"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "CRO"
    ],
    "summary": "Bostontemporarytattoos: performance and Core Web Vitals remediation on a DTC theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "brentlmiller",
    "client": "Brentlmiller",
    "url": "https://brentlmiller.com",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels"
    ],
    "summary": "Brentlmiller: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "budsandbowers",
    "client": "Budsandbowers",
    "url": "https://budsandbowers.com",
    "industry": "Flowers",
    "categories": [
      "Flowers",
      "CRO",
      "Performance"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "CRO"
    ],
    "summary": "Budsandbowers: performance and Core Web Vitals remediation on a DTC theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "buypeakperformance",
    "client": "Buypeakperformance",
    "url": "https://buypeakperformance.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "CRO",
      "Performance",
      "Store Management"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Store management"
    ],
    "summary": "Buypeakperformance: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "drawlucy",
    "client": "Drawlucy",
    "url": "https://drawlucy.com",
    "industry": "B2B",
    "categories": [
      "B2B",
      "AI",
      "Marketing"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "Lifecycle email"
    ],
    "summary": "Drawlucy: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "driftaway",
    "client": "Driftaway",
    "url": "https://driftaway.coffee",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Operations",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Order management",
      "Fulfillment routing",
      "Returns",
      "Lifecycle email"
    ],
    "summary": "Driftaway: order routing and fulfillment workflow improvements for a DTC operation that had outgrown inbox-based OMS.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "dsmile",
    "client": "Dsmile",
    "url": "https://dsmile.com",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Custom Apps",
      "Marketing"
    ],
    "capabilities": [
      "Theme development",
      "Custom sections",
      "Shopify Functions",
      "Custom apps",
      "SEO"
    ],
    "summary": "Dsmile: custom Shopify 2.0 theme and section work for a DTC brand, merchandising control without sacrificing speed.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "enrica-lossi",
    "client": "Enrica Lossi",
    "url": "https://enrica-lossi.myshopify.com",
    "industry": "B2B",
    "categories": [
      "B2B",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "Store management"
    ],
    "summary": "Enrica Lossi: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this health & medical storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "fortnightlingerie",
    "client": "Fortnightlingerie",
    "url": "https://fortnightlingerie.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "Performance",
      "Store Management"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "Store management"
    ],
    "summary": "Fortnightlingerie: performance and Core Web Vitals remediation on a fashion theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "fotp",
    "client": "Fotp",
    "url": "https://fotp.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "Operations",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "Lifecycle email"
    ],
    "summary": "Fotp: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "fuelme",
    "client": "Fuelme",
    "url": "https://fuelme.fi",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "AI",
      "Marketing"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "Lifecycle email"
    ],
    "summary": "Fuelme: AI recommendation and personalization hooks layered onto a fashion storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hairthicknessmaximizer",
    "client": "Hairthicknessmaximizer",
    "url": "https://hairthicknessmaximizer.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "AI",
      "Operations",
      "Store Management"
    ],
    "capabilities": [
      "Order management",
      "Fulfillment routing",
      "Returns",
      "AI content"
    ],
    "summary": "Hairthicknessmaximizer: order routing and fulfillment workflow improvements for a DTC operation that had outgrown inbox-based OMS.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hardcandy",
    "client": "Hardcandy",
    "url": "https://hardcandy.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "AI",
      "Operations",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "AI content"
    ],
    "summary": "Hardcandy: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hefthome",
    "client": "Hefthome",
    "url": "https://hefthome.com",
    "industry": "Home & Lifestyle",
    "categories": [
      "Home & Lifestyle",
      "AI",
      "Store Management"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "Store management"
    ],
    "summary": "Hefthome: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "houseofkhalsa",
    "client": "Houseofkhalsa",
    "url": "https://houseofkhalsa.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Theme & custom development",
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Store management"
    ],
    "summary": "Houseofkhalsa: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "kikikickz",
    "client": "Kikikickz",
    "url": "https://kikikickz.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "CRO"
    ],
    "summary": "Kikikickz: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "lovegazelle",
    "client": "Lovegazelle",
    "url": "https://lovegazelle.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops",
      "SEO"
    ],
    "summary": "Lovegazelle: ongoing Shopify management, releases, app hygiene, and merchandising support for a live DTC operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "madres-beauty-point",
    "client": "Madres Beauty Point",
    "url": "https://madres-beauty-point.myshopify.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "SEO"
    ],
    "summary": "Madres Beauty Point: conversion work across PDP, cart, and checkout-adjacent flows for a beauty brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "mondayswimwear",
    "client": "Mondayswimwear",
    "url": "https://mondayswimwear.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "Lifecycle email"
    ],
    "summary": "Mondayswimwear: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "myjoliecandle",
    "client": "Myjoliecandle",
    "url": "https://myjoliecandle.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "Custom Apps",
      "Marketing"
    ],
    "capabilities": [
      "Theme development",
      "Custom sections",
      "Shopify Functions",
      "Custom apps",
      "Lifecycle email"
    ],
    "summary": "Myjoliecandle: custom Shopify 2.0 theme and section work for a fashion brand, merchandising control without sacrificing speed.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "mymagictour",
    "client": "Mymagictour",
    "url": "https://mymagictour.myshopify.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "CRO",
      "Store Management"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Store management"
    ],
    "summary": "Mymagictour: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "mywoof",
    "client": "Mywoof",
    "url": "https://mywoof.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "SEO"
    ],
    "summary": "Mywoof: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "notanotherstore",
    "client": "Notanotherstore",
    "url": "https://notanotherstore.com",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Performance",
      "Store Management"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "Store management"
    ],
    "summary": "Notanotherstore: performance and Core Web Vitals remediation on a DTC theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "orgvsm",
    "client": "Orgvsm",
    "url": "https://orgvsm.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "CRO",
      "Store Management"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Store management"
    ],
    "summary": "Orgvsm: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "outofthesandbox",
    "client": "Outofthesandbox",
    "url": "https://outofthesandbox.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "CRO",
      "Performance"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "CRO"
    ],
    "summary": "Outofthesandbox: performance and Core Web Vitals remediation on a DTC theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "pantys",
    "client": "Pantys",
    "url": "https://pantys.com.br",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops"
    ],
    "summary": "Pantys: ongoing Shopify management, releases, app hygiene, and merchandising support for a live beauty operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "petnpet",
    "client": "Petnpet",
    "url": "https://petnpet.us",
    "industry": "Pets",
    "categories": [
      "Pets",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Lifecycle email"
    ],
    "summary": "Petnpet: conversion work across PDP, cart, and checkout-adjacent flows for a pets brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "print-your-posts",
    "client": "Print Your Posts",
    "url": "https://print-your-posts.myshopify.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "CRO",
      "Performance",
      "Marketing"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "CRO"
    ],
    "summary": "Print Your Posts: theme speed and media pipeline work so this DTC storefront stays fast under campaign traffic.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "rasa-beverages",
    "client": "Rasa Beverages",
    "url": "https://rasa-beverages.myshopify.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "AI",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "AI content"
    ],
    "summary": "Rasa Beverages: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this food & beverage storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "rezekstudio",
    "client": "Rezekstudio",
    "url": "https://rezekstudio.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "Lifecycle email"
    ],
    "summary": "Rezekstudio: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "rubysorganics",
    "client": "Rubysorganics",
    "url": "https://rubysorganics.in",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "AI",
      "Subscriptions",
      "Operations"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "AI content"
    ],
    "summary": "Rubysorganics: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "sharkskin",
    "client": "Sharkskin",
    "url": "https://sharkskin.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Performance",
      "Marketing"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "Lifecycle email"
    ],
    "summary": "Sharkskin: performance and Core Web Vitals remediation on a fashion theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "shopbeachcity",
    "client": "Shopbeachcity",
    "url": "https://shopbeachcity.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Subscriptions",
      "Operations"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "CRO"
    ],
    "summary": "Shopbeachcity: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "soldejaneiro",
    "client": "Soldejaneiro",
    "url": "https://soldejaneiro.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Lifecycle email"
    ],
    "summary": "Soldejaneiro: CRO program covering funnel diagnostics, landing pages, and experiment velocity on a DTC Shopify store.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "stefaniewolf",
    "client": "Stefaniewolf",
    "url": "https://stefaniewolf.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "Operations",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "Lifecycle email"
    ],
    "summary": "Stefaniewolf: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "stelly",
    "client": "Stelly",
    "url": "https://stelly.com.au",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "CRO"
    ],
    "summary": "Stelly: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this fashion storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "sunflourbakingcompany",
    "client": "Sunflourbakingcompany",
    "url": "https://sunflourbakingcompany.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "Marketing"
    ],
    "capabilities": [
      "Theme & custom development",
      "Lifecycle email",
      "Klaviyo flows",
      "SEO"
    ],
    "summary": "Sunflourbakingcompany: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this food & beverage storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "thebrooklyn",
    "client": "Thebrooklyn",
    "url": "https://thebrooklyn.co.nz",
    "industry": "Pets",
    "categories": [
      "Pets",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops"
    ],
    "summary": "Thebrooklyn: ongoing Shopify management, releases, app hygiene, and merchandising support for a live pets operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "thrivemeals",
    "client": "Thrivemeals",
    "url": "https://thrivemeals.com.au",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "AI",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "AI content"
    ],
    "summary": "Thrivemeals: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this food & beverage storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "trattoriadavittorio-ordertakeout",
    "client": "Trattoriadavittorio Ordertakeout",
    "url": "https://trattoriadavittorio-ordertakeout.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "Operations",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Order management",
      "Fulfillment routing",
      "Returns",
      "Lifecycle email"
    ],
    "summary": "Trattoriadavittorio Ordertakeout: order routing and fulfillment workflow improvements for a food & beverage operation that had outgrown inbox-based OMS.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "uncommonjames",
    "client": "Uncommonjames",
    "url": "https://uncommonjames.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels"
    ],
    "summary": "Uncommonjames: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "us",
    "client": "Us",
    "url": "https://us.oneractive.com",
    "industry": "Health & Wellness",
    "categories": [
      "Health & Wellness",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops"
    ],
    "summary": "Us: ongoing Shopify management, releases, app hygiene, and merchandising support for a live food & beverage operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "us",
    "client": "Us",
    "url": "https://us.shop.minetanbodyskin.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Operations",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "SEO"
    ],
    "summary": "Us: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "us",
    "client": "Us",
    "url": "https://us.sirthelabel.com",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "CRO"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles"
    ],
    "summary": "Us: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "v-dog",
    "client": "V Dog",
    "url": "https://v-dog.com",
    "industry": "Pets",
    "categories": [
      "Pets",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels"
    ],
    "summary": "V Dog: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this food & beverage storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "winepassions",
    "client": "Winepassions",
    "url": "https://winepassions.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness"
    ],
    "summary": "Winepassions: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "100percentpure",
    "client": "100percentpure",
    "url": "https://www.100percentpure.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Lifecycle email"
    ],
    "summary": "100percentpure: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ahead-nutrition",
    "client": "Ahead Nutrition",
    "url": "https://www.ahead-nutrition.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Custom Apps"
    ],
    "capabilities": [
      "Theme development",
      "Custom sections",
      "Shopify Functions",
      "Custom apps",
      "CRO"
    ],
    "summary": "Ahead Nutrition: custom Shopify 2.0 theme and section work for a DTC brand, merchandising control without sacrificing speed.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "alexandragrecco",
    "client": "Alexandragrecco",
    "url": "https://www.alexandragrecco.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "CRO",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "CRO"
    ],
    "summary": "Alexandragrecco: AI recommendation and personalization hooks layered onto a health & medical storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "aloyoga",
    "client": "Aloyoga",
    "url": "https://www.aloyoga.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "CRO",
      "Performance"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "CRO"
    ],
    "summary": "Aloyoga: performance and Core Web Vitals remediation on a fitness theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "balibodyco",
    "client": "Balibodyco",
    "url": "https://www.balibodyco.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "AI",
      "Custom Apps"
    ],
    "capabilities": [
      "Theme development",
      "Custom sections",
      "Shopify Functions",
      "Custom apps",
      "AI content"
    ],
    "summary": "Balibodyco: custom Shopify 2.0 theme and section work for a beauty brand, merchandising control without sacrificing speed.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "beardbrand",
    "client": "Beardbrand",
    "url": "https://www.beardbrand.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Store Management"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "Store management"
    ],
    "summary": "Beardbrand: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "beautybakerie",
    "client": "Beautybakerie",
    "url": "https://www.beautybakerie.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Performance",
      "Marketing"
    ],
    "capabilities": [
      "Performance",
      "Core Web Vitals",
      "Theme speed",
      "SEO"
    ],
    "summary": "Beautybakerie: performance and Core Web Vitals remediation on a beauty theme, scripts audited, LCP and interactivity tightened.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "carbon38",
    "client": "Carbon38",
    "url": "https://www.carbon38.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Subscriptions",
      "Operations"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "CRO"
    ],
    "summary": "Carbon38: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ceraudo",
    "client": "Ceraudo",
    "url": "https://www.ceraudo.com",
    "industry": "Home & Lifestyle",
    "categories": [
      "Home & Lifestyle",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "CRO"
    ],
    "summary": "Ceraudo: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "divaboutiqueonline",
    "client": "Divaboutiqueonline",
    "url": "https://www.divaboutiqueonline.com",
    "industry": "B2B",
    "categories": [
      "B2B",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "CRO"
    ],
    "summary": "Divaboutiqueonline: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "envision",
    "client": "Envision",
    "url": "https://www.envision.io",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "Operations",
      "Marketing",
      "Store Management",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "Store management"
    ],
    "summary": "Envision: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "farmrio",
    "client": "Farmrio",
    "url": "https://www.farmrio.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "Lifecycle email"
    ],
    "summary": "Farmrio: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "figandbloom",
    "client": "Figandbloom",
    "url": "https://www.figandbloom.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels"
    ],
    "summary": "Figandbloom: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "floraly",
    "client": "Floraly",
    "url": "https://www.floraly.com.au",
    "industry": "Flowers",
    "categories": [
      "Flowers",
      "AI"
    ],
    "capabilities": [
      "Theme & custom development",
      "AI content",
      "AI recommendations",
      "Catalogue enrichment"
    ],
    "summary": "Floraly: AI recommendation and personalization hooks layered onto a flowers storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hellomolly",
    "client": "Hellomolly",
    "url": "https://www.hellomolly.com",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Operations",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "SEO"
    ],
    "summary": "Hellomolly: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hermeticaflowers",
    "client": "Hermeticaflowers",
    "url": "https://www.hermeticaflowers.com.au",
    "industry": "Flowers",
    "categories": [
      "Flowers",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "CRO"
    ],
    "summary": "Hermeticaflowers: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this flowers storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "huratips",
    "client": "Huratips",
    "url": "https://www.huratips.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Store Management"
    ],
    "capabilities": [
      "Store management",
      "App stack hygiene",
      "Release support",
      "Merchandising ops"
    ],
    "summary": "Huratips: ongoing Shopify management, releases, app hygiene, and merchandising support for a live DTC operation.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "jacoblundart",
    "client": "Jacoblundart",
    "url": "https://www.jacoblundart.com",
    "industry": "Fitness",
    "categories": [
      "Fitness",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels"
    ],
    "summary": "Jacoblundart: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "kulanikinis",
    "client": "Kulanikinis",
    "url": "https://www.kulanikinis.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "Subscriptions",
      "Operations",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "Lifecycle email"
    ],
    "summary": "Kulanikinis: subscription-first purchase flow and loyalty touchpoints designed to turn first orders into recurring revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "livewholier",
    "client": "Livewholier",
    "url": "https://www.livewholier.com",
    "industry": "Fitness",
    "categories": [
      "Fitness",
      "CRO",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "CRO"
    ],
    "summary": "Livewholier: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "lookbookstore",
    "client": "Lookbookstore",
    "url": "https://www.lookbookstore.co",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "CRO"
    ],
    "summary": "Lookbookstore: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "luxyhair",
    "client": "Luxyhair",
    "url": "https://www.luxyhair.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Lifecycle email"
    ],
    "summary": "Luxyhair: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "lvly",
    "client": "Lvly",
    "url": "https://www.lvly.com.au",
    "industry": "Flowers",
    "categories": [
      "Flowers",
      "CRO",
      "Operations",
      "Marketing",
      "Integrations"
    ],
    "capabilities": [
      "Integrations",
      "API sync",
      "ERP / 3PL",
      "CRO"
    ],
    "summary": "Lvly: API and app integrations keeping inventory, orders, and marketing data aligned across the stack.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "maccosmetics",
    "client": "Maccosmetics",
    "url": "https://www.maccosmetics.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Subscriptions",
      "Marketing"
    ],
    "capabilities": [
      "Subscriptions",
      "Retention",
      "Loyalty",
      "CRO"
    ],
    "summary": "Maccosmetics: subscription and retention mechanics for a beauty brand, offering architecture, billing UX, and lifecycle hooks.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "manateecoffee",
    "client": "Manateecoffee",
    "url": "https://www.manateecoffee.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "Operations",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Order management",
      "Fulfillment routing",
      "Returns",
      "Lifecycle email"
    ],
    "summary": "Manateecoffee: order routing and fulfillment workflow improvements for a DTC operation that had outgrown inbox-based OMS.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "missrebel",
    "client": "Missrebel",
    "url": "https://www.missrebel.co.uk",
    "industry": "Fitness",
    "categories": [
      "Fitness",
      "CRO",
      "Store Management"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Store management"
    ],
    "summary": "Missrebel: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "nudea",
    "client": "Nudea",
    "url": "https://www.nudea.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness"
    ],
    "summary": "Nudea: AI recommendation and personalization hooks layered onto a health & medical storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "onnit",
    "client": "Onnit",
    "url": "https://www.onnit.com",
    "industry": "Home & Lifestyle",
    "categories": [
      "Home & Lifestyle",
      "AI",
      "Marketing"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "Lifecycle email"
    ],
    "summary": "Onnit: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ourdogslife",
    "client": "Ourdogslife",
    "url": "https://www.ourdogslife.co.uk",
    "industry": "Fitness",
    "categories": [
      "Fitness",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness"
    ],
    "summary": "Ourdogslife: AI recommendation and personalization hooks layered onto a pets storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "pantypostman",
    "client": "Pantypostman",
    "url": "https://www.pantypostman.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "Theme & custom development",
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "SEO"
    ],
    "summary": "Pantypostman: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "poho",
    "client": "Poho",
    "url": "https://www.poho.com.au",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels",
      "Store management"
    ],
    "summary": "Poho: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this DTC storefront.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ross-simons",
    "client": "Ross Simons",
    "url": "https://www.ross-simons.com",
    "industry": "Jewelry",
    "categories": [
      "Jewelry",
      "AI",
      "Store Management"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness",
      "Store management"
    ],
    "summary": "Ross Simons: AI recommendation and personalization hooks layered onto a DTC storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "shopcrush",
    "client": "Shopcrush",
    "url": "https://www.shopcrush.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Operations",
      "Marketing",
      "Store Management"
    ],
    "capabilities": [
      "Order management",
      "Fulfillment routing",
      "Returns",
      "SEO"
    ],
    "summary": "Shopcrush: order routing and fulfillment workflow improvements for a DTC operation that had outgrown inbox-based OMS.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "sommerswim",
    "client": "Sommerswim",
    "url": "https://www.sommerswim.com",
    "industry": "Fitness",
    "categories": [
      "Fitness",
      "CRO",
      "Store Management"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Store management"
    ],
    "summary": "Sommerswim: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "t2tea",
    "client": "T2tea",
    "url": "https://www.t2tea.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "CRO",
      "Marketing"
    ],
    "capabilities": [
      "CRO",
      "A/B testing",
      "Checkout optimization",
      "Upsells & bundles",
      "Lifecycle email"
    ],
    "summary": "T2tea: conversion work across PDP, cart, and checkout-adjacent flows for a DTC brand, testing upsells, bundles, and page speed that actually moves revenue.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "tesalate",
    "client": "Tesalate",
    "url": "https://www.tesalate.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "AI"
    ],
    "capabilities": [
      "AI content",
      "AI recommendations",
      "Catalogue enrichment",
      "AEO readiness"
    ],
    "summary": "Tesalate: AI recommendation and personalization hooks layered onto a food & beverage storefront experience.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "trulybeauty",
    "client": "Trulybeauty",
    "url": "https://www.trulybeauty.com",
    "industry": "Beauty",
    "categories": [
      "Beauty",
      "Marketing"
    ],
    "capabilities": [
      "Lifecycle email",
      "Klaviyo flows",
      "SEO",
      "Tracking & pixels"
    ],
    "summary": "Trulybeauty: SEO foundations plus on-site campaign modules so paid and organic traffic convert on this beauty storefront.",
    "featured": false,
    "source": "URL sheet"
  }
];

/** Map each service slug to portfolio capability / keyword signals. */
const serviceSignals: Record<string, RegExp> = {
  consulting: /./, // full portfolio proof for advisory pages
  audits: /cro|performance|seo|speed|conversion|bundle|upsell/i,
  design: /theme|brand|ugc|motion|gsap|liquid|shopify 2\.0|figma/i,
  development:
    /theme|custom|shopify 2\.0|hydrogen|function|app|liquid|headless|storefront/i,
  migrations: /migration|replatform|wordpress|woocommerce/i,
  catalogue: /ai|catalogue|vendor|content|metafield|sku|product/i,
  inventory: /inventory|stock|edge|multi-location|sync/i,
  "order-management": /order|oms|dropship|fulfill|routing/i,
  integrations: /integrat|api|vendor|erp|3pl|webhook|klaviyo|recharge|skio/i,
  cro: /cro|subscription|bundle|performance|seo|loyalty|lifecycle|klaviyo|upsell|conversion|ugc/i,
  aeo: /ai|seo|content|schema|visibility/i,
  "agentic-commerce": /ai|feed|catalogue|product|vendor/i,
  operations: /ai|ops|order|inventory|catalogue|automation/i,
};

export function getPortfolioForService(serviceSlug: string): PortfolioProject[] {
  const signal = serviceSignals[serviceSlug] ?? /shopify|storefront|theme|custom/i;
  const matched = portfolioProjects.filter((p) => {
    const hay = `${p.capabilities.join(" ")} ${p.categories.join(" ")} ${p.summary} ${p.industry}`;
    return signal.test(hay);
  });

  // Guarantee every project lands on development; consulting shows the full set.
  if (serviceSlug === "development" || serviceSlug === "consulting") {
    return portfolioProjects;
  }

  // If a niche service matched too few, fold in featured work so the page isn't empty.
  if (matched.length < 6) {
    const featured = portfolioProjects.filter((p) => p.featured);
    const ids = new Set(matched.map((p) => p.url));
    for (const f of featured) {
      if (!ids.has(f.url)) matched.push(f);
    }
  }

  return matched;
}

export const portfolioCategoryFilters = [
  "All",
  "AI",
  "B2B",
  "Beauty",
  "CRO",
  "Custom Apps",
  "Fashion",
  "Fitness",
  "Flowers",
  "Food & Beverage",
  "Health & Medical",
  "Health & Wellness",
  "Home & Lifestyle",
  "Integrations",
  "Jewelry",
  "Marketing",
  "Operations",
  "Outdoor",
  "Performance",
  "Pets",
  "Store Management",
  "Subscriptions"
] as const;

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter(
    (p) => p.categories.includes(category) || p.industry === category,
  );
}
