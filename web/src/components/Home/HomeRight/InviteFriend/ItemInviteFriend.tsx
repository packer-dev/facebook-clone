import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { FriendProfileDTO } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

type ItemInviteFriendProps = {
  list: FriendProfileDTO[];
  setList: Function;
  item: FriendProfileDTO;
};

const ItemInviteFriend = ({ item, list, setList }: ItemInviteFriendProps) => {
  //
  const [loading, setLoading] = useState(false);
  const handleClick = async (status: number) => {
    setLoading(true);
    if (status === 0) {
      setList([...list].filter((dt) => dt.user.id !== item.user.id));
    }
  };
  //
  return (
    <div className="w-full flex relative p-2 bg-white rounded-lg dark:bg-dark-third my-2">
      <img
        src={item.user.avatar}
        alt=""
        className="w-14 h-14 rounded-full object-cover mr-1"
      />
      <div className="ml-1" style={{ width: "calc(100% - 64px)" }}>
        <p className="font-semibold cursor-pointer dark:text-white">
          <Link to={PAGE_PROFILE + "/" + item.user.id}>
            {`${item.user.name}`}
          </Link>
        </p>
        <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-300 items-center my-1">
          <img
            src="http://res.cloudinary.com/ensonet-dev/image/upload/v1644153514/Avatars/1644153513203.jpg"
            alt=""
            className="w-4 h-4 rounded-full object-cover"
          />
          <span>1 mutual friend</span>
        </div>
        <div className="w-full flex gap-3 justify-between mt-2">
          <Button
            onClick={() => handleClick(3)}
            loading={loading}
            disabled={loading}
            className="w-1/2 cursor-pointer rounded-lg py-2 text-sm font-semibold bg-main text-white"
          >
            Confirm
          </Button>
          <Button
            onClick={() => handleClick(0)}
            loading={loading}
            disabled={loading}
            className="w-1/2 cursor-pointer rounded-lg py-2 text-sm font-semibold bg-gray-200"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemInviteFriend;
