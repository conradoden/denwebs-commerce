export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  promise: string;
  group: "Strategy & Advisory" | "Design & Build" | "Commerce Operations" | "Growth & AI";
  whoItsFor: string[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faqs: FAQ[];
  relatedWork?: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  tags: string[];
  title: string;
  services: string[];
  platform: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string }[];
  heroMetric: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string;
  built: string[];
  resultsNote: string;
  sample: boolean;
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: { heading?: string; text: string }[];
};
