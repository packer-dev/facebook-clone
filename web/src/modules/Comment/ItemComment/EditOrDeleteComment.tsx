import * as React from "react";
import { User } from "@/interfaces/User";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import {
  CONTENT_MODAL_DELETE_COMMENT,
  NAME_BUTTON_MODAL_DELETE_COMMENT,
  TITLE_MODAL_DELETE_COMMENT,
} from "@/constants/ModalWarningConfig";
import { CommentDTO } from "@/interfaces/Comment";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getCommon, getUser, RootState } from "@/reducers";
import { deleteComment } from "@/apis/commentAPIs";
import { ItemPostContext } from "@/contexts/ItemPostContext";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { useLocation } from "react-router-dom";

type EditOrDeleteCommentProps = {
  commentPost: CommentDTO;
  postId: string;
  parent?: string;
};

const EditOrDeleteComment = (
  { commentPost, postId, parent }: EditOrDeleteCommentProps,
  ref: React.RefObject<HTMLDivElement>
) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const {
    updateData,
    state: { postDetail },
  } = React.useContext(ItemPostContext);
  const { homePosts, profilePosts } = useSelector<RootState, CommonDataProps>(
    getCommon
  );
  const dispatch = useDispatch<AppDispatch>();
  const { modalsDispatch, modalsAction } = React.useContext(ModalContext);
  const location = useLocation();
  const handleEvent = async () => {
    modalsDispatch(modalsAction.loadingModal(true));
    await deleteComment(postId, commentPost?.item.id);
    const newPostDetail = {
      ...postDetail,
      comments: {
        ...postDetail.comments,
        list: !parent
          ? [...postDetail.comments.list].filter(
              (item) => item.item.id !== commentPost.item.id
            )
          : [...postDetail.comments.list].map((item) => {
              if (item.item.id === commentPost.item.parent) {
                return {
                  ...item,
                  child: [...item.child].filter(
                    (child) => child.id !== commentPost.item.id
                  ),
                };
              }
              return item;
            }),
        total: postDetail.comments.total - 1,
      },
    };
    updateData("postDetail", newPostDetail);
    dispatch(
      updateDataCommon({
        key: location.pathname === "/" ? "homePosts" : "profilePosts",
        value: [...(location.pathname === "/" ? homePosts : profilePosts)].map(
          (item) =>
            item.post.id === newPostDetail.post.id ? newPostDetail : item
        ),
      })
    );
    modalsDispatch(modalsAction.closeModal());
  };
  const refControl = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    //
    if (refControl.current) {
      refControl.current.style.left = `${
        commentPost.item.content.type === 3 ? 330 : ref.current.offsetWidth
      }px`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, refControl]);
  //
  if (user.id === commentPost.item.user.id)
    return (
      <div
        ref={refControl}
        className="item__flex absolute ml-6 top-1/2 transform -translate-y-1/2"
      >
        <span
          onClick={() => updateData("edit", commentPost.item.id)}
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
};

export default React.forwardRef(EditOrDeleteComment);
