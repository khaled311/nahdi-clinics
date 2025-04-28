import Image from "next/image";
import Link from "next/link";

export const FooterTop = () => {
  return (
    <div className="bg-[url('/footer-top-bg.jpg')] bg-cover bg-no-repeat pt-12">
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h2 className="text-[32px] text-white mb-4">
              تحميل تطبيق عيادات نهدي كير
            </h2>
            <p className="text-white mb-4">
              احجز استشارة طبية اونلاين واستفد من خدماتنا الصحية المتعددة
            </p>
            <div className="flex gap-4">
              <Link href="https://apps.apple.com/us/app/nahdicare-clinics/id1462753220">
                <Image
                  src="/download-ios.svg"
                  alt="download-ios"
                  width={198}
                  height={78}
                  quality={100}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.nahdi.nahdipx&hl=en&gl=US">
                <Image
                  src="/download-android.webp"
                  alt="download-android"
                  width={198}
                  height={78}
                  quality={100}
                />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">استشارة فورية مع طبيب</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">كير اكسبريس</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">
                  خدمات موافقات التأمين الطبية
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">
                  عرض السجلات الطبية ونتائج التحاليل و الأدوية الإلكترونية
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p className="text-white text-xl">
                  الكثير من الأسباب للإستمتاع
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/mobile.png"
              alt="mobile"
              width={416}
              height={395}
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
