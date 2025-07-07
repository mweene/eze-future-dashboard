import { useState } from "react";
import Table from "./components/Table";
import InputWithLabel from "./components/InputWithLabel";
import AddNewClient from "./components/AddNewClient";

import { dummydata } from "./dummydata";

export default function App() {
  const [clients, setClients] = useState(dummydata);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchedClients = clients.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
  return (
    <div className="App p-8">
      <InputWithLabel
        phText="search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <AddNewClient clients={clients} updateClients={setClients} />
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
