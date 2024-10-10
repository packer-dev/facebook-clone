import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, getUser } from "@/reducers";
import ItemInviteFriend from "./ItemInviteFriend";
import { getFriendUser } from "@/apis/userAPIs";
import { FriendProfileDTO, User } from "@/interfaces/User";

const InviteFriend = () => {
  const [list, setList] = useState<FriendProfileDTO[]>([]);
  const user = useSelector<RootState, User>(getUser);
  useEffect(() => {
    const fetch = async () => {
      const result = await getFriendUser(user.id, 2);
      setList(result || []);
    };
    fetch();
  }, [user?.id]);
  return list ? (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`https://res.cloudinary.com/ensonet-dev/image/upload/v1639967753/ImageHomeLeft/tSXYIzZlfrS_femvcs.png`}
            alt=""
            className="w-5 h-5 mr-1"
          />
          <p className="font-semibold dark:text-white">Friend Requests</p>
        </div>
        <Link to="" className="font-semibold dark:text-white">
          View all
        </Link>
      </div>
      {list.length > 0 ? (
        list.map((item) => (
          <ItemInviteFriend
            list={list}
            setList={setList}
            item={item}
            key={item.user.id}
          />
        ))
      ) : (
        <div className="w-full" id="loiMoi">
          <p className="mx-auto py-3 dark:text-white text-center text-sm text-gray-600 my-5">
            No friend requests
          </p>
        </div>
      )}
    </>
  ) : (
    <div />
  );
};

export default InviteFriend;
