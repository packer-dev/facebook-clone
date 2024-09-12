import React, { memo } from "react";
import ImageVideoDisplay from "../ImageVideoDisplay";
import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";

export type NormalPostProps = {
  imageVideoPostList: Media[];
  post: Post;
};

const NormalPost = ({ imageVideoPostList, post }: NormalPostProps) => {
  //
  const content: any = (
    <ImageVideoDisplay imageVideoPostList={imageVideoPostList} post={post} />
  );
  // post.backgroundPost ? (
  //   <div
  //     className="w-full relative h-80 bg-cover"
  //     style={{
  //       [JSON.parse(post.backgroundPost).key]: JSON.parse(post.backgroundPost)
  //         .value,
  //     }}
  //   >
  //     <div
  //       className="text-2xl w-full px-4 flex justify-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2
  //      -translate-y-1/2 contentedit break-all text-center "
  //     >
  //       {post.content}
  //     </div>
  //   </div>
  // ) : (
  // <ImageVideoDisplay imageVideo={imageVideoPostList} idPost={post.id} />
  // );
  //
  return (
    <div className="w-full">
      {/* {post.answerQuestion ? (
        <div
          className={`w-2/3 mx-auto flex justify-center items-center rounded-xl relative`}
          style={{
            height: 550,
            backgroundImage: JSON.parse(post.answerQuestion).data,
          }}
        >
          <div className="">
            <div className="w-48 h-48 mx-auto relative">
              <img
                src={post.userPost.avatar}
                alt=""
                className="w-full h-full rounded-full object-cover shadow-lv1 mx-auto shadow-lg"
              />
              <span className="py-1.5 px-4 text-sm absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 rouned-full bg-red-600 text-white font-semibold">
                {`H&D`}
              </span>
            </div>
            <div className="w-full px-4 mt-4">
              <div
                className={`${
                  JSON.parse(post.answerQuestion).contentAnswerQuestion
                    .length >= 105
                    ? "text-2xl"
                    : "text-3xl"
                } w-full flex 
                    justify-center text-white font-semibold break-all text-center`}
              >
                {JSON.parse(post.answerQuestion).contentAnswerQuestion}
              </div>
            </div>
          </div>
        </div>
      ) : ( */}
      {content}
      {/* )} */}
    </div>
  );
};

export default memo(NormalPost);
