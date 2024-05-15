"use client";

import { ContainerBase } from "@/components/ui/Container";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SkillsArea({
  field,
  disableAdd = false,
  disableDelete = false,
}) {
  if (typeof field?.value == "undefined") field.value = {};
  function updateField(value) {
    field.onChange(value);
  }

  const [skillId, setSkillId] = useState(1);
  const skills = [];
  for (let i in field.value) {
    if (parseInt(i) > skillId) setSkillId(parseInt(i) + 1);
    skills.push(
      <Badge
        key={i}
        className="shrink-0 py-1 px-4 cursor-pointer shadow hover:scale-110 hover:shadow-md"
        variant="outline"
        {...(!disableDelete && {
          onClick: () => {
            let value = field.value;
            delete value[i];
            updateField(value);
            setSkillId(skillId + 1);
            setSkillId(skillId - 1);
          },
        })}
      >
        {field.value[i]}
      </Badge>
    );
  }

  return (
    <ContainerBase className="flex w-full px-4 py-2 capitalize gap-3 flex-wrap">
      {skills}
      {!disableAdd && (
        <Popover>
          <PopoverTrigger asChild>
            <button
              className={cn(
                badgeVariants({ variant: "default" }),
                "shrink-0 py-1 px-4 cursor-pointer shadow hover:scale-105 hover:shadow-md"
              )}
            >
              Add Skill
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <Input
              onKeyDown={(event) => {
                if (event.key == "Enter") {
                  let value = field.value;
                  value[skillId] = event.target.value;
                  setSkillId(skillId + 1);
                  updateField(value);
                  event.target.value = "";
                }
              }}
            />
          </PopoverContent>
        </Popover>
      )}
    </ContainerBase>
  );
}
