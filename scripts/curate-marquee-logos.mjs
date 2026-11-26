/**
 * Fetch Clearbit/unavatar logos for portfolio brands, keep clear files only.
 */
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";

const root = "E:\\Agency\\denwebs-commerce";
const outDir = join(root, "public", "images", "clients");
mkdirSync(outDir, { recursive: true });

const raw = readFileSync(join(root, "src", "content", "portfolio.ts"), "utf8");
const m = raw.match(
  /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);/,
);
const projects = JSON.parse(m[1]);

/** Prefer featured + well-known wordmark brands for the marquee. */
const prefer = new Set([
  "Sip Coco",
  "Nice Rice",
  "Origin Tea",
  "Tropeaka",
  "Sixthreezero",
  "Pryme",
  "Prime Cuts Jerky",
  "TheJewelleryRoom",
  "Beforeyouspeakcoffee",
  "Buypeakperformance",
  "Driftaway",
  "Ceraudo",
  "Farmrio",
  "Hellomolly",
  "Beautybakerie",
  "Sommerswim",
  "Floraly",
  "Hermeticaflowers",
  "Luxyhair",
  "Maccosmetics",
  "Balibodyco",
  "Soldejaneiro",
  "Aloyoga",
  "Bonobos",
  "T2tea",
  "Beardbrand",
  "Carbon38",
  "Onnit",
  "Hardcandy",
  "Trulybeauty",
  "Stelly",
  "Fortnightlingerie",
  "Mondayswimwear",
  "Kulanikinis",
  "Lvly",
  "Tesalate",
  "100percentpure",
  "Ross Simons",
  "Wonderful Dental",
]);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

async function tryFetch(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*,*/*" },
    });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1500) return null;
    // skip HTML error pages
    const head = buf.slice(0, 40).toString("utf8");
    if (/<!doctype|<html/i.test(head)) return null;
    return buf;
  } catch {
    return null;
  }
}

function extFor(buf) {
  if (buf[0] === 0x89) return "png";
  if (buf[0] === 0xff) return "jpg";
  if (buf[0] === 0x52 && buf.length > 12 && buf[8] === 0x57) return "webp";
  if (/<svg/i.test(buf.slice(0, 120).toString("utf8"))) return "svg";
  return "png";
}

const candidates = projects.filter(
  (p) => prefer.has(p.client) || p.featured,
);

const kept = [];
const seen = new Set();

for (const p of candidates) {
  let host;
  try {
    host = new URL(p.url).hostname.replace(/^www\./, "");
  } catch {
    continue;
  }
  if (seen.has(host)) continue;
  seen.add(host);

  const slug = slugify(p.client === "Us" ? host : p.client);
  const urls = [
    `https://logo.clearbit.com/${host}?size=256`,
    `https://unavatar.io/${host}?fallback=false`,
  ];
  let buf = null;
  let used = null;
  for (const u of urls) {
    buf = await tryFetch(u);
    if (buf && buf.length >= 2800) {
      used = u;
      break;
    }
    buf = null;
  }
  if (!buf) {
    console.log("FAIL", p.client, host);
    continue;
  }
  const ext = extFor(buf);
  const file = `${slug}.${ext}`;
  writeFileSync(join(outDir, file), buf);
  console.log("OK", p.client, file, buf.length);
  kept.push({
    name: p.client,
    href: p.url,
    logo: `/images/clients/${file}`,
    wide: true,
    bytes: buf.length,
    featured: Boolean(p.featured),
  });
}

kept.sort((a, b) => Number(b.featured) - Number(a.featured) || b.bytes - a.bytes);
writeFileSync(join(root, "scripts", "_logo-kept.json"), JSON.stringify(kept, null, 2));
console.log("Kept", kept.length);
