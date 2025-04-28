import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const productsMap = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-14">
      <div className="gap-12 rounded-[20px]">
        <Image
          src="/foru1.jpg"
          alt="foru 1"
          width={288}
          height={144}
          className="w-full object-cover"
          quality={100}
        />
        <div className="p-4 bg-white">
          <h3 className="text-xl text-textColor font-medium">طب الاطفال</h3>
          <p className="my-4">18000 SAR</p>
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
          src="/foru2.jpg"
          alt="foru 2"
          width={288}
          height={144}
          className="w-full object-cover"
          quality={100}
        />
        <div className="p-4 bg-white">
          <h3 className="text-xl text-textColor font-medium">طب العيون</h3>
          <p className="my-4">18000 SAR</p>
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
          src="/foru3.jpg"
          alt="foru 3"
          width={288}
          height={144}
          className="w-full object-cover"
          quality={100}
        />
        <div className="p-4 bg-white">
          <h3 className="text-xl text-textColor  font-medium">قسم الأشعة</h3>
          <p className="my-4">18000 SAR</p>
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
          src="/foru4.jpg"
          alt="foru 4"
          width={288}
          height={144}
          className="w-full object-cover"
          quality={100}
        />
        <div className="p-4 bg-white">
          <h3 className="text-xl text-textColor font-medium">الطوارئ</h3>
          <p className="my-4">18000 SAR</p>
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
  );
};

export const ForYouSection = () => {
  return (
    <div className="pt-12 pb-4">
      <div className="container">
        <p className="font-semibold text-mainGreen text-xl mb-4">مخصصة لك</p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-4xl font-light mb-12">باقات الرعاية الصحية</h2>
          <Link
            href={"https://healthp.nahdi.sa/patientportal/"}
            className="text-base font-semibold p-[6px_12px] rounded-[6px] transition-all text-mainBlue border border-solid border-mainBlue hover:bg-mainBlue hover:text-white"
            target="_blank"
          >
            عرض جميع الباقات
          </Link>
        </div>
        <Tabs defaultValue="tab1" className="w-full" dir="rtl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tab1">
              <Image
                src={"/icons/tooth.svg"}
                alt="tooth"
                width={24}
                height={24}
              />
              <span>الأسنان</span>
            </TabsTrigger>
            <TabsTrigger value="tab2">
              <Image
                src={"/icons/Beauty.svg"}
                alt="Beauty"
                width={24}
                height={24}
              />
              <span>الجمال</span>
            </TabsTrigger>
            <TabsTrigger value="tab3">
              <Image
                src={"/icons/general-health.svg"}
                alt="general-health"
                width={24}
                height={24}
              />
              <span>الصحة العامة</span>
            </TabsTrigger>
            <TabsTrigger value="tab4">
              <Image
                src={"/icons/mom-baby.svg"}
                alt="mom-baby"
                width={24}
                height={24}
              />
              <span>الام والابن</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">{productsMap()}</TabsContent>
          <TabsContent value="tab2">{productsMap()}</TabsContent>
          <TabsContent value="tab3">{productsMap()}</TabsContent>
          <TabsContent value="tab4">{productsMap()}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
