"use client";

import { ContainerAnimatedBorder } from "@/components/ui/Container";
import { TypographyH3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormTextArea from "./FormTextArea";
import FormInput from "./FormInput";
import SkillsArea from "./SkillsArea";
import ProjectsArea from "./ProjectsArea";
import { cn } from "@/lib/utils";
import { shadow } from "@/lib/customTailwind";

const formSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters long" }),
  titlePhotoURL: z.string(),
  jobProfile: z.string(),
  aboutMePhotoURL: z.string(),
  job: z.string().min(3, { message: "Must be 3 or more characters long" }),
  summary: z.string(),
  college: z.string(),
  collegeCourse: z.string(),
  collegeYear: z.string(),
  school: z.string(),
  schoolClasses: z.string(),
  schoolYear: z.string(),
  number: z.string(),
  resumeLink: z.string(),
  email: z.string().email(),
});

export const formNameSchema = {
  name: {
    title: "Name",
  },
  titlePhotoURL: {
    title: "Photo URL (in png)",
  },
  jobProfile: {
    title: "Job Profile",
    discription: "example: I'm a passionate graphic designer from New York.",
    inputType: 1,
  },
  aboutMePhotoURL: {
    title: "Photo URL (in png)",
  },
  job: {
    title: "Job you are looking for",
  },
  summary: {
    title: "Summary",
    discription:
      "Write a summary to highlight your personality or work experience",
    inputType: 1,
  },
  skills: {
    title: "Skills",
    inputType: 2,
  },
  college: {
    title: "College",
  },
  collegeCourse: {
    title: "Course",
  },
  collegeYear: {
    title: "Year",
  },
  school: {
    title: "School",
  },
  schoolClasses: {
    title: "Classes",
  },
  schoolYear: {
    title: "Year",
  },
  projects: {
    title: "Projects",
    inputType: 3,
  },
  number: {
    title: "Phone Number",
  },
  resumeLink: {
    title: "Resume link",
  },
  email: {
    title: "Email",
  },
};

const formTemplate = [
  {
    title: "Home",
    questions: ["name", "titlePhotoURL", "jobProfile"],
  },
  {
    title: "About Me",
    questions: ["aboutMePhotoURL", "job", "summary"],
  },
  {
    title: "Skills",
    questions: ["skills"],
  },
  {
    title: "Education",
    questions: [
      "college",
      "collegeCourse",
      "collegeYear",
      "school",
      "schoolClasses",
      "schoolYear",
    ],
  },
  {
    title: "Experience",
    questions: ["projects"],
  },
  {
    title: "Contact",
    questions: ["number", "resumeLink", "email"],
  },
];

export default function PortfolioForm() {
  const sessionData =
    typeof localStorage != "undefined"
      ? JSON.parse(localStorage.getItem("portfolio"))
      : undefined;
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: sessionData || {
      name: "",
      titlePhotoURL: "",
      jobProfile: "",
      aboutMePhotoURL: "",
      job: "",
      summary: "",
      skills: {},
      college: "",
      collegeCourse: "",
      collegeYear: "",
      school: "",
      schoolClasses: "",
      schoolYear: "",
      projects: {},
      number: "",
      resumeLink: "",
      email: "",
    },
  });
  const formfeilds = [];

  formTemplate.map((ele) => {
    formfeilds.push(
      <div
        key={useId()}
        className="w-full mt-4 shrink-0 capitalize border-b border-b-border"
      >
        <TypographyH3 className="text-shadow-lg shadow-glow">
          {ele.title}
        </TypographyH3>
      </div>
    );
    ele.questions.map((ele) => {
      switch (formNameSchema[ele]?.inputType) {
        case 1:
          formfeilds.push(
            <FormField
              key={useId()}
              control={form.control}
              name={ele}
              render={FormTextArea}
            />
          );
          break;
        case 2:
          formfeilds.push(
            <FormField
              key={useId()}
              control={form.control}
              name={ele}
              render={SkillsArea}
            />
          );
          break;
        case 3:
          formfeilds.push(
            <FormField
              key={useId()}
              control={form.control}
              name={ele}
              render={ProjectsArea}
            />
          );
          break;

        default:
          formfeilds.push(
            <FormField
              key={useId()}
              control={form.control}
              name={ele}
              render={FormInput}
            />
          );
          break;
      }
    });
  });

  function onSubmit(values) {
    localStorage.setItem("portfolio", JSON.stringify(values));
    window.location.href = "/portfolio";
  }

  return (
    <main className="bg-background min-h-screen p-8">
      <ContainerAnimatedBorder
        className={cn("min-h-full max-w-6xl m-auto p-8")}
      >
        <Form {...form}>
          <form
            onSubmit={(event) => {
              form.handleSubmit((values) => {
                values.skills = form.getValues("skills");
                values.projects = form.getValues("projects");
                onSubmit(values);
              })(event);
            }}
            className="space-y-8 flex flex-wrap justify-between"
          >
            {formfeilds}
            <div className="shrink-0 w-full flex justify-around">
              <Button
                className="font-bold shadow-glow hover:shadow-glow-foreground shadow-lg"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </ContainerAnimatedBorder>
    </main>
  );
}
