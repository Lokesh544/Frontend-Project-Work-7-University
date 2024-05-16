"use client";

import {
  Container,
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
import { herfLink } from "@/lib/utils";
import { FileTextIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Portfolio({ portfolioData }) {
  const data =
    portfolioData || typeof sessionStorage != "undefined"
      ? JSON.parse(sessionStorage.getItem("portfolio"))
      : undefined;
  data?.skills && (data.skills = mapToList(data?.skills));
  data?.projects && (data.projects = mapToList(data?.projects));
  console.log(data);

  return (
    <main className="bg-background min-h-screen p-8">
      <Container className="min-h-full max-w-6xl m-auto p-8">
        <div className="flex h-[33vh] my-4">
          <div className="min-w-40 w-1/2 flex flex-col justify-center items-center">
            <TypographyH2>{data?.name}</TypographyH2>
            <TypographyP>{data?.jobProfile}</TypographyP>
          </div>
          <div className="grow">
            <Image src="" alt="" className="h-1/3" />
          </div>
        </div>
        <div className="flex h-[33vh] my-4">
          <div className="grow">
            <Image src="" alt="" className="h-1/3" />
          </div>
          <div className="min-w-40 w-1/2 flex flex-col justify-center items-center">
            <TypographyH2>{data?.job}</TypographyH2>
            <TypographyP>{data?.summary}</TypographyP>
          </div>
        </div>
        <div className="flex flex-col items-center capitalize my-4">
          <TypographyH2 className="m-4 p-2">Education</TypographyH2>
          <div className="w-full flex justify-around flex-wrap my-4">
            <ContainerPopover className="w-1/3 p-6 gap-4 flex flex-col items-center">
              <TypographyH4>School: {data?.school}</TypographyH4>
              <TypographyH4>Classes: {data?.schoolClasses}</TypographyH4>
              <TypographyH4>Year: {data?.schoolYear}</TypographyH4>
            </ContainerPopover>
            <ContainerPopover className="w-1/3 p-6 gap-4 flex flex-col items-center">
              <TypographyH4>College: {data?.college}</TypographyH4>
              <TypographyH4>Course: {data?.collegeCourse}</TypographyH4>
              <TypographyH4>Year: {data?.collegeYear}</TypographyH4>
            </ContainerPopover>
          </div>
        </div>
        {data?.projects && (
          <div className="flex flex-col items-center flex-wrap capitalize my-4">
            <TypographyH2 className="p-4">Projects</TypographyH2>
            <div className="w-full m-6 p-4 flex flex-wrap justify-center gap-4">
              {data.projects.map((ele, id) => (
                <ContainerPopover
                  className="max-w-60 py-2 px-3 text-center"
                  key={id}
                >
                  <TypographyH4 className="p-2">{ele.name}</TypographyH4>
                  <p className="leading-7 mt-1">Skills:</p>
                  <ContainerPopover className="m-2 mt-0 p-4 flex flex-wrap justify-center gap-4">
                    {mapToList(ele.skills).map((ele, id) => (
                      <Badge
                        className="py-1 px-3 shadow hover:scale-105 hover:shadow-lg"
                        key={id}
                      >
                        {ele}
                      </Badge>
                    ))}
                  </ContainerPopover>
                  <Button
                    className="p-2 shadow hover:scale-105 hover:shadow-lg"
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
          <div className="flex flex-col items-center flex-wrap capitalize my-4">
            <TypographyH2 className="p-4">Skills</TypographyH2>
            <ContainerPopover className="w-full m-6 p-4 flex flex-wrap justify-center gap-4">
              {data.skills.map((ele, id) => (
                <Badge
                  className="py-1 px-3 shadow hover:scale-105 hover:shadow-lg"
                  key={id}
                >
                  {ele}
                </Badge>
              ))}
            </ContainerPopover>
          </div>
        )}
        <div className="flex flex-col items-center flex-wrap capitalize my-4">
          <TypographyH2 className="p-4">Contact</TypographyH2>
          <ContainerPopover className="my-4 p-4 w-2/3">
            <TypographyH4 className="text-center">Get in Touch</TypographyH4>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </div>
            <div>
              <Label htmlFor="number">Phone Number</Label>
              <Input id="number" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
            </div>
            <div className="flex justify-center">
              <Button
                className="m-4 shadow-lg hover:scale-105 hover:shadow-xl"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </ContainerPopover>
          <div className="w-full flex justify-center gap-10">
            <Button
              className="shadow-lg hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href={"tel:" + data?.number} target="blank">
                <PhoneIcon /> Number
              </a>
            </Button>
            <Button
              className="shadow-lg hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a
                href={data?.resumeLink ? herfLink(data.resumeLink) : ""}
                target="blank"
              >
                <FileTextIcon /> Resume
              </a>
            </Button>
            <Button
              className="shadow-lg hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href={"mailto:" + data?.email} target="blank">
                <MailIcon /> Email
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

function mapToList(map) {
  const arr = [];
  for (let i in map) {
    arr.push(map[i]);
  }
  return arr;
}
