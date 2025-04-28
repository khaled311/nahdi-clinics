import Doctors from "@/components/categories/doctors";
import TabsComponent from "@/components/categories/tabs";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image
        src="/categories_page.jpg"
        alt="categories"
        width={2000}
        height={1250}
      />
      <TabsComponent />
      <Doctors />
    </div>
  );
};
export default page;
