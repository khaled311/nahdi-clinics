import { LocationCard } from "@/components/care-express/location-card";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { Location, Category, categorizedCareExpressLocations } from "@/types";
import Image from "next/image";

const page = async () => {
  const locale = await getLocale();
  const [rawLocations, locationCategories] = (await Promise.all([
    fetchEntries("expressLocations", locale),
    fetchEntries("location", locale),
  ])) as unknown as [Location[], Category[]];

  const formattedLocations = rawLocations.map((location: Location) => ({
    sys: location.sys,
    fields: {
      title: String(location.fields.title || ""),
      locationDetails: String(location.fields.locationDetails || ""),
      workingHours: {
        workingHours: {
          from: location.fields.workingHours?.workingHours?.from || "",
          to: location.fields.workingHours?.workingHours?.to || "",
        },
      },
      locationImage: {
        fields: {
          title: location.fields.locationImage?.fields?.title || "",
          file: {
            url: location.fields.locationImage?.fields?.file?.url || "",
            details: {
              image: {
                width:
                  location.fields.locationImage?.fields?.file?.details?.image
                    ?.width || 0,
                height:
                  location.fields.locationImage?.fields?.file?.details?.image
                    ?.height || 0,
              },
            },
          },
        },
      },
      contactNumber: Number(location.fields.contactNumber || 0),
      locationUrl: location.fields.locationUrl || "",
      location: {
        sys: {
          id: location.fields.location?.sys?.id || "",
        },
      },
    },
  }));

  const categorizedLocations = locationCategories.map((category: Category) => ({
    label: category.fields.label,
    id: category.sys.id,
    locations: formattedLocations.filter(
      (location) => location.fields.location?.sys.id === category.sys.id
    ),
  }));

  return (
    <div>
      <div className="bg-mainGreen">
        <Image
          src="/health-care-banner.jpg"
          alt="Nahdi Care Express"
          width={2000}
          height={1250}
        />
      </div>
      <div className="container py-12">
        <div>
          <h3 className="text-base text-mainGreen mb-4">لخدمتك بشكل أفضل</h3>
          <p className="text-[28px] mb-4">نتواجد في</p>
        </div>
        {categorizedLocations.map(
          (category: categorizedCareExpressLocations) => (
            <div
              key={category.id}
              className="pb-4 mb-8 border-b border-solid border-[#0000002d]"
            >
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={24}
                  height={24}
                />
                <h3 className="text-base text-textColor">{category.label}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {category.locations.map((location) => (
                  <LocationCard
                    key={location.sys.id}
                    location={location}
                    locationsPageStyle
                  />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default page;
