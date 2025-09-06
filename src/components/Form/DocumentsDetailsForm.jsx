import InputWithLabel from "../InputWithLabel";

export default function DocumentsDetailsForm({ documentsFormData, onChange }) {
  return (
    <>
      <div className="grid gap-2">
        <InputWithLabel
          label="nrc link"
          id="nrc_link"
          type="link"
          placeholder="enter link to client's nrc"
          value={documentsFormData?.nrc_link || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="contract"
          id="contract"
          type="link"
          placeholder="enter link to client's plot contract"
          value={documentsFormData?.contract || ""}
          onChange={onChange}
        />
        <InputWithLabel
          label="other docs"
          id="other_docs"
          type="link"
          placeholder="enter other related documents"
          value={documentsFormData?.other_docs || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
