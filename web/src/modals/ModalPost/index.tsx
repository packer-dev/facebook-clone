import React, { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapper from "../ModalWrapper";
import BottomWritePostModal from "./BottomWritePostModal";
import CenterWritePostModal from "./CenterWritePostModal";
import TopWritePostModal from "./TopWritePostModal";
import { ContentPost } from "@/interfaces/ContentPost";
import { generateUUID } from "@/utils";
import { postModel } from "@/models";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getCommon, getUser } from "@/reducers";
import { createPost, editPost } from "@/apis/postAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { PAGE_PROFILE } from "@/constants/Config";
import { User } from "@/interfaces/User";
import MediaDisplay from "@/components/MediaDisplay";
import { Button } from "@/components/ui/button";
import ItemPost from "@/components/ItemPost";

const ModalPost = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const { pageCurrent, profilePosts } = useSelector<RootState, CommonDataProps>(
    getCommon
  );
  const {
    posts: {
      imageVideo,
      content: text,
      imageVideoUpload,
      id,
      background,
      tags,
      activity,
      answer_question,
      feel,
      local,
      time_created,
      share,
    },
  } = useContext(PostContext);

  const dispatch = useDispatch<AppDispatch>();
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const handlePost = async () => {
    modalsDispatch(modalsAction.loadingModal(true));
    const formData = new FormData();
    if (imageVideo?.new?.length > 0) {
      for (let i = 0; i < imageVideo.new.length || 0; i++) {
        formData.append("media_new", imageVideo.new[i]);
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
        postModel({
          id,
          user,
          content,
          background,
          tags,
          activity,
          answer_question,
          feel,
          local,
          time_created,
        })
      )
    );
    if (imageVideo?.old?.length > 0) {
      formData.append("media_old", JSON.stringify(imageVideo.old));
    }
    const result = id ? editPost(formData) : createPost(formData);
    result
      .then((res) => {
        if (id) {
          dispatch(
            updateDataCommon({
              key: "profilePosts",
              value: [...profilePosts].map((item) => {
                if (item?.post?.id === id) return res;
                return item;
              }),
            })
          );
        } else if (pageCurrent.indexOf(PAGE_PROFILE) !== -1) {
          dispatch(
            updateDataCommon({
              key: "profilePosts",
              value: [res, ...profilePosts],
            })
          );
        }
        modalsDispatch(modalsAction.closeModal());
      })
      .catch((err) => {
        modalsDispatch(modalsAction.loadingModal(false));
      });
  };
  //
  return (
    <ModalWrapper title={`${id ? "Edit" : "Create"} post`}>
      <TopWritePostModal />
      <div className="w-full mt-2.5 wrapper-content-right max-h-[365px] overflow-y-auto">
        <CenterWritePostModal />
        {imageVideoUpload && (
          <MediaDisplay
            edit
            medias={[...imageVideo.old, ...Array.from(imageVideo.new || [])]}
          />
        )}
        {share && <ItemPost postDetail={share} hideComment hideToolbar />}
      </div>
      <div className="w-full">
        <BottomWritePostModal />
      </div>
      <div className="w-full text-center my-2.5 mx-0">
        <Button
          onClick={handlePost}
          className="w-full p-2.5 border-none rounded-lg font-bold"
          type="button"
          // bgColor="bg-main text-white"
          disabled={
            !(
              text ||
              activity ||
              imageVideo?.length > 0 ||
              tags?.length > 0 ||
              feel ||
              local ||
              background ||
              answer_question
            )
          }
        >
          {id ? "Edit" : "Add"}
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalPost;
