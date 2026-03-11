import Markdown from "react-markdown";
import type { ProjectCardProps } from "./project-card";
import ProjectCardList from "./project-card-list";
import type { TechStack } from "../../tech-stack-tags";
import Tech_stackTags from "../../tech-stack-tags";
import ContainerScreen from "~/app/_components/container-screen";
import SectionTitle from "~/app/_components/titles";
import ContentWrapper from "~/app/_components/content-wrapper";
import SECTION_IDS from "~/constants/section-ids";
import SectionWrapper from "~/app/_components/section-wrapper";
import { StarIcon } from "@radix-ui/react-icons";

interface PreviousExperienceRoleSectionFields {
  title: string;
  sub_title: string;
  duration: string;
  description: string;
  projects_title?: string;
  projects?: ProjectCardProps[];
  tech_stack_title?: string;
  tech_stack?: TechStack;
}
interface PreviousExperienceRoleSectionProps {
  fields: PreviousExperienceRoleSectionFields;
}

interface DescriptionSectionProps {
  title: string;
  description: string;
  duration: string;
}

function DescriptionSection({
  title,
  duration,
  description,
}: DescriptionSectionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-accent-primary text-2xl">{title}</h3>
      <span className="text-accent-tertiary text-sm font-bold">
        <Markdown>{duration}</Markdown>
      </span>
      <Markdown>{description}</Markdown>
    </div>
  );
}

interface ProjectsSectionProps {
  title: string;
  projectsList: ProjectCardProps[];
}

function ProjectsSection({ title, projectsList }: ProjectsSectionProps) {
  return (
    <>
      <div className="relative container mx-auto pl-4">
        <ContentWrapper>
          <SectionTitle.h3>{title}</SectionTitle.h3>
        </ContentWrapper>
      </div>
      <ProjectCardList projectList={projectsList} />
    </>
  );
}

interface Tech_stackSectionProps {
  title: string;
  tech_stack: TechStack;
}

function Tech_stackSection({ title, tech_stack }: Tech_stackSectionProps) {
  return (
    <ContentWrapper>
      <SectionTitle.h3>{title}</SectionTitle.h3>
      <Tech_stackTags techStack={tech_stack} />
    </ContentWrapper>
  );
}

export default function PreviousExperienceRoleSection(
  props: PreviousExperienceRoleSectionProps,
) {
  const {
    title,
    sub_title,
    description,
    duration,
    projects_title,
    projects,
    tech_stack_title,
    tech_stack,
  } = props.fields;
  return (
    <SectionWrapper id={SECTION_IDS.EXPERIENCE} className="flex flex-col gap-4">
      <ContainerScreen className="flex min-h-0! flex-col gap-4 px-4 pt-24">
        <SectionTitle.h2
          customIcon={<StarIcon className="text-accent-primary h-8 w-8" />}
        >
          {title}
        </SectionTitle.h2>
        <ContentWrapper>
          <DescriptionSection
            title={sub_title}
            duration={duration}
            description={description}
          />
        </ContentWrapper>
      </ContainerScreen>

      {projects_title && projects && projects.length > 0 && (
        <ProjectsSection title={projects_title} projectsList={projects} />
      )}

      <ContainerScreen className="flex min-h-0! flex-col gap-8 px-4 pb-24">
        {tech_stack_title && tech_stack ? (
          <Tech_stackSection title={tech_stack_title} tech_stack={tech_stack} />
        ) : (
          ""
        )}
      </ContainerScreen>
    </SectionWrapper>
  );
}
