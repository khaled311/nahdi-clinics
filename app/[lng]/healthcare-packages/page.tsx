import { getTranslation } from "@/app/i18n";
import { Link } from "@/components/global/link";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { cn } from "@/lib/utils";
import { HealthPackage } from "@/types";
import Image from "next/image";

const icons = [
  "/icons/tooth.svg",
  "/icons/Beauty.svg",
  "/icons/general-health.svg",
  "/icons/mom-baby.svg",
];

const Page = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const carePackages = (await fetchEntries(
    "healthPackages",
    locale
  )) as unknown as HealthPackage[];

  return (
    <div>
      <div className="bg-mainGreen">
        <div className="container">
          <Image
            src="/packages-banner.png"
            alt="Nahdi Care Express"
            width={2000}
            height={1250}
          />
        </div>
      </div>
      <div className="container pt-12 pb-4">
        <h2 className="text-xl font-bold mb-4 text-textColor">
          {t("packages.title")}
        </h2>
        <p className="mb-4 text-textColor">{t("packages.sub_title")}</p>
        <div className="flex gap-4 items-center justify-between flex-wrap">
          <div className="flex gap-4 items-center flex-wrap">
            {carePackages.map((x, index) => (
              <Link
                key={x.sys.id}
                href={`#` + x.fields.sectionId}
                className="flex items-center gap-2"
              >
                <Image src={icons[index]} alt="tooth" width={24} height={24} />
                <span>{x.fields.title}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-textColor">{t("packages.toGetPackages")}</p>
            <Image
              src={"/icons/phone.svg"}
              alt="phone"
              width={16}
              height={16}
            />
            <Link href={"tel:920024673"}>
              <span className="text-mainBlue">9200 24 673</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-12 bg-white">
        <div className="container">
          {carePackages.map((x) => (
            <div
              key={x.sys.id}
              className={cn(
                "pt-12 pb-8 border-t border-t-solid border-t-gray-300",
                {
                  "border-t-0": x.sys.id === carePackages[0].sys.id,
                }
              )}
              id={x.fields.sectionId}
            >
              <h2 className="text-xl font-bold mb-4 text-textColor">
                {x.fields.title}
              </h2>
              <p className="mb-10 text-textColor">{x.fields.brief}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {x.fields.package.map((y) => (
                  <div
                    key={y.fields.image.fields.title}
                    className="shadow-[0_0_10px_0_rgba(0,_0,_0,_0.1)]"
                  >
                    <img
                      src={"https:" + y.fields.image.fields.file.url}
                      alt={y.fields.image.fields.title}
                    />
                    <div className="p-4">
                      <h3 className="text-base text-textColor mb-1">
                        {y.fields.title}
                      </h3>
                      <p className="text-mainBlue">SAR{y.fields.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
