import { getTranslation } from "@/app/i18n";
import { Link } from "@/components/global/link";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { HomeCategory } from "@/types";
import Image from "next/image";

export const Categories = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const cats = (await fetchEntries(
    "nahdiCategories",
    locale
  )) as unknown as HomeCategory[];

  return (
    <div className="pt-12 lg:pb-4 pb-12 bg-white">
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
          <div className="grid grid-cols-4 lg:gap-4 mb-12 lg:w-auto w-max lg:[&>div]:w-auto [&>div]:w-[312px] [&>div]:px-3 -mx-3">
            {cats.map((cat) => (
              <div className="gap-12 rounded-[20px]" key={cat.sys.id}>
                <Image
                  src={`https:${cat.fields.image.fields.file.url}`}
                  alt="category 1"
                  width={288}
                  height={204}
                />
                <div className="p-4">
                  <h3 className="text-xl text-textColor  font-medium mb-2">
                    {cat.fields.title}
                  </h3>
                  <p className="text-leadingColor mb-4 text-sm">
                    {cat.fields.brief}
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
        <div className="items-center gap-4 mt-8 hidden lg:flex">
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="bg-mainBlue p-[6px_12px] rounded-[6px] text-base text-white font-semibold transition-all border border-solid border-mainBlue hover:bg-transparent hover:text-mainBlue"
            target="_blank"
          >
            {t("categories.bookAppointment")}
          </Link>
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white"
            target="_blank"
          >
            {t("categories.searchDoctor")}
          </Link>
        </div>
        <Link
          href={"/categories"}
          className="block lg:hidden border border-solid border-mainBlue py-2 px-4 text-center rounded-sm text-xl text-mainBlue"
        >
          {t("categories.allCategories")}
        </Link>
      </div>
    </div>
  );
};
