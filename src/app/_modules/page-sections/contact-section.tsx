import ContentWrapper from "~/app/_components/content-wrapper";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import Markdown from "react-markdown";

interface ContactSectionProps {
  title: string;
  description: string;
}

export default function ContactSection({
  title,
  description,
}: ContactSectionProps) {
  return (
    <ContainerScreen className="px-4 py-24 flex flex-col gap-8">
      <SectionTitle.h2>{title}</SectionTitle.h2>

      <ContentWrapper className="flex flex-col items-center gap-4">
        <div className="flex flex-row gap-1">
          <Markdown>{description}</Markdown>
          <p>danielvichi@gmail.com</p>
        </div>

        <div
          className="ml-embedded w-full md:w-[600px] lg:w-[700px]"
          data-form="O3PP9E"
        ></div>
      </ContentWrapper>
    </ContainerScreen>
  );
}
