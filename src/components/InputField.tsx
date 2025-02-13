import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field, useFormikContext } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rows,
  maxLength,
}: InputFieldProps) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    sessionStorage.setItem(name, value);
    setFieldValue(name, value);
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-light font-robotoRegular mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-2">*</span>}
        {maxLength && (
          <span className="text-white text-[12px] font-robotoRegular ml-2">{`(max ${maxLength} words)`}</span>
        )}
      </label>
      <div className="relative">
        <Field
          type={type !== "textarea" ? type : undefined}
          as={type === "textarea" ? "textarea" : undefined}
          name={name}
          rows={rows}
          maxLength={maxLength}
          className={`w-full resize-none outline-none placeholder:text-white p-3 border border-[#07373F] focus:border-[#24A0B5] rounded-lg text-white ${
            name === "email" ? "pl-10" : ""
          }`}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {name === "email" && (
          <EnvelopeIcon className="h-5 w-5 text-white absolute left-3 top-1/2 -translate-y-1/2" />
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 font-robotoRegular text-[12px] mt-1"
      />
    </div>
  );
};

export default InputField;
