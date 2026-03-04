"use client";
import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import LogoScene from "~/app/_components/logo-3d";
import SectionWrapper from "~/app/_components/section-wrapper";
import SECTION_IDS from "~/constants/section-ids";

interface HeroSectionFields {
  title: string;
  sub_title: string;
}

interface HeroSectionProps {
  fields: HeroSectionFields;
}

export default function HeroSection(props: HeroSectionProps) {
  const { title, sub_title } = props.fields;

  return (
    <SectionWrapper id={SECTION_IDS.HERO}>
      <ContainerScreen className="relative flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 px-4 md:flex-row">
        <div className="flex w-fit flex-col gap-3 md:gap-6">
          <h1 className="flex flex-col text-4xl tracking-tighter text-white md:text-7xl lg:text-8xl">
            <Markdown>{title}</Markdown>
          </h1>
          <div className="text-1xl text-accent-primary font-extrabold tracking-wide wrap-break-word uppercase md:text-4xl">
            <Markdown>{sub_title}</Markdown>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="relative h-[500px] w-full hover:cursor-move md:w-[500px] lg:w-[600px]">
            <LogoScene />
          </div>
        </div>
      </ContainerScreen>
    </SectionWrapper>
  );
}
