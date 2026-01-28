export const SelectField = ({ id, label, registration, error, options }) => {
  return (
    <div className="grid" key={id}>
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        {...registration}
        defaultValue=""
        className="p-2 border overflow-scroll"
      >
        <option value="" disabled className="pointer-events-none">
          --- Select a {id} ---
        </option>
        {options.map((option) => (
          <option key={option.name} value={option.name} className="text-black">
            {option.name}
          </option>
        ))}
      </select>
      {error && <span className="text-red-900">{error.message}</span>}
    </div>
  );
};
