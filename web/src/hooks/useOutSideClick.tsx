import { useContext, useEffect } from "react";
import { ModalContext } from "../contexts/ModalContext/ModalContext";

const useOutSideClick = (ref: any, func?: Function) => {
  //
  const { modals, modalsDispatch, modalsAction } = useContext(ModalContext);

  //
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        modalsDispatch(modalsAction.closeModal());
        if (typeof func === "function") {
          func(false);
          document.removeEventListener("mousedown", handleClickOutside);
        }
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
  return { modals, modalsDispatch, modalsAction };
};
export default useOutSideClick;
