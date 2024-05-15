import { cn } from "@/lib/utils";

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
