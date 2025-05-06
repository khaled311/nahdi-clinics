import { LocationsSections } from "@/components/care-express/locations-sections";
import { fetchEntries } from "@/lib/contentful";
import { getLocale } from "@/lib/get-locale";
import { expressPackage } from "@/types";

const Page = async () => {
  const locale = await getLocale();
  const nahdiCareExpress = (await fetchEntries(
    "nahdiCareExpress",
    locale
  )) as unknown as expressPackage;
  const locationsFilter = (await fetchEntries(
    "location",
    locale
  )) as unknown as {
    fields: {
      label: string;
    };
    sys: {
      id: string;
    };
  }[];
  const categorizedCareExpressLocations = locationsFilter.map((x) => {
    return {
      label: x.fields.label,
      id: x.sys.id,
      locations: nahdiCareExpress.fields.locationsSection.filter(
        (y) => y.fields.location?.sys.id === x.sys.id
      ),
    };
  });

  return (
    <LocationsSections
      locationsFilter={locationsFilter}
      categorizedCareExpressLocations={categorizedCareExpressLocations}
      nahdiCareExpress={nahdiCareExpress}
    />
  );
};
export default Page;
