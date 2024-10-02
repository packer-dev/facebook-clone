import React, { useContext } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import RelationshipUserStatus from "./RelationshipUserStatus";
import { useSelector } from "react-redux";
import { getCommon, RootState } from "@/reducers";
import { CommonDataProps } from "@/reducers/common";

export default function InfoProfile() {
  //
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  const { profileFriends } = useSelector<RootState, CommonDataProps>(getCommon);
  //
  return (
    <div className="p-2 pr-0 relative" style={{ width: "calc(100% - 180px)" }}>
      <p className="font-semibold text-4xl py-1 dark:text-white flex items-center">
        {`${userProfile.name}`}
        <span className="ml-3 bg-blue-500 rounded-full text-sm font-bold text-white w-4 h-4 flex">
          <i className="bx bx-check flex justify-center items-center " />
        </span>
      </p>
      <p className="text-gray-600 dark:text-gray-300 items-center pl-1 pb-1 flex">
        <span>{profileFriends.length} friends</span>
        <span className="mx-1">•</span>
        <span />
      </p>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex pl-2 my-1 w-full">
          {profileFriends.slice(0, 3).map((item, index) => (
            <img
              key={item.user.id}
              className="w-10 h-10 border-2 border-solid border-white dark:border-dark-third relative -ml-2 rounded-full object-cover"
              src={item.user.avatar}
              style={{ zIndex: profileFriends.length - index }}
              alt=""
            />
          ))}
        </div>
        <RelationshipUserStatus />
      </div>
    </div>
  );
}
