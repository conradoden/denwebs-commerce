/**
 * Fetch clear brand logos for live portfolio domains.
 * Keep only real image files above a size threshold for the homepage marquee.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const root = "E:\\Agency\\denwebs-commerce";
const outDir = join(root, "public", "images", "clients");
mkdirSync(outDir, { recursive: true });

const raw = readFileSync(join(root, "src", "content", "portfolio.ts"), "utf8");
const m = raw.match(
  /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);/,
);
const projects = JSON.parse(m[1]);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

function isImage(buf) {
  if (!buf || buf.length < 400) return false;
  // PNG
  if (buf[0] === 0x89 && buf[1] === 0x50) return true;
  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) return true;
  // GIF
  if (buf[0] === 0x47 && buf[1] === 0x49) return true;
  // WEBP
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[8] === 0x57) return true;
  // SVG
  const head = buf.slice(0, 200).toString("utf8");
  if (/<svg/i.test(head)) return true;
  return false;
}

async function fetchBuf(url) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*,*/*" },
    });
    if (!res.ok) return null;
    const ab = await res.arrayBuffer();
    return Buffer.from(ab);
  } catch {
    return null;
  }
}

async function findLogo(project) {
  let host;
  try {
    host = new URL(project.url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }

  // Prefer featured / case-study brands first quality
  const candidates = [];

  // From homepage HTML: apple-touch-icon / og:image / shopify logo files
  try {
    const page = await fetch(project.url, {
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
    });
    if (page.ok) {
      const html = await page.text();
      const dead =
        /this store is currently unavailable|enter using password|coming soon/i.test(
          html.slice(0, 25000),
        ) && /notify me|opening soon|store is currently unavailable|enter using password/i.test(html.slice(0, 25000));
      if (
        /this store is currently unavailable|cette boutique est actuellement indisponible/i.test(
          html.slice(0, 20000),
        ) ||
        /enter using password/i.test(html.slice(0, 20000)) ||
        (/coming soon/i.test(html.slice(0, 20000)) &&
          /notify me|be the first to know/i.test(html.slice(0, 20000)))
      ) {
        return { dead: true, url: project.url, client: project.client };
      }

      const hrefs = [];
      const reIcon =
        /(?:rel=["'][^"']*(?:apple-touch-icon|icon)[^"']*["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["'][^"']*(?:apple-touch-icon|icon)[^"']*["'])/gi;
      let match;
      while ((match = reIcon.exec(html)) && hrefs.length < 6) {
        hrefs.push(match[1] || match[2]);
      }
      const og = html.match(
        /property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
      );
      if (og) hrefs.push(og[1]);
      const logoFile = html.match(
        /cdn\/shop\/(?:files|t\/\d+\/assets)\/[^"'>\s]*(?:logo|brand|icon)[^"'>\s]*\.(?:png|jpg|jpeg|svg|webp)/gi,
      );
      if (logoFile) hrefs.push(...logoFile.slice(0, 4).map((x) => (x.startsWith("http") ? x : `https://${host}/${x}`)));

      for (let href of hrefs) {
        if (!href) continue;
        if (href.startsWith("//")) href = "https:" + href;
        else if (href.startsWith("/")) href = `https://${host}${href}`;
        else if (!href.startsWith("http")) href = `https://${host}/${href}`;
        // decode html entities
        href = href.replace(/&amp;/g, "&");
        candidates.push(href);
      }
    }
  } catch {
    /* continue */
  }

  candidates.push(`https://logo.clearbit.com/${host}`);
  candidates.push(`https://logo.clearbit.com/www.${host}`);
  candidates.push(
    `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${host}&size=128`,
  );

  for (const c of candidates) {
    const buf = await fetchBuf(c);
    if (!buf || !isImage(buf)) continue;
    // Prefer larger assets (clear logos), skip tiny favicons under 1.2kb unless SVG
    const isSvg = buf.slice(0, 200).toString("utf8").includes("<svg");
    if (!isSvg && buf.length < 1200) continue;
    if (buf.length > 900_000) continue; // skip huge og images
    const ext = isSvg
      ? "svg"
      : buf[0] === 0xff
        ? "jpg"
        : buf[0] === 0x47
          ? "gif"
          : buf[0] === 0x52
            ? "webp"
            : "png";
    return {
      dead: false,
      buf,
      ext,
      client: project.client,
      url: project.url,
      host,
      bytes: buf.length,
      featured: Boolean(pFeatured(project)),
    };
  }
  return null;
}

function pFeatured(p) {
  return p.featured || p.caseStudySlug;
}

const deadUrls = new Set();
const logos = [];

// Prioritize featured, then rest
const ordered = [
  ...projects.filter((p) => p.featured || p.caseStudySlug),
  ...projects.filter((p) => !p.featured && !p.caseStudySlug),
];

console.log(`Scanning ${ordered.length} projects for logos…`);
for (let i = 0; i < ordered.length; i++) {
  const p = ordered[i];
  process.stdout.write(`  ${i + 1}/${ordered.length} ${p.client}\r`);
  const found = await findLogo(p);
  if (!found) continue;
  if (found.dead) {
    deadUrls.add(found.url);
    continue;
  }
  const file = `${slugify(found.client || found.host)}.${found.ext}`;
  writeFileSync(join(outDir, file), found.buf);
  logos.push({
    name: found.client,
    href: found.url,
    logo: `/images/clients/${file}`,
    bytes: found.bytes,
    featured: found.featured,
    wide: found.ext === "svg" || found.bytes > 8000,
  });
}
console.log("");

// Dedupe by href, prefer larger
const byHref = new Map();
for (const l of logos) {
  const prev = byHref.get(l.href);
  if (!prev || l.bytes > prev.bytes) byHref.set(l.href, l);
}
let unique = [...byHref.values()].sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  return b.bytes - a.bytes;
});

// Keep only clear logos: featured first, then top by size, max 24
unique = unique.filter((l) => l.bytes >= 1200 || l.logo.endsWith(".svg")).slice(0, 24);

const clientsTs = `export type ClientLogo = {
  name: string;
  href: string;
  logo: string;
  wide?: boolean;
};

/** Clear brand logos for the homepage marquee (color, not grayscale). */
export const clientLogos: ClientLogo[] = ${JSON.stringify(
  unique.map(({ name, href, logo, wide }) => ({ name, href, logo, wide })),
  null,
  2,
)};
`;

writeFileSync(join(root, "src", "content", "clients.ts"), clientsTs);

// Also prune dead URLs from portfolio if discovered during logo crawl
if (deadUrls.size) {
  let port = readFileSync(join(root, "src", "content", "portfolio.ts"), "utf8");
  const pm = port.match(
    /export const portfolioProjects: PortfolioProject\[\] = (\[[\s\S]*?\]);/,
  );
  if (pm) {
    const list = JSON.parse(pm[1]).filter((p) => !deadUrls.has(p.url));
    const rest = port.slice(port.indexOf(pm[0]) + pm[0].length);
    port =
      port.slice(0, port.indexOf("export const portfolioProjects")) +
      `export const portfolioProjects: PortfolioProject[] = ${JSON.stringify(list, null, 2)};` +
      rest;
    // fix duplicate import if any - keep file start
    if (!port.startsWith("import")) {
      port =
        `import type { PortfolioProject } from "@/lib/types";\n\n` +
        port.slice(port.indexOf("export const portfolioProjects"));
    }
    writeFileSync(join(root, "src", "content", "portfolio.ts"), port);
  }
}

console.log(`Saved ${unique.length} clear logos`);
console.log(`Dead stores found while crawling: ${deadUrls.size}`);
for (const u of deadUrls) console.log("  dead", u);
for (const l of unique) console.log(`  ${l.bytes}B  ${l.name}  ${l.logo}`);
