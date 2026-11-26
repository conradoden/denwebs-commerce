import Link from "next/link";
import { fmt, localize, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
import type { SiteContent } from "@/content";
import DenwebsLogo from "@/components/DenwebsLogo";

export default function SiteFooter({
  lang,
  footer,
  site,
  footerNav,
}: {
  lang: Locale;
  footer: Messages["footer"];
  site: SiteContent["site"];
  footerNav: SiteContent["footerNav"];
}) {
  return (
    <footer className="border-t border-line-dark bg-ink text-paper">
      <div className="mx-auto max-w-[88rem] px-5 pb-10 pt-16 lg:px-8">
        {/* Top row, contact prompt + nav columns */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="eyebrow" data-dark="true">
              {footer.contactEyebrow}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block font-display text-2xl font-bold tracking-tight underline decoration-accent decoration-[3px] underline-offset-8 hover:text-accent md:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/55">
              {footer.tagline}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label={footer.navAria}>
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={localize(l.href, lang)}
                        className="text-sm text-paper/65 transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-line-dark pt-10 sm:flex-row sm:items-center sm:justify-between">
          <DenwebsLogo href={localize("/", lang)} dark />
          <p className="text-xs text-paper/40">
            {fmt(footer.copyright, { year: new Date().getFullYear() })}
          </p>
        </div>
        <p className="mt-6 font-mono text-xs tracking-wide text-paper/35">
          {footer.bottomTagline}
        </p>
      </div>
    </footer>
  );
}
