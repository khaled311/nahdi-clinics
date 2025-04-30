import Image from "next/image";
import { LanguageSwitcher } from "@/components/shared/language-switcher/language-switcher";
import { Link } from "@/components/global/link";

export const UpperBar = () => {
  return (
    <div className="bg-mainGreen p-[8px_0_16px]">
      <div className="container">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Link href={"tel:920024673"} className="flex items-center gap-2">
              <span className="lg:text-base text-[13px] font-semibold">
                9200 24 673
              </span>
              <Image
                src={"/icons/phone.svg"}
                alt="phone"
                width={16}
                height={16}
                className="brightness-0 invert-100"
              />
            </Link>
            <Link
              href={"mailto:customercare@nahdi.sa"}
              className="flex items-center gap-2"
            >
              <span className="lg:text-base text-[13px] font-semibold">
                customercare@nahdi.sa
              </span>
              <Image
                src={"/icons/email.svg"}
                alt="clock"
                width={16}
                height={16}
                className="brightness-0 invert-100"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="items-center gap-2 hidden lg:flex">
              <Link
                href={"https://healthp.nahdi.sa/"}
                className="text-base font-semibold"
              >
                حجز موعد
              </Link>
              <Link href={"/about-us"} className="text-base font-semibold">
                نبذة عننا
              </Link>
              <Link
                href={"https://healthp.nahdi.sa/"}
                className="text-base font-semibold"
              >
                مساعدة
              </Link>
            </div>
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
