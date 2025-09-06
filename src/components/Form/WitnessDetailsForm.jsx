import InputWithLabel from "../InputWithLabel";

export default function WitnessDetailsForm({ witnessFormData, onChange }) {
  return (
    <>
      <div>
        <InputWithLabel
          label="name"
          id="name"
          placeholder="enter witness name"
          value={witnessFormData?.name || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="nrc"
          id="nrc"
          placeholder="enter witness nrc"
          value={witnessFormData?.nrc || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="phone"
          id="phone"
          type="tel"
          placeholder="enter witness phone number"
          value={witnessFormData?.phone || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="address"
          id="address"
          placeholder="enter witness residence"
          value={witnessFormData?.address || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="relationship to client"
          id="relationship"
          placeholder="enter witness relation to the buyer"
          value={witnessFormData?.relationship || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
