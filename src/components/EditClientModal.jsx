import { useState } from "react";

const EditClientModal = ({ client, onEdit }) => {
  const [formData, setFormData] = useState(client);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested properties (e.g., "plotDetails.plotSize")
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      // Handle flat properties
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(formData);
  };

  return (
    <div className="absolute p-4 bg-blue-100 top-0 right-0 mr-40 z-20">
      <form
        action=""
        className="bg-white p-4 flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        {Object.entries(formData).map(([key, value]) => {
          if (value !== null && typeof value === "object")
            return Object.keys(value).map((k) => (
              <InputComponent
                key={k}
                name={`${key}.${k}`}
                value={formData[key][k]}
                onChange={handleChange}
              />
            ));
          return key === "id" ? null : (
            <InputComponent
              key={key}
              name={key}
              value={value}
              onChange={handleChange}
            />
          );
        })}

        <button type="submit" className="border p-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditClientModal;

const InputComponent = ({ name, value, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="uppercase">
        {name} {": "}
        <input
          type="text"
          value={value}
          name={name}
          onChange={onChange}
          id={name}
          className="border p-1"
        />
      </label>
    </>
  );
};
