import { useState } from "react";
import ClientsTableRow from "./ClientForm_Components/ClientTableRow";

export default function ClientsTable({
  clients,
  onDelete,
  getOneClient,
  onUpdateClient,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedboxes, setCheckedboxes] = useState({});

  const handleCheckedboxChange = (client_id, e) => {
    setCheckedboxes((prev) => ({ ...prev, [client_id]: e.target.checked }));
    setIsChecked((prev) => !prev);
  };

  const checkboxCount = Object.values(checkedboxes).filter((box) => box).length;

  const bulkActionsFunction = (clientsArray) => {
    const result = [];
    const boxes = Object.keys(checkedboxes).filter((key) => checkedboxes[key]);
    boxes.forEach((item) =>
      clientsArray.filter((client) =>
        client.client_id == item ? result.push(client) : null,
      ),
    );
    return result;
  };

  const handleExport = () => {
    console.log("export handler");
    const exportedClients = bulkActionsFunction(clients);
    console.log(exportedClients);
  };

  const handleDelete = () => {
    try {
      console.log("delete handler");
      const deletedClients = bulkActionsFunction(clients);
      deletedClients.forEach((client) => onDelete(client.client_id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-neutral-300 border-b-0 relative grid">
      <table className=" min-w-full text-left">
        <thead className="border-b border-neutral-300 bg-neutral-100">
          <tr className="[&>th]:capitalize [&>th]:font-normal [&>th]:text-neutral-700 [&>th]:p-2">
            <th>
              <input type="checkbox" />
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
              checkboxkey={client.client_id}
              onCheckboxChange={handleCheckedboxChange}
              client={client}
              onDelete={onDelete}
              isChecked={isChecked}
              getOneClient={getOneClient}
              onUpdateClient={onUpdateClient}
            />
          ))}
        </tbody>
      </table>
      {isChecked && (
        <BulkActions
          count={checkboxCount}
          onExport={handleExport}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

function BulkActions({ count, onExport, onDelete }) {
  return (
    <>
      <div className="justify-self-center absolute bottom-0 right-0 left-0 my-8 z-20 bg-white p-4 rounded-2xl w-fit flex gap-8 place-content-between shadow shadow-neutral-400/50 border border-neutral-300">
        <button
          className="border border-neutral-400 py-2 px-4 rounded-xl"
          onClick={onExport}
        >
          export {count} clients
        </button>
        <button
          className="border border-neutral-400 py-2 px-4 rounded-xl bg-neutral-950 text-white"
          onClick={onDelete}
        >
          delete {count} clients
        </button>
      </div>
    </>
  );
}
