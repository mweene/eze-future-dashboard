import ClientsTableRow from "./ClientForm_Components/ClientTableRow";

export default function ClientsTable({ clients, onDelete }) {
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
              checkboxkey={client.id}
              client={client}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
