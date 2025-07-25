import { useState } from "react";
import { X } from "lucide-react";
import InputWithLabel from "./InputWithLabel";

const AddNewClientModal = ({ onSubmit, onChange, onReveal }) => {
  return (
    <div className="text-[.93rem] bg-white border border-gray-300 absolute right-0 my-1.5 z-10 shadow shadow-gray-300">
      <div className="flex place-content-between border-b border-gray-300 mb-2 p-4 bg-gray-50">
        <h2 className="text-base">Add New Client Form</h2>
        <button className="cursor-pointer" onClick={onReveal}>
          <X size={17} />
        </button>
      </div>

      <form onSubmit={onSubmit} className="">
        <div className="flex gap-8 m-4 p-4 border border-gray-200">
          <div className="grid gap-1">
            <InputWithLabel
              id="name"
              phText="enter client name..."
              onChange={onChange}
            />
            <InputWithLabel
              id="nrc"
              phText="enter client nrc..."
              onChange={onChange}
            />
            <InputWithLabel
              id="phone"
              phText="enter phone number..."
              maxLength={10}
              onChange={onChange}
            />
            <InputWithLabel
              id="address"
              phText="enter client address..."
              onChange={onChange}
            />
            <InputWithLabel
              id="plot-size"
              phText="e.g 20 x 20"
              onChange={onChange}
            />
          </div>

          <div className="grid gap-1">
            <InputWithLabel
              id="plot-number"
              phText="enter plot number..."
              type="number"
              onChange={onChange}
            />
            <InputWithLabel
              id="site-name"
              phText="enter site name..."
              onChange={onChange}
            />
            <InputWithLabel
              id="amount-paid"
              phText="enter grand amount..."
              type="number"
              onChange={onChange}
            />
            <InputWithLabel
              id="date-bought"
              phText="enter date bought..."
              type="date"
              onChange={onChange}
            />
            <PaymentStatusSelect />
          </div>
        </div>

        <div className="flex gap-3 place-content-center border-t border-gray-300 bg-gray-50 p-4">
          <button
            className="py-2 px-20 border border-gray-300 bg-white cursor-pointer mr-2"
            onClick={onReveal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-20 text-white bg-gray-950 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewClientModal;

const PaymentStatusSelect = () => {
  const [status, setStatus] = useState("");

  return (
    <div>
      <label htmlFor="payment-status" className="">
        Payment status
      </label>
      <select
        id="payment-status"
        name="payment-status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="cursor-pointer border border-gray-300"
      >
        <option value="" disabled>
          Select a status
        </option>
        <option value="fully_paid">Fully Paid</option>
        <option value="partial">Partial</option>
        <option value="pending">Pending</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
  );
};
