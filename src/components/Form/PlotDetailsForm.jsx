import { useState } from "react";
import InputWithLabel from "../InputWithLabel";

export default function PlotDetailsForm({ plotFormData }) {
  const [formData, setFormData] = useState(plotFormData);

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
        <h3 className="capitalize text-2xl font-semibold">plot info</h3>
        <p className="text-gray-600">provide plot information below</p>
      </div>
      <InputWithLabel
        label="plot number"
        id="plot_number"
        placeholder="plot number e.g A2, B34"
        onChange={handleChange}
      />
      <InputWithLabel
        label="plot size"
        id="plot_size"
        placeholder="plot size e.g 20m x 20m"
        onChange={handleChange}
      />
      <InputWithLabel
        label="location"
        id="location"
        placeholder="site location e.g 10 miles mungule"
        onChange={handleChange}
      />
      <InputWithLabel
        label="site plan link"
        id="site_plan_link"
        placeholder="site plan link e.g https://gdrive.com/kj5nalkkl"
        onChange={handleChange}
        onClick={handleSumbit}
      />
    </>
  );
}
