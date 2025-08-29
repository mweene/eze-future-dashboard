const InputWithLabel = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  onClick,
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
          autoComplete="true"
          onChange={onChange}
          onClick={onClick}
          placeholder={placeholder}
          className={`p-2 border border-gray-400 w-full ${styles}`}
        />
      </label>
    </>
  );
};

export default InputWithLabel;
