import moment from "moment";
import React, { useContext } from "react";
import { StoryContext } from "@/contexts/StoryContext";

type ViewStoryLeftProps = {
  fullScreen?: boolean;
  setFullScreen?: Function;
};

const ViewStoryLeft = ({ fullScreen, setFullScreen }: ViewStoryLeftProps) => {
  //
  const {
    state: { current, main, storyList },
    updateData,
  } = useContext(StoryContext);
  //
  return (
    <>
      <div className="w-full relative ">
        <span className="font-semibold text-2xl pb-4 dark:text-white">
          Story
        </span>
        <br />
        <div className="flex items-center my-2 gap-2">
          <span className="text-sm text-primary">Archive</span>
          <span className="text-sm text-primary">·</span>
          <span className="text-sm text-primary">Setting</span>
        </div>
        <div
          aria-hidden
          onClick={() => setFullScreen(!fullScreen)}
          className={`text-2xl w-10 h-10 rounded-full bg-gray-200 cursor-pointer ${
            fullScreen
              ? "fixed top-20 left-3 z-50"
              : "absolute top-0.5 -right-1"
          } hover:bg-gray-300 flex justify-center items-center dark:bg-dark-main dark:text-white dark:hover:bg-dark-third`}
        >
          <i className={`bx bx-${fullScreen ? "exit-" : ""}fullscreen`} />
        </div>
      </div>
      <p className="font-semibold my-2 dark:text-white">Your story</p>
      <div className="cursor-pointer w-full flex p-2 gap-3 items-center">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center">
          <i className="fas fa-plus text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold pb-1 dark:text-white">Create story</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            You can share or write something.
          </p>
        </div>
      </div>
      <hr className="my-2" />
      <p className="font-semibold my-2 dark:text-white">All story</p>
      {current &&
        main &&
        storyList.map((story, index) => (
          <div
            aria-hidden
            onClick={() => {
              updateData("current", story[0]);
              updateData("timeCurrent", 0);
              updateData("indexRun", 0);
              updateData("indexStory", index);
              updateData("main", story);
            }}
            key={story[0].id}
            className={`w-full flex my-2 gap-3 cursor-pointer rounded-lg p-2
                ${
                  story[0]?.id === current?.id
                    ? "dark:bg-dark-third bg-gray-100"
                    : "dark:hover:bg-dark-third hover:bg-gray-100"
                }`}
          >
            <div className="flex gap-3">
              <img
                src={story[0]?.user?.avatar}
                className="rounded-full p-1 w-16 h-16 border-4 border-white object-cover border-solid"
                alt=""
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold pt-2 dark:text-white">{`${story[0]?.user?.name}`}</p>
              <p className="color-word text-sm">
                <span className="text-blue-400" />
                <span className="font0-bold text-sm">
                  {moment(story[0]?.time_created).fromNow()}
                </span>
              </p>
            </div>
          </div>
        ))}
      <hr className="p-2 my-3" />
    </>
  );
};

export default ViewStoryLeft;
