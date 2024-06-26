"use client";

import {
  Container,
  ContainerAnimatedBorder,
  ContainerBase,
  ContainerPopover,
} from "@/components/ui/Container";
import {
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { shadow } from "@/lib/customTailwind";
import { cn, herfLink, mapToList } from "@/lib/utils";
import { FileTextIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Portfolio({ portfolioData }) {
  const data =
    portfolioData || typeof localStorage != "undefined"
      ? JSON.parse(localStorage.getItem("portfolio"))
      : undefined;
  data?.skills && (data.skills = mapToList(data?.skills));
  data?.projects && (data.projects = mapToList(data?.projects));

  return (
    <main className="bg-background min-h-screen p-8 max-sm:px-2 max-sm:py-4">
      <ContainerAnimatedBorder
        className={cn("min-h-full max-w-6xl m-auto p-8 max-sm:p-3")}
      >
        <div className="flex max-sm:flex-col-reverse sm:h-[40vh] mb-8 max-sm:mb-4">
          <div className="min-w-40 sm:w-1/2 flex flex-col justify-center items-center">
            <TypographyH2 className="capitalize text-shadow-xl">
              {data?.name}
            </TypographyH2>
            <TypographyP>{data?.jobProfile}</TypographyP>
          </div>
          <div className="grow">
            <Image
              src={data?.titlePhotoURL}
              alt="Title Pic"
              width="400"
              height="300"
              className="rounded-lg h-full mx-auto"
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col sm:h-[40vh] my-4 max-sm:my-2">
          <div className="grow">
            <Image
              src={data?.aboutMePhotoURL}
              alt="About Pic"
              width="400"
              height="300"
              className="rounded-lg h-full mx-auto"
            />
          </div>
          <div className="min-w-40 sm:w-1/2 flex flex-col justify-center items-center">
            <TypographyH2 className="capitalize text-shadow-xl">
              {data?.job}
            </TypographyH2>
            <TypographyP>{data?.summary}</TypographyP>
          </div>
        </div>
        <div className="flex flex-col items-center capitalize my-4 max-sm:my-2">
          <TypographyH2 className="capitalize m-4 max-sm:m-2 p-2 text-shadow-xl">
            Education
          </TypographyH2>
          <div className="w-full flex max-sm:flex-col justify-around flex-wrap gap-y-4 my-4 max-sm:my-2">
            <ContainerPopover
              className={cn(
                "sm:w-1/3 p-6 max-sm:p-3 gap-4 max-sm:gap-2 flex flex-col items-center shadow-glow hover:scale-105",
                shadow.g.md
              )}
            >
              <TypographyH4 className="capitalize">
                School: {data?.school}
              </TypographyH4>
              <TypographyH4>Classes: {data?.schoolClasses}</TypographyH4>
              <TypographyH4>Year: {data?.schoolYear}</TypographyH4>
            </ContainerPopover>
            <ContainerPopover
              className={cn(
                "sm:w-1/3 p-6 max-sm:p-3 gap-4 max-sm:gap-2 flex flex-col items-center shadow-glow hover:scale-105",
                shadow.g.md
              )}
            >
              <TypographyH4 className="capitalize">
                College: {data?.college}
              </TypographyH4>
              <TypographyH4>Course: {data?.collegeCourse}</TypographyH4>
              <TypographyH4>Year: {data?.collegeYear}</TypographyH4>
            </ContainerPopover>
          </div>
        </div>
        {data?.projects && (
          <div className="flex flex-col items-center flex-wrap capitalize my-4 max-sm:my-2">
            <TypographyH2 className="p-4 max-sm:p-2 text-shadow-xl">
              Projects
            </TypographyH2>
            <div className="w-full m-6 max-sm:m-2 p-4 max-sm:p-2 flex flex-wrap justify-center gap-4">
              {data.projects.map((ele, id) => (
                <ContainerPopover
                  className={cn(
                    "w-72 max-sm:w-full py-2 px-3 text-center shadow-glow hover:scale-105",
                    shadow.g.md
                  )}
                  key={id}
                >
                  <TypographyH4 className="p-2">{ele.name}</TypographyH4>
                  <p className="leading-7 mt-1">Skills:</p>
                  <ContainerPopover
                    className={cn(
                      "m-2 mt-0 p-4 max-sm:p-2 flex flex-wrap justify-center gap-4 max-sm:gap-2 shadow-glow",
                      shadow.g.base
                    )}
                  >
                    {mapToList(ele.skills).map((ele, id) => (
                      <SkillBadge key={id}>{ele}</SkillBadge>
                    ))}
                  </ContainerPopover>
                  <Button
                    className="block normal-case p-2 text-ellipsis overflow-hidden whitespace-nowrap shadow-glow text-shadow-md hover:scale-105 hover:text-shadow-lg"
                    variant="link"
                    asChild
                  >
                    <a
                      className="text-center w-full"
                      href={herfLink(ele?.link)}
                      target="blank"
                    >
                      {ele?.link || "Link Not Provided"}
                    </a>
                  </Button>
                </ContainerPopover>
              ))}
            </div>
          </div>
        )}
        {data?.skills && (
          <div className="flex flex-col items-center flex-wrap capitalize my-4 max-sm:my-2 px-6 max-sm:px-3">
            <TypographyH2 className="capitalize p-4 max-sm:p-2 text-shadow-xl">
              Skills
            </TypographyH2>
            <ContainerPopover
              className={cn(
                "w-full my-6 max-sm:my-3 p-4 max-sm:p-2 flex flex-wrap justify-center gap-4 max-sm:gap-2 shadow-glow",
                shadow.g.base
              )}
            >
              {data.skills.map((ele, id) => (
                <SkillBadge key={id}>{ele}</SkillBadge>
              ))}
            </ContainerPopover>
          </div>
        )}
        <div className="flex flex-col items-center flex-wrap capitalize my-4 max-sm:my-2">
          <TypographyH2 className="capitalize p-4 max-sm:p-2 text-shadow-xl">
            Contact
          </TypographyH2>
          <ContainerPopover
            className={cn(
              "my-4 max-sm:my-2 p-4 max-sm:p-3 w-2/3 max-sm:w-full shadow-glow",
              shadow.g.lg
            )}
          >
            <TypographyH4 className="text-center">Get in Touch</TypographyH4>
            <div className="my-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" className={cn(shadow.g.base)} />
            </div>
            <div className="my-3">
              <Label htmlFor="number">Phone Number</Label>
              <Input id="number" className={cn(shadow.g.base)} />
            </div>
            <div className="my-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" className={cn(shadow.g.base)} />
            </div>
            <div className="flex justify-center">
              <Button
                className="m-4 max-sm:m-3 shadow-lg shadow-glow-foreground hover:shadow-glow-foreground hover:scale-105 hover:shadow-xl"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </ContainerPopover>
          <div className="w-full my-2 flex max-sm:flex-col justify-center gap-10 max-sm:gap-5">
            <Button
              className="shadow-lg shadow-glow-foreground hover:shadow-glow-foreground hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href={"tel:" + data?.number} target="blank">
                <PhoneIcon className="mr-2" /> Number
              </a>
            </Button>
            <Button
              className="shadow-lg shadow-glow-foreground hover:shadow-glow-foreground hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a
                href={data?.resumeLink ? herfLink(data.resumeLink) : ""}
                target="blank"
              >
                <FileTextIcon className="mr-2" /> Resume
              </a>
            </Button>
            <Button
              className="shadow-lg shadow-glow-foreground hover:shadow-glow-foreground hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href={"mailto:" + data?.email} target="blank">
                <MailIcon className="mr-2" /> Email
              </a>
            </Button>
          </div>
        </div>
      </ContainerAnimatedBorder>
    </main>
  );
}

function SkillBadge({ children, className, ...props }) {
  return (
    <Badge
      className={cn(
        "py-1 px-3 shadow shadow-glow-foreground hover:shadow-glow-foreground hover:scale-105 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </Badge>
  );
}
