import type { PortfolioProject } from "@/lib/types";

/**
 * Full Shopify work inventory: portfolio featured brands + Conrado URL/CV sheet.
 * Featured entries with caseStudySlug deep-link to /work/[slug].
 * Others surface as portfolio cards with live storefront links.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    "slug": "tropeaka",
    "client": "Tropeaka",
    "url": "https://tropeaka.com",
    "industry": "Health & Wellness",
    "categories": [
      "Health & Wellness",
      "CRO"
    ],
    "capabilities": [
      "Shopify 2.0 theme",
      "CRO",
      "Performance"
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
      "B2B"
    ],
    "capabilities": [
      "Shopify 2.0",
      "Motion / GSAP",
      "Performance"
    ],
    "summary": "Animated B2B dental-supply storefront balancing immersive motion with performance.",
    "image": "/images/work/wonderful-dental.jpg",
    "featured": true,
    "caseStudySlug": "wonderful-dental"
  },
  {
    "slug": "sixthreezero",
    "client": "Sixthreezero",
    "url": "https://www.sixthreezero.com",
    "industry": "Outdoor",
    "categories": [
      "Outdoor",
      "Fitness"
    ],
    "capabilities": [
      "Hydrogen",
      "Shopify Functions",
      "Guided selling",
      "Custom apps"
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
      "CRO"
    ],
    "capabilities": [
      "Shopify 2.0",
      "CRO",
      "Klaviyo",
      "Loyalty"
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
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Subscriptions",
      "Shopify 2.0",
      "Branding"
    ],
    "summary": "Subscription-first Shopify storefront for an Australian Wagyu beef jerky brand.",
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
      "CRO"
    ],
    "capabilities": [
      "Shopify 2.0",
      "Content / recipes",
      "UGC"
    ],
    "summary": "Branded rice storefront with a community recipe hub driving repeat visits.",
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
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify 2.0",
      "UGC",
      "Brand systems"
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
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "CRO"
    ],
    "capabilities": [
      "Subscriptions",
      "Bundles",
      "CRO"
    ],
    "summary": "Bundle and monthly subscription club storefront built to lift AOV and recurring revenue.",
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
      "Jewelry"
    ],
    "capabilities": [
      "Theme & custom development",
      "Custom Shopify app",
      "AI"
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
      "Jewelry"
    ],
    "capabilities": [
      "Theme & custom development",
      "Custom Shopify app",
      "AI"
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
      "Dropshipping"
    ],
    "capabilities": [
      "Theme & custom development",
      "Order management / custom app"
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
      "Jewelry"
    ],
    "capabilities": [
      "Theme & custom development",
      "AI"
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
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "Health & Medical"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Activleggings: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "eleganza",
    "client": "Eleganza",
    "url": "https://www.eleganza.ca",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Eleganza: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "aeromat-ecowise",
    "client": "Aeromat Ecowise",
    "url": "https://aeromat-ecowise.myshopify.com",
    "industry": "Fitness",
    "categories": [
      "Fitness"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Aeromat Ecowise: Shopify storefront build and merchandising work for a fitness brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "agileofficefurniture",
    "client": "Agileofficefurniture",
    "url": "https://agileofficefurniture.co.nz",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Agileofficefurniture: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "alisa",
    "client": "Alisa",
    "url": "https://alisa.ua",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Alisa: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "beforeyouspeakcoffee",
    "client": "Beforeyouspeakcoffee",
    "url": "https://beforeyouspeakcoffee.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Beforeyouspeakcoffee: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "bluecoolers",
    "client": "Bluecoolers",
    "url": "https://bluecoolers.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Bluecoolers: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "bonobos",
    "client": "Bonobos",
    "url": "https://bonobos.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Bonobos: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "bostontemporarytattoos",
    "client": "Bostontemporarytattoos",
    "url": "https://bostontemporarytattoos.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Performance"
    ],
    "summary": "Bostontemporarytattoos: Shopify work covering performance for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "brentlmiller",
    "client": "Brentlmiller",
    "url": "https://brentlmiller.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Brentlmiller: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "budsandbowers",
    "client": "Budsandbowers",
    "url": "https://budsandbowers.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Budsandbowers: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "buypeakperformance",
    "client": "Buypeakperformance",
    "url": "https://buypeakperformance.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Buypeakperformance: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "drawlucy",
    "client": "Drawlucy",
    "url": "https://drawlucy.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Drawlucy: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "driftaway",
    "client": "Driftaway",
    "url": "https://driftaway.coffee",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Driftaway: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "dsmile",
    "client": "Dsmile",
    "url": "https://dsmile.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Dsmile: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "enrica-lossi",
    "client": "Enrica Lossi",
    "url": "https://enrica-lossi.myshopify.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Enrica Lossi: Shopify storefront build and merchandising work for a health & medical brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "fortnightlingerie",
    "client": "Fortnightlingerie",
    "url": "https://fortnightlingerie.com",
    "industry": "Fashion",
    "categories": [
      "Fashion"
    ],
    "capabilities": [
      "Performance"
    ],
    "summary": "Fortnightlingerie: Shopify work covering performance for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "fotp",
    "client": "Fotp",
    "url": "https://fotp.com",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Fotp: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "fuelme",
    "client": "Fuelme",
    "url": "https://fuelme.fi",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Beauty",
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Fuelme: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hairthicknessmaximizer",
    "client": "Hairthicknessmaximizer",
    "url": "https://hairthicknessmaximizer.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Hairthicknessmaximizer: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hardcandy",
    "client": "Hardcandy",
    "url": "https://hardcandy.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Hardcandy: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hefthome",
    "client": "Hefthome",
    "url": "https://hefthome.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Hefthome: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "houseofkhalsa",
    "client": "Houseofkhalsa",
    "url": "https://houseofkhalsa.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Theme & custom development"
    ],
    "summary": "Houseofkhalsa: Shopify work covering theme & custom development for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "kikikickz",
    "client": "Kikikickz",
    "url": "https://kikikickz.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Kikikickz: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "lovegazelle",
    "client": "Lovegazelle",
    "url": "https://lovegazelle.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Lovegazelle: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "madres-beauty-point",
    "client": "Madres Beauty Point",
    "url": "https://madres-beauty-point.myshopify.com",
    "industry": "Beauty",
    "categories": [
      "Beauty"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Madres Beauty Point: Shopify storefront build and merchandising work for a beauty brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "mondayswimwear",
    "client": "Mondayswimwear",
    "url": "https://mondayswimwear.com",
    "industry": "Fashion",
    "categories": [
      "Fashion"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Mondayswimwear: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "myjoliecandle",
    "client": "Myjoliecandle",
    "url": "https://myjoliecandle.com",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Myjoliecandle: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "mymagictour",
    "client": "Mymagictour",
    "url": "https://mymagictour.myshopify.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Mymagictour: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "mywoof",
    "client": "Mywoof",
    "url": "https://mywoof.com",
    "industry": "Pets",
    "categories": [
      "Pets"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Mywoof: Shopify storefront build and merchandising work for a pets brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "notanotherstore",
    "client": "Notanotherstore",
    "url": "https://notanotherstore.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Performance"
    ],
    "summary": "Notanotherstore: Shopify work covering performance for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "orgvsm",
    "client": "Orgvsm",
    "url": "https://orgvsm.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Orgvsm: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "outofthesandbox",
    "client": "Outofthesandbox",
    "url": "https://outofthesandbox.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Outofthesandbox: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "pantys",
    "client": "Pantys",
    "url": "https://pantys.com.br",
    "industry": "Beauty",
    "categories": [
      "Beauty"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Pantys: Shopify storefront build and merchandising work for a beauty brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "petnpet",
    "client": "Petnpet",
    "url": "https://petnpet.us",
    "industry": "Pets",
    "categories": [
      "Pets"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Petnpet: Shopify storefront build and merchandising work for a pets brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "print-your-posts",
    "client": "Print Your Posts",
    "url": "https://print-your-posts.myshopify.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Performance"
    ],
    "summary": "Print Your Posts: Shopify work covering performance for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "rasa-beverages",
    "client": "Rasa Beverages",
    "url": "https://rasa-beverages.myshopify.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Rasa Beverages: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "rezekstudio",
    "client": "Rezekstudio",
    "url": "https://rezekstudio.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Rezekstudio: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "rubysorganics",
    "client": "Rubysorganics",
    "url": "https://rubysorganics.in",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Rubysorganics: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "sharkskin",
    "client": "Sharkskin",
    "url": "https://sharkskin.com",
    "industry": "Fashion",
    "categories": [
      "Fashion",
      "Beauty",
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Sharkskin: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "shopbeachcity",
    "client": "Shopbeachcity",
    "url": "https://shopbeachcity.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Subscriptions"
    ],
    "summary": "Shopbeachcity: Shopify work covering subscriptions for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "soldejaneiro",
    "client": "Soldejaneiro",
    "url": "https://soldejaneiro.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "CRO"
    ],
    "summary": "Soldejaneiro: Shopify work covering cro for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "stefaniewolf",
    "client": "Stefaniewolf",
    "url": "https://stefaniewolf.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Stefaniewolf: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "stelly",
    "client": "Stelly",
    "url": "https://stelly.com.au",
    "industry": "Fashion",
    "categories": [
      "Fashion"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Stelly: Shopify storefront build and merchandising work for a fashion brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "sunflourbakingcompany",
    "client": "Sunflourbakingcompany",
    "url": "https://sunflourbakingcompany.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Theme & custom development"
    ],
    "summary": "Sunflourbakingcompany: Shopify work covering theme & custom development for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "thebrooklyn",
    "client": "Thebrooklyn",
    "url": "https://thebrooklyn.co.nz",
    "industry": "Pets",
    "categories": [
      "Pets"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Thebrooklyn: Shopify storefront build and merchandising work for a pets brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "thrivemeals",
    "client": "Thrivemeals",
    "url": "https://thrivemeals.com.au",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Thrivemeals: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "trattoriadavittorio-ordertakeout",
    "client": "Trattoriadavittorio Ordertakeout",
    "url": "https://trattoriadavittorio-ordertakeout.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage",
      "Health & Medical"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Trattoriadavittorio Ordertakeout: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "uncommonjames",
    "client": "Uncommonjames",
    "url": "https://uncommonjames.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Uncommonjames: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "us",
    "client": "Us",
    "url": "https://us.oneractive.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Us: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "us",
    "client": "Us",
    "url": "https://us.shop.minetanbodyskin.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Us: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "us",
    "client": "Us",
    "url": "https://us.sirthelabel.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Us: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "v-dog",
    "client": "V Dog",
    "url": "https://v-dog.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "V Dog: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "winepassions",
    "client": "Winepassions",
    "url": "https://winepassions.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Winepassions: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "100percentpure",
    "client": "100percentpure",
    "url": "https://www.100percentpure.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "100percentpure: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ahead-nutrition",
    "client": "Ahead Nutrition",
    "url": "https://www.ahead-nutrition.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Ahead Nutrition: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "alexandragrecco",
    "client": "Alexandragrecco",
    "url": "https://www.alexandragrecco.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Alexandragrecco: Shopify storefront build and merchandising work for a health & medical brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "aloyoga",
    "client": "Aloyoga",
    "url": "https://www.aloyoga.com",
    "industry": "Fitness",
    "categories": [
      "Fitness"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Aloyoga: Shopify storefront build and merchandising work for a fitness brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "balibodyco",
    "client": "Balibodyco",
    "url": "https://www.balibodyco.com",
    "industry": "Beauty",
    "categories": [
      "Beauty"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Balibodyco: Shopify storefront build and merchandising work for a beauty brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "beardbrand",
    "client": "Beardbrand",
    "url": "https://www.beardbrand.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Beardbrand: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "beautybakerie",
    "client": "Beautybakerie",
    "url": "https://www.beautybakerie.com",
    "industry": "Beauty",
    "categories": [
      "Beauty"
    ],
    "capabilities": [
      "Performance"
    ],
    "summary": "Beautybakerie: Shopify work covering performance for a beauty brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "carbon38",
    "client": "Carbon38",
    "url": "https://www.carbon38.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Carbon38: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ceraudo",
    "client": "Ceraudo",
    "url": "https://www.ceraudo.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Ceraudo: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "divaboutiqueonline",
    "client": "Divaboutiqueonline",
    "url": "https://www.divaboutiqueonline.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Divaboutiqueonline: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "envision",
    "client": "Envision",
    "url": "https://www.envision.io",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Envision: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "farmrio",
    "client": "Farmrio",
    "url": "https://www.farmrio.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Farmrio: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "figandbloom",
    "client": "Figandbloom",
    "url": "https://www.figandbloom.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Figandbloom: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "floraly",
    "client": "Floraly",
    "url": "https://www.floraly.com.au",
    "industry": "Flowers",
    "categories": [
      "Flowers"
    ],
    "capabilities": [
      "Theme & custom development"
    ],
    "summary": "Floraly: Shopify work covering theme & custom development for a flowers brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hellomolly",
    "client": "Hellomolly",
    "url": "https://www.hellomolly.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Hellomolly: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "hermeticaflowers",
    "client": "Hermeticaflowers",
    "url": "https://www.hermeticaflowers.com.au",
    "industry": "Flowers",
    "categories": [
      "Flowers"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Hermeticaflowers: Shopify storefront build and merchandising work for a flowers brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "huratips",
    "client": "Huratips",
    "url": "https://www.huratips.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Huratips: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "jacoblundart",
    "client": "Jacoblundart",
    "url": "https://www.jacoblundart.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Jacoblundart: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "kulanikinis",
    "client": "Kulanikinis",
    "url": "https://www.kulanikinis.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Subscriptions"
    ],
    "summary": "Kulanikinis: Shopify work covering subscriptions for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "livewholier",
    "client": "Livewholier",
    "url": "https://www.livewholier.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Livewholier: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "lookbookstore",
    "client": "Lookbookstore",
    "url": "https://www.lookbookstore.co",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Lookbookstore: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "luxyhair",
    "client": "Luxyhair",
    "url": "https://www.luxyhair.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Luxyhair: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "lvly",
    "client": "Lvly",
    "url": "https://www.lvly.com.au",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Lvly: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "maccosmetics",
    "client": "Maccosmetics",
    "url": "https://www.maccosmetics.com",
    "industry": "Beauty",
    "categories": [
      "Beauty"
    ],
    "capabilities": [
      "Subscriptions"
    ],
    "summary": "Maccosmetics: Shopify work covering subscriptions for a beauty brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "manateecoffee",
    "client": "Manateecoffee",
    "url": "https://www.manateecoffee.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Manateecoffee: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "missrebel",
    "client": "Missrebel",
    "url": "https://www.missrebel.co.uk",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Missrebel: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "nudea",
    "client": "Nudea",
    "url": "https://www.nudea.com",
    "industry": "Health & Medical",
    "categories": [
      "Health & Medical"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Nudea: Shopify storefront build and merchandising work for a health & medical brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "onnit",
    "client": "Onnit",
    "url": "https://www.onnit.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Onnit: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ourdogslife",
    "client": "Ourdogslife",
    "url": "https://www.ourdogslife.co.uk",
    "industry": "Pets",
    "categories": [
      "Pets"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Ourdogslife: Shopify storefront build and merchandising work for a pets brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "pantypostman",
    "client": "Pantypostman",
    "url": "https://www.pantypostman.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Theme & custom development"
    ],
    "summary": "Pantypostman: Shopify work covering theme & custom development for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "poho",
    "client": "Poho",
    "url": "https://www.poho.com.au",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Poho: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "ross-simons",
    "client": "Ross Simons",
    "url": "https://www.ross-simons.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Ross Simons: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "shopcrush",
    "client": "Shopcrush",
    "url": "https://www.shopcrush.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Shopcrush: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "sommerswim",
    "client": "Sommerswim",
    "url": "https://www.sommerswim.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "CRO"
    ],
    "summary": "Sommerswim: Shopify work covering cro for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "t2tea",
    "client": "T2tea",
    "url": "https://www.t2tea.com",
    "industry": "Shopify Commerce",
    "categories": [
      "Shopify Commerce"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "T2tea: Shopify storefront build and merchandising work for a shopify commerce brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "tesalate",
    "client": "Tesalate",
    "url": "https://www.tesalate.com",
    "industry": "Food & Beverage",
    "categories": [
      "Food & Beverage"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Tesalate: Shopify storefront build and merchandising work for a food & beverage brand.",
    "featured": false,
    "source": "URL sheet"
  },
  {
    "slug": "trulybeauty",
    "client": "Trulybeauty",
    "url": "https://www.trulybeauty.com",
    "industry": "Beauty",
    "categories": [
      "Beauty"
    ],
    "capabilities": [
      "Shopify storefront"
    ],
    "summary": "Trulybeauty: Shopify storefront build and merchandising work for a beauty brand.",
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
  "B2B",
  "Beauty",
  "CRO",
  "Dropshipping",
  "Fashion",
  "Fitness",
  "Flowers",
  "Food & Beverage",
  "Health & Medical",
  "Health & Wellness",
  "Jewelry",
  "Outdoor",
  "Pets",
  "Shopify Commerce"
] as const;

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioProjects;
  return portfolioProjects.filter(
    (p) => p.categories.includes(category) || p.industry === category,
  );
}
