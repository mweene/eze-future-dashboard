import { UserRoundPen, UserRound, UserRoundX, X } from "lucide-react";
import ClientDetailsModal from "./ClientDetailsModal";

const ActionsModal = ({
  onReveal,
  onShowDetails,
  onEdit,
  onDelete,
  client,
}) => {
  return (
    <div className="absolute top-0 right-0 border border-gray-400 bg-white my-5 mx-4 p-3 z-10 grid gap-2.5">
      <button
        className="cursor-pointer bg-gray-50 w-fit justify-self-end border border-gray-300"
        onClick={onReveal}
      >
        <X size={19} />
      </button>

      <div className="flex flex-col gap-1.5">
        <EditClientRecord client={client} onClick={() => onShowDetails(client)}>
          <UserRound size={16} />
          Details
        </EditClientRecord>
        <EditClientRecord onClick={onEdit}>
          <UserRoundPen size={16} />
          Edit
        </EditClientRecord>
        <EditClientRecord onClick={() => onDelete(client)}>
          <UserRoundX size={16} />
          Delete
        </EditClientRecord>
      </div>
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
