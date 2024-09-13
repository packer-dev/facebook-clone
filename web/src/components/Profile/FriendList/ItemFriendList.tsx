import ButtonComponent from "@/components/ButtonComponent";
import { PAGE_PROFILE } from "@/constants/Config";
import { FriendProfileDTO } from "@/interfaces/User";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemFriendList({ item }: { item: FriendProfileDTO }) {
  const navigation = useNavigate();
  return (
    <div
      className="relative flex p-2 border-2 border-solid dark:border-dark-second  
        border-gray-200 rounded-lg item__friend__list w-full cursor-pointer"
    >
      <div className="w-1/4">
        <img
          aria-hidden
          onClick={() => navigation(PAGE_PROFILE + `/${item.user.id}`)}
          className="w-24 h-24 rounded-lg object-cover"
          src={item.user.avatar}
          alt=""
        />
      </div>
      <div className="w-5/12 flex pl-4">
        <div className="flex flex-wrap items-center">
          <p
            aria-hidden
            onClick={() => navigation(PAGE_PROFILE + `/${item.user.id}`)}
          >
            <span>{`${item.user.name}`}</span>
            <br></br>
          </p>
        </div>
      </div>
      <div className="w-1/3  pt-2 text-right">
        <ButtonComponent className="my-6 px-3 py-2 bg-gray-300 rounded-lg font-semibold">
          Friends
        </ButtonComponent>
      </div>
    </div>
  );
}
