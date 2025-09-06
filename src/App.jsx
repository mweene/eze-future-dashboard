import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import ClientForm from "./components/ClientForm";
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
          console.log("resource deleted successfully", "data:", data);
          const newClients = clients.filter(
            (client) => client.id !== client_id,
          );
          setClients(newClients);
        }
      })();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App p-4 h-full w-4xl text-neutral-950">
      {clients.length > 0 ? (
        <div className="border border-neutral-200 bg-white p-4 rounded-2xl">
          <div className="flex place-content-between place-items-center mb-3 relative">
            <div className="flex gap-2">
              <InputWithLabel
                id="search"
                type="search"
                placeholder="search clients by id or name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="border border-neutral-300 text-neutral-500 px-4 flex place-items-center gap-1 rounded-xl">
                <Funnel size={17} />
                Filter
              </button>
            </div>

            <button
              className="bg-neutral-950 text-white py-2.5 px-4 capitalize flex gap-1.5 place-items-center rounded-xl"
              onClick={() => setOpenAddClient((prev) => !prev)}
            >
              <Plus size={19} />
              add new client
            </button>
            {OpenAddClient && (
              <ClientForm
                onClose={setOpenAddClient}
                addClientHandler={addClientHandler}
                mode="add"
              />
            )}
          </div>
          <ClientsTable
            clients={searchedClients}
            onDelete={deleteClientHandler}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
