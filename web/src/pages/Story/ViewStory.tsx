import React, { useContext, useEffect, useState } from "react";
import WrapperLogged from "../WrapperLogged";
import { StoryContext, StoryProvider } from "@/contexts/StoryContext";
import ViewStoryLeft from "@/components/ViewStory/ViewStoryLeft";
import ViewStoryRight from "@/components/ViewStory/ViewStoryRight";

export default function ViewStory() {
  //
  const [fullScreen, setFullScreen] = useState(false);
  //
  return (
    <WrapperLogged>
      <div className="w-full flex h-screen z-10 pt-16 bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full">
        <StoryProvider>
          <WrapperViewStory
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          ></WrapperViewStory>
        </StoryProvider>
      </div>
    </WrapperLogged>
  );
}

const WrapperViewStory = (props) => {
  //
  const { fullScreen, setFullScreen } = props;
  const {
    state: { current, main, storyList },
  } = useContext(StoryContext);
  useEffect(() => {
    //
    const fetch = async () => {};
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <div
        className={`w-1/4 bg-white h-full dark:bg-dark-second p-4 shadow-2xl 
                        wrapper-content-right overflow-y-auto ${
                          fullScreen ? "hidden" : ""
                        }`}
      >
        <ViewStoryLeft fullScreen={fullScreen} setFullScreen={setFullScreen} />
      </div>
      {current?.storyList
        ? main &&
          current &&
          storyList.length > 0 && <ViewStoryRight fullScreen={fullScreen} />
        : "Heets"}
      <div
        aria-hidden
        onClick={() => setFullScreen(!fullScreen)}
        className={`text-2xl w-10 h-10 rounded-full bg-gray-200 
                        cursor-pointer ${
                          fullScreen ? "fixed top-20 left-3 z-50" : "hidden"
                        } hover:bg-gray-300
                        flex justify-center items-center dark:bg-dark-main dark:text-white dark:hover:bg-dark-third`}
      >
        <i className={`bx bx-${fullScreen ? "exit-" : ""}fullscreen`}></i>
      </div>
    </>
  );
};
