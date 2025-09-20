import { useEffect } from "react";
import { Phone, Mail, X } from "lucide-react";

export default function ViewClientDetailsModal({
  clientDetails,
  isOpen,
  onClose,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  return (
    <div className="fixed inset-0 bg-neutral-700/60 grid z-20">
      <div className="bg-white m-4 w-[37rem] rounded-2xl grid justify-self-end border border-neutral-300 overflow-auto">
        <div className="fixed bg-white w-[36.9999rem] rounded-t-2xl">
          <div className="flex place-items-center place-content-between p-4 border-b border-neutral-300">
            <h3 className="capitalize text-neutral-500">full client details</h3>
            <button
              className="flex place-items-center p-1 border border-neutral-200 bg-neutral-100 rounded-md"
              onClick={() => onClose((prev) => !prev)}
            >
              <X size={17} />
            </button>
          </div>
        </div>

        <div className="mt-16">
          {/*client details*/}
          <section className="m-4 p-4 rounded-2xl bg-neutral-900 text-white">
            <h3 className="text-xl mb-2">client details</h3>

            <div className="grid gap-1">
              {Object.keys(clientDetails.client).map((key) => (
                <span key={key} className="flex place-content-between">
                  <span className="text-neutral-300">{key}</span>
                  {clientDetails.client[key]}
                </span>
              ))}
            </div>
          </section>

          {/*plot details*/}
          <section className="m-4 p-4 rounded-2xl border-neutral-200 border">
            <h3 className="text-xl mb-2">plot details</h3>

            <div className="grid gap-1">
              {Object.keys(clientDetails.plot).map((key) => {
                if (
                  key === "id" ||
                  key === "created_at" ||
                  key === "updated_at" ||
                  key === "client_id"
                )
                  return null;

                if (key === "site_plan_link")
                  return (
                    <span key={key} className="flex place-content-between">
                      <span>{key}</span>
                      <a
                        href={clientDetails.plot[key]}
                        className="text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        view site plan
                      </a>
                    </span>
                  );

                return (
                  <span key={key} className="flex place-content-between">
                    <span className="">{key}</span>
                    {clientDetails.plot[key]}
                  </span>
                );
              })}
            </div>
          </section>

          {/*sales details*/}
          <section className="m-4 p-4 rounded-2xl border-neutral-200 border">
            <h3 className="text-xl mb-2">sales details</h3>

            <div className="grid gap-1">
              {Object.keys(clientDetails.sales).map((key) => {
                if (
                  key === "id" ||
                  key === "created_at" ||
                  key === "updated_at" ||
                  key === "client_id"
                )
                  return null;
                return (
                  <span key={key} className="flex place-content-between">
                    <span className="">{key}</span>K{clientDetails.sales[key]}
                  </span>
                );
              })}
            </div>
          </section>

          {/*client documents*/}
          <section className="m-4 p-4 rounded-2xl border-neutral-200 border">
            <h3 className="text-xl mb-2">client's documents</h3>

            <div className="grid gap-1">
              {Object.keys(clientDetails.documents).map((key) => {
                if (
                  key === "id" ||
                  key === "created_at" ||
                  key === "updated_at" ||
                  key === "client_id"
                )
                  return null;

                return (
                  <span key={key} className="flex place-content-between">
                    <span className="">{key}</span>
                    <a
                      href={clientDetails.documents[key]}
                      className="text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      download {key}
                    </a>
                  </span>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
