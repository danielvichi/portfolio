import Markdown from "react-markdown";
import ContainerScreen from "../../_components/container-screen";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import ChevronRight from "../../_icons/chevron-right";

interface HeroSectionProps {
  title: string;
  subTitle: string;
}

export default function HeroSection({ title, subTitle }: HeroSectionProps) {
  return (
    <ContainerScreen className="flex flex-col-reverse items-center justify-center gap-12 px-4 py-16 md:flex-row">
      <div className="flex flex-col gap-3 md:gap-6">
        <h1 className="flex flex-col text-4xl tracking-tighter text-white md:text-7xl lg:text-8xl">
          <Markdown>{title}</Markdown>
        </h1>
        <div className="text-1xl text-accent-primary font-extrabold tracking-wide wrap-break-word uppercase md:text-4xl">
          <Markdown>{subTitle}</Markdown>
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <ChevronRight className="fill-accent-primary scale-150" />
      </div>
    </ContainerScreen>
  );
}
