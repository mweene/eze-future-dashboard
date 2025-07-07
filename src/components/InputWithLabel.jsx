const InputWithLabel = ({
  id,
  type = "text",
  phText,
  value,
  onChange,
  maxLength,
  required = true,
}) => {
  return (
    <div className="grid">
      <label htmlFor={id} className="capitalize">
        {id}
      </label>
      <input
        className="p-2 border border-gray-300"
        type={type}
        placeholder={phText}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        name={id}
        required={required}
      />
    </div>
  );
};

export default InputWithLabel;
