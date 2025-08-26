import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import InputWithLabel from "./components/InputWithLabel";
import "./App.css";

export default function App() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  const searchedClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      client.id.toString().includes(searchTerm.trim().toLocaleLowerCase()),
  );
  return (
    <div className="App p-4 bg-gray-50 h-full">
      {clients.length > 0 ? (
        <>
          <InputWithLabel
            label="search"
            placeholder="search clients by id or name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ClientsTable clients={searchedClients} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
