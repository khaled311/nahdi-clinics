import React from "react";
import Image from "next/image";
import { Category } from "@/types";
import { Button } from "@/components/ui/button";
import { getTranslation } from "@/app/i18n";
import { getLocale } from "@/lib/get-locale";

export const TabContent = async ({ tab }: { tab: Category }) => {
  const locale = await getLocale();
  const { t } = await getTranslation(locale, "categories");

  return (
    <div className="my-12">
      <div className="mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div className="mb-4 flex flex-col gap-4">
            <h2 className="text-[#1c958c] text-base">{t("title")}</h2>
            <h2 className="text-[28px] text-textColor">{tab?.fields?.title}</h2>
          </div>
          <p className="text-mainBlue text-2xl leading-9">
            {tab?.fields?.brief}
          </p>
          <Image
            src={`https:${tab?.fields?.image?.fields?.file?.url!}`}
            alt="categories"
            width={tab?.fields?.image?.fields?.file?.details?.image?.width!}
            height={tab?.fields?.image?.fields?.file?.details?.image?.height!}
            className="lg:hidden block mt-4"
          />
          <div className="flex flex-col gap-6 mt-6">
            {tab?.fields?.list?.map((item: string) => (
              <div className="flex items-center gap-2" key={item}>
                <Image
                  src="/true.svg"
                  alt="true"
                  width={26}
                  height={26}
                  quality={100}
                />
                <p key={item} className="text-textColor text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-12">{t("book")}</Button>
        </div>
        <Image
          src={`https:${tab?.fields?.image?.fields?.file?.url!}`}
          alt="categories"
          width={tab?.fields?.image?.fields?.file?.details?.image?.width!}
          height={tab?.fields?.image?.fields?.file?.details?.image?.height!}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};
