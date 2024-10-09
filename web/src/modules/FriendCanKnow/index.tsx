import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemFriendCanKnow from "./ItemFriendCanKnow";
import { RootState, getUser, getUserProfile } from "@/reducers";
import { User } from "@/interfaces/User";
import { UserProfileReduxProps } from "@/reducers/userProfile";

const FriendCanKnow = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    //
    const fetchData = async () => {
      setUsers([]);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile?.id, user]);
  //
  return (
    users.length > 0 && (
      <div className="w-full px-2 py-0.5 shadow-lv1 bg-white dark:bg-dark-third dark:text-white rounded-lg relative">
        <div className="flex justify-between w-full py-1.5 items-center">
          <p className="font-semibold">People You May Know</p>
          <span
            aria-hidden
            className="text-main font-semibold text-sm cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </span>
        </div>
        {show && (
          <div className="w-full max-w-full flex gap-2 overflow-x-auto dark:bg-dark-third">
            {[...users.filter((item) => item.id !== user.id)].map((item) => (
              <ItemFriendCanKnow
                item={item}
                key={item.id}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default memo(FriendCanKnow);
