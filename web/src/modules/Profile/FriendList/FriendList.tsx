import React, { useState } from "react";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemFriendList from "./ItemFriendList";
import { FriendProfileDTO } from "@/interfaces/User";
import { getFriendUser } from "@/apis/userAPIs";
import { getUserProfile, RootState } from "@/reducers";
import { useSelector } from "react-redux";
import { UserProfileReduxProps } from "@/reducers/userProfile";

const FriendList = () => {
  //
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const [friends, setFriends] = useState<FriendProfileDTO[]>([]);
  //
  return (
    <WrapperContentChildProfile<FriendProfileDTO>
      label="Friends"
      setData={setFriends}
      getResultAPI={() => getFriendUser(userProfile?.id, 3)}
    >
      <div className="w-full flex flex-wrap gap-2">
        {friends.map((item) => (
          <ItemFriendList item={item} key={item.user.id} />
        ))}
      </div>
    </WrapperContentChildProfile>
  );
};

export default FriendList;
