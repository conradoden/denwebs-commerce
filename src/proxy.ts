import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // Already on a locale path — let the request through.
  // x-locale lets server code (e.g. not-found) see the locale even without params.
  if (isLocale(firstSegment)) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", firstSegment);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Bare-path hit: decide by visitor IP every time. There is no manual
  // language switcher, so the geo result is authoritative.
  const lang =
    req.headers.get("x-vercel-ip-country") === "JP" ? "ja" : defaultLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals, and any file-ish path (favicon, sitemap.xml, llms.txt…)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
