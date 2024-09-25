import React, { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ModalWrapper from "../ModalWrapper";
import { Button } from "@/components/ui/button";

export default function ModalWarning({ title, handleEvent, button, content }) {
  //
  const {
    modals: { loading },
    modalsDispatch,
    modalsAction,
  } = useContext(ModalContext);
  //
  return (
    <ModalWrapper
      title={title}
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
        shadow-lv1 dark:border-dark-third dark:bg-dark-third"
    >
      <hr className="border-gray-300 dark:border-dark-second"></hr>
      <p className="p-3 text-justify">{content}</p>
      <hr className="border-gray-300 dark:border-dark-second"></hr>
      <div className="w-full py-2 mt-2 flex items-center px-4 justify-end ">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => modalsDispatch(modalsAction.closeModal())}
            className=" rounded-md px-8 py-2 font-semibold  text-white bg-black bg-opacity-20"
          >
            Huỷ
          </Button>
          <Button
            disabled={loading}
            onClick={() => {
              modalsDispatch(modalsAction.loadingModal(true));
              handleEvent();
            }}
            className="rounded-md px-10 py-2 font-semibold bg-main text-white"
          >
            {button}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}
