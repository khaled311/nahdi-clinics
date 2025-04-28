import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";

const i18nConfig = {
  locales: ["en", "ar"],
  defaultLocale: "ar",
};

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
