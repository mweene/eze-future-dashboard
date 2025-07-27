const SelectMultipleOptions = ({ status, label, options, onChange }) => {
  return (
    <div>
      <label htmlFor={label} className="">
        {label}
      </label>
      <select
        id={label}
        name={label}
        value={status}
        onChange={onChange}
        className="cursor-pointer border border-gray-300"
      >
        <option value="" disabled>
          Select one option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMultipleOptions;
