import Image from "next/image";
import Link from "next/link";

export const Categories = () => {
  return (
    <div className="pt-12 lg:pb-4 pb-12 bg-white">
      <div className="container">
        <p className="secondary-title">نحن في خدمتك</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="main-title">أقسام النهدي</h2>
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white hidden lg:block"
            target="_blank"
          >
            جميع الاقسام
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-4 lg:gap-4 mb-12 lg:w-auto w-max lg:[&>div]:w-auto [&>div]:w-[312px] [&>div]:px-3 -mx-3">
            <div className="gap-12 rounded-[20px]">
              <Image
                src="/cat1.png"
                alt="category 1"
                width={288}
                height={204}
              />
              <div className="p-4">
                <h3 className="text-xl text-textColor  font-medium mb-2">
                  طب الاطفال
                </h3>
                <p className="text-leadingColor mb-4 text-sm">
                  منذ ولادتهم، نلتزم في عيادتنا للأطفال بتقديم أفضل رعاية صحية
                  لأطفالك.
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
            </div>
            <div className="gap-12 rounded-[20px]">
              <Image
                src="/cat2.png"
                alt="category 2"
                width={288}
                height={204}
              />
              <div className="p-4">
                <h3 className="text-xl text-textColor  font-medium mb-2">
                  طب العيون
                </h3>
                <p className="text-leadingColor mb-4 text-sm">
                  يقدم قسم طب العيون لدينا خدمات رفيعة المستوى في مجال الرعاية
                  الوقائية والتشخيص والعلاج.
                </p>
                <Link
                  className="text-linkColor underline"
                  href={
                    "https://nahdicareclinics.sa/public/templates/departments.php#tab2-tab"
                  }
                >
                  لمزيد من المعلومات
                </Link>
              </div>
            </div>
            <div className="gap-12 rounded-[20px]">
              <Image
                src="/cat3.png"
                alt="category 3"
                width={288}
                height={204}
              />
              <div className="p-4">
                <h3 className="text-xl text-textColor  font-medium mb-2">
                  قسم الأشعة
                </h3>
                <p className="text-leadingColor mb-4 text-sm">
                  يقُدم قسمُ الأشعة لدينا مجموعةً واسعةً من الخدمات في خمسةِ
                  تخصصات فرعية: الأشعةُ العَامّة، وأَشعةُ الأسنان، والكثيرُ
                  غيرُها.
                </p>
                <Link
                  className="text-linkColor underline"
                  href={
                    "https://nahdicareclinics.sa/public/templates/departments.php#tab3-tab"
                  }
                >
                  لمزيد من المعلومات
                </Link>
              </div>
            </div>
            <div className="gap-12 rounded-[20px]">
              <Image src="/cat4.png" alt="cat4" width={288} height={204} />
              <div className="p-4">
                <h3 className="text-xl text-textColor  font-medium mb-2">
                  الطوارئ
                </h3>
                <p className="text-leadingColor mb-4 text-sm">
                  يعمل قسم الطوارئ على مدار الساعة لضمان تلبية جميع الاحتياجات
                  الطبية الحرجة لضيوفنا والتعامل معها بكل رعاية.
                </p>
                <Link
                  className="text-linkColor underline"
                  href={
                    "https://nahdicareclinics.sa/public/templates/departments.php#tab4-tab"
                  }
                >
                  لمزيد من المعلومات
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center gap-4 mt-8 hidden lg:flex">
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
        <Link
          href={"/categories"}
          className="block lg:hidden border border-solid border-mainBlue py-2 px-4 text-center rounded-sm text-xl text-mainBlue"
        >
          جميع الاقسام
        </Link>
      </div>
    </div>
  );
};
