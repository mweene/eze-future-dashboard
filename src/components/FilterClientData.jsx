import { useState } from "react";
import AdvancedFilters from "./AdvancedFilters";
import { SlidersHorizontal } from "lucide-react";

const FilterClientData = ({ data }) => {
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);
  const toggleOpen = () => setIsAdvancedFiltersOpen((prev) => !prev);
  return (
    <div className="">
      <button
        className="px-4 py-2 border border-gray-600 cursor-pointer flex gap-1.5 items-center"
        onClick={toggleOpen}
      >
        <SlidersHorizontal size={16} />
        Advanced Filters
      </button>
      {isAdvancedFiltersOpen && <AdvancedFilters />}
      {data}
    </div>
  );
};

export default FilterClientData;
