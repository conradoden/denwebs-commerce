import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import * as en from "./en";
import * as ja from "./ja";

export type SiteContent = typeof en;

// Resolve the per-locale content module. Unknown locales fall back to English.
export function getContent(lang: string): SiteContent {
  return (isLocale(lang) ? lang : defaultLocale) === "ja" ? ja : en;
}

export type { Locale };
