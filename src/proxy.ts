import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config";

// Pick the first supported language from Accept-Language (e.g. "nl-NL,nl;q=0.9,en;q=0.8").
function preferredLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  const requested = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return requested.find(({ tag }) => hasLocale(tag))?.tag as Locale ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${
    pathname === "/" ? "" : pathname
  }`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and anything in public/ (files with an extension, /brand).
  matcher: ["/((?!_next|brand|.*\\..*).*)"],
};
