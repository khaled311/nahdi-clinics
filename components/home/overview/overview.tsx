import Image from "next/image";
import Link from "next/link";

export const Overview = () => {
  return (
    <div className="mt-12 mb-4">
      <div className="container">
        <p className="secondary-title">لماذا تختار عيادات النهدي؟</p>
        <h2 className="main-title">رعاية تبدأ من القلب</h2>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex lg:items-center justify-between mb-12 lg:w-auto w-max gap-4">
            <div className="p-8 flex flex-col items-center gap-12 bg-[#EBF3F7] rounded-[20px]">
              <Image
                src="/overview1.svg"
                alt="overview1"
                width={72}
                height={72}
              />
              <h3>رعاية صحية تركز على المريض</h3>
            </div>
            <div className="p-8 flex flex-col items-center gap-12 bg-[#EBF3F7] rounded-[20px]">
              <Image
                src="/overview2.svg"
                alt="overview2"
                width={72}
                height={72}
              />
              <h3>رعاية صحية تركز على المريض</h3>
            </div>
            <div className="p-8 flex flex-col items-center gap-12 bg-[#EBF3F7] rounded-[20px]">
              <Image
                src="/overview3.svg"
                alt="overview3"
                width={72}
                height={72}
              />
              <h3>رعاية صحية تركز على المريض</h3>
            </div>
            <div className="p-8 flex flex-col items-center gap-12 bg-[#EBF3F7] rounded-[20px]">
              <Image
                src="/overview4.svg"
                alt="overview4"
                width={72}
                height={72}
              />
              <h3>رعاية صحية تركز على المريض</h3>
            </div>
          </div>
        </div>
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
  );
};
