import React from "react";
import { useSelector } from "react-redux";
import WritePost from "@/modules/WritePost";
import PostProfileList from "../PostProfileList";
import ProfileLeft from "../ProfileLeft";
import { RootState, getUser, getUserProfile } from "@/reducers";
import { User } from "@/interfaces/User";
import { UserProfileReduxProps } from "@/reducers/userProfile";

const MainProfile = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const { userProfile, isFriend } = useSelector<
    RootState,
    UserProfileReduxProps
  >(getUserProfile);
  //
  return (
    <div className="w-full lg:flex gap-3">
      <ProfileLeft />
      <div className="w-full mx-auto rounded-lg lg:w-7/12">
        {(isFriend || userProfile.id === user.id) && (
          <WritePost view={userProfile} />
        )}
        <PostProfileList />
      </div>
    </div>
  );
};

export default MainProfile;
