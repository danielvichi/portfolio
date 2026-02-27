"use client";

import { useModalContext } from "~/app/_contexts/modal-context";
import type { ProjectCardProps } from "./project-card";
import ProjectCard from "./project-card";
import HorizontalScroll from "~/app/_components/horizonta-scroll";
import Carrousel from "~/app/_components/carrousel";

interface ProjectCardListProps {
  projectList: ProjectCardProps[];
}

export default function ProjectCardList({ projectList }: ProjectCardListProps) {
  const { isOpen, setIsOpen, setModalContent } = useModalContext();

  function handleCardClick(
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) {
    event.preventDefault();
    setModalContent(
      <Carrousel
        contentList={projectCardList}
        defaultActiveItemIndex={index}
      />,
    );

    setIsOpen(true);
    if (!isOpen) {
    }
  }

  const projectCardList = projectList.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      coverImageUrl={project.coverImageUrl}
    />
  ));

  const projectCardThumbnailsList = projectList.map((project, index) => (
    <button
      key={project.title}
      className="hover:cursor-pointer"
      onClick={(event) => handleCardClick(event, index)}
    >
      <ProjectCard.thumbnail
        title={project.title}
        description={project.description}
        thumbnailUrl={project.thumbnailUrl}
      />
    </button>
  ));
  return (
    <div className={"w-full overflow-hidden"}>
      <HorizontalScroll>{projectCardThumbnailsList}</HorizontalScroll>
    </div>
  );
}
