import ClientsTableRow from "./ClientForm_Components/ClientTableRow";

export default function ClientsTable({
  clients,
  onDelete,
  getOneClient,
  onUpdateClient,
}) {
  return (
    <div className="rounded-xl border border-neutral-300 border-b-0 overflow-hidden">
      <table className=" min-w-full text-left">
        <thead className="border-b border-neutral-300 bg-neutral-100">
          <tr className="[&>th]:capitalize [&>th]:font-normal [&>th]:text-neutral-700 [&>th]:p-2">
            <th>
              <input type="checkbox" />
            </th>
            <th>id</th>
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
              client={client}
              onDelete={onDelete}
              getOneClient={getOneClient}
              onUpdateClient={onUpdateClient}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
