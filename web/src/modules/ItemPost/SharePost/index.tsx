import { PostDTO } from "@/interfaces/Post";
import React from "react";
import ContentPost from "../ContentPost";

type SharePostProps = { postDetail: PostDTO };

const SharePost = ({ postDetail }: SharePostProps) => {
  return (
    <div className="px-4">
      <div className="border-t border-solid border-gray-300">
        <ContentPost postDetail={postDetail} />
      </div>
    </div>
  );
};

export default SharePost;
