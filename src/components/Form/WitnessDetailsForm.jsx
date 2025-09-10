import InputWithLabel from "../InputWithLabel";

export default function WitnessDetailsForm({ formData, onChange }) {
  return (
    <>
      <div className="grid gap-2">
        <InputWithLabel
          label="name"
          id="name"
          placeholder="enter witness name"
          value={formData?.name || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="nrc"
          id="nrc"
          placeholder="enter witness nrc"
          value={formData?.nrc || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="phone"
          id="phone"
          type="tel"
          placeholder="enter witness phone number"
          value={formData?.phone || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="address"
          id="address"
          placeholder="enter witness residence"
          value={formData?.address || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="relationship to client"
          id="relationship"
          placeholder="enter witness relation to the buyer"
          value={formData?.relationship || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
