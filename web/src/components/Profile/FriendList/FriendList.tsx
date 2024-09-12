import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemFriendList from "./ItemFriendList";

export default function FriendList() {
  //
  const {
    userProfile: { userProfile },
  } = useContext(UserProfileContext);
  const [friends, setFriends] = useState([]);
  //
  return (
    <WrapperContentChildProfile
      url={`userRelationships/friends?idUserMain=${userProfile.id}&status=3&offset=0&limit=10&text=`}
      label="Bạn bè"
      setData={setFriends}
    >
      <div className="w-full flex flex-wrap gap-2">
        {friends.map((item) => (
          <ItemFriendList item={item} key={item.userUserRelationShip.id} />
        ))}
      </div>
    </WrapperContentChildProfile>
  );
}
