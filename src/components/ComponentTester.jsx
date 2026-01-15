import { SelectField } from "./forms/SelectField";
import InputField from "./forms/InputField";
import Button from "./simple/Button";
import { useForm } from "react-hook-form";

export default function ComponentTester() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.auth_letter[0]);
  };
  return (
    <div className="my-8 w-1/2">
      <h1 className="text-2xl">Component Testing</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        <SelectField
          id="site"
          registration={register("site")}
          error={errors.site}
          options={sites}
        />
        <InputField
          label="plot number"
          type="number"
          placeholder="enter plot number"
          registration={register("plot_no")}
          error={errors.plot_no}
        />

        <InputField
          label="Authorization letter"
          type="file"
          multiple="true"
          registration={register("auth_letter")}
          error={errors.auth_letter}
        />

        <Button type="submit" className="my-4">
          submit form
        </Button>
      </form>
    </div>
  );
}

const sites = [
  { id: 1, name: "A" },
  { id: 2, name: "A+" },
  { id: 3, name: "B" },
  { id: 4, name: "C" },
  { id: 5, name: "D" },
  { id: 6, name: "F" },
  { id: 7, name: "G" },
];
