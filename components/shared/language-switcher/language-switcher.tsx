"use client";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/use-locale";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSwitcher = () => {
  const lang = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  const changeLanguage = (newLanguage: string) => {
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/; max-age=31536000`;

    const pathWithoutLang = pathName.replace(/^\/(ar|en)/, "");
    const currentPath = `/${newLanguage || ""}${pathWithoutLang}`;

    router.push(currentPath);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => changeLanguage(!lang || lang === "ar" ? "en" : "ar")}
        className={`px-2 py-1 text-base underline cursor-pointer bg-transparent!`}
      >
        {!lang || lang === "ar" ? "English" : "العربية"}
      </Button>
    </div>
  );
};
