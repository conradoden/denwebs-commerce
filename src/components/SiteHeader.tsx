"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localize, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
import type { SiteContent } from "@/content";
import LanguageSwitcher from "./LanguageSwitcher";
import DenwebsLogo from "@/components/DenwebsLogo";

export default function SiteHeader({
  lang,
  nav,
  menu,
}: {
  lang: Locale;
  nav: Messages["nav"];
  menu: SiteContent["megaMenu"];
}) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const topNav = [
    { label: nav.work, href: "/work" },
    { label: nav.services, href: "/services", mega: true },
    { label: nav.insights, href: "/insights" },
    { label: nav.about, href: "/about" },
  ];

  // Close menus on route change and Escape
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // Lock scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const queueCloseMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  // Strip the locale prefix for active-state matching.
  const path = pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
  const isActive = (href: string) =>
    path === href || (href !== "/" && path.startsWith(href + "/"));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[88rem] items-center justify-between gap-6 px-5 lg:px-8">
        <DenwebsLogo href={localize("/", lang)} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label={nav.primaryAria}>
          {topNav.map((item) =>
            item.mega ? (
              <div
                key={item.href}
                ref={megaRef}
                className="relative"
                onMouseLeave={queueCloseMega}
              >
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaOpen((v) => !v)}
                  onMouseEnter={openMega}
                  className="nav-link flex items-center gap-1.5 py-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink/75 hover:text-ink"
                  data-active={isActive(item.href)}
                >
                  {item.label}
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                {megaOpen && (
                  <div
                    className="fixed inset-x-0 top-[4.25rem] border-b border-line bg-paper shadow-[0_32px_64px_-32px_rgba(14,18,24,0.3)]"
                    onMouseEnter={openMega}
                  >
                    <div className="mx-auto grid max-w-[88rem] grid-cols-4 gap-10 px-5 py-11 lg:px-8">
                      {menu.map((col) => (
                        <div key={col.title}>
                          <p className="eyebrow">{col.title}</p>
                          <ul className="mt-5 space-y-4">
                            {col.links.map((l) => (
                              <li key={l.href}>
                                <Link href={localize(l.href, lang)} className="mega-link group block">
                                  <span className="block text-[15px] font-medium text-ink/85">
                                    {l.label}
                                  </span>
                                  <span className="mt-0.5 block text-[13px] text-muted">
                                    {l.desc}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-line bg-paper-dim">
                      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-4 lg:px-8">
                        <p className="text-sm text-muted">{nav.megaTagline}</p>
                        <Link
                          href={localize("/services", lang)}
                          className="group font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink underline decoration-accent decoration-2 underline-offset-[6px] hover:decoration-accent-deep"
                        >
                          {nav.viewAllServices} <span className="arrow-slide">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={localize(item.href, lang)}
                data-active={isActive(item.href)}
                className="nav-link py-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-ink/75 hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <Link
            href={localize("/contact", lang)}
            className="hidden rounded-[3px] bg-ink px-5 py-2.5 font-mono text-[12.5px] uppercase tracking-[0.08em] text-paper transition-colors hover:bg-ink-soft sm:inline-block"
          >
            {nav.getQuote}
          </Link>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              {mobileOpen ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto border-t border-line bg-paper pb-28 lg:hidden"
          aria-label={nav.mobileAria}
        >
          <div className="px-5 py-6">
            <Link href={localize("/work", lang)} className="block border-b border-line py-4 font-display text-[1.7rem] font-bold tracking-tight">
              {nav.work}
            </Link>
            <div className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 font-display text-[1.7rem] font-bold tracking-tight"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                {nav.services}
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pb-5">
                  {menu.map((col) => (
                    <div key={col.title} className="pt-4">
                      <p className="eyebrow">{col.title}</p>
                      <ul className="mt-2.5 space-y-2.5">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link href={localize(l.href, lang)} className="text-[15px] text-ink/80">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href={localize("/services", lang)}
                    className="mt-6 inline-block font-mono text-[12.5px] uppercase tracking-[0.08em] underline decoration-accent decoration-2 underline-offset-[6px]"
                  >
                    {nav.viewAllServices} →
                  </Link>
                </div>
              )}
            </div>
            <Link href={localize("/insights", lang)} className="block border-b border-line py-4 font-display text-[1.7rem] font-bold tracking-tight">
              {nav.insights}
            </Link>
            <Link href={localize("/about", lang)} className="block border-b border-line py-4 font-display text-[1.7rem] font-bold tracking-tight">
              {nav.about}
            </Link>
            <Link
              href={localize("/audit", lang)}
              className="block py-4 font-mono text-sm uppercase tracking-[0.08em] text-muted"
            >
              {nav.freeAudit}
            </Link>
          </div>
          {/* Sticky bottom CTA */}
          <div className="fixed inset-x-0 bottom-0 border-t border-line bg-paper p-4">
            <Link
              href={localize("/contact", lang)}
              className="block rounded-[3px] bg-ink py-4 text-center font-mono text-sm uppercase tracking-[0.08em] text-paper"
            >
              {nav.getQuote}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
