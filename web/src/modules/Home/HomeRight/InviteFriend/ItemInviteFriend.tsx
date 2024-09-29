import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AVATAR_DEFAULT, PAGE_PROFILE } from "@/constants/Config";
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
    <div className="w-full flex relative p-4 bg-white rounded-lg dark:bg-dark-third my-2 items-center">
      <img
        src={item.user.avatar}
        alt=""
        className="w-16 h-16 rounded-full object-cover mr-1"
      />
      <div className="ml-1" style={{ width: "calc(100% - 64px)" }}>
        <p className="font-semibold cursor-pointer dark:text-white">
          <Link to={PAGE_PROFILE + "/" + item.user.id}>
            {`${item.user.name}`}
          </Link>
        </p>
        {!!item.manual && (
          <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-300 items-center my-1">
            <img
              src={AVATAR_DEFAULT}
              alt=""
              className="w-4 h-4 rounded-full object-cover"
            />
            <span>{item.manual} mutual friend</span>
          </div>
        )}
        <div className="w-full mt-2 grid grid-cols-2 gap-2">
          <Button
            onClick={() => handleClick(3)}
            loading={loading}
            disabled={loading}
          >
            Confirm
          </Button>
          <Button
            onClick={() => handleClick(0)}
            variant="secondary"
            loading={loading}
            disabled={loading}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemInviteFriend;
