const InputWithLabel = ({
  id,
  type = "text",
  label,
  phText,
  value,
  onChange,
  maxLength,
  required = true,
  multiple = false,
  styles = "p-2 border border-gray-300",
}) => {
  return (
    <div className="grid">
      <label htmlFor={id} className="capitalize">
        {label}
      </label>
      <input
        className={styles}
        type={type}
        placeholder={phText}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        name={id}
        required={required}
        multiple={multiple}
      />
    </div>
  );
};

export default InputWithLabel;
