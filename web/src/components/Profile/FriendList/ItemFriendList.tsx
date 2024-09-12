import ButtonComponent from "@/components/ButtonComponent";
import * as React from "react";

export default function ItemFriendList(props) {
  //
  const { item } = props;
  //
  return (
    <div
      className="relative flex p-2 border-2 border-solid dark:border-dark-second  
        border-gray-200 rounded-lg item__friend__list w-full"
    >
      <div className="w-1/4">
        <img
          className="w-24 h-24 rounded-lg object-cover"
          src={item.userUserRelationShip.avatar}
          alt=""
        />
      </div>
      <div className="w-5/12 flex pl-4">
        <div className="flex flex-wrap items-center">
          <p>
            <span>{`${item.userUserRelationShip.firstName} ${item.userUserRelationShip.lastName}`}</span>
            <br></br>
          </p>
        </div>
      </div>
      <div className="w-1/3  pt-2 text-right">
        <ButtonComponent className="my-6 px-3 py-2 bg-gray-300 rounded-lg font-bold">
          Bạn be
        </ButtonComponent>
      </div>
    </div>
  );
}
