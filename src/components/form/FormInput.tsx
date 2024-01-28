import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const FormInput = ({ type, name, label }: TInputProps) => {
  return (
    <div className="mb-4">
      {label ? <label className="block text-gray-700 font-semibold">{label}</label> : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            className="border border-green-500 rounded-md py-2 px-3 mt-1 w-full"
            {...field}
            type={type}
            id={name}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
