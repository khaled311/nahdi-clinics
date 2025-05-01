import { getLocale } from "@/lib/get-locale";
// import { fetchEntries } from "@/lib/contentful";
import Image from "next/image";
// import { aboutDetails } from "@/types";
import { getTranslation } from "@/app/i18n";
import { Link } from "@/components/global/link";

const iamges = [
  "/partners/aramco.webp",
  "/partners/bupa.jpg",
  "/partners/isbd.jpg",
  "/partners/mednet.jpg",
  "/partners/midgulf.jpg",
  "/partners/rajhi.webp",
  "/partners/tawnia.jpg",
];

const page = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");
  const bullets = t("about.goal.bullets", { returnObjects: true }) as string[];
  // const aboutDetails = (
  //   await fetchEntries("aboutDetails", locale)
  // )[0] as unknown as aboutDetails;
  return (
    <div>
      <Image src="/About-us-lg.jpg" alt="about" width={2000} height={1250} />
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <span className="text-base text-mainGreen">
              {t("about.sub_title")}
            </span>
            <h2 className="text-2xl text-textColor my-4">{t("about.title")}</h2>
            <p className="text-base text-textColor">{t("about.brief")}</p>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white max-w-[540px] min-h-40 mt-10 rounded-4xl">
              <div className="flex items-center justify-center lg:col-span-1">
                <Image
                  src="/icons/Purpose.svg"
                  alt="Purpose"
                  width={80}
                  height={100}
                  className="mt-4"
                />
              </div>
              <div className="col-span-2 p-4">
                <h3 className="text-xl text-mainBlue mb-2">هدفنا</h3>
                <p className="text-base text-textColor">
                  نحن موجودون لإضافة نبضات حياة لضيوفنا كل يوم. نسعى لتجاوز كل
                  توقعات ضيوفنا من خلال تقديم تجارب رعاية شخصية متميزة، في كل
                  مكان وفي كل يوم.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 bg-white max-w-[540px] min-h-40 mt-10 rounded-4xl">
              <div className="flex items-center justify-center lg:col-span-1">
                <Image
                  src="/icons/Vision.svg"
                  alt="Vision"
                  width={80}
                  height={100}
                  className="mt-4"
                />
              </div>
              <div className="col-span-2 p-4">
                <h3 className="text-xl text-mainBlue mb-2">رؤيتنا</h3>
                <p className="text-base text-textColor">
                  نسعى لنكون أكثر شركاء الصحة ثقةً ومحبةً لجميع ضيوفنا.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/about-clinics.webp"
            alt="about"
            width={549}
            height={517}
          />
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <Image src="/goals.webp" alt="goals" width={408} height={384} />
            <div className="flex gap-6 flex-col">
              <h3 className="text-[28px] text-textColor mb-2">
                {t("about.goal.title")}
              </h3>
              {bullets.map((item: string) => (
                <div className="flex items-center gap-2" key={item}>
                  <Image
                    src="/true.svg"
                    alt="true"
                    width={26}
                    height={26}
                    quality={100}
                  />
                  <p key={item} className="text-textColor text-base">
                    {item}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-4 mt-8">
                <Link
                  href={"https://healthp.nahdi.sa/patientportal/"}
                  className="bg-mainBlue p-[6px_12px] rounded-[6px] text-base text-white font-semibold transition-all border border-solid border-mainBlue hover:bg-transparent hover:text-mainBlue"
                  target="_blank"
                >
                  احجز موعد الآن
                </Link>
                <Link
                  href={"https://healthp.nahdi.sa/patientportal/"}
                  className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white"
                  target="_blank"
                >
                  ابحث عن طبيب
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container">
          <div className="mb-12">
            <span className="text-base text-mainGreen">نحن نعيش من خلال</span>
            <h2 className="text-2xl text-textColor my-4 mb-8">
              {t("about.purpose")}
            </h2>

            <div className="grid lg:grid-cols-5 grid-cols-1 gap-4">
              <div className="flex flex-col items-center bg-white rounded-2xl pt-6 px-3 pb-4">
                <Image
                  src="/icons/Purpose.svg"
                  alt=""
                  width={92}
                  height={100}
                />
                <p className="text-base text-mainBlue mt-6 font-semibold mb-1">
                  القيادة مع الهدف
                </p>
                <p className="text-base text-textColor text-center">
                  نهدف إلى القيادة والابتكار مع أن نكون صادقين في أفعالنا ونبقى
                  مخلصين لمهمتنا
                </p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-2xl pt-6 px-3 pb-4">
                <Image
                  src="/icons/Integrity.svg"
                  alt=""
                  width={92}
                  height={100}
                />
                <p className="text-base text-mainBlue mt-6 font-semibold mb-1">
                  النزاهة
                </p>
                <p className="text-base text-textColor text-center">
                  نحن صادقون نفعل ما هو صحيح داخل الشركة مع ضيوفنا ومع المجتمع
                  بأكمله
                </p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-2xl pt-6 px-3 pb-4">
                <Image
                  src="/icons/Excellence.svg"
                  alt=""
                  width={92}
                  height={100}
                />
                <p className="text-base text-mainBlue mt-6 font-semibold mb-1">
                  التميز
                </p>
                <p className="text-base text-textColor text-center">
                  نحن نعمل بكفاءة عالية وانضباط عبر سلسلة القيمة بأكملها ونهدف
                  إلى أن نكون الأفضل في فئتها.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-2xl pt-6 px-3 pb-4">
                <Image src="/icons/care.svg" alt="" width={92} height={100} />
                <p className="text-base text-mainBlue mt-6 font-semibold mb-1">
                  الرعاية
                </p>
                <p className="text-base text-textColor text-center">
                  نسعى جاهدين لتقديم أفضل ممارسات الرعاية الصحية لتحقيق رضا كل
                  ضيف كل يوم
                </p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-2xl pt-6 px-3 pb-4">
                <Image
                  src="/icons/Interdependence.svg"
                  alt=""
                  width={92}
                  height={100}
                />
                <p className="text-base text-mainBlue mt-6 font-semibold mb-1">
                  الترابط
                </p>
                <p className="text-base text-textColor text-center">
                  نهدف إلى القيادة والابتكار مع أن نكون صادقين في أفعالنا ونبقى
                  مخلصين لمهمتنا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-4 bg-white">
        <div className="container">
          <span className="text-base text-mainGreen">
            نرحب بكم ويسعدنا لقاؤكم
          </span>
          <h2 className="text-2xl text-textColor my-4 mb-4">
            {t("about.partners")}
          </h2>
          <p className="text-base text-textColor">
            يسرنا أن نرحب بضيوف شركائنا الاستراتيجيين من شركات التأمين.
          </p>

          <div className="flex gap-4 items-center flex-wrap mt-8 lg:justify-start justify-center">
            {iamges?.map((x) => (
              <Image
                src={x}
                alt="partner"
                width={170}
                height={92}
                className="mix-blend-multiply"
                key={x}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
