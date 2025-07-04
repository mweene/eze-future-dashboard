import { useState } from "react";
import Table from "./components/Table";
import InputWithLabel from "./components/InputWithLabel";
import AddNewClient from "./components/AddNewClient";
import AddNewClientModel from "./components/AddNewClientModel";

import { dummydata } from "./dummydata";

export default function App() {
  const [clients, setClients] = useState(dummydata);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
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

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleModelView = () => setIsModelOpen(!isModelOpen);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: 4521,
      name: formData.name,
      nrc: formData.nrc,
      phone: formData.phone,
      address: formData.address,
      plotSize: formData["plot-size"],
      plotNumber: formData["plot-number"],
      siteName: formData["site-name"],
      amountPaid: formData["amount-paid"],
      dateBought: formData["date-bought"],
    };
    setClients([...clients, newClient]);
    setIsModelOpen(!isModelOpen);
  };

  const searchedClients = clients.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="App p-8">
      <InputWithLabel
        id="search"
        phText="search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <AddNewClient onClick={handleModelView}>
        {isModelOpen && (
          <AddNewClientModel
            onSubmit={handleFormSubmit}
            onChange={handleFormChange}
          />
        )}
      </AddNewClient>
      <Table clients={searchedClients} />
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "GET_CLIENTS":
      return {
        ...state,
        clients: action.payload,
      };
    case "SEARCH_CLIENT":
      return {
        ...state,
        client: state.clients.filter((client) =>
          client.name.includes(action.payload.toLowerCase()),
        ),
      };
    case "ADD_CLIENT":
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    case "REMOVE_CLIENT":
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client.id !== action.payload.id,
        ),
      };
    case "UPDATE_CLIENT":
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client,
        ),
      };
    default:
      return state;
  }
}
