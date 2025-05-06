import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/get-locale";
import { getTranslation } from "@/app/i18n";

export const Footer = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");

  return (
    <div className="pt-12 pb-4">
      <div className="container">
        <div className="grid lg:grid-cols-4 grid-cols-1 [&>div]:px-4">
          <div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={60}
              quality={100}
            />
            <p className="my-4 text-[#616161]">{t("footer.description")}</p>
            <Link className="text-linkColor underline" href={"/categories"}>
              {t("footer.moreInfo")}
            </Link>
          </div>
          <div className="border-s border-solid border-[#dee2e6]">
            <h3 className="text-[#2356A5] mb-4 text-xl">
              {t("footer.department.title")}
            </h3>
            <ul>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.department.children")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.department.radiology")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.department.gynecology")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.department.endocrinology")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.department.ophthalmology")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.department.all")}</a>
              </li>
            </ul>
          </div>
          <div className="border-s border-solid border-[#dee2e6]">
            <h3 className="text-[#2356A5] mb-4 text-xl">
              {t("footer.quickLinks.title")}
            </h3>
            <ul>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.quickLinks.doctors")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.quickLinks.packages")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.quickLinks.homeCare")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.quickLinks.departments")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/categories">{t("footer.quickLinks.locations")}</a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="/help">{t("footer.quickLinks.contactUs")}</a>
              </li>
            </ul>
          </div>
          <div className="border-s border-solid border-[#dee2e6]">
            <h3 className="text-[#2356A5] mb-4 text-xl">
              {t("footer.quickLinks.contactUs")}
            </h3>
            <div className="flex flex-col items-start gap-2">
              <Link href={"tel:920024673"} className="flex items-center gap-2">
                <span className="text-base text-[#616161] font-semibold">
                  9200 24 673
                </span>
                <PhoneIcon className="w-4 h-4" />
              </Link>
              <Link
                href={"mailto:customercare@nahdi.sa"}
                className="flex items-center gap-2"
              >
                <span className="text-base text-[#616161] font-semibold">
                  customercare@nahdi.sa
                </span>
                <EmailIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center gap-2 my-5">
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <FacebookIcon className="fill-mainBlue" />
              </Link>
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <InstagramIcon className="fill-mainBlue" />
              </Link>
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <TwitterIcon className="fill-mainBlue" />
              </Link>
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <YoutubeIcon className="fill-mainBlue" />
              </Link>
            </div>
            <p className="text-[#212529Bf]">{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
