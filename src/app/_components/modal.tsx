import { Cross1Icon } from "@radix-ui/react-icons";
import { animated, config, useSpring } from "@react-spring/web";
import {
  useEffect,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from "react";

const AnimatedDiv = animated("div");

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function CloseButton(props: CloseButtonProps) {
  const { className, ...rest } = props;
  return (
    <button
      className={`group absolute -top-[38px] right-0 hover:cursor-pointer ${className}`}
      {...rest}
    >
      <Cross1Icon className="text-accent-tertiary h-[30px] w-[30px] group-hover:scale-110 group-active:scale-95" />
    </button>
  );
}

interface ModalProps {
  children?: ReactElement;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal(props: ModalProps) {
  const { children, isOpen, setIsOpen } = props;

  function handleClickClose(
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) {
    event?.preventDefault();

    if (!isOpen) {
      return;
    }

    setIsOpen(false);
  }

  const contentSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0)" : "translateY(50px)",
    },
    config: config.default,
  });

  useEffect(
    function preventBodyScrollOnIsOpen() {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
        return;
      }
      document.body.style.overflowY = "scroll";
    },
    [isOpen],
  );

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center transition-all ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* BACKDROP */}
      <div
        className={`absolute inset-0 bg-black opacity-70`}
        onClick={handleClickClose}
      />
      <div className="relative m-4 max-w-[1024px] min-w-[300px] md:mx-16">
        <CloseButton onClick={handleClickClose} />

        <AnimatedDiv style={contentSpring}>
          {isOpen ? children : <></>}
        </AnimatedDiv>
      </div>
    </div>
  );
}
