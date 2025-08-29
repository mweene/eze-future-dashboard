import { useState } from "react";
import InputWithLabel from "../InputWithLabel";

export default function DocumentsDetailsForm({ documentFormData }) {
  const [formData, setFormData] = useState(documentFormData);

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
        <h3 className="capitalize text-2xl font-semibold">documents info</h3>
        <p className="text-gray-600">provide sales information below</p>
      </div>
      <div>
        <InputWithLabel
          label="nrc link"
          placeholder="enter link to client's nrc"
          onChange={handleChange}
          id="nrc_link"
        />
        <InputWithLabel
          label="contract"
          placeholder="enter link to client's plot contract"
          onChange={handleChange}
          id="contract"
        />
        <InputWithLabel
          label="other docs"
          placeholder="enter other related documents"
          onChange={handleChange}
          onClick={handleSumbit}
          id="other_docs"
        />
      </div>
    </>
  );
}
