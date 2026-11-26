/**
 * Scrape clear logo files from live Shopify store HTML for marquee candidates.
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const root = "E:\\Agency\\denwebs-commerce";
const outDir = join(root, "public", "images", "clients");
mkdirSync(outDir, { recursive: true });

const raw = readFileSync(join(root, "src", "content", "portfolio.ts"), "utf8");
const projects = JSON.parse(
  raw.match(/export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);/)[1],
);

const preferHosts = new Set([
  "tropeaka.com",
  "wonderfuldental.com",
  "sixthreezero.com",
  "origintea.com",
  "prymesnacks.com.au",
  "nicerice.com.au",
  "sipcoco.com.au",
  "primecutsjerky.com",
  "thejewelleryroom.com",
  "beforeyouspeakcoffee.com",
  "buypeakperformance.com",
  "driftaway.coffee",
  "ceraudo.com",
  "farmrio.com",
  "hellomolly.com",
  "beautybakerie.com",
  "sommerswim.com",
  "floraly.com.au",
  "hermeticaflowers.com.au",
  "luxyhair.com",
  "maccosmetics.com",
  "balibodyco.com",
  "soldejaneiro.com",
  "aloyoga.com",
  "bonobos.com",
  "t2tea.com",
  "beardbrand.com",
  "carbon38.com",
  "onnit.com",
  "stelly.com.au",
  "fortnightlingerie.com",
  "mondayswimwear.com",
  "kulanikinis.com",
  "lvly.com.au",
  "tesalate.com",
  "100percentpure.com",
  "ross-simons.com",
  "trulybeauty.com",
  "hardcandy.com",
]);

const displayNames = {
  "sipcoco.com.au": "Sip Coco",
  "nicerice.com.au": "Nice Rice",
  "origintea.com": "Origin Tea",
  "tropeaka.com": "Tropeaka",
  "sixthreezero.com": "Sixthreezero",
  "prymesnacks.com.au": "Pryme",
  "primecutsjerky.com": "Prime Cuts",
  "thejewelleryroom.com": "TheJewelleryRoom",
  "beforeyouspeakcoffee.com": "Before You Speak Coffee",
  "buypeakperformance.com": "Buy Peak Performance",
  "driftaway.coffee": "Driftaway Coffee",
  "ceraudo.com": "Ceraudo",
  "farmrio.com": "Farm Rio",
  "hellomolly.com": "Hello Molly",
  "beautybakerie.com": "Beauty Bakerie",
  "sommerswim.com": "Sommer Swim",
  "floraly.com.au": "Floraly",
  "hermeticaflowers.com.au": "Hermetica Flowers",
  "luxyhair.com": "Luxy Hair",
  "maccosmetics.com": "MAC Cosmetics",
  "balibodyco.com": "Bali Body",
  "soldejaneiro.com": "Sol de Janeiro",
  "aloyoga.com": "Alo Yoga",
  "bonobos.com": "Bonobos",
  "t2tea.com": "T2 Tea",
  "beardbrand.com": "Beardbrand",
  "carbon38.com": "Carbon38",
  "onnit.com": "Onnit",
  "stelly.com.au": "Stelly",
  "fortnightlingerie.com": "Fortnight",
  "mondayswimwear.com": "Monday Swimwear",
  "kulanikinis.com": "Kulani Kinis",
  "lvly.com.au": "LVLY",
  "tesalate.com": "Tesalate",
  "100percentpure.com": "100% Pure",
  "ross-simons.com": "Ross-Simons",
  "trulybeauty.com": "Truly Beauty",
  "hardcandy.com": "Hard Candy",
  "wonderfuldental.com": "Wonderful Dental",
};

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

async function fetchBuf(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(14000),
      headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*,*/*" },
    });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 2000) return null;
    const head = buf.slice(0, 40).toString("utf8");
    if (/<!doctype|<html/i.test(head)) return null;
    return buf;
  } catch {
    return null;
  }
}

function isImage(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return "png";
  if (buf[0] === 0xff && buf[1] === 0xd8) return "jpg";
  if (buf[0] === 0x52 && buf[8] === 0x57) return "webp";
  if (/<svg/i.test(buf.slice(0, 200).toString("utf8"))) return "svg";
  return null;
}

function absUrl(href, host) {
  if (!href) return null;
  href = href.replace(/&amp;/g, "&").trim();
  if (href.startsWith("//")) return "https:" + href;
  if (href.startsWith("/")) return `https://${host}${href}`;
  if (!href.startsWith("http")) return `https://${host}/${href}`;
  return href;
}

async function findLogo(url, host) {
  let html;
  try {
    const page = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(14000),
      headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
    });
    if (!page.ok) return null;
    html = await page.text();
  } catch {
    return null;
  }

  const hrefs = [];
  // Shopify logo assets first
  const shopify = html.match(
    /https?:\/\/cdn\.shopify\.com\/[^"'>\s]*(?:logo|brand|wordmark|header)[^"'>\s]*\.(?:png|jpg|jpeg|svg|webp)[^"'>\s]*/gi,
  );
  if (shopify) hrefs.push(...shopify.slice(0, 8));

  const localShopify = html.match(
    /cdn\/shop\/(?:files|t\/\d+\/assets)\/[^"'>\s]*(?:logo|brand|wordmark|header)[^"'>\s]*\.(?:png|jpg|jpeg|svg|webp)[^"'>\s]*/gi,
  );
  if (localShopify) {
    for (const x of localShopify.slice(0, 8)) {
      hrefs.push(absUrl(x.startsWith("http") ? x : `https://${host}/${x}`, host));
    }
  }

  // img tags with logo in src/alt/class
  const imgRe =
    /<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRe.exec(html)) && hrefs.length < 20) {
    const tag = match[0];
    const src = match[1];
    if (/logo|brand|wordmark|header-logo/i.test(tag) || /logo|brand|wordmark/i.test(src)) {
      hrefs.push(absUrl(src, host));
    }
  }

  // apple-touch / icons (last resort, size filter later)
  const iconRe =
    /(?:rel=["'][^"']*(?:apple-touch-icon|icon)[^"']*["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["'][^"']*(?:apple-touch-icon|icon)[^"']*["'])/gi;
  while ((match = iconRe.exec(html)) && hrefs.length < 24) {
    hrefs.push(absUrl(match[1] || match[2], host));
  }

  // Prefer wider / larger assets (skip tiny favicons in URL)
  const ranked = [...new Set(hrefs.filter(Boolean))].sort((a, b) => {
    const score = (u) => {
      let s = 0;
      if (/logo|wordmark|brand/i.test(u)) s += 5;
      if (/\.svg/i.test(u)) s += 3;
      if (/apple-touch/i.test(u)) s += 2;
      if (/favicon|16x16|32x32/i.test(u)) s -= 5;
      if (/width=\d{3,}|_\d{3,}x/i.test(u)) s += 2;
      return s;
    };
    return score(b) - score(a);
  });

  for (const href of ranked) {
    // bump shopify image size if query allows
    let u = href;
    if (/cdn\.shopify\.com/i.test(u) && !/[?&]width=/.test(u)) {
      u += (u.includes("?") ? "&" : "?") + "width=400";
    }
    const buf = await fetchBuf(u);
    if (!buf) continue;
    const ext = isImage(buf);
    if (!ext) continue;
    // Prefer substantial files (wordmarks), allow SVG smaller
    if (ext !== "svg" && buf.length < 4000) continue;
    if (ext === "svg" && buf.length < 800) continue;
    return { buf, ext, href: u };
  }
  return null;
}

const kept = [];
const hosts = [...preferHosts];

for (const host of hosts) {
  const project = projects.find((p) => {
    try {
      return new URL(p.url).hostname.replace(/^www\./, "") === host;
    } catch {
      return false;
    }
  });
  const url = project?.url || `https://${host}`;
  const name = displayNames[host] || project?.client || host;
  const slug = slugify(name);
  process.stdout.write(`… ${name} `);
  const found = await findLogo(url, host);
  if (!found) {
    console.log("FAIL");
    continue;
  }
  const file = `${slug}.${found.ext}`;
  writeFileSync(join(outDir, file), found.buf);
  console.log("OK", file, found.buf.length);
  kept.push({
    name,
    href: url,
    logo: `/images/clients/${file}`,
    wide: true,
    bytes: found.buf.length,
  });
}

kept.sort((a, b) => b.bytes - a.bytes);
writeFileSync(join(root, "scripts", "_logo-kept.json"), JSON.stringify(kept, null, 2));
console.log("\nKept", kept.length);
