import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import WritePost from "../../WritePost";
import PostProfileList from "../PostProfileList";
import ProfileLeft from "../ProfileLeft";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

export default function MainProfile() {
  //
  const user = useSelector<RootState, User>(getUser);
  const {
    state: { userProfile, isFriend },
  } = useContext(UserProfileContext);
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
}
