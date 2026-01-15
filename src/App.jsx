import { useState, useEffect } from "react";
import { Search, Filter, ClientsTable } from "./components";
import Form from "./components/forms/Forms";
import Button from "./components/simple/Button";
import ComponentTester from "./components/ComponentTester";
import "./App.css";

export default function App() {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4040/api/dashboard");
      const data = await response.json();
      console.log(data);
      setClients(data.data);
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

  return (
    <div className="p-4 bg-neutral-100">
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

      <div className="table w-full">
        {clients ? (
          <ClientsTable clients={searchedClients} />
        ) : (
          <p>something went wrong!</p>
        )}
      </div>

      <ComponentTester />
    </div>
  );
}
