import { PostDTO } from "@/interfaces/Post";
import React from "react";
import ContentPost from "../ContentPost";

const SharePost = ({ postDetail }: { postDetail: PostDTO }) => {
  return (
    <div className="px-4">
      <div className="border-t border-solid border-gray-300">
        <ContentPost postDetail={postDetail} />
      </div>
    </div>
  );
};

export default SharePost;
