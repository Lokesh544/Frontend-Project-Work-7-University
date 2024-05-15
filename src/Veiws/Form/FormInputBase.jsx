import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { formNameSchema } from "./Form";

export default function FormInputBase({ field, children, className }) {
  return (
    <FormItem className={cn("shrink-0 w-full", className)}>
      <FormLabel>{formNameSchema[field.name]?.title}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormDescription>
        {formNameSchema[field.name]?.description}
      </FormDescription>
      <FormMessage />
    </FormItem>
  );
}
