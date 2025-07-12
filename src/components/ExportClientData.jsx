import { Download } from "lucide-react";

const ExportClientData = ({ data }) => {
  return (
    <button className="px-4 py-1 bg-gray-300 text-gray-800 cursor-pointer flex gap-1.5 place-content-center place-items-center">
      <Download size={19} />
      Export{data}
    </button>
  );
};

export default ExportClientData;
