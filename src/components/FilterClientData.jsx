import { SlidersHorizontal } from "lucide-react";

const FilterClientData = ({ data }) => {
  return (
    <div className="shadow">
      <button className="px-4 py-2 border border-gray-600 cursor-pointer flex gap-1.5 items-center">
        <SlidersHorizontal size={16} />
        Filter
      </button>
      {data}
    </div>
  );
};

export default FilterClientData;
