import InputWithLabel from "../InputWithLabel";

export default function ClientDetailsForm({ clientFormData, onChange }) {
  return (
    <div className="grid gap-2">
      <InputWithLabel
        placeholder="enter your name"
        label="name"
        id="name"
        styles="grid"
        value={clientFormData?.name || ""}
        onChange={onChange}
      />
      <InputWithLabel
        placeholder="enter your nrc"
        label="nrc"
        id="nrc"
        styles="grid"
        value={clientFormData?.nrc || ""}
        onChange={onChange}
      />
      <InputWithLabel
        placeholder="enter your phone"
        label="phone"
        id="phone"
        type="tel"
        styles="grid"
        value={clientFormData?.phone || ""}
        onChange={onChange}
      />
      <InputWithLabel
        placeholder="enter your email"
        label="email"
        type="email"
        id="email"
        styles="grid"
        value={clientFormData?.email || ""}
        onChange={onChange}
      />
      <InputWithLabel
        placeholder="enter your adress"
        label="address"
        id="address"
        styles="grid"
        value={clientFormData?.address || ""}
        onChange={onChange}
      />
    </div>
  );
}
