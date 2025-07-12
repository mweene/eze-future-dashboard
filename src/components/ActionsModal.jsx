import { UserPen, UserRound, UserRoundX } from "lucide-react";
const ActionsModal = () => {
  return (
    <div className="absolute top-0 right-0 border bg-white my-5 mx-4 p-3 z-10">
      <div className="flex flex-col gap-1">
        <EditClientRecord>
          <UserRound size={18} />
          Details
        </EditClientRecord>
        <EditClientRecord>
          <UserPen size={18} />
          Edit
        </EditClientRecord>
        <EditClientRecord>
          <UserRoundX size={18} color="#e11633" />
          Delete
        </EditClientRecord>
      </div>
    </div>
  );
};

export default ActionsModal;

const EditClientRecord = ({ children }) => {
  return (
    <button className="py-1 px-1.5 bg-gray-200 flex gap-1 items-baseline-last text-sm">
      {children}
    </button>
  );
};
