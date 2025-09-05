import { useEffect, useState } from "react";
import InputWithLabel from "./InputWithLabel";
import {
  ClientDetailsForm,
  SalesDetailsForm,
  PlotDetailsForm,
  WitnessDetailsForm,
  DocumentsDetailsForm,
} from "./Form";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientForm({
  mode,
  isOpen = true,
  onClose,
  onChange,
  onSubmit,
  client,
}) {
  const [steps, setSteps] = useState(0);
  const [formData, setFormData] = useState({
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
      total_cost: "",
      amount_paid: "",
      balance: "",
    },
    witness: {
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

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      switch (steps) {
        case 0: // Client info - top level properties
          return {
            ...prev,
            [id]: value,
          };
        case 1: // Plots info
          return {
            ...prev,
            plots: {
              ...prev.plots,
              [id]: value,
            },
          };
        case 2: // Sales info
          return {
            ...prev,
            sales: {
              ...prev.sales,
              [id]: value,
            },
          };
        case 3: // Witness info
          return {
            ...prev,
            witness: {
              ...prev.witness,
              [id]: value,
            },
          };
        case 4: // Documents info
          return {
            ...prev,
            documents: {
              ...prev.documents,
              [id]: value,
            },
          };
        default:
          return prev;
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-20 bg-neutral-300/35 backdrop-blur-xs p-16">
        <h1>{mode === "add" ? "add client info" : "edit client info"}</h1>
        <button onClick={() => onClose((prev) => !prev)}>
          <X size={17} /> Close
        </button>
        {mode === "add" ? (
          <div className="grid grid-cols-2 gap-4 bg-white">
            <div className="bg-neutral-100 border border-neutral-200 p-4">
              <ul className="[&>li]:capitalize grid gap-2">
                <li
                  className={steps === 0 ? "font-semibold text-[1.07rem]" : ""}
                >
                  client's information
                </li>
                <li
                  className={steps === 1 ? "font-semibold text-[1.07rem]" : ""}
                >
                  plot information
                </li>
                <li
                  className={steps === 2 ? "font-semibold text-[1.07rem]" : ""}
                >
                  sales information
                </li>
                <li
                  className={steps === 3 ? "font-semibold text-[1.07rem]" : ""}
                >
                  witness's information
                </li>
                <li
                  className={steps === 4 ? "font-semibold text-[1.07rem]" : ""}
                >
                  documents
                </li>
                <li
                  className={steps === 5 ? "font-semibold text-[1.07rem]" : ""}
                >
                  review and submit
                </li>
              </ul>
            </div>
            <form action="" className="grid" onSubmit={handleSubmit}>
              {steps === 0 && (
                <ClientDetailsForm
                  clientFormData={formData}
                  onChange={handleChange}
                />
              )}
              {steps === 1 && (
                <PlotDetailsForm
                  onChange={handleChange}
                  plotFormData={formData.plots}
                />
              )}
              {steps === 2 && (
                <SalesDetailsForm
                  onChange={handleChange}
                  salesFormData={formData.sales}
                />
              )}
              {steps === 3 && (
                <WitnessDetailsForm
                  onChange={handleChange}
                  witnessFormData={formData.witness}
                />
              )}
              {steps === 4 && (
                <DocumentsDetailsForm
                  onChange={handleChange}
                  documentsFormData={formData.documents}
                />
              )}
              {steps === 5 && <ReviewAndSubmitForm />}

              <div className="flex place-content-between my-4">
                <button
                  type="button"
                  disabled={steps === 0 ? true : false}
                  className="py-1 px-4 border border-neutral-400 text-neutral-700 capitalize flex gap-1 place-content-between place-items-center"
                  onClick={() => setSteps((prev) => prev - 1)}
                >
                  <ChevronLeft size={17} />
                  back
                </button>
                {steps > 4 ? (
                  <button className="bg-neutral-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center">
                    submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSteps((prev) => prev + 1)}
                    className="bg-neutral-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center"
                  >
                    next
                    <ChevronRight size={17} />
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 bg-white">
            <div className="bg-neutral-100 border border-neutral-200 p-4">
              <ul className="[&>li]:capitalize grid gap-2">
                <li
                  className={steps === 0 ? "font-semibold text-[1.07rem]" : ""}
                >
                  client's information
                </li>
                <li
                  className={steps === 1 ? "font-semibold text-[1.07rem]" : ""}
                >
                  plot information
                </li>
                <li
                  className={steps === 2 ? "font-semibold text-[1.07rem]" : ""}
                >
                  sales information
                </li>
                <li
                  className={steps === 3 ? "font-semibold text-[1.07rem]" : ""}
                >
                  witness's information
                </li>
                <li
                  className={steps === 4 ? "font-semibold text-[1.07rem]" : ""}
                >
                  documents
                </li>
                <li
                  className={steps === 5 ? "font-semibold text-[1.07rem]" : ""}
                >
                  review and submit
                </li>
              </ul>
            </div>
            <form action="" className="grid" onSubmit={handleSubmit}>
              {steps === 0 && (
                <ClientDetailsForm
                  clientFormData={formData}
                  onChange={handleChange}
                />
              )}
              {steps === 1 && (
                <PlotDetailsForm
                  onChange={handleChange}
                  plotFormData={formData.plots}
                />
              )}
              {steps === 2 && (
                <SalesDetailsForm
                  onChange={handleChange}
                  salesFormData={formData.sales}
                />
              )}
              {steps === 3 && (
                <WitnessDetailsForm
                  onChange={handleChange}
                  witnessFormData={formData.witness}
                />
              )}
              {steps === 4 && (
                <DocumentsDetailsForm
                  onChange={handleChange}
                  documentsFormData={formData.documents}
                />
              )}
              {steps === 5 && <ReviewAndSubmitForm />}

              <div className="flex place-content-between my-4">
                <button
                  type="button"
                  disabled={steps === 0 ? true : false}
                  className="py-1 px-4 border border-neutral-400 text-neutral-700 capitalize flex gap-1 place-content-between place-items-center"
                  onClick={() => setSteps((prev) => prev - 1)}
                >
                  <ChevronLeft size={17} />
                  back
                </button>
                {steps > 4 ? (
                  <button className="bg-neutral-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center">
                    submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSteps((prev) => prev + 1)}
                    className="bg-neutral-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center"
                  >
                    next
                    <ChevronRight size={17} />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

function ReviewAndSubmitForm() {
  return (
    <>
      <div className="">
        <h2>review form</h2>
        <p>make sure that all the details are correct before submitting</p>
      </div>
    </>
  );
}
