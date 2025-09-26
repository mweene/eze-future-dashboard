export default function InputField({
  label,
  type = "text",
  value,
  multiple,
  pattern,
  placeholder,
  registration,
  error,
}) {
  const id = registration.name;
  const defaultStyles =
    "border px-2 py-1 rounded-xl border border-neutral-400 ";

  return (
    <div className={`grid gap-1`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        multiple={multiple}
        placeholder={placeholder}
        pattern={pattern}
        {...registration}
        autoComplete="true"
        name={id}
        className={`${defaultStyles}`}
      />
      {error && <span className="text-red-800">{error.message}</span>}
    </div>
  );
}
