import { ContainerPopover } from "@/components/ui/Container";
import { TypographyH1 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { shadow } from "@/lib/customTailwind";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background h-screen p-8">
      <ContainerPopover
        className={cn(
          "h-full max-w-6xl m-auto p-8 flex flex-col justify-center items-center gap-y-6 text-primary shadow-glow",
          shadow.g["2xl"]
        )}
      >
        <TypographyH1>
          Welcome to <span className="text-8xl">Portfolio Builder</span>
        </TypographyH1>
        <Button
          className="shadow-lg shadow-glow hover:shadow-glow hover:shadow-xl hover:scale-105"
          asChild
        >
          <Link href="/form">Let's Get Started</Link>
        </Button>
      </ContainerPopover>
    </main>
  );
}
