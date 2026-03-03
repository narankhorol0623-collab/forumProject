
import { ErrorMessage } from "./ErrorMessage";
import { Label } from "./Label";

export const Input = ({
  placeholderName,
  LabelValue,
  onChange,
  name,
  type,
  hidden = false,
  errors,
  formValues,
  value,
  ref,
}) => {
  return (
    <div className="flex flex-col">
      <Label value={LabelValue} />

      <input
        name={name}
        ref={ref}
        value={value}
        type={type}
        hidden={hidden}
        onChange={onChange}
        placeholder={placeholderName}
        className="border rounded-lg w-104px h-11 pl-3.25"
      />

      <ErrorMessage errors={errors} />
    </div>
  );
};

