import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/section-title";
import type { TechStack } from "../tech-stack-tags";
import TechStackTags from "../tech-stack-tags";
import type { ProjectCardProps } from "../projects-list/project-card";
import ProjectCardList from "../projects-list/project-card-list";

interface PreviousExperienceRoleSectionProps {
  title: string;
  subTitle: string;
  duration: string;
  description: string;
  projectsTitle: string;
  projects: ProjectCardProps[];
  techStackTitle: string;
  techStack?: TechStack;
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
      <h3 className="text-2xl text-accent-primary">{title}</h3>
      <span className="text-sm font-bold text-accent-tertiary">
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
      <div className="relative container mx-auto">
        <h4>{title}</h4>
      </div>
      <ProjectCardList projectList={projectsList} />
    </>
  );
}

interface TechStackSectionProps {
  title: string;
  techStack: TechStack;
}

function TechStackSection({ title, techStack }: TechStackSectionProps) {
  return (
    <>
      <h4>{title}</h4>
      <TechStackTags techStack={techStack} />
    </>
  );
}

export default function PreviousExperienceRoleSection(
  props: PreviousExperienceRoleSectionProps,
) {
  const {
    title,
    subTitle,
    description,
    duration,
    projectsTitle,
    projects,
    techStackTitle,
    techStack,
  } = props;
  return (
    <div className="flex flex-col gap-8">
      <ContainerScreen className="flex min-h-0! flex-col gap-8 px-4 pt-24">
        <SectionTitle>{title}</SectionTitle>
        <DescriptionSection
          title={subTitle}
          duration={duration}
          description={description}
        />
      </ContainerScreen>

      <ProjectsSection title={projectsTitle} projectsList={projects} />

      <ContainerScreen className="flex min-h-0! flex-col gap-8 px-4 pb-24">
        {techStack ? (
          <TechStackSection title={techStackTitle} techStack={techStack} />
        ) : (
          ""
        )}
      </ContainerScreen>
    </div>
  );
}
