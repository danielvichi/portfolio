"use client";
import { useEffect, useState } from "react";
import SECTION_IDS from "~/constants/section-ids";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  );

  useEffect(function handleScrollEffect() {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    const hash = window?.location?.hash;
    if (hash) {
      setActiveSection(hash);
    } else {
      setActiveSection(SECTION_IDS.HERO);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection };
}
