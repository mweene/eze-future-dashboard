import InputWithLabel from "../InputWithLabel";

export default function SalesDetailsForm({ salesFormData, onChange }) {
  return (
    <>
      <div className="grid gap-2">
        <InputWithLabel
          label="total cost"
          id="total_cost"
          type="number"
          placeholder="total cost of plot"
          value={salesFormData?.total_cost || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="amount paid"
          id="amount_paid"
          type="number"
          placeholder="enter amount paid"
          value={salesFormData?.amount_paid || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="balance"
          id="balance"
          type="number"
          placeholder="enter balance"
          value={salesFormData?.balance || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
