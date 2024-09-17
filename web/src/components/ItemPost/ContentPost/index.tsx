import React, { memo } from "react";
import AvatarPost from "../AvatarPost";
import CoverPost from "../CoverPost";
import NormalPost from "../NormalPost";
import { PostDTO } from "@/interfaces/Post";

export default memo(function ContentPost({
  postDetail,
}: {
  postDetail: PostDTO;
}) {
  switch (postDetail.post.type) {
    case 1:
      return (
        <NormalPost
          imageVideoPostList={postDetail.medias}
          post={postDetail.post}
        />
      );
    case 2:
      return <AvatarPost postDetail={postDetail} />;
    case 3:
      return <CoverPost postDetail={postDetail} />;
    default:
      return <></>;
  }
});
