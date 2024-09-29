import * as React from "react";
import AdsHome from "./AdsHome";
import InviteFriend from "./InviteFriend";
import UserActivity from "./UserActivity";

const HomeRight = () => {
  //
  //
  return (
    <div className="fixed hidden h-screen lg:block lg:w-1/3 lg:left-2/3 xl:left-3/4 top-0 pt-16 home__right">
      <div className="w-full flex">
        <div className="content-right wrapper-content-right overflow-y-auto py-0 px-2.5 w-full">
          <AdsHome />
          <hr className="my-3 mx-auto w-full" />
          <InviteFriend />
          <div className="w-full pt-3 flex items-center justify-between">
            <div className="">
              <p className="font-bold dark:text-white">Friend</p>
            </div>
            <ul className="flex gap-4">
              <li className="cursor-pointer w-8 h-8 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-500">
                <i className="fas fa-video dark:text-white" />
              </li>
              <li className="cursor-pointer w-8 h-8 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-500">
                <i className="fab fa-searchengin dark:text-white" />
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
};

export default HomeRight;
