import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import * as React from "react";

const CloseModal = () => {
  const { modalsDispatch, modalsAction } = React.useContext(ModalContext);
  return (
    <span
      onClick={() => modalsDispatch(modalsAction.closeModal())}
      aria-hidden="true"
      className="rounded-full dark:bg-dark-third text-gray-700 dark:text-white z-50 items-center bx bx-x 
      w-10 h-10 text-xl flex justify-center font-bold fixed right-2 bg-gray-300 top-2 cursor-pointer"
    />
  );
};

export default CloseModal;
