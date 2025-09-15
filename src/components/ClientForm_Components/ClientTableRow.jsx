import { useState } from "react";
import Actions from "./Actions";
import ClientForm from "../ClientForm";
import ViewClientDetailsModal from "./ViewClientDetails";
import { EllipsisVertical } from "lucide-react";

export default function ClientsTableRow({
  checkboxkey,
  client,
  onDelete,
  getOneClient,
  onUpdateClient,
}) {
  const [fullClientDetails, setFullClientDetails] = useState({});
  const [isActionsOpen, setIsActionOpen] = useState(false);
  const [isClientDetailsModalOpen, setIsClientDetailsModalOpen] =
    useState(false);
  const [isUpdateClientModalOpen, setIsUpdateClientModalOpen] = useState(false);
  const [onConfirmDelete, setOnConfirmDelete] = useState(false);

  const onViewDetails = async (client_id) => {
    try {
      const client = await getOneClient(client_id);
      setFullClientDetails(client);
      setIsClientDetailsModalOpen((prev) => !prev);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <tr
        className="[&>td]:p-2 [&>td]:max-w-[13ch] [&>td]:capitalize [&>td]:overflow-hidden
      [&>td]:text-ellipsis [&>td]:whitespace-nowrap border-b border-b-neutral-300 hover:bg-neutral-200 relative"
      >
        <td key={checkboxkey}>
          <input type="checkbox" />
        </td>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.nrc}</td>
        <td>{client.phone}</td>
        <td>{client.email}</td>
        <td>{client.address}</td>
        <td>
          <button
            onClick={() => setIsActionOpen((prev) => !prev)}
            className="px-0.5 py-1 border border-neutral-300 rounded-md hover:bg-white"
          >
            <EllipsisVertical size={17} />
          </button>
          {isActionsOpen && (
            <Actions
              client={client}
              handleIsOpen={() => {
                setFullClientDetails((prev) => !prev);
                setIsActionOpen((prev) => !prev);
              }}
              onOpenClientDetails={onViewDetails}
              onDelete={onDelete}
              onOpenUpdateModal={() =>
                setIsUpdateClientModalOpen((prev) => !prev)
              }
              onConfirmDelete={onConfirmDelete}
              setOnConfirmDelete={setOnConfirmDelete}
            />
          )}
          {isClientDetailsModalOpen && (
            <ViewClientDetailsModal
              clientDetails={fullClientDetails}
              isOpen={true}
              onClose={setIsClientDetailsModalOpen}
            />
          )}
          {isUpdateClientModalOpen && (
            <ClientForm
              mode="edit"
              client_id={client.id}
              onClose={() => setIsUpdateClientModalOpen((prev) => !prev)}
              onUpdateClient={onUpdateClient}
            />
          )}
        </td>
      </tr>
    </>
  );
}
