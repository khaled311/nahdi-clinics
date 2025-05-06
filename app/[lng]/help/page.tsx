import { getTranslation } from "@/app/i18n";
import { Link } from "@/components/global/link";
import { Button } from "@/components/ui/button";
import { getLocale } from "@/lib/get-locale";
import { cn } from "@/lib/utils";
import Image from "next/image";

const page = async () => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "common");

  console.log("locale", locale);

  return (
    <div>
      <Image src={"/Contact-us-lg.jpg"} width={2000} height={262} alt="" />
      <div className="pt-12">
        <div className="container mb-12">
          <span className="text-mainGreen text-base mb-4 block">
            {t("help.title")}
          </span>
          <h2 className="text-2xl mb-8 text-textColor">{t("help.subtitle")}</h2>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl flex items-center flex-col">
              <Image
                src="/icons/help/clinic.svg"
                alt=""
                width={88}
                height={82}
              />
              <h2 className="text-mainBlue mt-4 mb-2">قم بزيارة عيادتنا</h2>
              <p className="text-mainBlue">أو استشر أطبائنا اونلاين</p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center flex-col">
              <Image src="/icons/help/call.svg" alt="" width={84} height={84} />
              <h2 className="text-mainBlue mt-4 mb-2">تواصل معنا</h2>
              <Link href="tel:920024673" className="text-mainBlue">
                9200 24 673
              </Link>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center flex-col">
              <Image src="/icons/help/mail.svg" alt="" width={84} height={64} />
              <h2 className="text-mainBlue mt-4 mb-2">استفسارات عامة</h2>
              <Link
                href="mailto:customercare@nahdi.sa"
                className="text-mainBlue"
              >
                customercare@nahdi.sa
              </Link>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center flex-col">
              <Image
                src="/icons/help/whatsapp.svg"
                alt=""
                width={80}
                height={80}
              />
              <h2 className="text-mainBlue mt-4 mb-2">WhatsApp</h2>
              <p className="text-mainBlue">9200 24 673</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-12">
          <div className="container">
            <span className="text-mainGreen text-base mb-4 block">
              {t("help.send_message")}
            </span>
            <h2 className="text-2xl mb-8 text-textColor">{t("help.title")}</h2>
            <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
              <form action="">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder={t("help.form.name")}
                    className="border border-solid border-[#dee2e6] py-4 px-3 rounded-[6px] invalid:border-red-500 outline-none shadow-none"
                  />
                  <input
                    type="email"
                    placeholder={t("help.form.email")}
                    className="border border-solid border-[#dee2e6] py-4 px-3 rounded-[6px] invalid:border-red-500 outline-none shadow-none"
                  />
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    placeholder={t("help.form.phone")}
                    className="border border-solid border-[#dee2e6] py-4 px-3 rounded-[6px] invalid:border-red-500 outline-none shadow-none"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  />
                  <textarea
                    placeholder={t("help.form.message")}
                    className="border border-solid border-[#dee2e6] py-4 px-3 rounded-[6px] resize-none invalid:border-red-500 outline-none shadow-none"
                  ></textarea>
                  <Button
                    type="submit"
                    className="bg-mainBlue text-white py-3 px-3 rounded-[6px] cursor-pointer !h-auto"
                  >
                    {t("help.form.send")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
