"use client";

import { useTranslation } from "@/app/i18n/client";
import { useLocale } from "@/lib/use-locale";
import { cn } from "@/lib/utils";
import { categorizedCareExpressLocations } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  location: categorizedCareExpressLocations["locations"][0];
  locationsPageStyle?: boolean;
};
export const LocationCard = ({ location, locationsPageStyle }: Props) => {
  const locale = useLocale();
  const { t } = useTranslation(locale, "common");
  const imageToRender = locationsPageStyle
    ? "/locationImage.jpg"
    : "https:" + location.fields.locationImage.fields.file.url;

  return (
    <div
      className={cn(
        "flex items-center justify-between mb-4 border border-solid border-[#0000002d]",
        {
          "lg:flex-row items-start flex-col rounded-4xl overflow-hidden max-w-[540px]":
            locationsPageStyle,
          "flex-col items-center": !locationsPageStyle,
        }
      )}
    >
      <div
        className={cn("", {
          "lg:w-1/2 w-full shrink-0": locationsPageStyle,
        })}
      >
        <Image
          src={imageToRender}
          alt={location.fields.locationImage.fields.title}
          width={locationsPageStyle ? 270 : 300}
          height={locationsPageStyle ? 355 : 143}
          className="w-full"
        />
      </div>
      <div className="flex flex-col p-4 w-full">
        {locationsPageStyle && (
          <h3 className="text-xl text-textColor mb-4 font-semibold">
            {location.fields.title}
          </h3>
        )}
        <h3 className="text-base text-[#212529bf] mb-4 pb-4 border-b border-solid border-[#0000002d]">
          {location.fields.locationDetails}
        </h3>
        <div className="mb-4 pb-4 border-b border-solid border-[#0000002d]">
          <p className="text-[#212529bf] text-sm font-bold">
            {t("careExpress.workingHours")}
          </p>
          <p className="text-[#212529bf] text-sm ">
            {location.fields.workingHours?.workingHours?.from} -{" "}
            {location.fields.workingHours?.workingHours?.to}
          </p>
          <p className="text-[#212529bf] text-sm ">
            {t("careExpress.allDaysExceptFriday")}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-[#212529bf] text-sm font-bold">
            {t("careExpress.contactDetails")}
          </p>
          <p className="text-[#212529bf] text-sm ">
            {location.fields.contactNumber}
          </p>
        </div>
        <Link
          href={location.fields.locationUrl}
          className="flex items-center justify-center gap-2 border border-solid border-mainBlue p-2 rounded-sm"
        >
          <Image
            src="/icons/google-map.svg"
            alt="Google Map"
            width={24}
            height={24}
          />
          <p className="text-mainBlue text-base font-semibold">
            {t("careExpress.goToLocation")}
          </p>
        </Link>
      </div>
    </div>
  );
};
