import { ContainerAnimatedBorder } from "@/components/ui/Container";
import { TypographyH1 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background h-screen p-8 max-sm:px-2 max-sm:py-4">
      <ContainerAnimatedBorder
        className={cn(
          "bg-popover h-full max-w-6xl m-auto p-8 flex flex-col justify-center items-center gap-y-6 text-primary "
        )}
      >
        <TypographyH1>
          Welcome to{" "}
          <span className="text-[5rem] max-sm:text-5xl">Portfolio Builder</span>
        </TypographyH1>
        <Button
          className="max-sm:text-xs font-bold shadow-lg shadow-glow hover:shadow-glow hover:shadow-xl hover:scale-105"
          asChild
        >
          <Link href="/form">Let's Get Started</Link>
        </Button>
      </ContainerAnimatedBorder>
    </main>
  );
}
