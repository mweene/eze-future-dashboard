import { useState } from "react";
import "./App.css";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import Table from "./components/Table";
import InputWithLabel from "./components/InputWithLabel";
import AddNewClient from "./components/AddNewClient";
import ExportClientData from "./components/ExportClientData";
import FilterClientData from "./components/FilterClientData";
import SidePanel from "./components/SidePanel";
import SelectPaymentStatus from "./components/SeleteMultipleOptions";

import { clientsData } from "./dummydata";
import SelectMultipleOptions from "./components/SeleteMultipleOptions";

export default function App() {
  const [clients, setClients] = useState(clientsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteRecord = (c) => {
    const newClients = clients.filter((client) => client.id !== c.id);
    setClients(newClients);
    console.log(c);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const searchedClients = clients.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
  return (
    <div className="App m-4 bg-gray-50 h-full text-[.94rem]">
      <div>
        <div className="relative p-4 border border-gray-300 bg-white">
          <div className="flex place-content-between gap-2">
            <div className="flex gap-3 place-items-center">
              <div className="flex gap-1.5 items-center border border-gray-400 text-gray-500 p-2">
                <Search size={16} />
                <InputWithLabel
                  phText="Search clients by Name,ID or NRC..."
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
            <Table clients={searchedClients} onDelete={handleDeleteRecord} />
          )}

          <section className="flex place-content-between place-items-center">
            <p className="text-gray-600">
              Showing <span className="text-black">Page 1 of 53 Pages</span>
            </p>
            <div className="flex items-center">
              <ChevronLeft />
              <div className="flex items-center gap-8">
                <p className="border border-gray-300 py-0.5 px-2">1</p>
                <p>2</p>
                <p>...</p>
                <p>22</p>
                <p>23</p>
              </div>
              <ChevronRight />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
