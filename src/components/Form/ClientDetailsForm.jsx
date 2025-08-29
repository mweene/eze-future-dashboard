import { useState } from "react";
import InputWithLabel from "../InputWithLabel";

export default function ClientDetailsForm({ clientFormData }) {
  const [formData, setFormData] = useState(clientFormData);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSumbit = () => console.log(formData);

  return (
    <>
      <div className="border-b border-neutral-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">clinet's info</h3>
        <p className="text-neutral-600">provide client's information below</p>
      </div>
      <InputWithLabel
        placeholder="enter your name"
        label="name"
        id="name"
        styles="grid"
        onChange={handleChange}
      />
      <InputWithLabel
        placeholder="enter your nrc"
        label="nrc"
        id="nrc"
        styles="grid"
        onChange={handleChange}
      />
      <InputWithLabel
        placeholder="enter your phone"
        label="phone"
        id="phone"
        styles="grid"
        onChange={handleChange}
      />
      <InputWithLabel
        placeholder="enter your email"
        label="email"
        type="email"
        id="email"
        styles="grid"
        onChange={handleChange}
      />
      <InputWithLabel
        placeholder="enter your adress"
        label="address"
        id="address"
        styles="grid"
        onChange={handleChange}
        onClick={handleSumbit}
      />
    </>
  );
}
