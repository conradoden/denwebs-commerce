import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
} from "@/i18n/config";

const cookieOpts = {
  path: "/",
  maxAge: LOCALE_COOKIE_MAX_AGE,
  sameSite: "lax" as const,
};

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // Already on a locale path — remember it and let the request through.
  // x-locale lets server code (e.g. not-found) see the locale even without params.
  if (isLocale(firstSegment)) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", firstSegment);
    const res = NextResponse.next({ request: { headers: requestHeaders } });
    res.cookies.set(LOCALE_COOKIE, firstSegment, cookieOpts);
    return res;
  }

  // First visit (or bare-path hit): cookie wins, else geo IP, else default.
  const cookieLang = req.cookies.get(LOCALE_COOKIE)?.value;
  const lang = isLocale(cookieLang)
    ? cookieLang
    : req.headers.get("x-vercel-ip-country") === "JP"
      ? "ja"
      : defaultLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE, lang, cookieOpts);
  return res;
}

export const config = {
  // Skip API routes, Next internals, and any file-ish path (favicon, sitemap.xml, llms.txt…)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
