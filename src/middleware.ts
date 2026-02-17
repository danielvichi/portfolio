import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config/lang";
import Negotiator from "negotiator";
import { match } from '@formatjs/intl-localematcher'

function getLocale(request: NextRequest): string {
  if (!DEFAULT_LANGUAGE) {
    throw new Error("No default language config founded");
  }

  if (SUPPORTED_LANGUAGES.length <= 0) {
    throw new Error("No supported language config founded");
  }

  // Check if language is specified in cookies
  const cookieLang = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang)) {
    return cookieLang;
  }

  // Check Accept-Language header
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return match(languages, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE);
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip if pathname already has a language
  if (SUPPORTED_LANGUAGES.some(lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`)) {
    return NextResponse.next()
  }

  // Get preferred locale
  const locale = getLocale(request)

  // Create new URL with locale
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  // Preserve search params
  newUrl.search = request.nextUrl.search

  // Redirect with cookie
  const response = NextResponse.redirect(newUrl)
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  })
  
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}