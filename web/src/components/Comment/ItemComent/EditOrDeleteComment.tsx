import * as React from "react";
import { User } from "@/interfaces/User";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import {
  CONTENT_MODAL_DELETE_COMMENT,
  NAME_BUTTON_MODAL_DELETE_COMMENT,
  TITLE_MODAL_DELETE_COMMENT,
} from "@/constants/ModalWarningConfig";

type EditOrDeleteCommentProps = {
  user: User;
  commentPost: any;
  setPostDetail: Function;
  postDetail: any;
  level: any;
};

export default React.forwardRef(function EditOrDeleteComment(
  {
    user,
    commentPost,
    setPostDetail,
    postDetail,
    level,
  }: EditOrDeleteCommentProps,
  ref: any
) {
  //
  const { modalsDispatch, modalsAction } = React.useContext(ModalContext);
  const handleEvent = async (setData) => {
    if (typeof setData === "function") setData();

    if (level === 1) {
      setPostDetail({
        ...postDetail,
        commentDetailList: [...postDetail.commentDetailList].filter(
          (dt) => dt.commentPostLevel1.commentPost.id !== commentPost.id
        ),
        commentLevel1Length: postDetail.commentLevel1Length - 1,
        commentLength: postDetail.commentLength - 1,
      });
    } else {
      let postDetailClone = { ...postDetail };
      let index = postDetailClone.commentDetailList.findIndex(
        (dt) => dt.commentPostLevel1.commentPost.id === commentPost.replyComment
      );
      if (index !== -1) {
        postDetailClone.commentDetailList[index].commentPostLevel2List = [
          ...postDetailClone.commentDetailList[index].commentPostLevel2List,
        ].filter((dt) => dt.commentPost.id !== commentPost.id);
        postDetailClone.commentDetailList[index].commentLevel2Length -= 1;
        setPostDetail({
          ...postDetailClone,
          commentLength: postDetailClone.commentLength - 1,
        });
      }
    }
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
  return user.id === commentPost.userCommentPost.id ? (
    <div
      ref={refControl}
      className="item__flex absolute ml-6 top-1/2 transform -translate-y-1/2"
    >
      <span
        onClick={() => {
          modalsDispatch(modalsAction.openModalDeletePost(""));
        }}
        aria-hidden
        className="bx bx-edit-alt text-sm text-gray-800 cursor-pointer"
      ></span>
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
      ></span>
    </div>
  ) : (
    ""
  );
});
