import { ListFilter } from "lucide-react";

const FilterClientData = ({ data }) => {
  return (
    <div className="">
      <button className="px-4 py-2 border border-gray-300 cursor-pointer flex gap-1.5 items-center">
        <ListFilter size={19} />
        filter data
      </button>
      {data}
    </div>
  );
};

export default FilterClientData;
