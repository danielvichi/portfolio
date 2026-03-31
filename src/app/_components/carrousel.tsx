import { useState, type ReactElement } from "react";
import ChevronRight from "../_icons/chevron-right";

interface BreadCrumbsProps {
  length: number;
  activeItemIndex: number;
}

function BreadCrumbs(props: BreadCrumbsProps) {
  const { length, activeItemIndex } = props;

  const items = [...Array.from({ length: length })].map((_item, index) => (
    <div
      key={index}
      className={ `h-1.5 w-1.5 ${
        activeItemIndex === index ? "bg-accent-tertiary" : "bg-gray-600"
      }`}
    />
  ));

  return (
    <div className="absolute border-0 m-auto w-full flex justify-center mt-4">
      <div className="flex gap-1">{items}</div>
    </div>
  );
}

interface NavigationButton extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  type: "previous" | "next";
}

function NavigationButton(props: NavigationButton) {
  const { className, type, ...rest } = props;
  return (
    <button
      className={`group flex items-center px-3 transition-opacity hover:cursor-pointer disabled:cursor-auto disabled:opacity-0 ${className}`}
      {...rest}
    >
      <div
        className={`from-accent-tertiary/0 to-accent-tertiary/100 absolute inset-0 opacity-0 transition-all group-hover:opacity-100 ${
          type === "previous" ? "bg-linear-to-l" : "bg-linear-to-r"
        }`}
      />
      <ChevronRight
        className={`fill-background-primary stroke-4 stroke-accent-tertiary relative h-[30px] w-[30px] transition-opacity group-hover:scale-110 group-hover:opacity-100 group-active:scale-95 group-disabled:scale-100 ${type === "previous" ? "rotate-180" : ""}`}
      />
    </button>
  );
}

interface CarrouselProps {
  contentList: ReactElement[];
  defaultActiveItemIndex?: number;
}

export default function Carrousel(props: CarrouselProps) {
  const { contentList, defaultActiveItemIndex } = props;
  const [activeContentIndex, setActiveContentIndex] = useState(
    defaultActiveItemIndex ?? 0,
  );
  const contentLength = contentList.length;
  const isFirstContent = activeContentIndex === 0;
  const isLastContent = activeContentIndex === contentLength - 1;

  function handlePreviousContent(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (isFirstContent) return;

    setActiveContentIndex((previousIndex) => previousIndex - 1);
  }

  function handleNextContent(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (isLastContent) return;

    setActiveContentIndex((previousIndex) => previousIndex + 1);
  }

  return (
    <div className="relative flex w-fit flex-row gap-4">
      <div className="relative">
        {contentList[activeContentIndex]}
        <BreadCrumbs
          length={contentLength}
          activeItemIndex={activeContentIndex}
        />
      </div>
      <NavigationButton
        disabled={isFirstContent}
        type={"previous"}
        className="absolute top-0 bottom-0 left-0"
        onClick={handlePreviousContent}
      />
      <NavigationButton
        disabled={isLastContent}
        type={"next"}
        className="absolute top-0 right-0 bottom-0"
        onClick={handleNextContent}
      />
    </div>
  );
}
