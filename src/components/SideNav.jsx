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
    <ContainerPopover className="p-4 gap-2 w-auto fixed right-2 top-1/3 flex flex-col items-center shadow-glow shadow-lg">
      <Button className="text-lg" asChild>
        <Link href="form">F</Link>
      </Button>
      <Button className="text-lg" asChild>
        <Link href="portfolio">P</Link>
      </Button>
      <Popover>
        <Button className="p-2 text-lg" asChild>
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
            onClick={() => {
              setMode(0);
              saveMode(0);
            }}
          >
            Light
          </Button>
          <Button
            onClick={() => {
              setMode(1);
              saveMode(1);
            }}
          >
            Dark
          </Button>
          <Button
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
