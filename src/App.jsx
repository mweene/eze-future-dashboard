import { Search } from "lucide-react";
import { useState } from "react";
import Table from "./components/Table";
import InputWithLabel from "./components/InputWithLabel";
import AddNewClient from "./components/AddNewClient";
import ExportClientData from "./components/ExportClientData";

import { dummydata } from "./dummydata";
import FilterClientData from "./components/FilterClientData";

export default function App() {
  const [clients, setClients] = useState(dummydata);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchedClients = clients.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
  return (
    <div className="App p-8">
      <div className="flex place-content-between">
        <div className="flex gap-3 place-items-center">
          <div className="flex gap-1.5 items-center border border-gray-300 p-2">
            <Search size={19} />
            <InputWithLabel
              phText="search by name..."
              styles="border-none outline-none"
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
