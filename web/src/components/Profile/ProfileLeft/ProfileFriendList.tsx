import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import { getFriendUser } from "@/apis/userAPIs";
import { FriendProfileDTO } from "@/interfaces/User";

export default function ProfileFriendList() {
  //
  const [friends, setFriends] = useState<FriendProfileDTO[]>([]);
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  useEffect(() => {
    //
    const fetchData = async () => {
      const result = await getFriendUser(userProfile?.id, 3);
      setFriends(result);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);
  //
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2">
          <p className="dark:text-white font-bold pt-2">
            Friends <br />
          </p>
          <span className="color-word">{friends.length} friends</span>
        </div>
        <div className="w-1/2 mt-2.5 pr-2.5 text-right text-main">View all</div>
      </div>
      <div className="w-full pt-4 grid grid-cols-3 gap-1">
        {friends.map((friend) => (
          <div className="w-full" key={friend.user.id}>
            <Link
              to={`${PAGE_PROFILE}/${friend.user.id}`}
              className="relative cursor-pointer block"
              style={{ paddingTop: "100%" }}
            >
              <img
                src={friend.user.avatar}
                className="w-full h-full object-cover rounded-lg absolute top-0 left-0 right-0 bottom-0"
                alt=""
              />
            </Link>
            <Link
              to={`${PAGE_PROFILE}/${friend.user.id}`}
              className="font-semibold py-2 dark:text-white text-sm"
            >
              {`${friend.user.name}`}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
