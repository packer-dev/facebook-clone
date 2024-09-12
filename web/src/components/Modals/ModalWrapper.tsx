import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import CloseModal from "../CloseModal";
import useOutSideClick from "@/hooks/useOutSideClick";

export default function ModalWrapper({ className, title, children }: any) {
  //
  const refContainer = useRef<HTMLDivElement>();
  const refLoading = useRef<HTMLDivElement>();
  const { modals } = useContext(ModalContext);
  useOutSideClick(refContainer);
  useEffect(() => {
    //
    if (refLoading.current && refContainer.current) {
      refLoading.current.style.height =
        refContainer.current.offsetHeight + "px";
      refLoading.current.style.width = refContainer.current.offsetWidth + "px";
    }
    //
  }, [refContainer, refLoading, modals.loading]);
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
      </div>
      {
        <div
          ref={refLoading}
          className={
            modals.loading
              ? `absolute top-0 left-0 bg-white bg-opacity-50 z-30 
            flex justify-center items-center`
              : "hidden"
          }
        >
          <i className="bx bx-shape-circle fa-spin text-main text-5xl"></i>
        </div>
      }
    </div>
  );
}
