import { headers } from "next/headers";
import { defaultLocale } from "@/app/i18n/settings";

/**
 * Get the current locale from cookies in server components
 * @returns The current locale (e.g., 'ar' or 'en')
 */
export async function getLocale(): Promise<string> {
  try {
    const reqHeaders = headers();
    const cookie = (await reqHeaders).get("Cookie");
    // Extract locale from cookies
    const localeFromCookie = cookie
      ?.split("NEXT_LOCALE=")
      .at(1)
      ?.substring(0, 2);

    return localeFromCookie || defaultLocale;
  } catch (error) {
    console.error("Error getting locale from cookies:", error);
    return defaultLocale;
  }
}
