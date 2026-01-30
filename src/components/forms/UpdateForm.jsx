import { useState } from "react";

export default function UpdateForm({ update }) {
  const [formData, setFormData] = useState({});

  return <div>{update ? <UpdateClient /> : <AddClient />}</div>;
}

const UpdateClient = () => {
  return (
    <>
      <form action="">
        <legend>update client form</legend>
        <input type="text" placeholder="name" />
        <button type="submit">update client info</button>
      </form>
    </>
  );
};

const AddClient = () => {
  return (
    <>
      <form action="">
        <legend>add client form</legend>
        <input type="text" placeholder="name" />
        <button type="submit">add client info</button>
      </form>
    </>
  );
};
