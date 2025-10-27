import { useState } from "react";
import ClientsTableRow from "./ClientForm_Components/ClientTableRow";

export default function ClientsTable({
  clients,
  onDelete,
  getOneClient,
  onUpdateClient,
}) {
  const [selectedClients, setSelectedClients] = useState([]);
  const allSelected =
    clients.length > 0 && selectedClients.length === clients.length;
  const toggleAll = () =>
    allSelected
      ? setSelectedClients([])
      : setSelectedClients(clients.map((client) => client.client_id));
  const toggleOne = (client_id) =>
    setSelectedClients((prev) =>
      prev.includes(client_id)
        ? prev.filter((id) => id !== client_id)
        : [...prev, client_id],
    );

  const handlers = {
    export: (data) => console.log("exporting data", data),
    delete: (data) => {
      data.forEach((id) => onDelete(id));
      console.log("deleting clients");
    },
  };
  return (
    <div className="border border-neutral-300 border-b-0 relative grid">
      <table className=" min-w-full text-left">
        <thead className="border-b border-neutral-300 bg-neutral-100">
          <tr className="[&>th]:capitalize [&>th]:font-normal [&>th]:text-neutral-700 [&>th]:p-2">
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleAll}
              />
            </th>
            <th>ID</th>
            <th>name</th>
            <th>phone</th>
            <th>site name</th>
            <th>plot size</th>
            <th>amount paid</th>
            <th>balance</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientsTableRow
              key={client.client_id}
              client={client}
              checkboxkey={client.client_id}
              checked={selectedClients.includes(client.client_id)}
              onToggle={() => toggleOne(client.client_id)}
              onDelete={onDelete}
              getOneClient={getOneClient}
              onUpdateClient={onUpdateClient}
            />
          ))}
        </tbody>
      </table>
      {selectedClients.length > 0 && (
        <BulkActions
          count={selectedClients.length}
          onExport={() => handlers.export(selectedClients)}
          onDelete={() => handlers.delete(selectedClients)}
        />
      )}
    </div>
  );
}

function BulkActions({ count, onExport, onDelete }) {
  return (
    <>
      <div className="justify-self-center absolute bottom-0 right-0 left-0 my-8 z-10 bg-white p-4 rounded-2xl w-fit flex gap-8 place-content-between shadow shadow-neutral-400/50 border border-neutral-300">
        <button
          className="border border-neutral-400 py-2 px-4 rounded-xl"
          onClick={onExport}
        >
          Export {count} selected {count > 1 ? "clients" : "client"}
        </button>
        <button
          className="border border-neutral-400 py-2 px-4 rounded-xl bg-neutral-950 text-white"
          onClick={onDelete}
        >
          Delete {count} selected {count > 1 ? "clients" : "client"}
        </button>
      </div>
    </>
  );
}
