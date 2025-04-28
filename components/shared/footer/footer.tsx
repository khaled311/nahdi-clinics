import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="pt-12 pb-4">
      <div className="container">
        <div className="grid lg:grid-cols-4 grid-cols-1 [&>div]:px-4">
          <div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={60}
              quality={100}
            />
            <p className="my-4 text-[#616161]">
              رعاية فائقة من قلبنا إلى قلبك، هذه هي رؤيتنا لتلبية احتياجاتك
              الشخصية.
            </p>
            <Link
              className="text-linkColor underline"
              href={
                "https://nahdicareclinics.sa/public/templates/departments.php#tab1-tab"
              }
            >
              لمزيد من المعلومات
            </Link>
          </div>
          <div className="border-s border-solid border-[#dee2e6]">
            <h3 className="text-[#2356A5] mb-4 text-xl">القسم</h3>
            <ul>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab1-tab">
                  طب الأطفال
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab3-tab">
                  قسم الأشعة
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab5-tab">
                  أمراض النساء
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab9-tab">
                  الغدد الصماء
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab2-tab">
                  طب العيون
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar">
                  عرض الكل
                </a>
              </li>
            </ul>
          </div>
          <div className="border-s border-solid border-[#dee2e6]">
            <h3 className="text-[#2356A5] mb-4 text-xl">روابط سريعة</h3>
            <ul>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab1-tab">
                  الاطباء
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab3-tab">
                  باقات الرعاية الصحية
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab5-tab">
                  الرعاية الصحية المنزلية
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab9-tab">
                  الأقسام
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar&amp;#tab2-tab">
                  المواقع
                </a>
              </li>
              <li className="pt-1 text-base text-[#616161] mt-1">
                <a href="https://nahdicareclinics.sa/public/templates/departments.php?lang=ar">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          <div className="border-s border-solid border-[#dee2e6]">
            <h3 className="text-[#2356A5] mb-4 text-xl">تواصل معنا</h3>
            <div className="flex flex-col items-start gap-2">
              <Link href={"tel:920024673"} className="flex items-center gap-2">
                <span className="text-base text-[#616161] font-semibold">
                  9200 24 673
                </span>
                <PhoneIcon className="w-4 h-4" />
              </Link>
              <Link
                href={"mailto:customercare@nahdi.sa"}
                className="flex items-center gap-2"
              >
                <span className="text-base text-[#616161] font-semibold">
                  customercare@nahdi.sa
                </span>
                <EmailIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center gap-2 my-5">
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <FacebookIcon className="fill-mainBlue" />
              </Link>
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <InstagramIcon className="fill-mainBlue" />
              </Link>
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <TwitterIcon className="fill-mainBlue" />
              </Link>
              <Link
                href={"#"}
                className="rounded-full w-10 h-10 border border-solid border-mainBlue flex items-center justify-center"
              >
                <YoutubeIcon className="fill-mainBlue" />
              </Link>
            </div>
            <p className="text-[#212529Bf]">
              جميع الحقوق محفوظة لشركة النهدي الطبية 2024 ©
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
