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
      className={`py-2 px-4 border border-neutral-400 hover:bg-neutral-300 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
}
