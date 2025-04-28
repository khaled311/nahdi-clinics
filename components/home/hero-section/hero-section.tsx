import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[url('/banner-ar.jpg')] bg-cover bg-center p-[64px_0_48px]">
      <div className="container">
        <h1 className="lg:text-4xl text-[27px] font-semibold text-[#212529] max-w-[450px] leading-[60x]">
          تواصل مع طبيبك اونلاين من راحة بيتك
        </h1>
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
        <div className="items-center gap-4 mt-6 hidden lg:flex">
          <p className="text-base font-semibold text-[#212529]">متوفر في</p>
          <div className="flex items-center gap-2">
            <Link
              href={
                "https://apps.apple.com/us/app/nahdicare-clinics/id1462753220"
              }
              target="_blank"
            >
              <Image
                src="/icons/ios.svg"
                alt="ios icon"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.nahdi.nahdipx&hl=en&gl=US"
              }
              target="_blank"
            >
              <Image
                src="/icons/android.svg"
                alt="android icon"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// 99d4a241-3f73-40b0-be3d-94b6e67491ac
