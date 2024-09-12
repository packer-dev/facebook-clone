import React, { useContext } from "react";
import { useState } from "react";
import { ModalContext } from "../../../contexts/ModalContext/ModalContext";
import ButtonComponent from "../../ButtonComponent";
import ModalWrapper from "../ModalWrapper";

export default function ModalWarning({ title, handleEvent, button, content }) {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
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
          <ButtonComponent
            handleClick={() => modalsDispatch(modalsAction.closeModal())}
            className=" rounded-md px-8 py-2 font-semibold  text-white bg-black bg-opacity-20"
          >
            Huỷ
          </ButtonComponent>
          <ButtonComponent
            loading={loading}
            disabled={loading}
            handleClick={() => {
              handleEvent(() => setLoading(true));
            }}
            className="rounded-md px-10 py-2 font-semibold bg-main text-white"
          >
            {button}
          </ButtonComponent>
        </div>
      </div>
    </ModalWrapper>
  );
}
