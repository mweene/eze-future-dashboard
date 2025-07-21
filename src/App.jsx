import { useState } from "react";
import { Search } from "lucide-react";
import Table from "./components/Table";
import InputWithLabel from "./components/InputWithLabel";
import AddNewClient from "./components/AddNewClient";
import ExportClientData from "./components/ExportClientData";

import { dummydata } from "./dummydata";
import FilterClientData from "./components/FilterClientData";

export default function App() {
  const [clients, setClients] = useState(dummydata);
  const [searchTerm, setSearchTerm] = useState("");
  const [showClientDetails, setShowClientDetails] = useState(false);

  const [client, setClient] = useState({});
  const handleShowClientDetails = (c) => {
    setClient(c);
    setShowClientDetails((prev) => !prev);
  };

  const handleDeleteRecord = (c) => {
    const newClients = clients.filter((client) => client.id !== c.id);
    setClients(newClients);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchedClients = clients.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
  return (
    <div className="App p-8 bg-gray-50 relative">
      <div className="flex place-content-between gap-2">
        <div className="flex gap-3 place-items-center">
          <div className="flex gap-1.5 items-center border border-gray-600 p-2">
            <Search size={16} />
            <InputWithLabel
              phText="Search by name..."
              styles="border-transparent outline-none"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <FilterClientData data={""} />
        </div>

        <div className="flex gap-3">
          <ExportClientData clients={clients} />
          <AddNewClient clients={clients} updateClients={setClients} />
        </div>
      </div>
      <Table
        clients={searchedClients}
        showClientDetails={handleShowClientDetails}
        onDelete={handleDeleteRecord}
      />
      {showClientDetails && <ClientDetails client={client} />}
    </div>
  );
}

const ClientDetails = ({ client }) => {
  return (
    <div className="absolute p-4 bg-amber-300 top-0">
      <h1>{client.name}</h1>
      <p>{client.phone}</p>
    </div>
  );
};

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
