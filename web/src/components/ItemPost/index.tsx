import React, { memo } from "react";
import TypeCommentInput from "../Comment/TypeCommentInput";
import ItemPostTop from "./ItemPostTop/ItemPostTop";
import ContentPost from "./ContentPost";
import LoadingPost from "./LoadingPost";
import { PostDTO } from "@/interfaces/Post";
import FooterItemPost from "./FooterItemPost";
import { ItemPostProvider } from "@/contexts/ItemPostContext";
import ItemCommentPostMain from "../Comment/ItemCommentPostMain";

type ItemPostProps = {
  postDetail: PostDTO;
  margin?: boolean;
  hideContent?: boolean;
};
const ItemPost = ({ postDetail, margin, hideContent }: ItemPostProps) => {
  //
  //
  return postDetail ? (
    <div
      className={`w-full bg-white dark:bg-dark-second shadow-lv1 ${
        margin ? "my-4" : ""
      } 
        py-4 px-2 rounded-lg mb-3`}
    >
      <ItemPostTop postDetail={postDetail} />
      {postDetail.post.content && !postDetail.post.background && (
        <p
          className="my-1 dark:text-gray-300 w-full p-1 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: postDetail.post.content.text,
          }}
        />
      )}
      {!hideContent && <ContentPost postDetail={postDetail} />}
      <div className="w-full mb-4 mx-0">
        <FooterItemPost postDetail={postDetail} />
      </div>
      <TypeCommentInput />
      {postDetail.comments?.map((comment) => (
        <ItemCommentPostMain commentDetail={comment} postDetail={postDetail} />
      ))}
    </div>
  ) : (
    <LoadingPost />
  );
};

const ItemPostWrapper = (props: ItemPostProps) => {
  return (
    <ItemPostProvider>
      <ItemPost {...props} />
    </ItemPostProvider>
  );
};

export default memo(ItemPostWrapper);
