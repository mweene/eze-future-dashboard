export default function InputField({
  label,
  type = "text",
  pattern,
  placeholder,
  registration,
  error,
}) {
  const id = registration.name;

  return (
    <div className="grid gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        {...registration}
        autoComplete="true"
        name={id}
        className="border px-2 py-1"
      />
      {error && <span className="text-red-800">{error.message}</span>}
    </div>
  );
}
