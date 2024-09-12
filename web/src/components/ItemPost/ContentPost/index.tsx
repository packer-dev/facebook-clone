import React, { memo } from "react";
import AvatarPost from "../AvatarPost";
import CoverPost from "../CoverPost";
import NormalPost from "../NormalPost";

export default memo(function ContentPost({ postDetail }: any) {
  switch (postDetail.post.typePost) {
    case 0:
      return <AvatarPost postDetail={postDetail} />;
    case 1:
      return <CoverPost postDetail={postDetail} />;
    case 2:
      return (
        <NormalPost
          imageVideoPostList={postDetail.imageVideoPostList}
          post={postDetail.post}
        />
      );
    default:
      return <></>;
  }
});
