import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "../simple/Button";
import axios from "axios";

//change the plot_id in PlotDetails and the backend
//the plot_id should be selected and not created

export default function Form({ onClose, formType }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4400/api/v1/dashboard",
        data,
      );
      console.log(response.data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
      console.error(data);
    }
  };

  const handleNext = () => {
    // Only increment if the current step is less than the total steps
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    // Only decrement if the current step is greater than 1
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="p-6 absolute top-0 right-0 mt-14 mr-4 w-2xl bg-white border">
      <div className="flex place-content-between place-items-center">
        <Button onClick={onClose}>close</Button>
        <p>
          {currentStep} of {totalSteps} fields
        </p>
      </div>
      {formType === "update" ? (
        <h1 className="text-5xl">update form</h1>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-1">
          {currentStep === 1 && (
            <ClientDetails register={register} errors={errors} />
          )}

          {currentStep === 2 && (
            <SalesDetails register={register} errors={errors} />
          )}

          {currentStep === 3 && (
            <DocumentsDetails register={register} errors={errors} />
          )}

          <div className=" flex gap-4 place-content-between place-items-center mt-4">
            <div className="flex gap-1">
              <Button
                type="button"
                onClick={handlePrev}
                disabled={isFirstStep}
                className=""
              >
                prev
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                disabled={isLastStep}
                className=""
              >
                next
              </Button>
            </div>

            {isLastStep ? (
              <Button type="submit">submit form</Button>
            ) : (
              <Button type="button" disabled={isLastStep}>
                finish form
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function ClientDetails({ register, errors }) {
  return (
    <>
      <h1 className="text-xl">client details</h1>
      <section className="clients grid grid-cols-2 gap-4">
        <div className="">
          <InputField
            label="Name"
            placeholder="enter name..."
            registration={register("name", { required: "Name is required" })}
            error={errors.name}
          />

          <InputField
            label="Nrc"
            placeholder="enter nrc..."
            registration={register("nrc", {
              pattern: {
                value: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,
                message: "NRC must be in the format 123456/12/1",
              },
            })}
            error={errors.nrc}
          />

          <InputField
            label="Phone"
            type="tel"
            placeholder="enter phone..."
            registration={register("phone", {
              pattern: {
                value: /^[0-9]{4} [0-9]{3} [0-9]{3}$/,
                message: "phone number must be in the format 0971 233 455",
              },
              required: "Phone number is required",
            })}
            error={errors.phone}
          />

          <InputField
            label="Address"
            placeholder="enter address..."
            registration={register("address", {
              required: "Address is required",
            })}
            error={errors.address}
          />
        </div>
        <div className="">
          <InputField
            label="Allocated"
            type="checkbox"
            registration={register("allocated", {
              required: "Address is required",
            })}
            error={errors.allocated}
          />

          <InputField
            label="Allocation date"
            type="date"
            registration={register("allocation_date", {
              required: "Phone number is required",
            })}
            error={errors.allocation_date}
          />

          <InputField
            label="Authorized"
            type="checkbox"
            registration={register("authorized", {
              required: "Address is required",
            })}
            error={errors.authorizated}
          />

          <InputField
            label="Authorization date"
            type="date"
            placeholder="enter name..."
            registration={register("authorization_date", {
              required: "Authorization date is required",
            })}
            error={errors.authorization_date}
          />
        </div>
      </section>
    </>
  );
}

function DocumentsDetails({ register, errors }) {
  return (
    <>
      <h1 className="text-xl">document details</h1>
      <section className="clients grid">
        <div className="">
          <InputField
            label="Upload Client Files"
            type="text"
            registration={register("googledrive_url")}
            error={errors.googledrive_url}
          />
        </div>
      </section>
    </>
  );
}

function SalesDetails({ register, errors }) {
  const [siteNames, setSiteNames] = useState([]);
  //add this in the parent app
  useEffect(() => {
    const getSiteNames = async () => {
      try {
        const response = await fetch("http://localhost:4400/api/v1/sitenames");
        const data = await response.json();
        setSiteNames(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSiteNames();
  }, []);
  return (
    <>
      <h1 className="text-xl">sales details</h1>

      <section className="grid grid-cols-2 gap-4">
        <div className="">
          <SelectField
            id="site_name"
            registration={register("site_name")}
            error={errors.site_name}
            options={siteNames}
          />

          <SelectField
            id="plot_size"
            registration={register("plot_size")}
            error={errors.plot_size}
            options={[
              { id: 1, name: "25x20" },
              { id: 2, name: "30x20" },
            ]}
          />

          <SelectField
            id="plot_no"
            registration={register("plot_no")}
            error={errors.plot_no}
            options={[
              { id: 1, name: 18 },
              { id: 2, name: 19 },
              { id: 2, name: 20 },
              { id: 2, name: 21 },
              { id: 2, name: 22 },
            ]}
          />

          <InputField
            label="total amount"
            type="number"
            registration={register("total_amount", {
              required: "total is required",
            })}
            error={errors.total_amount}
          />
        </div>

        <div className="">
          <InputField
            label="amount paid"
            registration={register("amount_paid", {
              required: "Site name is required",
            })}
            error={errors.amount_paid}
          />
          <InputField
            label="balance"
            type="number"
            registration={register("balance")}
          />

          <InputField
            label="purchase date"
            type="date"
            registration={register("sales_date", {
              required: "date is required",
            })}
            error={errors.sales_date}
          />
        </div>
      </section>
    </>
  );
}
