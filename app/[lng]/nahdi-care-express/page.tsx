import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { cn } from "@/lib/utils";
import { HealthPackage } from "@/types";

const Page = async () => {
  const locale = await getLocale();
  const carePackages = (await fetchEntries(
    "healthPackages",
    locale
  )) as unknown as HealthPackage[];
  console.log("carePackages", carePackages);
  return (
    <div>
      <div className="container">
        {/* section header */}
        section header
        {/* section header */}
      </div>
      <div className="pb-12 bg-white">
        <div className="container">
          {carePackages.map((x) => (
            <div
              key={x.sys.id}
              className={cn(
                "pt-12 pb-8 border-t border-t-solid border-t-gray-300",
                {
                  "border-t-0": x.sys.id === carePackages[0].sys.id,
                }
              )}
            >
              <h2 className="text-xl font-bold mb-4 text-textColor">
                {x.fields.title}
              </h2>
              <p className="mb-10 text-textColor">{x.fields.brief}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {x.fields.package.map((y) => (
                  <div
                    key={y.fields.image.fields.title}
                    className="shadow-[0_0_10px_0_rgba(0,_0,_0,_0.1)]"
                  >
                    <img
                      src={y.fields.image.fields.file.url}
                      alt={y.fields.image.fields.title}
                    />
                    <div className="p-4">
                      <h3 className="text-base text-textColor mb-1">
                        {y.fields.title}
                      </h3>
                      <p className="text-mainBlue">SAR{y.fields.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
