export default function ClientsTable({ clients }) {
  return (
    <div className="block overflow-x-scroll h-[79dvh] border-y border-neutral-400">
      <table className="border-collapse text-left w-full">
        <thead className="">
          <tr className="[&>td]:border [&>td]:p-2 [&>td]:font-semibold [&>td]:uppercase [&>td]:text-[.93rem]">
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
            <tr key={client.client_id} className="[&>td]:border [&>td]:p-2">
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
                {convertToPaymentStatus(
                  client.total_amount,
                  client.amount_paid,
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const convertToPaymentStatus = (totalAmount, amountPaid) => {
  if (totalAmount === amountPaid) return "fully paid";
  if (amountPaid > totalAmount / 2) return "pending";
  return "reserved";
};
