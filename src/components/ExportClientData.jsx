import { Download } from "lucide-react";

const ExportClientData = ({ data }) => {
  return (
    <button className="px-4 py-1 border border-gray-600 cursor-pointer flex gap-1.5 place-content-center place-items-center">
      <Download size={16} />
      Download Data{data}
    </button>
  );
};

export default ExportClientData;
