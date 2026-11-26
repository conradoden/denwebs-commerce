"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: Locale) {
    if (target === lang) return;
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    const rest = pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
    router.push(`/${target}${rest === "/" ? "" : rest}`);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-[3px] border border-line p-0.5"
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === lang}
          className={`rounded-[2px] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
            l === lang ? "bg-ink text-paper" : "text-muted hover:text-ink"
          }`}
        >
          {l === "ja" ? "JA" : "EN"}
        </button>
      ))}
    </div>
  );
}

export { localeNames };
