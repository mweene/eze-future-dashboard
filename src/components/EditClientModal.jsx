import { useState } from "react";

const EditClientModal = ({ client }) => {
  const [formData, setFormData] = useState({
    id: client.id,
    name: client.name,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, id: e.target.value }));
    console.log(formData.id);
  };
  return (
    <div className="absolute p-8 bg-blue-100 top-0 left-0 z-20">
      <form action="" className="bg-white">
        <label htmlFor="id">
          <input type="text" value={formData.id} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

export default EditClientModal;
