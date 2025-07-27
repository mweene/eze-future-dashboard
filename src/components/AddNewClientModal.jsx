import InputWithLabel from "./InputWithLabel";
import SelectMultipleOptions from "./SeleteMultipleOptions";
import { X } from "lucide-react";

const AddNewClientModal = ({ onSubmit, onChange, onReveal }) => {
  return (
    <form
      className=" m-4 bg-white border border-gray-300 w-3/4 items-center absolute right-0 top-0 z-10 mt-16"
      onSubmit={onSubmit}
    >
      <section className="flex place-content-between">
        <h2>Add New Client</h2>
        <button className="flex gap-1 items-center">
          <X size={17} />
          Close
        </button>
      </section>

      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="grid gap-4 p-4 border border-gray-300">
          <section>
            <h3 className="capitalize text-base">buyer's information</h3>
            <div className="grid gap-2">
              <InputWithLabel phText="Full name" onChange={onChange} />
              <RadioOptions onChange={onChange} />
              <InputWithLabel
                phText="NRC e.g 226711/10/1"
                onChange={onChange}
              />
              <InputWithLabel phText="Phone Number" onChange={onChange} />
              <InputWithLabel type="email" phText="Email" onChange={onChange} />
              <InputWithLabel
                phText="Residential Address"
                onChange={onChange}
              />
            </div>
          </section>

          <section>
            <h3 className="capitalize text-base">witness's information</h3>
            <div className="grid gap-2">
              <InputWithLabel phText="Full Name" onChange={onChange} />
              <RadioOptions onChange={onChange} />
              <InputWithLabel
                phText="NRC e.g 226711/10/1"
                onChange={onChange}
              />
              <InputWithLabel phText="Phone Number" onChange={onChange} />
              <InputWithLabel type="email" phText="Email" onChange={onChange} />
              <InputWithLabel
                phText="Residential Address"
                onChange={onChange}
              />
            </div>
          </section>
        </div>

        <div className="grid gap-4 p-4 border border-gray-300">
          <section>
            <h3 className="capitalize text-base">plot information</h3>
            <div className="grid gap-2">
              <InputWithLabel
                phText="Plot Size e.g 20 x 20"
                onChange={onChange}
              />
              <InputWithLabel
                type="number"
                phText="Plot Number"
                onChange={onChange}
              />
              <InputWithLabel
                phText="Site Name e.g A, A+"
                onChange={onChange}
              />
              <InputWithLabel
                type="email"
                phText="enter email"
                onChange={onChange}
              />
              <InputWithLabel
                type="number"
                phText="Grand Price e.g 3500"
                onChange={onChange}
              />
              <InputWithLabel
                type="number"
                phText="Amount Paid e.g 1500"
                onChange={onChange}
              />
              <InputWithLabel
                type="number"
                phText="Balance e.g 2000"
                onChange={onChange}
              />
              <SelectMultipleOptions
                label="Allocated Buyer"
                options={["Yes", "No"]}
                onChange={onChange}
              />
              <InputWithLabel
                phText="Payment Status e.g fully paid, partial, pending, overdue "
                onChange={onChange}
              />
              <InputWithLabel
                type="date"
                phText="Date Bought"
                onChange={onChange}
              />
            </div>
          </section>

          <section>
            <h3 className="capitalize text-base">Buyers's documents</h3>
            <div className="">
              <InputWithLabel type="file" multiple={true} onChange={onChange} />
            </div>
          </section>
        </div>
      </div>

      <section>
        <button className="border border-gray-300 p-2">Close</button>
        <button className="border border-gray-300 p-2" type="submit">
          Submit
        </button>
      </section>
    </form>
  );
};

export default AddNewClientModal;

const RadioOptions = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="sex">
        <input
          type="radio"
          id="sex"
          name="sex"
          value="male"
          onChange={onChange}
        />
        Male
      </label>
      <label htmlFor="sex">
        <input
          type="radio"
          id="sex"
          name="sex"
          value="female"
          onChange={onChange}
        />
        Female
      </label>
    </div>
  );
};
