import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import ChevronRight from "../../_icons/chevron-right";

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
    <ContainerScreen className="flex min-h-screen flex-col-reverse items-center justify-center gap-12 px-4 py-16 md:flex-row">
      <div className="flex flex-col gap-3 md:gap-6">
        <h1 className="flex flex-col text-4xl tracking-tighter text-white md:text-7xl lg:text-8xl">
          <Markdown>{title}</Markdown>
        </h1>
        <div className="text-1xl text-accent-primary font-extrabold tracking-wide wrap-break-word uppercase md:text-4xl">
          <Markdown>{sub_title}</Markdown>
        </div>
      </div>

      <div className="relative flex w-full items-center justify-center">
        <div className="bg-accent-primary absolute -ml-[180px] h-[60px] w-[60px] rounded-full" />
        <ChevronRight className="fill-accent-primary scale-150" />
      </div>
    </ContainerScreen>
  );
}
