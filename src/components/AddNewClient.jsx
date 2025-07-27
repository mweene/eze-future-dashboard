import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import AddNewClientModal from "./AddNewClientModal";

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
  const handleModalView = () => setIsOpen((prev) => !prev);
  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: crypto.randomUUID().slice(0, 4),
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
    <div className="">
      <button
        className="bg-gray-950 text-white py-2.5 px-4 cursor-pointer flex gap-1.5 items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Plus size={16} />
        Add New Client
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <AddNewClientModal
          onReveal={handleModalView}
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default AddNewClient;
