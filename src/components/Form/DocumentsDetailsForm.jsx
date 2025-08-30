import InputWithLabel from "../InputWithLabel";

export default function DocumentsDetailsForm({ documentsFormData, onChange }) {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">documents info</h3>
        <p className="text-gray-600">provide documents information below</p>
      </div>
      <div>
        <InputWithLabel
          label="nrc link"
          placeholder="enter link to client's nrc"
          value={documentsFormData?.nrc_link || ""}
          onChange={onChange}
          id="nrc_link"
        />
        <InputWithLabel
          label="contract"
          placeholder="enter link to client's plot contract"
          value={documentsFormData?.contract || ""}
          onChange={onChange}
          id="contract"
        />
        <InputWithLabel
          label="other docs"
          placeholder="enter other related documents"
          value={documentsFormData?.other_docs || ""}
          onChange={onChange}
          id="other_docs"
        />
      </div>
    </>
  );
}
