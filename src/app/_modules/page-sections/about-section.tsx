import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import ExternalLink from "../../_components/external-link";
import Markdown from "react-markdown";
import { FaceIcon } from "@radix-ui/react-icons";
import ContentWrapper from "~/app/_components/content-wrapper";

interface AboutSectionProps {
  title: string;
  content: string;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
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
          <ExternalLink
            href="https://www.linkedin.com/in/daniel-ishigaki/"
            target="_blank"
          >
            Linkedin
          </ExternalLink>
          <ExternalLink
            className="flex flex-row items-center gap-1.5"
            href="https://github.com/danielvichi/"
            target="_blank"
          >
            Github
          </ExternalLink>
        </div>
      </ContentWrapper>
    </ContainerScreen>
  );
}
