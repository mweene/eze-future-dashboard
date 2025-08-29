import { useState } from "react";
import InputWithLabel from "../InputWithLabel";

export default function WitnessDetailsForm({ witnessFormData }) {
  const [formData, setFormData] = useState(witnessFormData);

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
        <h3 className="capitalize text-2xl font-semibold">witness info</h3>
        <p className="text-gray-600">provide sales information below</p>
      </div>
      <div>
        <InputWithLabel
          label="name"
          placeholder="enter witness name"
          onChange={handleChange}
          id="name"
        />
        <InputWithLabel
          label="nrc"
          placeholder="enter witness nrc"
          onChange={handleChange}
          id="nrc"
        />
        <InputWithLabel
          label="phone"
          placeholder="enter witness phone number"
          onChange={handleChange}
          id="phone"
        />
        <InputWithLabel
          label="address"
          placeholder="enter witness residence"
          onChange={handleChange}
          id="address"
        />
        <InputWithLabel
          label="relation to client"
          placeholder="enter witness relation to the buyer"
          onChange={handleChange}
          onClick={handleSumbit}
          id="relationship"
        />
      </div>
    </>
  );
}
