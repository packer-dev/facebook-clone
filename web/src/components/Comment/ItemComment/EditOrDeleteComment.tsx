import * as React from "react";
import { User } from "@/interfaces/User";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import {
  CONTENT_MODAL_DELETE_COMMENT,
  NAME_BUTTON_MODAL_DELETE_COMMENT,
  TITLE_MODAL_DELETE_COMMENT,
} from "@/constants/ModalWarningConfig";
import { CommentDTO } from "@/interfaces/Comment";
import { useSelector } from "react-redux";
import { getUser, RootState } from "@/reducers";

type EditOrDeleteCommentProps = {
  commentPost: CommentDTO;
};

export default React.forwardRef(function EditOrDeleteComment(
  { commentPost }: EditOrDeleteCommentProps,
  ref: any
) {
  //
  const user = useSelector<RootState, User>(getUser);
  const { modalsDispatch, modalsAction } = React.useContext(ModalContext);
  const handleEvent = async (setData) => {
    if (typeof setData === "function") setData();

    modalsDispatch(modalsAction.closeModal());
  };
  const refControl = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    //
    if (refControl.current) {
      refControl.current.style.left = `${ref.current.offsetWidth}px`;
    }
    //
  }, [ref, refControl]);
  //
  if (user.id === commentPost.item.user.id)
    return (
      <div
        ref={refControl}
        className="item__flex absolute ml-6 top-1/2 transform -translate-y-1/2"
      >
        <span
          onClick={() => modalsDispatch(modalsAction.openModalDeletePost(""))}
          aria-hidden
          className="bx bx-edit-alt text-sm text-gray-800 cursor-pointer"
        />
        <span
          onClick={() => {
            modalsDispatch(
              modalsAction.openModalDeletePost(
                TITLE_MODAL_DELETE_COMMENT,
                CONTENT_MODAL_DELETE_COMMENT,
                NAME_BUTTON_MODAL_DELETE_COMMENT,
                handleEvent
              )
            );
          }}
          aria-hidden
          className="bx bx-trash-alt text-sm text-gray-800 cursor-pointer"
        />
      </div>
    );
  return <></>;
});
