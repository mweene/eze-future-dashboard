import { useState } from "react";
import { Search } from "lucide-react";
import Table from "./components/Table";
import InputWithLabel from "./components/InputWithLabel";
import AddNewClient from "./components/AddNewClient";
import ExportClientData from "./components/ExportClientData";
import ClientDetailsModal from "./components/ClientDetailsModal";

import { dummydata } from "./dummydata";
import FilterClientData from "./components/FilterClientData";

export default function App() {
  const [clients, setClients] = useState(dummydata);
  const [searchTerm, setSearchTerm] = useState("");
  const [showClientDetails, setShowClientDetails] = useState(false);

  const [client, setClient] = useState({});
  const handleShowClientDetails = (c) => {
    setClient(c);
    setShowClientDetails((prev) => !prev);
  };

  const handleDeleteRecord = (c) => {
    const newClients = clients.filter((client) => client.id !== c.id);
    setClients(newClients);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchedClients = clients.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
  return (
    <div className="App py-8 px-16 bg-gray-50 h-full text-[.94rem]">
      <div className="relative p-4 border border-gray-300 bg-white">
        <div className="flex place-content-between gap-2">
          <div className="flex gap-3 place-items-center">
            <div className="flex gap-1.5 items-center border border-gray-600 p-2">
              <Search size={16} />
              <InputWithLabel
                phText="Search by name..."
                styles="border-transparent outline-none"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <FilterClientData data={""} />
          </div>

          <div className="flex gap-3">
            <ExportClientData clients={clients} />
            <AddNewClient clients={clients} updateClients={setClients} />
          </div>
        </div>
        {Object.entries(clients)?.length > 0 && (
          <Table
            clients={searchedClients}
            showClientDetails={handleShowClientDetails}
            onDelete={handleDeleteRecord}
          />
        )}
        {showClientDetails && <ClientDetailsModal client={client} />}
      </div>
    </div>
  );
}
