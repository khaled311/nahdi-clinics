import Image from "next/image";
import { Link } from "@/components/global/link";
import { getLocale } from "@/lib/get-locale";
import { getTranslation } from "@/app/i18n";

export const FooterTop = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  return (
    <div
      className="bg-[url('/footer-top-bg.jpg')] bg-cover bg-no-repeat pt-12"
      id="download-app-content"
    >
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div className="col-span-2">
            <h2 className="text-[32px] text-white mb-4">{t("downloadApp")}</h2>
            <p className="text-white mb-4">{t("downloadAppDescription")}</p>
            <div className="flex gap-4">
              <Link href="https://apps.apple.com/us/app/nahdicare-clinics/id1462753220">
                <Image
                  src="/download-ios.svg"
                  alt="download-ios"
                  width={198}
                  height={78}
                  quality={100}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.nahdi.nahdipx&hl=en&gl=US">
                <Image
                  src="/download-android.webp"
                  alt="download-android"
                  width={198}
                  height={78}
                  quality={100}
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">{t("quickConsultation")}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">{t("footerCareExpress")}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">
                  {t("footerMedicalServices")}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">{t("showMedicalRecords")}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">{t("manyReasonsToEnjoy")}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/mobile.png"
              alt="mobile"
              width={416}
              height={395}
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
