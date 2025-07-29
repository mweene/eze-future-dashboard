import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import AddNewClientModal from "./AddNewClientModal";

const defaultForm = {
  id: "",
  name: "",
  sex: "",
  nrc: "",
  phone: "",
  email: "",
  address: "",
  plotDetails: {
    plotSize: "",
    plotNumber: "",
    siteName: "",
    grandPrice: 0,
    amountPaid: 0,
    balance: 0,
    allocated: "no",
    allocationDate: "",
    paymentStatus: "",
    dateBought: "",
    dateUpdated: "",
  },
  witness: {
    name: "",
    sex: "",
    nrc: "",
    email: "",
    phone: "",
    address: "",
    relationship: "",
  },
  documents: {
    nrcLink: "",
    letterOfSaleLink: "",
    landAgreementLink: "",
    allocationFormLink: "",
    authorizationLetterLink: "",
  },
};

const AddNewClient = ({ clients, updateClients }) => {
  const [formData, setFormData] = useState(defaultForm);

  const [isOpen, setIsOpen] = useState(false);
  const handleModalView = () => setIsOpen((prev) => !prev);
  const handleFormChange = (e) => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: crypto.randomUUID().slice(0, 4),
      name: formData.name.trim(),
      sex: formData.sex,
      nrc: formData.nrc.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      address: formData.address.trim(),
      plotDetails: {
        plotSize: formData.plotDetails.plotSize,
        plotNumber: formData.plotDetails.plotNumber,
        siteName: formData.plotDetails.siteName,
        grandPrice: formData.plotDetails.grandPrice,
        amountPaid: formData.plotDetails.amountPaid,
        balance: formData.plotDetails.balance,
        allocated: formData.plotDetails.allocated,
        allocationDate: formData.plotDetails.allocationDate,
        paymentStatus: formData.plotDetails.paymentStatus,
        dateBought: formData.plotDetails.dateBought,
        dateUpdated: formData.plotDetails.dateUpdated,
      },
      witness: {
        name: formData.witness.name,
        sex: formData.witness.sex,
        nrc: formData.witness.nrc,
        email: formData.witness.email,
        phone: formData.witness.phone,
        address: formData.witness.address,
        relationship: formData.witness.relationship,
      },
      documents: {
        nrcLink: formData.documents.nrcLink,
        letterOfSaleLink: formData.documents.letterOfSaleLink,
        landAgreementLink: formData.documents.landAgreementLink,
        allocationFormLink: formData.documents.allocationFormLink,
        authorizationLetterLink: formData.documents.authorizationLetterLink,
      },
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
