import InputWithLabel from "../InputWithLabel";

export default function DocumentsDetailsForm({ formData, onChange }) {
  return (
    <>
      <div className="grid gap-2">
        <InputWithLabel
          label="nrc link"
          id="id_copy"
          type="link"
          placeholder="enter link to client's nrc"
          value={formData?.id_copy || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="contract"
          id="contract"
          type="link"
          placeholder="enter link to client's plot contract"
          value={formData?.contract || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="other doc"
          id="other_doc"
          type="link"
          placeholder="enter other related documents"
          value={formData?.other_doc || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
