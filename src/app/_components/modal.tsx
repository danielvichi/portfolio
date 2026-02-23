import { Cross1Icon } from "@radix-ui/react-icons";
import {
  useEffect,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from "react";

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
      <div className="relative">
        <CloseButton onClick={handleClickClose} />
        {isOpen ? children : <></>}
      </div>
    </div>
  );
}
