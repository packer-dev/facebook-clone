import * as React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_STORY } from "../../../../constants/Config";

export default function ItemStory(props: any) {
  //
  const {
    last,
    nearLast,
    story: { groupStory, storyList },
    length,
    index,
  } = props;
  const navigation = useNavigate();
  //
  return (
    <div
      aria-hidden
      onClick={() => navigation(PAGE_STORY)}
      className={`w-1/4 md:w-1/6 ${last || ""} ${nearLast || ""} relative`}
    >
      <div
        className="h-44 rounded-xl overflow-hidden relative cursor-pointer flex-shrink-0 
            bg-black border-2 border-solid border-gray-200 dark:border-dark-third shadow-lv1"
      >
        <div className="relative h-full group cursor-pointer">
          <img
            className="group-hover:transform group-hover:scale-110 transition-all duration-700 
                        h-full w-full object-cover "
            src={storyList.length > 0 ? storyList[0].src : ""}
            alt=""
          />
        </div>
        <div className="w-full absolute text-left pl-1.5 break-all bottom-2">
          <b className="text-white text-sm">{`${groupStory.userGroupStory.firstName} ${groupStory.userGroupStory.lastName}`}</b>
        </div>
        <div className="w-full text-left absolute top-2 left-1">
          <img
            className="w-10 h-10 rounded-full object-cover border-4 border-solid border-blue-500 "
            src={groupStory.userGroupStory.avatar}
            alt=""
          />
        </div>
      </div>
      {(length - 1 === index || index === 3 || index === 4) && (
        <div
          aria-hidden
          onClick={() => navigation(PAGE_STORY)}
          className={`w-10 h-10 absolute top-1/2 transform -translate-y-1/2 -mt-1
          rounded-full dark:bg-dark-third cursor-pointer z-20 text-center justify-center items-center bg-white 
          text-gray-700 shadow-lv1 -right-4  ${last || "flex"} ${
            nearLast || "flex"
          }`}
        >
          <i className="bx bx-right-arrow-alt text-2xl dark:text-white"></i>
        </div>
      )}
    </div>
  );
}
