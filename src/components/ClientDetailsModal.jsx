import { X, Download, Share2, UserRoundX, UserRoundPen } from "lucide-react";

const ClientDetailsModal = ({ isOpen, handleIsOpen, client }) => {
  return (
    <>
      {isOpen && (
        <div
          key={client.id}
          className="absolute bg-white border border-gray-300 top-0 right-0 m-4 mt-2 mr-32 w-[35rem] shadow shadow-gray-300 z-10"
        >
          <section className="flex gap-4 place-content-between border-b border-gray-200 px-4 pt-3 pb-2 bg-gray-50">
            <button className="flex gap-1.5 items-center border border-gray-300 bg-white py-0.5 px-2">
              <Download size={16} /> Download data
            </button>

            <button
              className="flex gap-x-1 items-center"
              onClick={handleIsOpen}
            >
              Client details
              <X size={16} />
            </button>
          </section>

          <section className="m-4 p-4 border border-gray-200 grid gap-0.5 h-64 overflow-scroll">
            <>
              {Object.entries(client).map(([key, value]) => {
                <h3>
                  {key}
                  {value}
                </h3>;
                if (value !== null && typeof value === "object")
                  return Object.entries(value).map(([k, v]) => (
                    <p key={k} className="flex place-content-between">
                      <span className="">{k}:</span>
                      <span>{v}</span>
                    </p>
                  ));
                return (
                  <p key={key} className="flex place-content-between">
                    <span>{key}:</span>
                    <span>{value}</span>
                  </p>
                );
              })}
            </>
          </section>

          <section className="flex gap-2 place-content-end p-2 border-t border-gray-200 [&>button]:p-0.5 [&>button]:border bg-gray-50">
            <button className="py-0.5 px-4 flex gap-1 items-center bg-white border-gray-300">
              <UserRoundPen size={16} />
              Edit
            </button>
            <button className="py-0.5 px-4 flex gap-1 items-center bg-white border border-gray-300">
              <UserRoundX size={16} />
              Delete
            </button>
            <button className="py-0.5 px-4 flex gap-1 items-center bg-white border-gray-300">
              <Share2 size={16} />
              Share
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default ClientDetailsModal;
