"use client";

import { ContainerPopover } from "./ui/Container";
import { Button } from "./ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SideNav() {
  function saveMode(mode) {
    localStorage.setItem("systemMode", mode);
  }
  const [mode, setMode] = useState();

  useEffect(() => {
    setMode(parseInt(localStorage.getItem("systemMode")));
  }, []);
  useEffect(() => {
    if (mode == 2) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    }
    if (mode == 1) document.body.classList.add("dark");
    if (mode == 0) document.body.classList.remove("dark");
  }, [mode]);

  return (
    <ContainerPopover className="p-4 max-sm:p-2 gap-2 max-sm:gap-1 w-auto fixed right-2 top-1/3 flex flex-col items-center shadow-glow shadow-lg">
      <Button
        className="text-lg max-sm:text-base font-bold h-fit max-sm:py-1 max-sm:px-3"
        asChild
      >
        <Link href="form">F</Link>
      </Button>
      <Button
        className="text-lg max-sm:text-base font-bold h-fit max-sm:py-1 max-sm:px-3"
        asChild
      >
        <Link href="portfolio">P</Link>
      </Button>
      <Popover>
        <Button
          className="p-2 text-lg max-sm:text-base h-fit max-sm:py-1 max-sm:px-1"
          asChild
        >
          <PopoverTrigger>
            {mode == 2 ? (
              <LaptopIcon />
            ) : mode == 1 ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </PopoverTrigger>
        </Button>
        <PopoverContent className="flex gap-2 w-fit mx-2 shadow-lg shadow-glow">
          <Button
            className="max-sm:text-sm font-bold h-fit max-sm:py-1 max-sm:px-3"
            onClick={() => {
              setMode(0);
              saveMode(0);
            }}
          >
            Light
          </Button>
          <Button
            className="max-sm:text-sm font-bold h-fit max-sm:py-1 max-sm:px-3"
            onClick={() => {
              setMode(1);
              saveMode(1);
            }}
          >
            Dark
          </Button>
          <Button
            className="max-sm:text-sm font-bold h-fit max-sm:py-1 max-sm:px-3"
            onClick={() => {
              setMode(2);
              saveMode(2);
            }}
          >
            System
          </Button>
        </PopoverContent>
      </Popover>
    </ContainerPopover>
  );
}
