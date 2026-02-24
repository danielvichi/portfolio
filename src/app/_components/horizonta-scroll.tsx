import { useRef, type ReactElement } from "react";
import { useDraggable } from "react-use-draggable-scroll";

interface HorizontalScrollProps {
  children: ReactElement[];
}

export default function HorizontalScroll(props: HorizontalScrollProps) {
  const { children } = props;
  const scrollWrapper = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(scrollWrapper);

  if (!children) {
    return null;
  }

  return (
    <div
      ref={scrollWrapper}
      className="flex flex-row gap-2 overflow-x-scroll border px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      {...events}
    >
      {children}
    </div>
  );
}
