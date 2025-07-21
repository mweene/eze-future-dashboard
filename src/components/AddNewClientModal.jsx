import { X } from "lucide-react";
import InputWithLabel from "./InputWithLabel";

const AddNewClientModal = ({ onSubmit, onChange, onReveal }) => {
  return (
    <div className="bg-white border absolute right-0 my-1.5 px-5 py-2 z-10">
      <div className="flex place-content-between border-b border-gray-300 px-2 py-4 mb-4">
        <h2 className="text-xl">Add New Client</h2>
        <button className="cursor-pointer" onClick={onReveal}>
          <X />
        </button>
      </div>

      <form onSubmit={onSubmit} className="text-base">
        <div className="flex gap-8 mb-4">
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
          </div>
        </div>

        <div className="flex gap-3 place-content-center border-t border-gray-300 py-4">
          <button
            className="py-2.5 px-12 border border-gray-400 cursor-pointer mr-2"
            onClick={onReveal}
          >
            cancel
          </button>
          <button
            type="submit"
            className="py-2.5 px-12 text-white bg-gray-950 cursor-pointer"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewClientModal;
