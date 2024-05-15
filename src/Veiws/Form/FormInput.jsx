import { Input } from "@/components/ui/input";
import FormInputBase from "./FormInputBase";
import { formNameSchema } from "./Form";

export default function FormInput({ field }) {
  return (
    <FormInputBase field={field} className="w-[48%]">
      <Input placeholder={formNameSchema[field.name]?.placeholder} {...field} />
    </FormInputBase>
  );
}
