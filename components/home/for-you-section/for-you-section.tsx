import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { getLocale } from "@/lib/get-locale";
import { fetchEntries } from "@/lib/contentful";
import { HealthPackage } from "@/types";
import { getTranslation } from "@/app/i18n";
import { TabContent } from "./tab-content";

const icons = [
  "/icons/general-health.svg",
  "/icons/mom-baby.svg",
  "/icons/tooth.svg",
  "/icons/Beauty.svg",
];

export const ForYouSection = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const healthPackages = (await fetchEntries(
    "healthPackages",
    locale
  )) as unknown as HealthPackage[];

  return (
    <div className="py-12">
      <div className="container">
        <p className="font-semibold text-mainGreen text-xl mb-4">
          {t("home.forYouSection.customizedForYou")}
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-4xl font-light mb-12">{t("packages.title")}</h2>
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white hidden lg:block"
            target="_blank"
          >
            {t("packages.toGetPackages")}
          </Link>
        </div>
        <Tabs defaultValue={healthPackages[0].sys.id} dir="rtl">
          <TabsList className="!flex items-center gap-4">
            {healthPackages.map((x, index) => (
              <TabsTrigger
                key={x.sys.id}
                value={x.sys.id}
                className="!w-max flex-auto"
              >
                <Image
                  src={icons[index]}
                  alt={x.fields.title}
                  width={24}
                  height={24}
                />
                <span>{x.fields.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {healthPackages?.map((healthPackage) => (
            <TabsContent
              key={healthPackage.sys.id}
              value={healthPackage.sys.id}
            >
              <TabContent tab={healthPackage} />
            </TabsContent>
          ))}
        </Tabs>
        <Link
          href={"/health-packages"}
          className="block lg:hidden border border-solid border-mainBlue py-2 px-4 text-center rounded-sm text-xl text-mainBlue"
        >
          جميع الاقسام
        </Link>
      </div>
    </div>
  );
};
