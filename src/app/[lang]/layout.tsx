import type { Metadata } from "next";
import {
  Space_Grotesk,
  Archivo,
  IBM_Plex_Mono,
  Instrument_Serif,
} from "next/font/google";
import { getContent } from "@/content";
import { getMessages } from "@/i18n/dictionaries";
import {
  locales,
  ogLocales,
  resolveLocale,
  type Locale,
} from "@/i18n/config";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const body = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
// CJK text falls back to OS-bundled Japanese faces — see --font-jp-sans
// in globals.css (loading a full CJK webfont is rarely worth the weight).

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);
  return {
    metadataBase: new URL(c.site.url),
    title: {
      default: t.meta.titleDefault,
      template: t.meta.titleTemplate,
    },
    description: c.site.description,
    openGraph: {
      siteName: c.site.name,
      type: "website",
      locale: ogLocales[locale],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ja: "/ja",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale: Locale = resolveLocale(lang);
  const t = getMessages(locale);
  const c = getContent(locale);

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-accent-deep focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
        >
          {t.footer.skipToContent}
        </a>
        <SiteHeader lang={locale} nav={t.nav} menu={c.megaMenu} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter lang={locale} footer={t.footer} site={c.site} footerNav={c.footerNav} />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </body>
    </html>
  );
}
