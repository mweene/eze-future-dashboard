import { useEffect, useState, useReducer } from "react";

import { dummydata } from "./dummydata";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchedClients = dummydata.filter((data) =>
    data.name.includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="App p-8">
      <InputWithLabel
        id="search"
        phText="search with name"
        value={searchTerm}
        onSearch={handleSearch}
      />
      <Table clients={searchedClients} />
    </div>
  );
}

{
  /* Table component */
}
const Table = ({ clients }) => {
  return (
    <div className="grid content-center items-center my-4">
      <table className="border-collapse min-w-3/6 text-left border border-gray-300">
        <thead className="border-b border-gray-300 bg-rose-50">
          <tr className="[&>th]:p-3 [&>th]:font-normal">
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Plot Size</th>
            <th>Plot No.</th>
            <th>Site Name</th>
            <th>Amount Paid</th>
            <th>Date Bought</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {clients.map((client) => (
            <tr
              key={client.id}
              className="[&>td]:p-3 border-b border-b-gray-300"
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
              <td>{client.plotSize}</td>
              <td>{client.plotNumber}</td>
              <td>{client.siteName}</td>
              <td>{client.amountPaid}</td>
              <td>{client.dateBought}</td>
              <td>
                <button className="cursor-pointer">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

{
  /* Input component */
}
const InputWithLabel = ({ id, type = "text", phText, value, onSearch }) => {
  return (
    <label htmlFor={id}>
      <input
        className="p-1 border border-gray-300"
        type={type}
        placeholder={phText}
        value={value}
        onChange={onSearch}
      />
    </label>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_CLIENTS":
      return {
        ...state,
        clients: action.payload,
      };
    case "GET_CLIENT":
      return {
        ...state,
        client: state.client.find((client) => client.id === action.payload.id),
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
