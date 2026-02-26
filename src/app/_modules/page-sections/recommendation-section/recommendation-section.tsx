"use client";

import ContainerScreen from "../../../_components/container-screen";
import SectionTitle from "../../../_components/titles";
import Markdown from "react-markdown";
import { HeartIcon } from "@radix-ui/react-icons";
import EndorseCard, { type EndorseCardProps } from "./recommendation-card";
import { useModalContext } from "~/app/_contexts/modal-context";
import Carrousel from "~/app/_components/carrousel";

interface RecommendationSectionProps {
  title: string;
  content: EndorseCardProps[];
}

export default function RecommendationSection({
  title,
  content,
}: RecommendationSectionProps) {
  const { isOpen, setIsOpen, setModalContent } = useModalContext();

  function handleCardClick(
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) {
    event.preventDefault();
    setModalContent(
      <Carrousel
        contentList={recommendationList}
        defaultActiveItemIndex={index}
      />,
    );

    setIsOpen(true);
    if (!isOpen) {
    }
  }

  const recommendationList = content.map((recommendation) => (
    <EndorseCard
      key={recommendation.name}
      name={recommendation.name}
      role={recommendation.role}
      comment={recommendation.comment}
      profilePictureUrl={recommendation.profilePictureUrl}
      source={recommendation.source}
      sourceUrl={recommendation.sourceUrl}
    />
  ));

  const recommendationThumbnailList = content.map((recommendation, index) => (
    <button
      key={recommendation.name}
      className="hover:cursor-pointer"
      onClick={(event) => handleCardClick(event, index)}
    >
      <EndorseCard.thumbnail
        name={recommendation.name}
        role={recommendation.role}
        profilePictureUrl={recommendation.profilePictureUrl}
      />
    </button>
  ));

  return (
    <ContainerScreen className="flex flex-col gap-8 px-4 py-24">
      <SectionTitle.h2
        customIcon={<HeartIcon className="text-accent-primary h-8 w-8" />}
      >
        <Markdown>{title}</Markdown>
      </SectionTitle.h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">{recommendationThumbnailList}</div>
    </ContainerScreen>
  );
}
