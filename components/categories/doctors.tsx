import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { Doctor } from "@/types";
import { getTranslation } from "@/app/i18n";
import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "../global/link";

const Doctors = async () => {
  const locale = await getLocale();
  const doctors = (await fetchEntries(
    "doctors",
    locale
  )) as unknown as Doctor[];

  const { t } = await getTranslation(locale, "categories");

  return (
    <div className="bg-white py-16">
      <div className="container">
        <div className="mb-4 flex flex-col gap-4">
          <h2 className="text-[#1c958c] text-base">{t("sub_title")}</h2>
          <h2 className="text-[28px] text-textColor">{t("doctors")}</h2>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          {doctors?.map((doctor) => (
            <div
              key={doctor.sys.id}
              className="shadow-[1px_1px_3px_3px_#f4f6f8,_-1px_-1px_3px_3px_#f4f6f8] rounded-[6px]"
            >
              {doctor.fields.image && (
                <div className="">
                  <Image
                    src={`https:${doctor.fields.image.fields.file.url}`}
                    alt={doctor.fields.name}
                    width={
                      doctor?.fields?.image?.fields?.file?.details?.image?.width
                    }
                    height={
                      doctor?.fields?.image?.fields?.file?.details?.image
                        ?.height
                    }
                    className="m-auto"
                  />
                </div>
              )}
              <div className="p-4 text-center">
                <h3 className="text-xl text-textColor mb-2">
                  {doctor.fields.name}
                </h3>
                <p className="text-[#212529bf] text-base">
                  {doctor.fields.job}
                </p>
                <div className="flex flex-col gap-4 mt-4">
                  <Link href={"https://healthp.nahdi.sa/"}>
                    <Button className="w-full">{t("book")}</Button>
                  </Link>
                  <Link href={"https://healthp.nahdi.sa/"}>
                    <Button variant="outline" className="w-full">
                      {t("online_consultation")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
