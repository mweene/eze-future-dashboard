export default function Button({
  type = "button",
  disabled,
  onClick,
  children,
  className,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`py-1 px-4 hover:bg-neutral-200 ${className}`}
    >
      {children}
    </button>
  );
}
