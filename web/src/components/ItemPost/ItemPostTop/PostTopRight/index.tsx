import React, { useContext } from "react";
import {
  CONTENT_MODAL_DELETE_POST,
  NAME_BUTTON_MODAL_DELETE_POST,
  TITLE_MODAL_DELETE_POST,
} from "@/constants/ModalWarningConfig";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { User } from "@/interfaces/User";
import { Post } from "@/interfaces/Post";
import { deletePost } from "@/apis/postAPIs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getCommon } from "@/reducers";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";

type PostTopRightProps = {
  user: User;
  post: Post;
};

const PostTopRight = ({ user, post }: PostTopRightProps) => {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const { profilePosts } = useSelector<RootState, CommonDataProps>(getCommon);
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = async () => {
    await deletePost(post.id);
    dispatch(
      updateDataCommon({
        key: "profilePosts",
        value: [...profilePosts].filter((item) => item.post.id !== post.id),
      })
    );
    modalsDispatch(modalsAction.loadingModal(false));
    modalsDispatch(modalsAction.closeModal());
  };
  //
  return user?.id === post.user.id ? (
    <>
      {/* {post.type === 2 && ( */}
      <span
        aria-hidden
        onClick={() => {
          modalsDispatch(modalsAction.openModalPost(post.id, null, null, null));
        }}
        className="bx bx-edit-alt absolute top-0 right-8 text-xl text-gray-800 hover:text-main 
            cursor-pointer dark:text-gray-300"
      ></span>
      {/* )} */}
      <span
        aria-hidden
        onClick={() => {
          modalsDispatch(
            modalsAction.openModalDeletePost(
              TITLE_MODAL_DELETE_POST,
              CONTENT_MODAL_DELETE_POST,
              NAME_BUTTON_MODAL_DELETE_POST,
              handleDelete
            )
          );
        }}
        className="bx bx-trash-alt absolute top-0 right-1 text-xl text-gray-800 hover:text-main
            cursor-pointer dark:text-gray-300"
      ></span>
    </>
  ) : (
    ""
  );
};

export default PostTopRight;
