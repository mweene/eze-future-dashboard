import axios from "axios";
import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import ClientForm from "./components/ClientForm";
import InputWithLabel from "./components/InputWithLabel";
import { ChevronDown, ChevronLeft, ChevronRight, Funnel } from "lucide-react";
import "./App.css";

export default function App() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [OpenAddClient, setOpenAddClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);

  const url = `http://localhost:5000/api/clients`;
  const handlers = {
    addClient: async (formData) => {
      try {
        const response = await axios.post(url, formData);
        return response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    updateClient: async (client_id, formData) => {
      try {
        const response = await axios.put(`${url}/${client_id}`, formData);
        return response;
      } catch (error) {
        console.error(error);
      }
    },

    getAllClients: async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/clients?page=${currentPage}&limit=${clientsPerPage}`,
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },

    getOneClient: async (client_id) => {
      console.log(client_id);
      try {
        const response = await axios.get(`${url}/${client_id}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },

    deleteClient: async (client_id) => {
      try {
        const response = await axios.delete(`${url}/${client_id.id}`);
        const newClients = clients.filter((c) => c.id !== client_id);
        setClients(newClients);
        console.log("client successfully deleted:", response);
      } catch (error) {
        console.error(error);
      }
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedClients = await handlers.getAllClients();
        setTotalPages(fetchedClients.pagination.totalPages);
        setClients(fetchedClients.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [currentPage, clientsPerPage]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  const searchedClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      client.id.toString().includes(searchTerm.trim().toLocaleLowerCase()),
  );

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
              <button className="border border-neutral-300 text-neutral-950 px-4 flex place-items-center gap-1 rounded-xl">
                <Funnel size={17} />
                Filter
              </button>
            </div>

            <button
              className="bg-neutral-950 text-white py-2.5 px-5 capitalize flex gap-1.5 place-items-center rounded-xl"
              onClick={() => setOpenAddClient((prev) => !prev)}
            >
              add new client
              <ChevronDown size={20} />
            </button>
            {OpenAddClient && (
              <ClientForm
                onClose={setOpenAddClient}
                onAddClient={handlers.addClient}
                onUpdateClient={handlers.updateClient}
                mode="add"
              />
            )}
          </div>
          <ClientsTable
            clients={searchedClients}
            getOneClient={handlers.getOneClient}
            onDelete={handlers.deleteClient}
            onUpdateClient={handlers.updateClient}
          />

          <div className="flex place-content-between place-items-center">
            <div className="">
              <span>
                <span className="text-neutral-600">Showing </span>
                Page {currentPage} of {totalPages} Pages
              </span>
            </div>
            <div className="flex gap-2 place-items-center my-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex place-items-center gap-1 border border-neutral-300 rounded-lg px-2 py-0.5"
              >
                <ChevronLeft size={19} />
                Prev
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={
                  "flex place-items-center gap-1 border border-neutral-300 rounded-lg px-2 py-0.5"
                }
              >
                Next
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
