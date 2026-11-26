import { resolveLocale, type Locale } from "@/i18n/config";
import { en, type Messages } from "./en";
import { ja } from "./ja";

const dictionaries: Record<Locale, Messages> = { en, ja };

export function getMessages(lang: string): Messages {
  return dictionaries[resolveLocale(lang)];
}

export type { Messages };
