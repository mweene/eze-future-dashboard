import { X, Download, Share } from "lucide-react";

const ClientDetailsModal = ({ client }) => {
  return (
    <div
      key={client.id}
      className="absolute bg-white border border-gray-300 top-0 w-96 m-4 shadow shadow-gray-200"
    >
      <section className="flex gap-4 place-content-between border-b border-gray-200 px-4 pt-3 pb-2 bg-gray-50">
        <button className="flex gap-x-1.5 items-center ">
          <X size={16} /> Client details
        </button>
        <button className="flex gap-1.5 items-center border border-gray-300 bg-white py-0.5 px-2">
          <Download size={16} /> Download data
        </button>
      </section>

      <section className="m-4 p-4 border border-gray-200 grid gap-0.5">
        {Object.entries(client).map(([key, value]) => (
          <p key={key} className="flex gap-4 place-content-between">
            <span className="capitalize text-gray-600">{key}</span>
            <span>{value}</span>
          </p>
        ))}
      </section>

      <section className="flex gap-2 place-content-end p-2 border-t border-gray-200 [&>button]:p-0.5 [&>button]:border bg-gray-50">
        <button className="py-0.5 px-4 flex gap-1 items-center bg-white border-gray-300">
          edit
        </button>
        <button className="py-0.5 px-4 flex gap-1 items-center bg-white border border-gray-300">
          delete
        </button>
        <button className="py-0.5 px-4 flex gap-1 items-center bg-white border-gray-300">
          <Share size={16} />
          share
        </button>
      </section>
    </div>
  );
};

export default ClientDetailsModal;
