const InputWithLabel = ({
  id,
  type = "text",
  phText,
  value,
  onChange,
  maxLength,
  required = true,
  styles = "p-2 border border-gray-300",
}) => {
  const defaultStyles = "p-2 border border-300";
  return (
    <div className="grid">
      <label htmlFor={id} className="capitalize">
        {id}
      </label>
      <input
        className={styles || defaultStyles}
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
