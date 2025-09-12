import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import ClientForm from "./components/ClientForm";
import InputWithLabel from "./components/InputWithLabel";
import { Plus, Funnel } from "lucide-react";
import "./App.css";
import { clientAPI } from "./api/clients";

export default function App() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [OpenAddClient, setOpenAddClient] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clients = await clientAPI.fetchAllClients();
        setClients(clients.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const searchedClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      client.id.toString().includes(searchTerm.trim().toLocaleLowerCase()),
  );

  const addClientHandler = (client) => {
    const postClient = async () => {
      try {
        const response = await clientAPI.addClient(client);
        setClients([...clients, client]);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    postClient();
  };

  const deleteClientHandler = (client) => {
    try {
      const client_id = client.id;
      console.log(client);
      (async () => {
        const response = await clientAPI.deleteClient(client_id);
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

  //handle all client CRUD operations
  const handlers = {
    //get all client records
    getAllClients: async () => clientAPI.fetchAllClients(),

    // get a single client by id
    getOneClient: async (client_id) => clientAPI.getOneClient(client_id),

    //create a new client
    addNewClient: async (clientData) => {
      try {
        const response = await clientAPI.addClient(clientData);
        if (response.ok) {
          setClients([...clients, clientData]);
        }
        console.log("successfully added client");
      } catch (error) {
        setError(error);
        console.error(error.message);
      }
    },

    //update exsiting client
    updateClient: async (client_id, clientData) => {
      if (clientData && client_id) return;
    },
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
