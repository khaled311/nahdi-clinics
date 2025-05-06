import { getTranslation } from "@/app/i18n";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import Image from "next/image";
import Link from "next/link";
import { HeroSection as THeroSection } from "@/types";

export const HeroSection = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const data = (await fetchEntries(
    "heroSection",
    locale
  )) as unknown as THeroSection;

  return (
    <div className="relative isolate overflow-hidden p-[64px_0_48px]">
      <div className="absolute inset-0 ltr:scale-x-[-1] rtl:scale-x-100 bg-[url('/banner-ar.jpg')] bg-cover bg-center bg-no-repeat z-[-1]"></div>
      <div className="container">
        <h1 className="lg:text-4xl text-[27px] font-semibold text-[#212529] max-w-[450px] leading-[60x]">
          {data?.fields?.title}
        </h1>
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
        <div className="items-center gap-4 mt-6 hidden lg:flex">
          <p className="text-base font-semibold text-[#212529]">
            {t("home.availableOn")}
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={
                "https://apps.apple.com/us/app/nahdicare-clinics/id1462753220"
              }
              target="_blank"
            >
              <Image
                src="/icons/ios.svg"
                alt="ios icon"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.nahdi.nahdipx&hl=en&gl=US"
              }
              target="_blank"
            >
              <Image
                src="/icons/android.svg"
                alt="android icon"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// 99d4a241-3f73-40b0-be3d-94b6e67491ac
