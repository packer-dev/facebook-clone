import * as React from "react";

const LoadingProfile = () => {
  return (
    <div className="removeTimelineFirst w-full mx-auto bg-white dark:bg-dark-second px-2 rounded-lg ph-item dark:ph-item">
      <div className="w-63% mx-auto dark:bg-dark-second rounded-lg">
        <div className="w-full flex mx-auto relative dark:bg-dark-third bg-gray-200 h-[390px]">
          <div
            className="w-44 h-44 object-cover rounded-full border-4 border-solid top-[60%] 
            dark:border-dark-main border-gray-300 bg-dark-second mx-auto relative 
            linear-background dark:linear-background "
          />
        </div>
        <div className="w-full pt-12 pb-7">
          <div className="w-52 h-5 rounded-lg mx-auto linear-background dark:linear-background" />
          <div className="w-28 h-3 my-2 rounded-lg mx-auto linear-background dark:linear-background" />
        </div>
        <div className="w-full pb-5">
          <ul className="w-1/2 flex">
            <li className="w-1/5 py-2 mx-2 linear-background dark:linear-background rounded-lg"></li>
            <li className="w-1/5 py-2 mx-2 linear-background dark:linear-background rounded-lg"></li>
            <li className="w-1/5 py-2 mx-2 linear-background dark:linear-background rounded-lg"></li>
            <li className="w-1/5 py-2 mx-2 linear-background dark:linear-background rounded-lg"></li>
            <li className="w-1/5 py-2 mx-2 linear-background dark:linear-background rounded-lg"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoadingProfile;
