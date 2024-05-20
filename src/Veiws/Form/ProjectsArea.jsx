"use client";

import {
  Container,
  ContainerBase,
  ContainerPopover,
} from "@/components/ui/Container";
import { TypographyH4 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, herfLink } from "@/lib/utils";
import { useState } from "react";
import SkillsArea from "./SkillsArea";
import { shadow } from "@/lib/customTailwind";

export default function ProjectsArea({ field }) {
  if (typeof field?.value == "undefined") field.value = {};
  function updateField(value) {
    field.onChange(value);
  }

  const [projectId, setProjectId] = useState(1);
  const projects = [];
  for (let i in field.value) {
    if (parseInt(i) >= projectId) setProjectId(parseInt(i) + 1);
    projects.push(
      <ContainerPopover
        key={i}
        className={cn(
          "min-w-40 w-[30%] h-fit shrink-0 p-4 shadow-glow",
          shadow.g.base
        )}
      >
        <TypographyH4 className="text-center my-2">
          {field.value[i]?.name || `Project ${i}`}
        </TypographyH4>
        <SkillsArea
          field={{
            value: field.value[i]?.skills,
            onChange: () => {},
          }}
          disableAdd={true}
          disableDelete={true}
        />
        <Button
          className="block normal-case text-ellipsis overflow-hidden whitespace-nowrap shadow-glow text-shadow-md hover:scale-105 hover:text-shadow-lg"
          variant="link"
          asChild
        >
          <a
            className="text-center w-full"
            href={herfLink(field.value[i]?.link)}
            target="blank"
          >
            {field.value[i]?.link || "Link Not Provided"}
          </a>
        </Button>
        <ContainerBase className="flex justify-around border-0 my-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-semibold shadow-glow hover:shadow-glow-foreground shadow-lg">
                Edit
              </Button>
            </DialogTrigger>
            <ProjectDialog
              title="Edit Project"
              projectData={field.value[i]}
              onSubmit={(projectData) => {
                let value = field.value;
                value[i] = projectData;
                updateField(value);
              }}
            />
          </Dialog>
          <Button
            variant="destructive"
            className="font-semibold shadow-red-300 hover:shadow-red-500 shadow-md"
            onClick={() => {
              let value = field.value;
              delete value[i];
              updateField(value);
            }}
          >
            Delete
          </Button>
        </ContainerBase>
      </ContainerPopover>
    );
  }
  console.log(projectId);

  return (
    <ContainerBase
      className={cn(
        "w-full px-4 py-2 gap-4 flex flex-wrap shadow-glow",
        shadow.g.lg
      )}
    >
      {projects}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="self-center shadow-glow hover:shadow-glow-foreground shadow-lg">
            Add Project
          </Button>
        </DialogTrigger>
        <ProjectDialog
          title="New Project"
          onSubmit={(projectData) => {
            let value = field.value;
            value[projectId] = projectData;
            setProjectId(projectId + 1);
            updateField(value);
          }}
        />
      </Dialog>
    </ContainerBase>
  );
}

function ProjectDialog({ title, onSubmit, projectData = {} }) {
  const data = {
    name: projectData?.name || "",
    link: projectData?.link || "",
    skills: {
      value: projectData?.skills || {},
      onChange: () => {},
    },
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <Container className="p-2 gap-4 flex flex-col">
        <div className="gap-2 flex flex-col">
          <Label htmlFor="projectName">Name</Label>
          <Input
            id="projectName"
            placeholder="Project Name"
            defaultValue={data.name}
            onChange={(event) => {
              data.name = event.target.value;
            }}
          />
        </div>
        <SkillsArea field={data.skills} />
        <div className="gap-2 flex flex-col">
          <Label htmlFor="projectLink">Link</Label>
          <Input
            id="projectLink"
            placeholder="Project Link"
            defaultValue={data.link}
            onChange={(event) => {
              data.link = event.target.value;
            }}
          />
        </div>
      </Container>
      <DialogFooter>
        <DialogClose asChild>
          <Button
            className="font-bold"
            onClick={() => {
              data.skills = data.skills.value;
              onSubmit(data);
            }}
          >
            Submit
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
