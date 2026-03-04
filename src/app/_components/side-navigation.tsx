"use client";

import SECTION_IDS from "~/constants/section-ids";
import useActiveSection from "../_hooks/useActiveScetion";

function Dot({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`h-2 w-2 ${className}`} {...rest} />;
}

export default function SideNavigation() {
  const { activeSection } = useActiveSection();

  const sectionIds = Object.values(SECTION_IDS);
  const sectionsItems = sectionIds.map((itemId) => (
    <li key={itemId} className="group">
      <a
        href={`#${itemId}`}
        className="flex h-5 w-5 items-center justify-center transition-all group-hover:h-8"
      >
        <Dot
          className={`group-hover:h-5 group-hover:w-5 ${
            activeSection === itemId ? "bg-accent-primary" : "bg-gray-500"
          } transition-all duration-300 hover:text-white`}
        />
      </a>
    </li>
  ));

  return (
    <div
      className={`fixed top-1/2 right-1 z-50 h-auto -translate-y-1/2 bg-gray-950/50 py-2 hover:opacity-100 ${
        activeSection === SECTION_IDS.HERO ? "opacity-0" : "opacity-50"
      } transition-all duration-1000`}
    >
      <ul className="flex flex-col">{sectionsItems}</ul>
    </div>
  );
}
