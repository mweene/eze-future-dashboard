import { X, Edit, Trash2, UserRound } from "lucide-react";

export default function Actions({
  client,
  handleIsOpen,
  onOpenClientDetails,
  onOpenUpdateModal,
  onDelete,
  onConfirmDelete,
  setOnConfirmDelete,
}) {
  return (
    <div className="absolute top-0 right-0 m-4 p-2 z-20 bg-white border border-neutral-300 rounded-xl grid shadow shadow-neutral-200">
      <button
        className="p-1 border border-neutral-200 bg-neutral-100 rounded-md justify-self-end"
        onClick={handleIsOpen}
      >
        <X size={17} />
      </button>
      <div className="grid gap-1 mt-4">
        <button
          className="rounded-md capitalize flex place-items-center gap-1 py-2 px-3 hover:bg-neutral-100"
          onClick={() => onOpenClientDetails(client.id)}
        >
          <UserRound size={17} />
          View details
        </button>
        <button
          className="rounded-md capitalize flex place-items-center gap-1 py-2 px-3 hover:bg-neutral-100"
          onClick={() => {
            onOpenUpdateModal();
          }}
        >
          <Edit size={17} />
          update
        </button>
        <button
          className="rounded-md capitalize flex place-items-center gap-1 py-2 px-3 hover:bg-neutral-100"
          onClick={() => setOnConfirmDelete((prev) => !prev)}
        >
          <Trash2 size={17} />
          delete
          {onConfirmDelete && (
            <DeleteConfirmationModal
              onDelete={() => onDelete(client)}
              onCancel={() => setOnConfirmDelete}
            />
          )}
        </button>
      </div>
    </div>
  );
}

function DeleteConfirmationModal({ onDelete, onCancel }) {
  return (
    <div className="absolute bottom-0 right-0 mb-[-4.5rem] mr-16 p-4 z-30 bg-red-50 text-red-950 border border-red-950/20 rounded-xl">
      <div className="mb-3">
        <p>Are you sure you want to delete</p>
        <p>this action cannot be reversed</p>
      </div>
      <div className="flex gap-2 place-content-center">
        <a
          className="border border-neutral-300 py-0.5 px-2 rounded-lg text-neutral-700 bg-white/20"
          onClick={() => onCancel((prev) => !prev)}
        >
          cancel
        </a>
        <a
          className="border border-red-950/20 py-0.5 px-2 rounded-lg text-red-950 bg-red-200"
          onClick={onDelete}
        >
          delete client
        </a>
      </div>
    </div>
  );
}
