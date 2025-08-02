import { useState } from "react";
import AddNewClientModal from "./AddNewClientModal";
import InputWithLabel from "./InputWithLabel";

const EditClientModal = ({ client }) => {
  const [formData, setFormData] = useState(client);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: { value } }));
  };
  console.log("component has reloaded");
  return (
    <div
      key={client.id}
      className="absolute top-0 right-0 left-0 m-10 p-4 z-20 w-3xs bg-white border border-gray-300"
    >
      <form className="">
        {Object.entries(formData).map(([key, value]) => {
          if (value !== null && typeof value === "object")
            return Object.keys(value).map((k) => (
              <InputWithLabel
                key={k}
                label={k}
                value={formData[key][k]}
                onChange={handleChange}
              />
            ));
          return (
            <InputWithLabel
              key={key}
              label={key}
              value={formData[key]}
              onChange={handleChange}
            />
          );
        })}
      </form>
    </div>
  );
};

export default EditClientModal;
