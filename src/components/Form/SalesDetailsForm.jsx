import { useState } from "react";
import InputWithLabel from "../InputWithLabel";

export default function SalesDetailsForm({ salesFormData }) {
  const [formData, setFormData] = useState(salesFormData);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSumbit = () => console.log(formData);

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
          onChange={handleChange}
        />
        <InputWithLabel
          label="amount paid"
          id="amount_paid"
          placeholder="enter amount paid"
          onChange={handleChange}
        />
        <InputWithLabel
          label="balance"
          id="balance"
          placeholder="enter balance"
          onChange={handleChange}
          onClick={handleSumbit}
        />
      </div>
    </>
  );
}
