const InputWithLabel = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <>
      <label htmlFor={label}>
        <input
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-2 border border-gray-400 my-2"
        />
      </label>
    </>
  );
};

export default InputWithLabel;
