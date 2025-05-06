import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/lib/get-locale";
import { getTranslation } from "@/app/i18n";
import { fetchEntries } from "@/lib/contentful";
import { HomeCategory } from "@/types";

export const AlaBabk = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const data = (await fetchEntries(
    "nahdiOnYourDoor",
    locale
  )) as unknown as HomeCategory[];

  return (
    <div className="pt-12 pb-4 bg-white">
      <div className="container">
        <p className="secondary-title">{t("categories.atYourService")}</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="main-title">{t("categories.nahdiCats")}</h2>
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white hidden lg:block"
            target="_blank"
          >
            {t("categories.allCategories")}
          </Link>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="lg:grid grid-cols-4 gap-4 flex lg:mb-12 mb-4 w-max lg:w-auto lg:[&>div]:w-auto [&>div]:w-[312px]">
            {data?.map((item) => (
              <div className="gap-12 rounded-[20px]" key={item.sys.id}>
                <Image
                  src={"https:" + item.fields.image.fields.file.url}
                  alt="category 1"
                  width={288}
                  height={204}
                  quality={100}
                />
                <div className="p-4">
                  <h3 className="text-xl text-textColor  font-medium mb-2">
                    {item.fields.title}
                  </h3>
                  <p className="text-leadingColor mb-4 text-sm">
                    {item.fields.brief}
                  </p>
                  <Link
                    className="text-linkColor underline"
                    href={"/categories"}
                  >
                    {t("categories.moreInfo")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={"https://healthp.nahdi.sa/patientportal/"}
          className="border border-solid border-mainBlue py-2 px-4 text-center rounded-sm text-xl text-mainBlue lg:hidden block"
          target="_blank"
        >
          {t("categories.allCategories")}
        </Link>
      </div>
    </div>
  );
};
