"use client";

import { useEffect, useState } from "react";
import { defaultLocale } from "@/app/i18n/settings";

/**
 * Hook to get the current locale from cookies in client components
 * @returns The current locale (e.g., 'ar' or 'en')
 */
export function useLocale(): string {
  const [locale, setLocale] = useState<string>(defaultLocale);

  useEffect(() => {
    // Parse cookies to get NEXT_LOCALE
    const cookies = document.cookie.split(";").reduce((cookies, cookie) => {
      const [name, value] = cookie.trim().split("=");
      cookies[name] = value;
      return cookies;
    }, {} as Record<string, string>);

    const localeFromCookie = cookies.NEXT_LOCALE?.substring(0, 2);

    if (localeFromCookie) {
      setLocale(localeFromCookie);
    }

    // Optional: Listen for language changes in localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "NEXT_LOCALE") {
        setLocale(e.newValue?.substring(0, 2) || defaultLocale);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return locale;
}
