import { useState } from "react";
import { X } from "lucide-react";
import InputWithLabel from "./InputWithLabel";

const filters = [
  { id: 0, title: "presets", options: ["one", "two"] },
  { id: 1, title: "payment status", options: ["fully paid", "owing"] },
  { id: 2, title: "allocated", options: ["yes", "no"] },
  { id: 3, title: "authorized", options: ["yes", "no"] },
  {
    id: 4,
    title: "location",
    options: ["6 miles", "10 miles", "15 miles", "shantumbu"],
  },
  {
    id: 5,
    title: "site name",
    options: ["ruby estate", "garden city", "sunset gardens"],
  },
];

export default function FilterOptions({ onClose }) {
  const [filtersState, setFiltersState] = useState({
    presets: "",
    paymentStatus: "",
    allocated: "",
    authorized: "",
    location: "",
    siteName: "",
  });

  const handleChange = (e) => {
    //setFiltersState((prev) => ({ ...prev, [id]: value }));
    console.log(e.target.name, e.target.value);
  };
  return (
    <>
      <div className="fixed inset-0 z-30 bg-neutral-700/60 grid">
        <div className="m-4 mt-20 ml-[23rem] justify-self-start bg-white h-fit border border-neutral-300 rounded-xl">
          <div className="">
            <div className="flex place-content-between border-b border-neutral-200">
              <h3>filters</h3>
              <button onClick={() => onClose((prev) => !prev)}>
                <X size={20} />
              </button>
            </div>
            <ul>
              {filters.map((filter) => (
                <li key={filter.id} className="cursor-pointer">
                  <FilterDetails
                    id={filter.id}
                    title={filter.title}
                    options={filter.options}
                    onChange={(e) => handleChange(e)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex place-content-between border-t border-neutral-200">
              <button onClick={() => onClose((prev) => !prev)}>cancel</button>
              <button>apply filters</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FilterDetails({ id, title, options, onChange }) {
  return (
    <>
      <details key={id}>
        <summary>{title}</summary>
        {options.map((option) => (
          <label>
            {option}
            <input
              type="radio"
              name={title}
              value={option}
              onChange={onChange}
            />
          </label>
        ))}
      </details>
    </>
  );
}
