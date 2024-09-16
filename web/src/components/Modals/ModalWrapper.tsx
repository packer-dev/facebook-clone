import React, { useContext, useRef } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import CloseModal from "../CloseModal";
import useOutSideClick from "@/hooks/useOutSideClick";

export default function ModalWrapper({ className, title, children }: any) {
  //
  const refContainer = useRef<HTMLDivElement>();
  const {
    modals: { loading },
  } = useContext(ModalContext);
  useOutSideClick(refContainer);
  //
  return (
    <div
      ref={refContainer}
      className={`${className} shadow-lv1 border-2 border-solid border-gray-200 `}
      style={{ width: 480 }}
    >
      <div className="w-full relative">
        <p className="text-2xl font-bold p-2.5 -mt-1.5 text-center dark:text-white">
          {title}
        </p>
        <CloseModal />
        {children}
        {loading && (
          <div
            className={`absolute top-0 left-0 bg-white bg-opacity-50 z-30 
            flex justify-center items-center bottom-0 right-0`}
          >
            <i className="fas fa-circle-notch fa-spin text-main text-2xl"></i>
          </div>
        )}
      </div>
    </div>
  );
}
