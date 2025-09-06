import { useState, useEffect } from "react";
import ClientForm from "./ClientForm";
import { X, EllipsisVertical } from "lucide-react";

const ClientsTable = ({ clients, onDelete }) => {
  return (
    <div className="rounded-xl border border-neutral-300 border-b-0 overflow-hidden">
      <table className=" min-w-full text-left">
        <thead className="border-b border-neutral-300 bg-neutral-100">
          <tr className="[&>th]:capitalize [&>th]:font-normal [&>th]:text-neutral-700 [&>th]:p-2">
            <th>
              <input type="checkbox" />
            </th>
            <th>id</th>
            <th>name</th>
            <th>nrc</th>
            <th>phone</th>
            <th>email</th>
            <th>address</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientsTableRow
              key={client.id}
              client={client}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ClientsTableRow = ({ client, onDelete }) => {
  const [fullClientDetails, setFullClientDetails] = useState({});
  const [isActionsOpen, setIsActionOpen] = useState(false);
  const [isClientDetailsModalOpen, setIsClientDetailsModalOpen] =
    useState(false);
  const [isUpdateClientModalOpen, setIsUpdateClientModalOpen] = useState(false);

  //change this later
  const [updateClient, setUpdateClient] = useState({});

  const onViewDetails = (client_id) => {
    fetch(`http://localhost:5000/api/clients/${client_id}`)
      .then((res) => res.json())
      .then((data) => {
        setFullClientDetails(data);
      })
      .catch((err) => console.error(err.message));

    setIsClientDetailsModalOpen((prev) => !prev);
  };

  //change this aswell
  const onFetchClientData = async (client_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/clients/${client_id}`,
      );
      const data = await response.json();
      setUpdateClient(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <tr
        className="[&>td]:p-2 [&>td]:max-w-[13ch] [&>td]:capitalize [&>td]:overflow-hidden
      [&>td]:text-ellipsis [&>td]:whitespace-nowrap border-b border-b-neutral-300 hover:bg-neutral-200 relative"
      >
        <td>
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
              onFetch={onFetchClientData}
              onDelete={onDelete}
              onOpenUpdateModal={() =>
                setIsUpdateClientModalOpen((prev) => !prev)
              }
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
              client={updateClient}
              onClose={() => setIsUpdateClientModalOpen((prev) => !prev)}
            />
          )}
        </td>
      </tr>
    </>
  );
};

const Actions = ({
  client,
  handleIsOpen,
  onOpenClientDetails,
  onOpenUpdateModal,
  onFetch,
  onDelete,
}) => {
  return (
    <div className="absolute top-0 right-0 m-4 p-2 z-20 bg-white border border-neutral-300 rounded-xl grid shadow shadow-neutral-200">
      <button
        className="p-1 border border-neutral-200 bg-neutral-100 rounded-md justify-self-end"
        onClick={handleIsOpen}
      >
        <X size={17} color="gray" />
      </button>
      <div className="grid gap-1 mt-4">
        <button
          className="py-1 px-4 border border-neutral-300 text-neutral-600 rounded-md capitalize"
          onClick={() => onOpenClientDetails(client.id)}
        >
          details
        </button>
        <button
          className="p-1 border border-neutral-300 text-neutral-600 rounded-md capitalize"
          onClick={() => {
            onOpenUpdateModal();
            onFetch(client.id);
          }}
        >
          update
        </button>
        <button
          className="p-1 border border-red-900/70 bg-red-900 text-white rounded-md capitalize"
          onClick={() => onDelete(client)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

const ViewClientDetailsModal = ({ clientDetails, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  return (
    <div className="fixed inset-0 bg-neutral-700/60 grid z-20">
      <div className="bg-white m-4 w-fit rounded-xl grid justify-self-end border border-neutral-300 overflow-auto">
        <div className="flex place-items-center place-content-between p-4 border-b border-neutral-300">
          <h3 className="capitalize text-neutral-500">full client details</h3>
          <button
            className="flex place-items-center p-1 border border-neutral-200 bg-neutral-100 rounded-md"
            onClick={() => onClose((prev) => !prev)}
          >
            <X size={17} color="gray" />
          </button>
        </div>
        <ul className="grid gap-1.5 p-6 overflow-auto">
          {Object.entries(clientDetails).map(([key, value]) => {
            if (
              key === "documents" &&
              Array.isArray(value) &&
              value.length > 0
            ) {
              const docObj = value[0];
              return Object.entries(docObj).map(([docKey, docValue]) => (
                <li key={`${key}-${docKey}`}>
                  <span>{docKey}: </span>
                  <span>{String(docValue)}</span>
                </li>
              ));
            }

            // Handle nested objects
            if (
              typeof value === "object" &&
              value !== null &&
              !Array.isArray(value)
            ) {
              return Object.entries(value).map(([nestedKey, nestedValue]) => (
                <li key={`${key}-${nestedKey}`}>
                  <span>{nestedKey}: </span>
                  <span>{String(nestedValue)}</span>
                </li>
              ));
            }

            // Handle primitive values
            return (
              <li key={key}>
                <span>{key}: </span>
                <span>{String(value)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ClientsTable;
