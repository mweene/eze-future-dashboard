//InputField
//SelectField
//Button

//client data if update form
//formType prop
//endpoints for add and update
//react hook form
import { useForm } from "react-hook-form";
import Button from "../simple/Button";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { X, File } from "lucide-react";

export default function ClientForm({ onClose, fileType }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-neutral-400/60 absolute top-0 bottom-0 right-0 left-0 z-20 grid place-content-center place-items-center">
      <div className="bg-neutral-50 rounded-xl m-8 w-[77dvw]">
        <div className="border-b border-neutral-400 p-4 flex place-content-between">
          <h2 className="capitalize text-xl font-semibold">
            {fileType === "update" ? "add client" : "update client"}
          </h2>
          <button type="text" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="grid gap-2 grid-cols-2 place-content-center mb-4">
            <section className="personal__details">
              <PersonalDetails register={register} />
              <DocumentsDetails register={register} />
            </section>
            <section className="sales__details">
              <SalesDetails register={register} />
            </section>
          </div>

          <div className="flex gap-4">
            <Button>Clear form</Button>
            <Button type="submit" className="bg-black text-white border-0">
              Submit form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PersonalDetails({ register }) {
  return (
    <div className="border border-neutral-400 p-4 rounded-xl">
      <div className="personal-details">
        <legend>personal details</legend>

        <div className="grid gap-2 grid-cols-2">
          <div className="grid gap-2">
            <InputField placeholder="names" registration={register("name")} />
            <InputField placeholder="nrc" registration={register("nrc")} />
          </div>
          <div className="grid gap-2">
            <InputField placeholder="phone" registration={register("phone")} />
            <InputField
              placeholder="residential address"
              registration={register("address")}
            />
          </div>
        </div>
      </div>

      <div className="personal-details mt-2">
        <legend>auth details</legend>

        <div className="grid gap-2 grid-cols-2">
          <div className="grid gap-2">
            <InputField
              label="allocated"
              type="checkbox"
              className="flex"
              registration={register("is_allocated")}
            />
            <InputField
              label="allocation date"
              className="grid gap-1"
              type="date"
              registration={register("allocated_at")}
            />
          </div>
          <div className="grid gap-2">
            <InputField
              label="authorized"
              type="checkbox"
              registration={register("is_authorized")}
            />
            <InputField
              label="authorization date"
              type="date"
              registration={register("authorized_at")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentsDetails({ register }) {
  return (
    <div className="border-2 border-dashed border-neutral-400 rounded-xl h-40 p-4 mt-2 text-center">
      <File size={55} className="border-neutral-400" />
      <input
        type="file"
        multiple
        className="border-0 h-full w-full"
        registration={register("file")}
      />
    </div>
  );
}

function SalesDetails({ register }) {
  return (
    <div className="border border-neutral-400 p-4 rounded-xl h-full">
      <div className="personal-details h-full">
        <legend>sales details</legend>

        <div className="grid gap-2">
          <div className="plot__details grid gap-3">
            <SelectField
              id="site_name"
              label="site name"
              registration={register("site_name")}
              options={[{ id: 0, name: "A" }]}
            />
            <SelectField
              id="plot_size"
              label="plot size"
              registration={register("plot_size")}
              options={[{ id: 0, name: "20x20" }]}
            />
            <SelectField
              id="plot_number"
              label="plot number"
              registration={register("plot_number")}
              options={[
                { id: 0, name: 2 },
                { id: 1, name: 3 },
              ]}
            />
          </div>

          <div className="grid gap-2 grid-cols-2">
            <section>
              <InputField
                label="total amount"
                type="number"
                registration={register("amount")}
              />
              <InputField
                label="paid"
                type="number"
                registration={register("paid")}
              />
            </section>
            <section className="">
              <InputField
                label="balance"
                type="number"
                registration={register("balance")}
              />
              <InputField
                label="payment date"
                type="date"
                registration={register("payment_date")}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

`
  client_id -> not included here (derived on the backend)
  site_name -> get site_id
  plot_size
  plot_number
  total_amount
  paid_amount
  balance -> (total_amount - paid_amount) derived
  date
`;
