import moment from "moment";
import React, { useContext } from "react";
import { StoryContext } from "@/contexts/StoryContext";

export default function ViewStoryLeft(props) {
  //
  const {
    state: { current, main, storyList },
    updateData,
  } = useContext(StoryContext);
  const { fullScreen, setFullScreen } = props;
  //
  return (
    <>
      <div className="w-full relative ">
        <span className="font-semibold text-2xl pb-4 dark:text-white">Tin</span>
        <br />
        <div className="flex items-center my-2 gap-2">
          <span className="text-sm text-main">Kho lưu trữ</span>
          <span className="text-sm text-main">·</span>
          <span className="text-sm text-main">Cài đặt</span>
        </div>
        <div
          aria-hidden
          onClick={() => setFullScreen(!fullScreen)}
          className={`text-2xl w-10 h-10 rounded-full bg-gray-200 
                cursor-pointer ${
                  fullScreen
                    ? "fixed top-20 left-3 z-50"
                    : "absolute top-0.5 -right-1"
                } hover:bg-gray-300
                 flex justify-center items-center dark:bg-dark-main dark:text-white dark:hover:bg-dark-third`}
        >
          <i className={`bx bx-${fullScreen ? "exit-" : ""}fullscreen`}></i>
        </div>
      </div>
      <p className="font-semibold my-2 dark:text-white">Tin của bạn</p>
      <div className="cursor-pointer w-full flex p-2">
        <div className="w-2/12">
          <i className="fas fa-plus p-5 text-main bg-gray-100 rounded-full"></i>
        </div>
        <div className="w-10/12 pl-3">
          <p className="font-semibold pb-1 dark:text-white">Tạo tin</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Bạn có thể chia sẽ hoặc viết gì đó.
          </p>
        </div>
      </div>
      <hr className="my-2" />
      <p className="font-semibold my-2 dark:text-white">Tất cả tin</p>
      {current &&
        main &&
        storyList.map((story, index) => (
          <div
            aria-hidden
            onClick={() => {
              updateData("current", story);
              updateData("timeCurrent", 0);
              updateData("indexRun", 0);
              updateData("indexStory", index);
              updateData("main", story.storyList[0]);
            }}
            key={story?.id}
            className={`w-full flex my-2 cursor-pointer rounded-lg p-2
                ${
                  story.groupStory.id === current?.groupStory?.id
                    ? "dark:bg-dark-third bg-gray-100"
                    : "dark:hover:bg-dark-third hover:bg-gray-100"
                }`}
          >
            <div className="w-23per">
              <img
                src={story.groupStory.userGroupStory.avatar}
                className="rounded-full p-1 w-16 h-16 border-4 border-white object-cover border-solid"
                alt=""
              />
            </div>
            <div className="w-3/4">
              <p className="font-semibold pt-2 dark:text-white">{`${story.groupStory.userGroupStory.firstName} ${story.groupStory.userGroupStory.lastName}`}</p>
              <p className="color-word text-sm">
                <span className="text-blue-400"></span>
                <span className="font0-bold text-sm">
                  {moment(story.groupStory.timeCreated).fromNow()}
                </span>
              </p>
            </div>
          </div>
        ))}
      <hr className="p-2 my-3"></hr>
    </>
  );
}
