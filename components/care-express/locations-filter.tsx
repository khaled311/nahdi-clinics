"use client";

export const LocationsFilter = ({
  setFilter,
  locationsFilter,
}: {
  setFilter: (filter: string) => void;
  locationsFilter: { fields: { label: string }; sys: { id: string } }[];
}) => {
  return (
    <select
      className="p-2 border border-solid border-gray-300 rounded w-100 w-md-25 mx-4"
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">Select City</option>
      {locationsFilter.map((x) => (
        <option key={x.sys.id} value={x.sys.id}>
          {x.fields.label}
        </option>
      ))}
    </select>
  );
};
