import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import TechStackTags, { type TechStack } from "../tech-stack-tags";
import ExternalLink from "~/app/_components/external-link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ContentWrapper from "~/app/_components/content-wrapper";

interface PersonalProjectSectionFields {
  title: string;
  sub_title: string;
  description: string;
  github_title: string;
  tech_stack_title: string;
  tech_stack: TechStack;
}
interface PersonalProjectSectionProps {
  fields: PersonalProjectSectionFields;
}

export default function PersonalProjectSection(
  props: PersonalProjectSectionProps,
) {
  const {
    title,
    sub_title,
    description,
    github_title,
    tech_stack_title,
    tech_stack,
  } = props.fields;

  return (
    <ContainerScreen className="flex flex-col gap-4">
      <SectionTitle.h2>{title}</SectionTitle.h2>
      <ContentWrapper>
        <SectionTitle.h3>{sub_title}</SectionTitle.h3>
        <Markdown>{description}</Markdown>
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle.h4
          hideIcon={false}
          customIcon={
            <GitHubLogoIcon className="text-accent-tertiary h-[30px] w-[30px]" />
          }
        >
          {github_title}
        </SectionTitle.h4>
        <ExternalLink href="https://github.com/danielvichi/espera-queue-fe">
          Front-end Github
        </ExternalLink>

        <ExternalLink href="https://github.com/danielvichi/espera-queue-be">
          Back-end Github
        </ExternalLink>
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle.h4>{tech_stack_title}</SectionTitle.h4>
        <TechStackTags techStack={tech_stack} />
      </ContentWrapper>
    </ContainerScreen>
  );
}
