import React, { useContext, useState } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ImageVideoPreview from "../../ItemPost/ImageVideoPreview";
import ModalWrapper from "../ModalWrapper";
import BottomWritePostModal from "./BottomWritePostModal";
import CenterWritePostModal from "./CenterWritePostModal";
import TopWritePostModal from "./TopWritePostModal";
import ButtonComponent from "@/components/ButtonComponent";
import { ContentPost } from "@/interfaces/ContentPost";
import { generateUUID } from "@/utils";
import { Post } from "@/interfaces/Post";
import { postModel } from "@/models";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/reducers";
import { createPost, editPost } from "@/apis/postAPIs";
import { updateDataCommon } from "@/reducers/common";
import { PAGE_PROFILE } from "@/constants/Config";

export default function ModalPost({ post }: { post?: Post }) {
  //
  const {
    user,
    common: { homePosts, pageCurrent, profilePosts },
  } = useSelector<RootState, RootState>((state) => state);
  const {
    posts: {
      imageVideo,
      content: text,
      imageVideoUpload,
      activity,
      answerQuestion,
      background,
      tags,
      feel,
      local,
    },
  } = useContext(PostContext);
  const dispatch = useDispatch<AppDispatch>();
  const [emojiShow, setEmojiShow] = useState(false);
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const handlePost = async () => {
    modalsDispatch(modalsAction.loadingModal(true));
    const formData = new FormData();

    if (imageVideo.length > 0) {
      for (let i = 0; i < imageVideo.length || 0; i++) {
        formData.append("media_new", imageVideo[i]);
      }
    }
    const content: ContentPost = {
      id: generateUUID(),
      text,
      type: 1,
    };
    formData.append(
      "post",
      JSON.stringify(
        post
          ? postModel({ ...post, content: { ...post?.content, text } })
          : postModel({
              user,
              content,
            })
      )
    );
    if (imageVideo.length > 0) {
      formData.append("media_new", JSON.stringify(imageVideo));
    }
    const result = post ? editPost(formData) : createPost(formData);
    result
      .then((res) => {
        if (post) {
          dispatch(
            updateDataCommon({
              key: "homePosts",
              value: [...homePosts].map((item) => {
                if (item?.post?.id === post?.id) {
                  return { ...item, post: res };
                }
                return item;
              }),
            })
          );
        } else {
          if (pageCurrent.indexOf(PAGE_PROFILE) !== -1) {
            dispatch(
              updateDataCommon({
                key: "profilePosts",
                value: [res, ...profilePosts],
              })
            );
          }
        }
        modalsDispatch(modalsAction.closeModal());
      })
      .catch((err) => {
        modalsDispatch(modalsAction.loadingModal(false));
      });
  };
  //
  return (
    <ModalWrapper
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
      z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
      sshadow-lv1 dark:border-dark-third dark:bg-dark-third"
      title={`${post?.id ? "Edit" : "Create"} post`}
    >
      <TopWritePostModal />
      <div
        className={`w-full mt-2.5 wrapper-content-right ${
          emojiShow ? "" : "overflow-y-auto"
        }`}
        style={{ maxHeight: 365 }}
      >
        <CenterWritePostModal
          setEmojiShow={setEmojiShow}
          emojiShow={emojiShow}
        />
        {imageVideoUpload && <ImageVideoPreview />}
      </div>
      <div className="w-full px-2">
        <BottomWritePostModal />
      </div>
      <div className="w-full px-2 text-center my-2.5 mx-0">
        <ButtonComponent
          handleClick={handlePost}
          className="w-full p-2.5 border-none rounded-lg font-bold"
          type="button"
          bgColor="bg-main text-white"
          disabled={
            !(
              text ||
              activity ||
              imageVideo.length > 0 ||
              tags.length > 0 ||
              feel ||
              local ||
              background ||
              answerQuestion
            )
          }
        >
          {post?.id ? "Sửa" : "Đăng"}
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
}
