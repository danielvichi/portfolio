import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import ExternalLink from "../../_components/external-link";
import Markdown from "react-markdown";
import { FaceIcon } from "@radix-ui/react-icons";
import ContentWrapper from "~/app/_components/content-wrapper";
import SECTION_IDS from "~/constants/section-ids";
import SectionWrapper from "~/app/_components/section-wrapper";
import { PROFILE_URLS } from "~/constants/urls";

interface AboutSectionFields {
  title: string;
  content: string;
}
interface AboutSectionProps {
  fields: AboutSectionFields;
}

export default function AboutSection(props: AboutSectionProps) {
  const { title, content } = props.fields;

  return (
    <SectionWrapper id={SECTION_IDS.ABOUT}>
      <ContainerScreen className="flex flex-col gap-8 px-4 py-24">
        <SectionTitle.h2
          customIcon={<FaceIcon className="text-accent-primary h-8 w-8" />}
        >
          {title}
        </SectionTitle.h2>

        <ContentWrapper>
          <div className="flex flex-col gap-4">
            <Markdown>{content}</Markdown>
          </div>
          <div className="flex flex-col gap-1">
            <ExternalLink href={PROFILE_URLS.linkedin} target="_blank">
              Linkedin
            </ExternalLink>
            <ExternalLink
              className="flex flex-row items-center gap-1.5"
              href={PROFILE_URLS.github}
              target="_blank"
            >
              Github
            </ExternalLink>
          </div>
        </ContentWrapper>
      </ContainerScreen>
    </SectionWrapper>
  );
}
