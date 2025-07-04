import { useState } from "react";
import ActionsModel from "./ActionsModel";

const Table = ({ clients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid content-center items-center my-4">
      <table className="border-collapse min-w-3/6 text-left border border-gray-300">
        <thead className="border-b border-gray-300 bg-rose-50">
          <tr className="[&>th]:p-3 [&>th]:font-normal">
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
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
          {clients.map((client) => (
            <tr
              key={client.id}
              className="[&>td]:p-3 border-b border-b-gray-300"
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
              <td>{client.plotSize}</td>
              <td>{client.plotNumber}</td>
              <td>{client.siteName}</td>
              <td>{client.amountPaid}</td>
              <td>{client.dateBought}</td>
              <td>
                <button
                  className="cursor-pointer"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  {isModalOpen ? <ActionsModel /> : "..."}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
