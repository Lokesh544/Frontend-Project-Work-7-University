import { Input } from "@/components/ui/input";
import FormInputBase from "./FormInputBase";
import { formNameSchema } from "./Form";
import { shadow } from "@/lib/customTailwind";
import { cn } from "@/lib/utils";

export default function FormInput({ field }) {
  return (
    <FormInputBase field={field} className="sm:w-[48%]">
      <Input
        className={cn(shadow.g.base)}
        placeholder={formNameSchema[field.name]?.placeholder}
        {...field}
      />
    </FormInputBase>
  );
}
