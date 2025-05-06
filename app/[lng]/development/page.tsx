import { Link } from "@/components/global/link";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import Image from "next/image";

const page = async () => {
  const locale = await getLocale();
  const developmentImage = (await fetchEntries(
    "development",
    locale
  )) as unknown as {
    fields: {
      image: {
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
    };
  };

  return (
    <div className="container py-12">
      <p className="text-xl text-textColor my-6">
        في عيادات نهدي كير، نولي اهتمامًا كبيرًا للتعليم الطبي المستمر لضمان
        تحقيق أفضل النتائج السريرية لضيوف نهدي والمجتمع بشكل عام.
      </p>
      <Image
        src={"https:" + developmentImage.fields.image?.fields?.file?.url}
        alt={developmentImage.fields.image?.fields?.title}
        width={
          developmentImage.fields.image?.fields?.file?.details?.image?.width
        }
        height={
          developmentImage.fields.image?.fields?.file?.details?.image?.height
        }
      />
      <p className="text-xl text-textColor my-6">
        إذا كنت ترغب في المشاركة، يمكن للحضور التواصل مع فريق التعليم والتطوير
        من خلال: الهاتف:{" "}
        <Link href="tel:9200024673" className="text-mainBlue font-semibold">
          9200 24 673
        </Link>{" "}
        تحويلة 3989 البريد الإلكتروني:{" "}
        <Link
          href="mailto:Academy@nahdi.sa"
          className="text-mainBlue font-semibold"
        >
          Academy@nahdi.sa
        </Link>
      </p>
    </div>
  );
};
export default page;
