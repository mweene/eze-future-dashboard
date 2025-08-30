import InputWithLabel from "../InputWithLabel";

export default function PlotDetailsForm({ plotFormData, onChange }) {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">plot info</h3>
        <p className="text-gray-600">provide plot information below</p>
      </div>
      <InputWithLabel
        label="plot number"
        id="plot_number"
        placeholder="plot number e.g A2, B34"
        value={plotFormData?.plot_number || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="plot size"
        id="plot_size"
        placeholder="plot size e.g 20m x 20m"
        value={plotFormData?.plot_size || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="location"
        id="location"
        placeholder="site location e.g 10 miles mungule"
        value={plotFormData?.location || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="site plan link"
        id="site_plan_link"
        placeholder="site plan link e.g https://gdrive.com/kj5nalkkl"
        value={plotFormData?.site_plan_link || ""}
        onChange={onChange}
      />
    </>
  );
}
