import Link from "next/link";
import Image from "next/image";

export const AlaBabk = () => {
  return (
    <div className="pt-12 pb-4 bg-white">
      <div className="container">
        <p className="secondary-title">صيدلية النهدي على بابك</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="main-title">صيدلية النهدي على بابك</h2>
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white"
            target="_blank"
          >
            جميع الاقسام
          </Link>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="lg:grid grid-cols-4 gap-4 flex mb-12 w-max lg:w-auto lg:[&>div]:w-auto [&>div]:w-[312px]">
            <div className="gap-12 rounded-[20px]">
              <Image
                src="/ala1.jpg"
                alt="category 1"
                width={288}
                height={204}
                quality={100}
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
                src="/ala2.jpg"
                alt="category 2"
                width={288}
                height={204}
                quality={100}
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
                src="/ala3.jpg"
                alt="category 3"
                width={288}
                height={204}
                quality={100}
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
              <Image
                src="/ala4.jpg"
                alt="cat4"
                width={288}
                height={204}
                quality={100}
              />
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
      </div>
    </div>
  );
};
