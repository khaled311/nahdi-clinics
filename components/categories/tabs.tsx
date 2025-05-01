import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchEntries } from "@/lib/contentful";
import { Category } from "@/types";
import { TabContent } from "./tab-content";
import { getLocale } from "@/lib/get-locale";

const TabsComponent = async () => {
  const locale = await getLocale();
  const categories = (await fetchEntries(
    "categories",
    locale
  )) as unknown as Category[];

  return (
    <Tabs
      defaultValue="tab1"
      className="w-full"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="border-b border-solid border-[#dee2e6] py-2 flex items-center justify-center bg-white">
        <div className="container">
          <div className="overflow-x-scroll scrollbar-hidden">
            <TabsList className="gap-1 [&>button]:text-base w-max [&>button]:data-[state=active]:bg-transparent [&>button]:data-[state=active]:text-mainBlue [&>button]:data-[state=active]:shadow-none bg-transparent">
              {categories?.reverse()?.map((tab, index) => (
                <TabsTrigger key={tab.sys.id} value={`tab${index + 1}`}>
                  <span>{tab?.fields?.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </div>

      <div className="container">
        {categories?.map((tab, index) => (
          <TabsContent key={tab.sys.id} value={`tab${index + 1}`}>
            <TabContent tab={tab} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};
export default TabsComponent;
