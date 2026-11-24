import Link from "next/link";
import { footerNav, site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line-dark bg-ink text-paper">
      <div className="mx-auto max-w-[88rem] px-5 pb-10 pt-16 lg:px-8">
        {/* Top row — contact prompt + nav columns */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="eyebrow" data-dark="true">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block font-display text-2xl font-bold tracking-tight underline decoration-accent decoration-[3px] underline-offset-8 hover:text-accent md:text-3xl"
            >
              {site.email}
            </a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/55">
              We reply within one business day. US / EU · Remote-first.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label="Footer">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
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

        {/* Oversized wordmark */}
        <div className="mt-16 overflow-hidden border-t border-line-dark pt-12" aria-hidden="true">
          <p className="select-none whitespace-nowrap text-center font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-[0.9] tracking-[-0.04em] text-paper/[0.13]">
            Denwebs<span className="text-accent/25">.</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line-dark pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Denwebs. All rights reserved.</p>
          <p className="font-mono tracking-wide">
            Shopify commerce, end to end — strategy to AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
