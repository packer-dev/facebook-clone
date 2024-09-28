import React, { useContext } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import PostListContainer from "@/modules/PostListContainer";

const PostProfileList = () => {
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  //
  return (
    <div className="w-full my-2">
      <PostListContainer mode="profile" user={userProfile} />
    </div>
  );
};

export default PostProfileList;
