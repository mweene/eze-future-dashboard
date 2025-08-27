const InputWithLabel = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  type = "text",
  styles,
}) => {
  return (
    <>
      <label htmlFor={label} className="capitalize">
        {label}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`p-2 border border-gray-400 w-full ${styles}`}
        />
      </label>
    </>
  );
};

export default InputWithLabel;
