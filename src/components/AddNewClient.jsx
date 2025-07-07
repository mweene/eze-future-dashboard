import { useState } from "react";
import AddNewClientModel from "./AddNewClientModel";

const AddNewClient = ({ clients, updateClients }) => {
  const [formData, setFormData] = useState({
    name: "",
    nrc: "",
    phone: "",
    address: "",
    plotSize: "",
    plotNumber: "",
    siteName: "",
    amountPaid: 0,
    dateBought: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      nrc: formData.nrc.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      plotSize: formData["plot-size"].trim(),
      plotNumber: formData["plot-number"],
      siteName: formData["site-name"].trim(),
      amountPaid: formData["amount-paid"].trim(),
      dateBought: formData["date-bought"],
    };
    updateClients([...clients, newClient]);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="bg-rose-200 text-gray-950 py-2.5 px-4 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Add client
      </button>
      {isOpen && (
        <AddNewClientModel
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default AddNewClient;
