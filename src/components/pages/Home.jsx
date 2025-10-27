import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import ClientsTable from "../ClientsTable";
import ClientForm from "../ClientForm";
import FilterOptions from "../Filters";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPinned,
  SearchIcon,
  FileChartLine,
  UsersRound,
  FolderClosed,
  File,
  BadgeDollarSign,
  SlidersHorizontal,
} from "lucide-react";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openAddClient, setOpenAddClient] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const url = `http://localhost:5000/api/clients`;

  // Wrap fetchData in useCallback to prevent recreation on every render
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/clients?page=${currentPage}&limit=${clientsPerPage}`,
      );
      const data = response.data;
      setTotalPages(data.pagination.totalPages);
      setClients(data.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [currentPage, clientsPerPage]);

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

    getOneClient: async (client_id) => {
      try {
        const response = await axios.get(`${url}/${client_id}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },

    deleteClient: async (client_id) => {
      try {
        const response = await axios.delete(`${url}/${client_id}`);
        const newClients = clients.filter((c) => c.id !== client_id);
        setClients(newClients);
        console.log("client successfully deleted:", response);
      } catch (error) {
        console.error(error);
      }
    },
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  const searchedClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      client.client_id
        .toString()
        .includes(searchTerm.trim().toLocaleLowerCase()),
  );

  return (
    <div className="h-full text-neutral-950 w-full">
      {clients.length > 0 ? (
        <div className="border border-neutral-200 bg-white p-4 rounded-xl">
          <div className="flex place-content-between place-items-center mb-3 relative">
            <div className="">
              <div className="flex gap-2 relative">
                <Search
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="border border-neutral-300 text-neutral-950 px-4 flex place-items-center gap-1 rounded-xl hover:border-neutral-950 hover:border-2"
                  onClick={() => setOpenFilter((prev) => !prev)}
                >
                  <SlidersHorizontal size={17} />
                  Filters
                </button>
              </div>
              {openFilter && <FilterOptions onClose={setOpenFilter} />}
            </div>

            <button
              className="bg-neutral-950 text-white py-2.5 px-5 capitalize flex gap-1.5 place-items-center rounded-xl"
              onClick={() => setOpenAddClient((prev) => !prev)}
            >
              add new client
              <ChevronDown size={20} />
            </button>
            {openAddClient && (
              <ClientForm
                onClose={setOpenAddClient}
                mode="add"
                onAddClient={handlers.addClient}
              />
            )}
          </div>
          <ClientsTable
            clients={searchedClients}
            getOneClient={handlers.getOneClient}
            onDelete={handlers.deleteClient}
            onUpdateClient={handlers.updateClient}
          />

          <div className="flex place-content-between place-items-center mt-3">
            <div className="">
              <span>
                <span className="text-neutral-600">Showing </span>
                Page {currentPage} of {totalPages} Pages
              </span>
            </div>
            <div className="flex gap-2 place-items-center">
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

const Search = ({ onChange, value }) => {
  return (
    <label
      htmlFor="search"
      className="border border-neutral-300 focus:border-neutral-950 focus:border-2 rounded-xl flex gap-1 place-items-center p-2"
    >
      <SearchIcon size={20} color="#a1a1a1" />
      <input
        id="search"
        type="search"
        placeholder="Search for Clients"
        value={value}
        onChange={onChange}
        className="w-full outline-0"
      />
    </label>
  );
};
