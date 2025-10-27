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
      <label htmlFor={label} className="capitalize grid">
        {label}
        <input
          type={type}
          id={id}
          value={value}
          autoComplete="true"
          onChange={onChange}
          onClick={onClick}
          placeholder={placeholder}
          className={`p-2 border border-neutral-300 rounded-xl w-full focus:border-neutral-950 focus:border-2 outline-0 ${styles}`}
        />
      </label>
    </>
  );
};

export default InputWithLabel;
