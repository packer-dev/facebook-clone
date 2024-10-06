import React from "react";
import PostListContainer from "@/modules/PostListContainer";
import { useSelector } from "react-redux";
import { getUserProfile, RootState } from "@/reducers";
import { UserProfileReduxProps } from "@/reducers/userProfile";

const PostProfileList = () => {
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  //
  return (
    <div className="w-full my-2">
      <PostListContainer mode="profile" user={userProfile} />
    </div>
  );
};

export default PostProfileList;
