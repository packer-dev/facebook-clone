import React, { useContext } from "react";
import ContentStory from "./ContentStory";
import { StoryContext } from "@/contexts/StoryContext";

const ViewStoryRight = (props) => {
  //
  const { fullScreen } = props;
  const {
    state: { indexRun, current, main, indexStory, storyList },
    updateData,
  } = useContext(StoryContext);
  const processUp = () => {
    updateData("timeCurrent", 0);
    if (indexRun + 1 === main.length) {
      if (indexStory + 1 === storyList.length) {
        updateData("indexStory", 0);
        updateData("indexRun", 0);
        updateData("main", storyList[0]);
        updateData("current", storyList[0][0]);
      } else {
        updateData("indexRun", 0);
        updateData("indexStory", indexStory + 1);
        updateData("current", storyList[indexStory + 1][0]);
        updateData("main", storyList[indexStory + 1]);
      }
    } else {
      updateData("indexRun", indexRun + 1);
      updateData("current", main[indexRun + 1]);
    }
  };
  const processDown = () => {
    updateData("timeCurrent", 0);
    if (indexStory - 1 < 0) {
      if (indexRun - 1 >= 0) {
        updateData("indexRun", indexRun - 1);
        updateData("current", storyList[indexStory][indexRun - 1]);
      } else {
        updateData("indexStory", storyList.length - 1);
        updateData("indexRun", storyList[storyList.length - 1].length - 1);
        updateData(
          "current",
          storyList[storyList.length - 1][
            storyList[storyList.length - 1].length - 1
          ]
        );

        updateData("main", storyList[storyList.length - 1]);
      }
    } else if (indexRun - 1 >= 0) {
      updateData("indexRun", indexRun - 1);
      updateData("current", storyList[indexStory][indexRun - 1]);
    } else {
      updateData("indexStory", indexStory - 1);
      updateData("indexRun", storyList[indexStory - 1].length - 1);
      updateData(
        "current",
        storyList[indexStory - 1][storyList[indexStory - 1].length - 1]
      );
      updateData("main", storyList[indexStory - 1]);
    }
  };
  //
  return (
    <div
      className={`${
        fullScreen ? "w-full" : "w-3/4"
      } bg-black dark:bg-dark-main story-right`}
      style={{ height: "calc(100%)" }}
    >
      <div className="w-full flex overflow-y-auto h-full">
        <div
          className={`${
            fullScreen ? "w-1/2" : "w-2/3"
          } px-5 mx-auto h-full relative top-2 left-20 flex`}
        >
          {indexStory === 0 && indexRun === 0 ? (
            <div className="w-1/12 pr-4" />
          ) : (
            <div
              aria-hidden
              onClick={() => processDown()}
              className="w-1/12 pr-4 flex items-center justify-center h-full"
            >
              <i
                className="fas fa-chevron-left cursor-pointer text-gray-500 px-5 py-3 bg-gray-300 rounded-full 
                hover:text-black hover:bg-white text-xl "
              />
            </div>
          )}
          {current && main && <ContentStory />}
          {indexStory === storyList.length - 1 &&
          indexRun === storyList[storyList.length - 1].length - 1 ? (
            <div className="w-1/12 pl-4" />
          ) : (
            <div
              aria-hidden
              onClick={() => processUp()}
              className="w-1/12 pl-4 flex items-center justify-center h-full"
            >
              <i
                className="fas fa-chevron-right cursor-pointer text-gray-500 px-5 py-3 bg-gray-300 rounded-full 
                hover:text-black hover:bg-white text-xl "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewStoryRight;
