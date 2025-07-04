const AddNewClient = ({ onClick, children }) => {
  return (
    <div className="relative">
      <button
        className="bg-rose-200 text-gray-950 py-2.5 px-4 cursor-pointer"
        onClick={onClick}
      >
        Add client
      </button>
      {children}
    </div>
  );
};

export default AddNewClient;
