"use client";

import SECTION_IDS from "~/constants/section-ids";
import useActiveSection from "../_hooks/useActiveScetion";
import {
  BackpackIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  HeartIcon,
  HomeIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import FormationIcon from "../_icons/formation-icon";

function Dot({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`h-2 w-2 ${className}`} {...rest} />;
}

interface SectionIconProps {
  isActive: boolean;
  sectionId: string;
}

const sectionICons: Record<
  string,
  ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
> = {
  [SECTION_IDS.HERO]: HomeIcon,
  [SECTION_IDS.ABOUT]: FaceIcon,
  [SECTION_IDS.RECOMMENDATIONS]: HeartIcon,
  [SECTION_IDS.EXPERIENCE]: StarIcon,
  [SECTION_IDS.PERSONAL_PROJECTS]: BackpackIcon,
  [SECTION_IDS.FORMATION]: FormationIcon,
  [SECTION_IDS.CONTACT]: EnvelopeClosedIcon,
};

function SectionIcon(props: SectionIconProps) {
  const { isActive, sectionId } = props;

  const CurrentIcon = sectionICons[sectionId];

  if (!CurrentIcon) {
    return <Dot />;
  }

  return (
    <CurrentIcon
      className={`transition-all duration-300 group-hover:scale-200 ${isActive ? "fill-accent-primary text-accent-primary" : "fill-gray-500 text-gray-500"} `}
    />
  );
}

export default function SideNavigation() {
  const { activeSection, isScrollActive } = useActiveSection();

  const sectionIds = Object.values(SECTION_IDS);
  const sectionsItems = sectionIds.map((itemId) => (
    <li key={itemId} className="group">
      <a
        href={`#${itemId}`}
        className="flex h-5 w-5 items-center justify-center transition-all group-hover:h-8"
      >
        <SectionIcon isActive={activeSection === itemId} sectionId={itemId} />
      </a>
    </li>
  ));

  return (
    <div
      className={`fixed top-1/2 right-1 hover:right-4 z-50 h-auto -translate-y-1/2 bg-gray-950/50 py-2 hover:scale-150 hover:opacity-100 ${
        activeSection === SECTION_IDS.HERO || !isScrollActive ? "opacity-0" : "opacity-50"
      } transition-all duration-500`}
    >
      <ul className="flex flex-col">{sectionsItems}</ul>
    </div>
  );
}
