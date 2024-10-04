import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemFriendList from "./ItemFriendList";
import { FriendProfileDTO } from "@/interfaces/User";
import { getFriendUser } from "@/apis/userAPIs";

const FriendList = () => {
  //
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
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
