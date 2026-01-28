import { useState, useEffect } from "react";
import { Search, Filter, ClientsTable } from "./components";
import Form from "./components/forms/Forms";
import Button from "./components/simple/Button";
import "./App.css";
import axios from "axios";

export default function App() {
  const [clients, setClients] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const response = await axios.get(
        "http://localhost:4400/api/v1/dashboard",
      );
      const data = await response.data;
      setClients(data.data);
      setPagination(data.pagination);
      setFilteredClients(data.data);
    }
    load();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedClients = filteredClients.filter(
    (client) =>
      client.client_name
        .toLocaleLowerCase()
        .includes(searchTerm.trim().toLocaleLowerCase()) ||
      client.client_id === Number(searchTerm),
  );

  const handleFilter = (e, location) => {
    e.preventDefault();
    if (!location) {
      setFilteredClients(clients);
      return;
    }
    const temp = clients.filter(
      (client) =>
        client.siteName.toLocaleLowerCase() === location.toLocaleLowerCase(),
    );
    setFilteredClients(temp);
  };

  const handleCloseFilter = () => setIsOpen((prev) => !prev);

  //handlers for previous and next buttons
  const handlePrevious = async () => {
    const currentPage = pagination.currentPage;

    if (currentPage <= 1) return; // guard

    const response = await axios.get(
      `http://localhost:4400/api/v1/dashboard?page=${currentPage - 1}`,
    );

    const data = response.data;

    setClients(data.data);
    setFilteredClients(data.data); // IMPORTANT
    setPagination(data.pagination); // IMPORTANT
  };

  const handleNext = async () => {
    const nextPage = pagination.currentPage + 1;

    if (nextPage > pagination.totalPages) return;

    const response = await axios.get(
      `http://localhost:4400/api/v1/dashboard?page=${nextPage}`,
    );

    const data = response.data;

    setClients(data.data);
    setFilteredClients(data.data);
    setPagination(data.pagination);
  };
  /////////////////////////////////////////////

  return (
    <div className="px-4 bg-neutral-100">
      <div className="flex place-content-between relative py-2">
        <div className="flex gap-4">
          <Search value={searchTerm} onChange={handleChange} />
          <Filter
            isOpen={isOpen}
            onClose={handleCloseFilter}
            onClick={() => setIsOpen(!isOpen)}
            onFilter={handleFilter}
            onClearFilter={() => setFilteredClients(clients)}
          />
        </div>
        <Button
          onClick={() => setIsClientFormOpen((prev) => !prev)}
          className="p-1 border"
          data-cell="addclient"
        >
          add new client
        </Button>
        {isClientFormOpen && (
          <Form onClose={() => setIsClientFormOpen((prev) => !prev)} />
        )}
      </div>

      <div className="table w-full bg-white">
        {clients ? (
          <ClientsTable clients={searchedClients} />
        ) : (
          <p>something went wrong!</p>
        )}
      </div>
      <div className="flex place-content-between place-items-baseline">
        <p className="text-neutral-700">
          Showing{" "}
          <span className="text-black">
            Page {pagination.currentPage} of {pagination.totalPages} pages
          </span>
        </p>

        <div className="buttons flex gap-2 my-3">
          <Button onClick={handlePrevious}>previous</Button>
          <Button onClick={handleNext}>next</Button>
        </div>
      </div>
    </div>
  );
}
