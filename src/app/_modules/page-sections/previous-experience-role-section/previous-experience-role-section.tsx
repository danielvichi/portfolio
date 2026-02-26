import Markdown from "react-markdown";
import type { ProjectCardProps } from "./project-card";
import ProjectCardList from "./project-card-list";
import type { TechStack } from "../../tech-stack-tags";
import TechStackTags from "../../tech-stack-tags";
import ContainerScreen from "~/app/_components/container-screen";
import SectionTitle from "~/app/_components/titles";
import ContentWrapper from "~/app/_components/content-wrapper";

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

interface TechStackSectionProps {
  title: string;
  techStack: TechStack;
}

function TechStackSection({ title, techStack }: TechStackSectionProps) {
  return (
    <ContentWrapper>
      <SectionTitle.h3>{title}</SectionTitle.h3>
      <TechStackTags techStack={techStack} />
    </ContentWrapper>
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
    <div className="flex flex-col gap-4">
      <ContainerScreen className="flex min-h-0! flex-col gap-4 px-4 pt-24">
        <SectionTitle.h2>{title}</SectionTitle.h2>
        <ContentWrapper>
          <DescriptionSection
            title={subTitle}
            duration={duration}
            description={description}
          />
        </ContentWrapper>
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
