import { getTranslation } from "@/app/i18n";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { Overview as TOverview } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Overview = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const data = (await fetchEntries(
    "whyNahdi",
    locale
  )) as unknown as TOverview[];

  return (
    <div className="mt-12 mb-4" id="why-nahdi">
      <div className="container">
        <p className="secondary-title">{t("overview.title")}</p>
        <h2 className="main-title">{t("overview.sub_title")}</h2>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="grid lg:grid-cols-4 grid-cols-1 mb-12 lg:w-auto gap-4">
            {data?.map((item) => (
              <div
                className="p-8 flex flex-col items-center gap-12 bg-[#EBF3F7] rounded-[20px]"
                key={item.sys.id}
              >
                <Image
                  src={"https:" + item.fields.image.fields.file.url}
                  alt="overview1"
                  width={item.fields.image.fields.file.details.image.width}
                  height={item.fields.image.fields.file.details.image.height}
                />
                <h3>{item.fields.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8">
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
      </div>
    </div>
  );
};
