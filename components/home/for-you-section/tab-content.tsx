import { HealthPackage } from "@/types";
import Image from "next/image";

export const TabContent = ({ tab }: { tab: HealthPackage }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-14">
      {tab?.fields?.package?.map((y) => (
        <div
          key={y?.fields?.image?.fields?.title}
          className="shadow-[0_0_10px_0_rgba(0,_0,_0,_0.1)]"
        >
          <Image
            src={"https:" + y?.fields?.image?.fields?.file?.url}
            alt={y?.fields?.image?.fields?.title}
            width={300}
            height={150}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-base text-textColor mb-1">
              {y?.fields?.title}
            </h3>
            <p className="text-mainBlue">SAR{y?.fields?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
