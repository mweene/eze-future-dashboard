import { useState } from "react";
import {
  ClientDetailsForm,
  PlotDetailsForm,
  SalesDetailsForm,
  WitnessDetailsForm,
  DocumentsDetailsForm,
} from "./Form";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function AddNewClient({ onOpenAddClient, addClientHandler }) {
  const [steps, setSteps] = useState(0);
  const [formData, setFormData] = useState({
    id: crypto.randomUUID().slice(0, 2),
    name: "",
    nrc: "",
    phone: "",
    email: "",
    address: "",
    plots: {
      plot_number: "",
      plot_size: "",
      location: "",
      site_plan_link: "",
    },
    sales: {
      price: "",
      amount_paid: "",
      balance: "",
    },
    witnes: {
      name: "",
      nrc: "",
      phone: "",
      address: "",
      relationship: "",
    },
    documents: {
      nrc_link: "",
      contract: "",
      other_docs: "",
    },
  });

  const getData = (type) => {
    const client = {};
    if (type === "client") {
      Object.keys(formData).forEach((key) => {
        if (typeof formData[key] === "object") return;
        client[key] = formData[key];
      });
      return client;
    }
  };

  const clientFormData = getData("client");

  return (
    <>
      <div className="absolute top-0 right-0 m-4 mt-8 p-4 border z-10 shadow shadow-gray-300 bg-white w-[40rem] h-fit">
        <button
          className="py-1 px-4 mb-4 capitalize border border-gray-400 text-gray-700 flex gap-1 place-content-between place-items-center"
          onClick={() => onOpenAddClient((prev) => !prev)}
        >
          <X size={17} />
          close
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 border border-gray-200 p-4">
            <ul className="[&>li]:capitalize grid gap-2">
              <li className={steps === 0 ? "font-semibold text-[1.07rem]" : ""}>
                client's information
              </li>
              <li className={steps === 1 ? "font-semibold text-[1.07rem]" : ""}>
                plot information
              </li>
              <li className={steps === 2 ? "font-semibold text-[1.07rem]" : ""}>
                sales information
              </li>
              <li className={steps === 3 ? "font-semibold text-[1.07rem]" : ""}>
                witness's information
              </li>
              <li className={steps === 4 ? "font-semibold text-[1.07rem]" : ""}>
                documents
              </li>
            </ul>
          </div>
          <form action="" className="grid">
            {steps === 0 && (
              <ClientDetailsForm
                addClientHandler={addClientHandler}
                clientFormData={clientFormData}
              />
            )}
            {steps === 1 && <PlotDetailsForm plotFormData={formData.plots} />}
            {steps === 2 && <SalesDetailsForm salesFormData={formData.sales} />}
            {steps === 3 && (
              <WitnessDetailsForm witnessFormData={formData.witnes} />
            )}
            {steps === 4 && (
              <DocumentsDetailsForm documentsFormData={formData.documents} />
            )}

            <div className="flex place-content-between my-4">
              <button
                type="button"
                disabled={steps === 0 ? true : false}
                className="py-1 px-4 border border-gray-400 text-gray-700 capitalize flex gap-1 place-content-between place-items-center"
                onClick={() => setSteps((prev) => prev - 1)}
              >
                <ChevronLeft size={17} />
                back
              </button>
              {steps === 4 ? (
                <button
                  className="bg-gray-950 text-white py-1 px-4 capitalize"
                  type="button"
                >
                  submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSteps((prev) => prev + 1)}
                  className="bg-gray-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center"
                >
                  next
                  <ChevronRight size={17} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
