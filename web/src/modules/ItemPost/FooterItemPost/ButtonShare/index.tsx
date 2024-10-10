import React from "react";
import PopupShare from "../PopupShare";

const ButtonShare = () => {
  return (
    <div className="w-1/3 z-40 relative cursor-pointer justify-center items-center">
      <div
        aria-hidden
        className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-full font-semibold 
        text-sm h-12 flex items-center justify-center "
      >
        <i className="bx bx-share text-xl transform rotate-180 dark:text-gray-300" />
        <span>&nbsp; Share</span>
      </div>
      <PopupShare />
    </div>
  );
};

export default ButtonShare;
