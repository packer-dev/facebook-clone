import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ImageVideoPreview from "../../ItemPost/ImageVideoPreview";
import ModalWrapper from "../ModalWrapper";
import BottomWritePostModal from "./BottomWritePostModal";
import CenterWritePostModal from "./CenterWritePostModal";
import TopWritePostModal from "./TopWritePostModal";
import ButtonComponent from "@/components/ButtonComponent";

export default function ModalPost() {
  //
  const { posts } = useContext(PostContext);
  const [emojiShow, setEmojiShow] = useState(false);
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const hanlePost = async () => {
    modalsDispatch(modalsAction.loadingModal(true));
  };
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      if (posts.id) {
        modalsDispatch(modalsAction.loadingModal(true));
        if (unmounted) return;

        modalsDispatch(modalsAction.loadingModal(false));
      }
    };
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.id, posts]);
  //
  return (
    <ModalWrapper
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
            z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 
            shadow-lv1 dark:border-dark-third dark:bg-dark-third"
      title={`${posts.id ? "Edit" : "Create"} post`}
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
        {posts.imageVideoUpload && <ImageVideoPreview />}
      </div>
      <div className="w-full px-2">
        <BottomWritePostModal />
      </div>
      <div className="w-full px-2 text-center my-2.5 mx-0">
        <ButtonComponent
          handleClick={hanlePost}
          className="w-full p-2.5 border-none rounded-lg font-bold"
          type="button"
          bgColor="bg-main text-white"
          disabled={
            !(
              posts.content.length > 0 ||
              posts.activity ||
              posts.imageVideo.length > 0 ||
              posts.tags.length > 0 ||
              posts.feel ||
              posts.local ||
              posts.background ||
              posts.answerQuestion
            )
          }
        >
          {posts.id ? "Sửa" : "Đăng"}
        </ButtonComponent>
      </div>
    </ModalWrapper>
  );
}
