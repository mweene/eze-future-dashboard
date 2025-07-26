import { useState } from "react";
import { UserRoundPen, UserRound, UserRoundX, X } from "lucide-react";
import ClientDetailsModal from "./ClientDetailsModal";

const ActionsModal = ({ onReveal, onEdit, onDelete, client }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const [confirmDeleteAction, setConfirmDeleteAction] = useState(false);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="absolute top-0 right-0 border border-gray-300 bg-white mr-6 mt-7 mx-4 p-3 grid gap-2.5 shadow shadow-gray-300 z-20">
      <button
        className="cursor-pointer bg-gray-50 w-fit justify-self-end border border-gray-300"
        onClick={onReveal}
      >
        <X size={17} />
      </button>

      <div className="flex flex-col gap-1.5">
        <EditClientRecord onClick={handleIsOpen}>
          <UserRound size={16} />
          View Details
        </EditClientRecord>
        <EditClientRecord onClick={onEdit}>
          <UserRoundPen size={16} />
          Edit Client
        </EditClientRecord>
        <EditClientRecord
          onClick={() => setConfirmDeleteAction((prev) => !prev)}
        >
          <UserRoundX size={16} />
          Delete Record
          {confirmDeleteAction && (
            <ConfirmAction client={client} onClick={() => onDelete(client)} />
          )}
        </EditClientRecord>
      </div>

      {isOpen && (
        <ClientDetailsModal
          client={client}
          isOpen={isDetailsOpen}
          handleIsOpen={() => setIsDetailsOpen((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default ActionsModal;

const EditClientRecord = ({ onClick, children }) => {
  return (
    <div
      className="py-1 px-1.5 border border-gray-200 hover:bg-gray-100 flex gap-1 items-baseline-last text-sm cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const ConfirmAction = ({ client, onClick }) => {
  return (
    <div className="absolute right-0 bottom-0 mr-36 p-4 bg-white border border-gray-300">
      <h2>Are you sure you want to delete {client.name}?</h2>
      <p>this action cannot be reversed</p>
      <button className="mx-0.5 p-0.5 border" onClick={onClick}>
        yes
      </button>
      <button className="p-0.5 border">no</button>
    </div>
  );
};
