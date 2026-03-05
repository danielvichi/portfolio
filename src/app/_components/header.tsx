"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LanguageSelector from "./language-selector";
import * as Tooltip from "@radix-ui/react-tooltip";
import useActiveSection from "../_hooks/useActiveScetion";

interface HeaderFields {
  github_tooltip: string;
}

interface HeaderProps {
  fields: HeaderFields;
}

function GitHubExternalLinkWithToolTip({
  tooltipString,
}: {
  tooltipString: string;
}) {
  return (
    <div className="group">
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <a href="https://github.com/danielvichi/portfolio" target="_blank">
              <GitHubLogoIcon className="text-accent-secondary h-[20px] w-[20px] transition-all group-hover:brightness-150" />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-50 rounded bg-white px-2 py-1.5 text-xs leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] select-none"
              sideOffset={5}
            >
              {tooltipString}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}

function HomeTitle() {
  const { activeSection } = useActiveSection();

  return (
    <h1 className="text-accent-primary h-[28px] overflow-hidden">
      <div
        className={`flex flex-col gap-1 transition-all duration-300 ${activeSection === "hero" ? "translate-y-0" : "-translate-y-1/2"}`}
      >
        <div>
          <span className="absolute -top-1 -left-[4px]">{"."}</span>
          <span className="pl-[2px]">{">"}</span>
        </div>
        <a href={"#hero"} className="overflow-hidden">
          <div>Daniel Ishigaki</div>
        </a>
      </div>
    </h1>
  );
}

export default function Header(props: HeaderProps) {
  const { github_tooltip } = props.fields;

  return (
    <div className="bg-background-primary fixed top-0 right-0 left-0 z-40 border-b border-gray-500 px-4">
      <div className="relative container m-auto flex flex-row items-center justify-between">
        <HomeTitle />

        <div className="flex flex-row items-center gap-4">
          <GitHubExternalLinkWithToolTip tooltipString={github_tooltip ?? ""} />
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}
