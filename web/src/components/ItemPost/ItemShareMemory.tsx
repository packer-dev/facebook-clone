import React from "react";
import shared_story_left from "@/assets/images/shared-story-left-1.5x.png";
import shared_story_right from "@/assets/images/shared-story-right-1.5x.png";

const ItemShareMemory = () => {
  return (
    <div
      className="w-97% p-2 bg-white dark:bg-dark-second border-2 border-solid 
    border-gray-200 flex dark:text-white dark:border-dark-third rounded-t-lg"
    >
      <div className="w-1/3 flex justify-center">
        <img
          src={shared_story_left}
          className="w-1/4 object-cover"
          alt=""
          srcSet=""
        />
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="flex items-center justify-center flex-wrap">
          <p className="text-center font-semibold mb-1">1 year ago</p>
          <p className="text-center font-semibold ">View your memories</p>
        </div>
      </div>
      <div className="w-1/3 flex justify-center">
        <img
          src={shared_story_right}
          className="w-1/4 object-cover"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default ItemShareMemory;
