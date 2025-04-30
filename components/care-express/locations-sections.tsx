"use client";

import { expressPackage } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
import { useLocale } from "@/lib/use-locale";
import { cn } from "@/lib/utils";
import { LocationsFilter } from "./locations-filter";
import { Link } from "../global/link";
import { LocationCard } from "./location-card";

type Props = {
  locationsFilter: { fields: { label: string }; sys: { id: string } }[];
  nahdiCareExpress: expressPackage;
  categorizedCareExpressLocations: {
    label: string;
    id: string;
    locations: {
      sys: any;
      fields: {
        title: string;
        workingHours: {
          workingHours: {
            to: string;
            from: string;
          };
        };
        locationImage: {
          fields: {
            title: string;
            file: {
              url: string;
              details: {
                image: {
                  width: number;
                  height: number;
                };
              };
            };
          };
        };
        contactNumber: number;
        locationUrl: string;
        location: { sys: { id: string } };
      };
    }[];
  }[];
};

export const LocationsSections = ({
  locationsFilter,
  nahdiCareExpress,
  categorizedCareExpressLocations,
}: Props) => {
  const locale = useLocale();
  const { t } = useTranslation(locale, "common");
  const [filter, setFilter] = useState("");

  return (
    <div>
      <div>
        <div className="bg-mainGreen">
          <Image
            src="/health-care-banner.jpg"
            alt="Nahdi Care Express"
            width={2000}
            height={1250}
          />
        </div>
        <div className="bg-white">
          <div className="container pt-12 pb-4">
            <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
              <div>
                <h4 className="mb-4 text-mainGreen">
                  {nahdiCareExpress?.fields?.subTitle}
                </h4>
                <h2 className="text-[28px] mb-4 text-textColor">
                  {nahdiCareExpress?.fields?.title}
                </h2>
                <p className="text-textColor text-base">
                  {nahdiCareExpress?.fields?.brief}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={
                    "https:" +
                    nahdiCareExpress?.fields?.image?.fields?.file?.url
                  }
                  alt={nahdiCareExpress?.fields?.image?.fields?.title}
                  width={241}
                  height={227}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="container">
            <div className="flex gap-4 flex-wrap items-center justify-between mb-4">
              <h2 className="text-2xl text-textColor">
                {t("careExpress.services")}
              </h2>
              <p className="text-textColor">{t("careExpress.brief")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nahdiCareExpress?.fields?.packages?.map((x) => (
                <div
                  key={x.fields.image.fields.title}
                  className="shadow-[0_0_10px_0_rgba(0,_0,_0,_0.1)]"
                >
                  <img
                    src={x.fields.image.fields.file.url}
                    alt={x.fields.image.fields.title}
                  />
                  <div className="p-4">
                    <h3 className="text-base text-textColor mb-1">
                      {x.fields.locationDetails}
                    </h3>
                    <div className="flex items-center gap-4">
                      <p
                        className={cn("text-mainBlue", {
                          "line-through text-red-600": !!x.fields.newPrice,
                        })}
                      >
                        SAR {x.fields.price}
                      </p>
                      {!!x.fields.newPrice && (
                        <p className="text-mainBlue">SAR {x.fields.newPrice}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-12 bg-white">
          <div className="container">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl text-textColor">
                {t("careExpress.locations")}
              </h2>
              <LocationsFilter
                setFilter={setFilter}
                locationsFilter={locationsFilter}
              />
            </div>
            {categorizedCareExpressLocations
              ?.filter((y) => y.id.includes(filter))
              ?.map((x) => (
                <div
                  key={x.id}
                  className="pb-4 mb-8 border-b border-solid border-[#0000002d]"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <Image
                      src="/icons/location.svg"
                      alt="Location"
                      width={24}
                      height={24}
                    />
                    <h3 className="text-base text-textColor">{x.label}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {x.locations
                      ?.filter((x) =>
                        x.fields.location?.sys.id.includes(filter)
                      )
                      ?.map((x) => (
                        <LocationCard key={x.sys.id} location={x} />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
