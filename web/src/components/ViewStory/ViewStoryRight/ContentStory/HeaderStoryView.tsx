import moment from "moment";
import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { StoryContext } from "@/contexts/StoryContext";

function HeaderStoryView(props) {
  //
  const { refAudio } = props;
  const {
    state: { current, timeCurrent, main, isPlaying },
    updateData,
  } = useContext(StoryContext);
  //
  return (
    <div className="w-full py-1 px-2 absolute top-1">
      <div className="w-full pb-2">
        <ul className="w-full flex">
          {current.storyList.map((item, index) => (
            <li
              key={item?.id}
              className={`w-${Math.floor(
                100 / current.storyList.length
              )}% bg-gray-300 mr-1 cursor-pointer`}
            >
              <div
                className={`bg-white py-0.5 `}
                style={{
                  width: `${
                    item.id === main.id ? 100 * (timeCurrent / 10) : 0
                  }%`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex">
        <div className="w-2/12">
          <img
            src={current.groupStory.userGroupStory.avatar}
            className="w-12 h-12 object-cover rounded-full p-1"
            alt=""
          />
        </div>
        <div className="w-1/2 pt-1">
          <p className="pb-1">
            <Link
              to=""
              className="font-bold text-white"
            >{`${current.groupStory.userGroupStory.firstName} 
                    ${current.groupStory.userGroupStory.lastName}`}</Link>
            &nbsp;
            <span className="text-sm text-white">
              {moment(main.timeCreated).fromNow(true)}
            </span>
          </p>
          <p className="text-white text-sm">Mod(Remix) </p>
        </div>
        <div className="w-1/3">
          <ul className="w-full flex relative">
            <li className=" py-2 px-2 cursor-pointer">
              <i
                aria-hidden
                onClick={() => {
                  updateData("isPlaying", !isPlaying);
                  if (refAudio.current) {
                    if (isPlaying) {
                      refAudio.current.pause();
                    } else {
                      refAudio.current.play();
                      refAudio.current.muted = false;
                    }
                  }
                }}
                className={`text-white text-2xl ${
                  isPlaying ? "far fa-stop-circle" : "bx bx-play"
                }`}
              />
            </li>
            <li className=" py-2 px-2 cursor-pointer">
              <i className="fas fa-volume-up text-white text-2xl" />
            </li>
            <li className="py-2 px-2 cursor-pointer">
              <i className="fas fa-ellipsis-h text-white text-2xl" />
            </li>
            <div
              className="w-80 right-2 top-12 absolute bg-gray-200 border-2 dark:bg-dark-third dark:text-white font-bold border-solid 
                        border-gray-300 dark:border-dark-second z-50 rounded-lg hidden"
            >
              <ul className="w-full">
                <li
                  className="w-full px-2.5 py-2 dark:bg-dark-third bg-gray-200 
                            hover:bg-gray-300 dark:hover:bg-dark-second cursor-pointer"
                >
                  <div className="flex items-center">
                    <i className="far fa-trash-alt text-2xl mr-3" />
                    <span> Xóa ảnh</span>
                  </div>
                </li>
                <li
                  className="w-full px-2.5 py-2 dark:bg-dark-third bg-gray-200 
                                hover:bg-gray-300 dark:hover:bg-dark-second cursor-pointer"
                >
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-triangle text-2xl mr-3" />
                    <span> Đã xảy ra lỗi</span>
                  </div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(HeaderStoryView);
