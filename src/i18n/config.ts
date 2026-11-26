export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Remembered across visits — set by middleware, honored on later root hits.
export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};

export const htmlLocales: Record<Locale, string> = {
  en: "en",
  ja: "ja",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  ja: "ja_JP",
};

export const dateLocales: Record<Locale, string> = {
  en: "en-US",
  ja: "ja-JP",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : defaultLocale;
}

// Prefix an internal path with the locale segment.
// href stays in "/path?query" form in content/data — localize at render time.
export function localize(path: string, lang: Locale): string {
  return `/${lang}${path}`;
}

// Tiny "{key}" template interpolation for dictionary strings, e.g.
// fmt("© {year} Denwebs.", { year: 2026 })
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? `{${k}}`));
}

// hreflang alternates for a given path ("/about") — spread into page metadata.
export function langAlternates(lang: Locale, path: string) {
  return {
    canonical: localize(path, lang),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localize(path, l)])),
      "x-default": localize(path, defaultLocale),
    },
  };
}
