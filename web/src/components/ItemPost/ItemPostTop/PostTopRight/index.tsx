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
import { Media } from "@/interfaces/Media";

type PostTopRightProps = {
  user: User;
  post: Post;
  medias: Media[];
};

const PostTopRight = ({ user, post, medias }: PostTopRightProps) => {
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
      {post.type === 1 && (
        <span
          aria-hidden
          onClick={() => {
            modalsDispatch(modalsAction.openModalPost({ post, medias }));
          }}
          className="bx bx-edit-alt absolute top-0 right-8 text-xl text-gray-800 hover:text-main 
        cursor-pointer dark:text-gray-300"
        />
      )}
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
      />
    </>
  ) : (
    <></>
  );
};

export default PostTopRight;
