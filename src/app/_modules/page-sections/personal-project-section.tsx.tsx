import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import TechStackTags, { type TechStack } from "../tech-stack-tags";
import ExternalLink from "~/app/_components/external-link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ContentWrapper from "~/app/_components/content-wrapper";

interface PersonalProjectSectionProps {
  title: string;
  subTitle: string;
  description: string;
  githubTitle: string;
  techStackTitle: string;
  techStack: TechStack;
}

export default function PersonalProjectSection({
  title,
  subTitle,
  description,
  githubTitle,
  techStackTitle,
  techStack,
}: PersonalProjectSectionProps) {
  return (
    <ContainerScreen className="flex flex-col gap-4">
      <SectionTitle.h2>{title}</SectionTitle.h2>
      <ContentWrapper>
        <SectionTitle.h3>{subTitle}</SectionTitle.h3>
        <Markdown>{description}</Markdown>
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle.h4
          hideIcon={false}
          customIcon={
            <GitHubLogoIcon className="text-accent-tertiary h-[30px] w-[30px]" />
          }
        >
          {githubTitle}
        </SectionTitle.h4>
        <ExternalLink href="https://github.com/danielvichi/espera-queue-fe">
          Front-end Github
        </ExternalLink>

        <ExternalLink href="https://github.com/danielvichi/espera-queue-be">
          Back-end Github
        </ExternalLink>
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle.h4>{techStackTitle}</SectionTitle.h4>
        <TechStackTags techStack={techStack} />
      </ContentWrapper>
    </ContainerScreen>
  );
}
