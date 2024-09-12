import React, { memo } from "react";
import ImageVideoUser from "./ImageVideoUser";
import Introduction from "./Introduction";
import ProfileFriendList from "./ProfileFriendList";

export default memo(function ProfileLeft() {
  return (
    <div className="w-full lg:w-5/12">
      <div className="shadow-lv1 bg-white my-2 p-2.5 pt-0 rounded-lg dark:bg-dark-third">
        <Introduction />
      </div>
      <div className="bg-white shadow-lv1 my-2 p-2.5 rounded-lg  dark:bg-dark-third">
        <ImageVideoUser />
      </div>
      <div className="bg-white shadow-lv1 my-2 p-2.5 rounded-lg dark:bg-dark-third">
        <ProfileFriendList />
      </div>
    </div>
  );
});
