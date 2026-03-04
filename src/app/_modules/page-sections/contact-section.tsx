import ContentWrapper from "~/app/_components/content-wrapper";
import ContainerScreen from "../../_components/container-screen";
import SectionTitle from "../../_components/titles";
import Markdown from "react-markdown";
import SECTION_IDS from "~/constants/section-ids";
import SectionWrapper from "~/app/_components/section-wrapper";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

interface ContactSectionFields {
  title: string;
  description: string;
}

interface ContactSectionProps {
  fields: ContactSectionFields;
}

export default function ContactSection(props: ContactSectionProps) {
  const { title, description } = props.fields;

  return (
    <SectionWrapper id={SECTION_IDS.CONTACT}>
      <ContainerScreen className="flex flex-col gap-8 px-4 py-24">
        <SectionTitle.h2
          customIcon={
            <EnvelopeClosedIcon className="text-accent-primary h-8 w-8" />
          }
        >
          {title}
        </SectionTitle.h2>

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
    </SectionWrapper>
  );
}
