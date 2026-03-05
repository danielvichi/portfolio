import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import TechStackTags, { type TechStack } from "../tech-stack-tags";
import ExternalLink from "~/app/_components/external-link";
import { BackpackIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import ContentWrapper from "~/app/_components/content-wrapper";
import SECTION_IDS from "~/constants/section-ids";
import SectionWrapper from "~/app/_components/section-wrapper";
import { PROFILE_URLS } from "~/constants/urls";

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
    <SectionWrapper id={SECTION_IDS.PERSONAL_PROJECTS}>
      <ContainerScreen className="flex flex-col gap-4">
        <SectionTitle.h2
          customIcon={<BackpackIcon className="text-accent-primary h-8 w-8" />}
        >
          {title}
        </SectionTitle.h2>
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
          <ExternalLink href={`${PROFILE_URLS.github}/espera-queue-fe`}>
            Front-end Github
          </ExternalLink>

          <ExternalLink href={`${PROFILE_URLS.github}/espera-queue-be`}>
            Back-end Github
          </ExternalLink>
        </ContentWrapper>

        <ContentWrapper>
          <SectionTitle.h4>{tech_stack_title}</SectionTitle.h4>
          <TechStackTags techStack={tech_stack} />
        </ContentWrapper>
      </ContainerScreen>
    </SectionWrapper>
  );
}
