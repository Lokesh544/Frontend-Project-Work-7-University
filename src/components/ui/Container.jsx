import { cn } from "@/lib/utils";
import style from "./Container.module.css";

export function ContainerBase({ children, className, ...props }) {
  return (
    <div
      className={cn("rounded-xl border-border border", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Container({ children, className, ...props }) {
  return (
    <ContainerBase className={cn("bg-background", className)} {...props}>
      {children}
    </ContainerBase>
  );
}

export function ContainerPopover({ children, className, ...props }) {
  return (
    <ContainerBase className={cn("bg-popover", className)} {...props}>
      {children}
    </ContainerBase>
  );
}

export function ContainerAnimatedBorder({ children, className, ...props }) {
  return (
    <ContainerBase
      className={cn(
        "[--border-width:0.75rem] max-sm:[--border-width:0.5rem]",
        className,
        "max-sm:p-[--border-width] p-[--border-width] block overflow-hidden border-0 bg-inherit"
      )}
    >
      <ContainerBase
        className={cn(style.ContainerAnimatedBorder, "bg-inherit", className)}
        {...props}
      >
        {children}
      </ContainerBase>
    </ContainerBase>
  );
}
