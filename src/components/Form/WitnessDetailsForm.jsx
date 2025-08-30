import InputWithLabel from "../InputWithLabel";

export default function WitnessDetailsForm({ witnessFormData, onChange }) {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">witness info</h3>
        <p className="text-gray-600">provide witness information below</p>
      </div>
      <div>
        <InputWithLabel
          label="name"
          placeholder="enter witness name"
          value={witnessFormData?.name || ""}
          onChange={onChange}
          id="name"
        />
        <InputWithLabel
          label="nrc"
          placeholder="enter witness nrc"
          value={witnessFormData?.nrc || ""}
          onChange={onChange}
          id="nrc"
        />
        <InputWithLabel
          label="phone"
          placeholder="enter witness phone number"
          value={witnessFormData?.phone || ""}
          onChange={onChange}
          id="phone"
        />
        <InputWithLabel
          label="address"
          placeholder="enter witness residence"
          value={witnessFormData?.address || ""}
          onChange={onChange}
          id="address"
        />
        <InputWithLabel
          label="relation to client"
          placeholder="enter witness relation to the buyer"
          value={witnessFormData?.relationship || ""}
          onChange={onChange}
          id="relationship"
        />
      </div>
    </>
  );
}
