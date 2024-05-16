import { Textarea } from "@/components/ui/textarea";
import FormInputBase from "./FormInputBase";
import { formNameSchema } from "./Form";
import { cn } from "@/lib/utils";
import { shadow } from "@/lib/customTailwind";

export default function FormTextArea({ field }) {
  return (
    <FormInputBase field={field}>
      <Textarea
        className={cn(shadow.g.base)}
        placeholder={formNameSchema[field.name]?.placeholder}
        {...field}
      />
    </FormInputBase>
  );
}
