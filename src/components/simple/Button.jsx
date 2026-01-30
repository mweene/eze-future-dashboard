export default function Button({
  type = "button",
  disabled,
  onClick,
  children,
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`p-1 border hover:bg-neutral-300 ${className}`}
    >
      {children}
    </button>
  );
}
