const InputWithLabel = ({
  id,
  type = "text",
  phText,
  value,
  onChange,
  maxLength,
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
      />
    </div>
  );
};

export default InputWithLabel;
