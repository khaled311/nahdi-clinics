"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/use-locale";
import { useTranslation } from "@/app/i18n/client";

export const NavigationSection = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const { t } = useTranslation(locale, "common");

  const isActive = (href: string) => pathname === href;
  return (
    <div className="mt-12">
      <div className="container">
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex items-center gap-4 lg:w-auto w-max">
            <Link
              href="#why-nahdi"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#why-nahdi") && "border-b-2"
              )}
            >
              {t("home.overview.title")}
            </Link>
            <Link
              href="#nahdicare-categories"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#nahdicare-categories") && "border-b-2"
              )}
            >
              {t("categories.title")}
            </Link>
            <Link
              href="#health-packages"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#health-packages") && "border-b-2"
              )}
            >
              {t("packages.title")}
            </Link>
            <Link
              href="#download-app-content"
              className={cn(
                "text-base font-semibold border-b pb-4 border-solid border-[#ccc] flex-1 whitespace-nowrap",
                isActive("#download-app-content") && "border-b-2"
              )}
            >
              {t("home.downloadApp")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
