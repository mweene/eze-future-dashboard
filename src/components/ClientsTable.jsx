import { Edit, FileUser, Trash2 } from "lucide-react";
import UpdateForm from "./forms/UpdateForm";
import Button from "./simple/Button";
import { useState } from "react";

export default function ClientsTable({ clients }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="block overflow-x-scroll h-[79dvh]">
      <table className="border-collapse text-left w-full">
        <thead className="">
          <tr className="[&>td]:border [&>td]:border-neutral-500 [&>td]:p-2 [&>td]:font-semibold [&>td]:uppercase [&>td]:text-[.93rem]">
            <td>
              <input type="checkbox" />
            </td>
            <td>id</td>
            <td>name</td>
            <td>phone</td>
            <td>site name</td>
            <td>plot No</td>
            <td>plot size</td>
            <td>payment status</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody className="">
          {clients.map((client) => (
            <tr
              key={client.client_id}
              className="[&>td]:border [&>td]:border-neutral-500 [&>td]:p-2"
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{client.client_id}</td>
              <td>{client.client_name}</td>
              <td>{client.client_phone}</td>
              <td>{client.site_name}</td>
              <td>{client.plot_no}</td>
              <td>{client.plot_size}</td>
              <td>
                <span className="border border-neutral-500 p-1">
                  {convertToPaymentStatus(
                    client.total_amount,
                    client.amount_paid,
                  )}
                </span>
              </td>
              <td>
                <Actions onEdit={() => setIsFormOpen((prev) => !prev)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && <UpdateForm />}
    </div>
  );
}

//helper function
const convertToPaymentStatus = (totalAmount, amountPaid) => {
  if (totalAmount === amountPaid) return "fully paid";
  if (amountPaid > totalAmount / 2) return "pending";
  return "reserved";
};

//make into seperate component
function Actions({ onEdit }) {
  return (
    <div className="flex gap-3">
      <Button className="border-0 p-0.5" onClick={onEdit}>
        <Edit size={19} />
      </Button>
      <Button className="border-0 p-0.5">
        <Trash2 size={19} />
      </Button>
      <Button className="border-0 p-0.5">
        <FileUser size={19} />
      </Button>
    </div>
  );
}
