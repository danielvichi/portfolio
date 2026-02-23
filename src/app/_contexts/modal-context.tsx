"use client";

import type { Dispatch, ReactElement, SetStateAction } from "react";
import React, { useContext, useState } from "react";
import Modal from "../_components/modal";

interface ModalContextState {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<ReactElement>>;
}

const ModalContext = React.createContext<ModalContextState>({
  isOpen: false,
  setIsOpen: () => null,
  setModalContent: () => null,
});

interface ModalProviderProps {
  children: ReactElement;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactElement>(<></>);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        setModalContent,
      }}
    >
      {children}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};

export default ModalProvider;
