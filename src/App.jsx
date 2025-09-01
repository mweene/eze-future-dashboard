import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import AddNewClient from "./components/AddNewClient";
import InputWithLabel from "./components/InputWithLabel";
import { Plus, Funnel } from "lucide-react";
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
    console.log(client);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(client),
    };
    const postClient = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/clients",
          options,
        );
        if (!response.ok) console.error("response was beyond bad");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    postClient();
  };

  const deleteClientHandler = (client) => {
    try {
      const client_id = client.id;
      (async () => {
        const response = await fetch(
          `http://localhost:5000/api/clients/${client_id}`,
          { method: "DELETE" },
        );
        const data = await response.text();
        if (response.ok) {
          console.log("resource deleted successfully");
          console.log(data);
        }
      })();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App p-4 h-full w-4xl text-neutral-950 bg-white">
      {clients.length > 0 ? (
        <>
          <div className="flex place-content-between place-items-center my-3 relative">
            <div className="flex gap-2">
              <InputWithLabel
                id="search"
                placeholder="search clients by id or name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="border border-neutral-300 text-neutral-500 px-4 flex place-items-center gap-1">
                <Funnel size={17} />
                Filter
              </button>
            </div>

            <button
              className="bg-neutral-950 text-white py-2.5 px-6 capitalize flex gap-2 place-items-center"
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
          <ClientsTable
            clients={searchedClients}
            onDelete={deleteClientHandler}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
