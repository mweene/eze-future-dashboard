import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import ActionsModal from "./ActionsModal";
import InputWithLabel from "./InputWithLabel";

const Table = ({ clients, onDelete }) => {
  const clientTableData = clients.map((c) => ({
    id: c.id,
    name: c.name,
    nrc: c.nrc,
    phone: c.phone,
    plotSize: c.plotDetails.plotSize,
    siteName: c.plotDetails.siteName,
    amountPaid: c.plotDetails.amountPaid,
    paymentStatus: c.plotDetails.paymentStatus,
    dateBought: c.plotDetails.dateBought,
  }));
  console.log(clientTableData);

  return (
    <div className="grid content-center items-center my-4 bg-white">
      <table className="border-collapse min-w-2/3 text-left border border-gray-300">
        <thead className="border-b border-gray-200 bg-gray-100">
          <tr className="[&>th]:p-3 [&>th]:font-medium [&>th]:capitalize text-gray-600 ">
            <th>
              <InputWithLabel type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>NRC</th>
            <th>Phone</th>
            <th>Plot Size</th>
            <th>Site Name</th>
            <th>Amount Paid</th>
            <th>Payment Status</th>
            <th>Date Bought</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {clientTableData.map((c) => (
            <TableRow
              key={c.id}
              fullClientData={clients.find((client) => client.id === c.id)}
              client={c}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const TableRow = ({ fullClientData, client, onDelete }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleModalReveal = () => setIsModelOpen((prev) => !prev);

  return (
    <tr
      className="[&>td]:p-3 [&>td]:max-w-[13ch] [&>td]:capitalize [&>td]:overflow-hidden
      [&>td]:text-ellipsis [&>td]:whitespace-nowrap border-b border-b-gray-300 hover:bg-gray-50 relative"
    >
      <td>
        <input type="checkbox" />
      </td>
      <td>{client.id}</td>
      <td>{client.name}</td>
      <td>{client.nrc}</td>
      <td>{client.phone}</td>
      <td>{client.plotSize}</td>
      <td>{client.siteName}</td>
      <td>K{client.amountPaid}</td>
      <td className="payment_status">
        <span className={client.paymentStatus}>{client.paymentStatus}</span>
      </td>
      <td>{client.dateBought}</td>
      <td className="text-center">
        <button
          className="cursor-pointer py-1 border border-gray-200 hover:bg-gray-300"
          onClick={() => setIsModelOpen((prev) => !prev)}
        >
          <EllipsisVertical size={17} />
        </button>
        {isModelOpen && (
          <ActionsModal
            client={fullClientData}
            onReveal={handleModalReveal}
            onDelete={onDelete}
          />
        )}
      </td>
    </tr>
  );
};
