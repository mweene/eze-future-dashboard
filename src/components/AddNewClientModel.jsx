import InputWithLabel from "./InputWithLabel";

const AddNewClientModel = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="p-4 border absolute bg-white">
      <div className="flex gap-8 mb-4">
        <div className="grid gap-1">
          <InputWithLabel
            id="name"
            phText="enter client name..."
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
            phText="enter plot sise..."
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
      <button className="py-2.5 px-4 text-white bg-gray-950 cursor-pointer">
        submit
      </button>
    </form>
  );
};

export default AddNewClientModel;
