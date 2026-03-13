// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config/lang";

// if (SUPPORTED_LANGUAGES.length <= 0) {
//   throw new Error("Setup Error - No SUPPORTED_LANGUAGES founded ");
// }

// if (!DEFAULT_LANGUAGE) {
//   throw new Error("Setup Error - No DEFAULT_LANGUAGE founded ");
// }

// const headers = { "accept-language": "en-US,en;q=0.5" };
// const languages = new Negotiator({ headers }).languages();
// const locales = SUPPORTED_LANGUAGES;
// const defaultLocale = DEFAULT_LANGUAGE;

// match(languages, locales, defaultLocale);

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config/lang";
import { NextRequest, NextResponse } from "next/server";

if (SUPPORTED_LANGUAGES.length <= 0) {
  throw new Error("Setup Error - No SUPPORTED_LANGUAGES founded ");
}

if (!DEFAULT_LANGUAGE) {
  throw new Error("Setup Error - No DEFAULT_LANGUAGE founded ");
}

export function proxy(request: NextRequest) {
  const headers = {
    "accept-language":
      request.headers.get("accept-language") ?? "en-US,en;q=0.5",
  };
  const languages = new Negotiator({ headers }).languages();
  const locales = SUPPORTED_LANGUAGES;
  const defaultLocale = DEFAULT_LANGUAGE;

  const matchedLocale = match(languages, locales, defaultLocale!);

  const { pathname } = request.nextUrl;

  console.log("Matched locale:", matchedLocale);
  console.log("pathname:", pathname);

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${matchedLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - public (public folder)
     * - favicon.ico (favicon file)
     * - files with extensions (jpg, jpeg, png, gif, svg, css, js, etc.)
     */
    "/((?!api|_next/static|_next/image|public|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|css|js|json|pdf|ico|woff|woff2|ttf|eot|otf|glb)$).*)",
  ],
};
