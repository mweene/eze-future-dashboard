import { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";

const ClientsTable = ({ clients, onDelete }) => {
  return (
    <>
      <table className="border-collapse min-w-2/3 w-full text-left border border-gray-300">
        <thead className="border-b border-gray-200 bg-gray-100">
          <tr className="[&>th]:capitalize [&>th]:font-normal [&>th]:text-neutral-700 [&>th]:p-2">
            <th>
              <input type="checkbox" />
            </th>
            <th>id</th>
            <th>name</th>
            <th>nrc</th>
            <th>phone</th>
            <th>email</th>
            <th>address</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientsTableRow
              key={client.id}
              client={client}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

const ClientsTableRow = ({ client, onDelete }) => {
  const [isActionsOpen, setIsActionOpen] = useState(false);
  const onViewDetails = (client) => {
    fetch(`http://localhost:5000/api/clients/${client.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message));
  };
  return (
    <>
      <tr
        className="[&>td]:p-2 [&>td]:max-w-[13ch] [&>td]:capitalize [&>td]:overflow-hidden
      [&>td]:text-ellipsis [&>td]:whitespace-nowrap border-b border-b-gray-300 hover:bg-gray-200 relative"
      >
        <td>
          <input type="checkbox" />
        </td>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.nrc}</td>
        <td>{client.phone}</td>
        <td>{client.email}</td>
        <td>{client.address}</td>
        <td>
          <button onClick={() => setIsActionOpen((prev) => !prev)}>
            <EllipsisVertical size={17} />
          </button>
          {isActionsOpen && (
            <Actions
              client={client}
              handleIsOpen={() => setIsActionOpen((prev) => !prev)}
              onViewDetails={onViewDetails}
              onDelete={onDelete}
            />
          )}
        </td>
      </tr>
    </>
  );
};

const Actions = ({ client, handleIsOpen, onViewDetails, onDelete }) => {
  return (
    <div className="absolute top-0 right-0 m-4 p-2 z-20 bg-white border border-gray-400">
      <button onClick={handleIsOpen}>
        <X size={17} />
      </button>
      <div className="grid gap-2">
        <button onClick={() => onViewDetails(client)}>view details</button>
        <button>update</button>
        <button onClick={() => onDelete(client)}>delete</button>
      </div>
    </div>
  );
};

export default ClientsTable;
