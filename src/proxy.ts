import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config/lang";

if (SUPPORTED_LANGUAGES.length <= 0) {
  throw new Error("Setup Error - No SUPPORTED_LANGUAGES founded ");
}

if (!DEFAULT_LANGUAGE) {
  throw new Error("Setup Error - No DEFAULT_LANGUAGE founded ");
}

const headers = { "accept-language": "en-US,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const locales = SUPPORTED_LANGUAGES;
const defaultLocale = DEFAULT_LANGUAGE;

match(languages, locales, defaultLocale);
