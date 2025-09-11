import { useEffect } from "react";
import { X } from "lucide-react";

export default function ViewClientDetailsModal({
  clientDetails,
  isOpen,
  onClose,
}) {
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
}
