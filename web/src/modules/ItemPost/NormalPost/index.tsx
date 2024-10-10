import React, { memo } from "react";
import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";
import MediaDisplay from "@/modules/MediaDisplay";

export type NormalPostProps = {
  imageVideoPostList: Media[];
  post: Post;
};

const NormalPost = ({ imageVideoPostList, post }: NormalPostProps) => {
  const content: JSX.Element = post.background ? (
    <div
      className="w-full relative h-80 bg-cover rounded-lg"
      style={{
        [post.background.key]: post.background.value,
      }}
    >
      <div
        className="text-2xl w-full px-4 flex justify-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2
       -translate-y-1/2 break-all text-center "
      >
        {post.content.text}
      </div>
    </div>
  ) : (
    <MediaDisplay medias={imageVideoPostList} post={post} />
  );
  return (
    <div className="w-full">
      {post.answer_question ? (
        <div
          className={`w-full mx-auto flex justify-center items-center rounded-lg relative`}
          style={{
            height: 550,
            backgroundImage: post.answer_question.content,
          }}
        >
          <div className="">
            <div className="w-48 h-48 mx-auto relative">
              <img
                src={post.user.avatar}
                alt=""
                className="w-full h-full rounded-full object-cover shadow-lv1 mx-auto shadow-lg"
              />
              <span
                className="py-1.5 px-4 text-sm absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 rounded-full
               bg-red-600 text-white font-semibold"
              >
                A&Q
              </span>
            </div>
            <div className="w-full px-4 mt-4">
              <div
                className={`${
                  post.answer_question.content.length >= 105
                    ? "text-2xl"
                    : "text-3xl"
                } w-full flex justify-center text-white font-semibold break-all text-center`}
              >
                {post.answer_question.value}
              </div>
            </div>
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default memo(NormalPost);
