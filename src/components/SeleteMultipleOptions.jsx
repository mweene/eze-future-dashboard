const SelectMultipleOptions = ({ status, label, name, options, onChange }) => {
  const fieldName = name || label;
  return (
    <div>
      <label htmlFor={fieldName} className="">
        {label}
      </label>
      <select
        id={fieldName}
        name={fieldName}
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
