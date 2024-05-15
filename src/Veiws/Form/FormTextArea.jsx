import { Textarea } from "@/components/ui/textarea";
import FormInputBase from "./FormInputBase";
import { formNameSchema } from "./Form";

export default function FormTextArea({ field }) {
  return (
    <FormInputBase field={field}>
      <Textarea
        placeholder={formNameSchema[field.name]?.placeholder}
        {...field}
      />
    </FormInputBase>
  );
}
