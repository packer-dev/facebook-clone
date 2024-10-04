import React, { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ModalWrapper from "../ModalWrapper";
import { Button } from "@/components/ui/button";

const ModalWarning = ({ title, handleEvent, button, content }) => {
  //
  const {
    modals: { loading },
    modalsDispatch,
    modalsAction,
  } = useContext(ModalContext);
  //
  return (
    <ModalWrapper title={title}>
      <hr className="border-gray-300 dark:border-dark-second mt-2"></hr>
      <p className="py-3 text-justify">{content}</p>
      <div className="w-full py-2 mt-2 flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => modalsDispatch(modalsAction.closeModal())}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            onClick={async () => {
              modalsDispatch(modalsAction.loadingModal(true));
              await handleEvent?.();
              modalsDispatch(modalsAction.closeModal());
            }}
          >
            {button}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalWarning;
