import { useState, useEffect } from "react";
import { clientAPI } from "../api/clients";
import {
  ClientDetailsForm,
  SalesDetailsForm,
  PlotDetailsForm,
  WitnessDetailsForm,
  DocumentsDetailsForm,
} from "./Form";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientForm({
  mode = "add",
  client_id,
  isOpen = true,
  onClose,
  onAddClient,
  onUpdateClient,
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
      contract: "",
      id_copy: "",
      other_doc: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    if (mode === "edit" && client_id) {
      const fetchClient = async () => {
        try {
          const { data } = await clientAPI.fetchClient(client_id);
          setFormData({
            name: data.client.name,
            nrc: data.client.nrc,
            phone: data.client.phone,
            email: data.client.email,
            address: data.client.address,
            plots: {
              plot_number: data.plot.plot_number,
              plot_size: data.plot.plot_size,
              location: data.plot.location,
              site_name: data.plot.site_name,
              site_plan_link: data.plot.site_plan_link,
            },
            sales: {
              total_cost: data.sales.total_cost || "",
              amount_paid: data.sales.amount_paid || "",
              balance: data.sales.balance || "",
            },
            witness: {
              name: data.witness.name,
              nrc: data.witness.nrc,
              phone: data.witness.phone,
              address: data.witness.address,
              relationship: data.witness.relationship,
            },
            documents: {
              contract: data.documents.contract,
              id_copy: data.documents.id_copy,
              other_doc: data.documents.other_doc,
            },
          });
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchClient();
    }
  }, [mode, client_id]);

  const handleChange = async (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "add") {
        const response = await onAddClient(formData);
        console.log(response);
      } else if (mode === "edit") {
        const response = await onUpdateClient(client_id, formData);
        console.log(response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-30 bg-neutral-700/60 grid">
        <div className="m-4 justify-self-end bg-white h-fit w-[45rem] border border-neutral-300 rounded-xl">
          <div className="flex place-content-between p-4 border-b border-neutral-200">
            <h3 className="capitalize text-neutral-500">
              {mode === "add" ? "add new client" : "edit client"}
            </h3>
            <button
              onClick={() => onClose((prev) => !prev)}
              className="flex gap-0.5 place-items-center border border-neutral-200 bg-neutral-100 p-1 rounded-md"
            >
              <X size={19} />
            </button>
          </div>

          <div className="add-form grid gap-4 bg-white m-4">
            <div className="bg-neutral-100 border border-neutral-200 rounded-md p-4">
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

            <form action="" className="grid pr-4" onSubmit={handleSubmit}>
              {steps === 0 && (
                <ClientDetailsForm
                  formData={formData}
                  onChange={handleChange}
                />
              )}
              {steps === 1 && (
                <PlotDetailsForm
                  onChange={handleChange}
                  formData={formData.plots}
                />
              )}
              {steps === 2 && (
                <SalesDetailsForm
                  onChange={handleChange}
                  formData={formData.sales}
                />
              )}
              {steps === 3 && (
                <WitnessDetailsForm
                  onChange={handleChange}
                  formData={formData.witness}
                />
              )}
              {steps === 4 && (
                <DocumentsDetailsForm
                  onChange={handleChange}
                  formData={formData.documents}
                />
              )}
              {steps === 5 && <ReviewAndSubmitForm />}

              <div className="flex place-content-between my-4">
                <button
                  type="button"
                  disabled={steps === 0 ? true : false}
                  className="py-1 px-4 border border-neutral-400 capitalize flex gap-1 place-content-between place-items-center rounded-lg text-center"
                  onClick={() => setSteps((prev) => prev - 1)}
                >
                  <ChevronLeft size={17} />
                  back
                </button>
                {steps > 4 ? (
                  <button className="bg-neutral-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center rounded-lg text-center">
                    submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSteps((prev) => prev + 1)}
                    className="bg-neutral-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center rounded-lg text-center"
                  >
                    next
                    <ChevronRight size={17} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewAndSubmitForm() {
  return (
    <>
      <div className="w-full">
        <h2>review form</h2>
        <p>make sure that all the details are correct before submitting</p>
      </div>
    </>
  );
}
