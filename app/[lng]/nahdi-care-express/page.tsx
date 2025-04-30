import { getTranslation } from "@/app/i18n";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { cn } from "@/lib/utils";
import { expressPackage } from "@/types";
import Image from "next/image";

const Page = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const nahdiCareExpress = (
    await fetchEntries("nahdiCareExpress", locale)
  )[0] as unknown as expressPackage;

  console.log("nahdiCareExpress", nahdiCareExpress);

  return (
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
                  "https:" + nahdiCareExpress?.fields?.image?.fields?.file?.url
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
                    {x.fields.title}
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
              {t("careExpress.services")}
            </h2>
            <select
              className="p-2 border border-solid border-gray-300 rounded w-100 w-md-25 mx-4"
              defaultValue="all"
            >
              <option value="all">Select City</option>
              {[
                ...new Set(
                  nahdiCareExpress?.fields?.locationsSection?.map(
                    (x) => x.fields.location
                  )
                ),
              ].map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {nahdiCareExpress?.fields?.locationsSection?.map((x) => (
              <div key={x.sys.id}>
                <div className="flex flex-col items-center justify-between mb-4 border border-solid border-[#0000002d]">
                  <Image
                    src={"https:" + x.fields.locationImage.fields.file.url}
                    alt={x.fields.locationImage.fields.title}
                    width={300}
                    height={143}
                  />
                  <div className="flex flex-col p-4">
                    <h3 className="text-base text-textColor mb-4 pb-4 border-b border-solid border-[#0000002d]">
                      {x.fields.title}
                    </h3>
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
