import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import AddNewClient from "./components/AddNewClient";
import InputWithLabel from "./components/InputWithLabel";
import { Plus } from "lucide-react";
import "./App.css";

export default function App() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [OpenAddClient, setOpenAddClient] = useState(false);
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

  const addClientHandler = (client) => {
    setClients([...clients, client]);
  };
  return (
    <div className="App p-4 h-full w-4xl text-gray-950 bg-white">
      {clients.length > 0 ? (
        <>
          <div className="flex place-content-between place-items-center my-3 relative">
            <InputWithLabel
              id="search"
              placeholder="search clients by id or name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-gray-950 text-white py-2.5 px-6 capitalize flex gap-2 place-items-center"
              onClick={() => setOpenAddClient((prev) => !prev)}
            >
              <Plus size={19} />
              add new client
            </button>
            {OpenAddClient && (
              <AddNewClient
                onOpenAddClient={setOpenAddClient}
                addClientHandler={addClientHandler}
              />
            )}
          </div>
          <ClientsTable clients={searchedClients} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
