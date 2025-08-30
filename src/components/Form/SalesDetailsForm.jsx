import InputWithLabel from "../InputWithLabel";

export default function SalesDetailsForm({ salesFormData, onChange }) {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">sales info</h3>
        <p className="text-gray-600">provide sales information below</p>
      </div>
      <div>
        <InputWithLabel
          label="grand price"
          id="price"
          placeholder="total cost of plot"
          value={salesFormData?.price || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="amount paid"
          id="amount_paid"
          placeholder="enter amount paid"
          value={salesFormData?.amount_paid || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="balance"
          id="balance"
          placeholder="enter balance"
          value={salesFormData?.balance || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
