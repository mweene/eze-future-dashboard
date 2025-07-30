import AddNewClientModal from "./AddNewClientModal";

const EditClientModal = ({ client }) => {
  return (
    <div
      key={client.id}
      className="absolute right-0 left-0 mr-[10rem] mt-[-15rem] z-20"
    >
      <AddNewClientModal />
    </div>
  );
};

export default EditClientModal;
