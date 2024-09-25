import * as React from "react";
import AdsHome from "./AdsHome";
import InviteFriend from "./InviteFriend";
import UserActivity from "./UserActivity";

export default function HomeRight() {
  //
  //
  return (
    <div className="fixed hidden h-screen lg:block lg:w-1/3 lg:left-2/3 xl:left-2/3 xl:w-1/3 pt-6 home__right">
      <div className="w-full flex h-full pb-4">
        <div className="w-1/5 hidden sm:hidden xl:block" />
        <div className="content-right wrapper-content-right w-4/5 overflow-y-auto py-0 px-2.5 lg:w-full xl:w-4/5">
          <AdsHome />
          <hr className="my-3 mx-auto w-full" />
          <InviteFriend />
          <div className="w-full pt-3 flex items-center justify-between">
            <div className="">
              <p className="font-bold dark:text-white">Bạn bè</p>
            </div>
            <ul className="flex gap-4">
              <li className="cursor-pointer w-8 h-8 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-500">
                <i className="fas fa-video dark:text-white" />
              </li>
              <li className="cursor-pointer w-8 h-8 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-500">
                <i className="fab fa-search-engin dark:text-white" />
              </li>
              <li className="cursor-pointer w-8 h-8 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-500">
                <i className="fas fa-ellipsis-h dark:text-white" />
              </li>
            </ul>
          </div>
          <UserActivity />
        </div>
      </div>
    </div>
  );
}
