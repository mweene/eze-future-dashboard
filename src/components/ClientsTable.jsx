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
    console.log(checkedboxes);
  };

  return (
    <div className="rounded-xl border border-neutral-300 border-b-0 overflow-hidden relative grid">
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
            <th>total cost</th>
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
      {isChecked && <BulkActions />}
    </div>
  );
}

function BulkActions() {
  return (
    <>
      <div className="justify-self-center absolute bottom-0 right-0 left-0 my-8 z-20 bg-white p-4 rounded-2xl w-fit flex gap-8 place-content-between shadow shadow-neutral-300 border border-neutral-300">
        <button className="border border-neutral-400 py-2 px-4 rounded-xl">
          export selected clients
        </button>
        <button className="border border-neutral-400 py-2 px-4 rounded-xl bg-neutral-950 text-white">
          delete selected
        </button>
      </div>
    </>
  );
}
