import InputWithLabel from "../InputWithLabel";

export default function PlotDetailsForm({ formData, onChange }) {
  return (
    <div className="grid gap-2">
      <InputWithLabel
        label="plot number"
        id="plot_number"
        placeholder="plot number e.g A2, B34"
        value={formData?.plot_number || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="plot size"
        id="plot_size"
        placeholder="plot size e.g 20m x 20m"
        value={formData?.plot_size || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="location"
        id="location"
        placeholder="site location e.g 10 miles mungule"
        value={formData?.location || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="site name"
        id="site_name"
        type="text"
        placeholder="site site e.g site A,H,N+"
        value={formData?.site_name || ""}
        onChange={onChange}
      />
      <InputWithLabel
        label="site plan link"
        id="site_plan_link"
        type="link"
        placeholder="site plan link e.g https://gdrive.com/kj5nalkkl"
        value={formData?.site_plan_link || ""}
        onChange={onChange}
      />
    </div>
  );
}
