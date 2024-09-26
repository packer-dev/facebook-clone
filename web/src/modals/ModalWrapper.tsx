import React, { ReactNode, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import CloseModal from "../components/CloseModal";
import { Dialog } from "@/components/ui/dialog";

type ModalWrapperProps = {
  className?: string;
  title?: string;
  children?: ReactNode;
};

const ModalWrapper = ({
  title = "",
  children,
  className,
}: ModalWrapperProps) => {
  //
  const {
    modals: { loading },
  } = useContext(ModalContext);
  //
  return (
    <Dialog>
      <div
        className={`${
          !className || ""
        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg
          shadow-lv1 w-[480px] bg-white dark:bg-dark-second`}
      >
        <div className="w-full relative p-3">
          <p className="text-2xl font-bold p-2.5 -mt-1.5 text-center dark:text-white">
            {title}
          </p>
          <CloseModal />
          {children}
          {loading && (
            <div
              className="absolute top-0 left-0 bg-white bg-opacity-50 z-30 
            flex justify-center items-center bottom-0 right-0"
            >
              <i className="fas fa-circle-notch fa-spin text-main text-2xl" />
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ModalWrapper;
