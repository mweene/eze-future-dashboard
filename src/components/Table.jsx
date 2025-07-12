import { useState } from "react";
import ActionsModal from "./ActionsModal";

const Table = ({ clients }) => {
  return (
    <div className="grid content-center items-center my-4">
      <table className="border-collapse min-w-3/6 text-left border border-gray-300">
        <thead className="border-b border-gray-300 bg-rose-50">
          <tr className="[&>th]:p-3 [&>th]:font-normal [&>th]:capitalize">
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>NRC</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Plot Size</th>
            <th>Plot No.</th>
            <th>Site Name</th>
            <th>Amount Paid</th>
            <th>Date Bought</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {clients.map((c) => (
            <TableRow key={c.id} client={c} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const TableRow = ({ client }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <tr
      className="[&>td]:p-3 [&>td]:max-w-[13ch] [&>td]:capitalize [&>td]:overflow-hidden
      [&>td]:text-ellipsis [&>td]:whitespace-nowrap border-b border-b-gray-300 relative"
    >
      <td>
        <input type="checkbox" />
      </td>
      <td>{client.id}</td>
      <td>{client.name}</td>
      <td>{client.nrc}</td>
      <td>{client.phone}</td>
      <td>{client.address}</td>
      <td>{client.plotSize}</td>
      <td>{client.plotNumber}</td>
      <td>{client.siteName}</td>
      <td>{client.amountPaid}</td>
      <td>{client.dateBought}</td>
      <td className="text-center">
        <button
          className="cursor-pointer after:content-[''] p-0.5 border border-gray-300"
          onClick={() => setIsModelOpen((prev) => !prev)}
        >
          {isModelOpen ? <ActionsModal /> : "..."}
        </button>
      </td>
    </tr>
  );
};
