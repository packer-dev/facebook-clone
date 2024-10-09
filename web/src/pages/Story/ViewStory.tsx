import React, { useContext, useEffect, useState } from "react";
import WrapperLogged from "../Wrapper/WrapperLogged";
import { StoryContext, StoryProvider } from "@/contexts/StoryContext";
import ViewStoryLeft from "@/modules/ViewStory/ViewStoryLeft";
import ViewStoryRight from "@/modules/ViewStory/ViewStoryRight";
import { useSelector } from "react-redux";
import { getUser, RootState } from "@/reducers";
import { User } from "@/interfaces/User";
import { getStoryByUser } from "@/apis/storyAPI";

const ViewStory = () => {
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
          />
        </StoryProvider>
      </div>
    </WrapperLogged>
  );
};

type WrapperViewStoryProps = {
  fullScreen?: boolean;
  setFullScreen: Function;
};

const WrapperViewStory = ({
  fullScreen,
  setFullScreen,
}: WrapperViewStoryProps) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const {
    state: { current, main, storyList },
    updateData,
  } = useContext(StoryContext);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getStoryByUser(user.id);
      updateData("storyList", result);
      updateData("main", result[0]);
      updateData("current", result[0][0]);
    };

    fetchData();
  }, [user]);
  //
  return (
    <>
      <div
        className={`w-1/4 bg-white h-full dark:bg-dark-second p-4 shadow-2xl wrapper-content-right overflow-y-auto ${
          fullScreen ? "hidden" : ""
        }`}
      >
        <ViewStoryLeft fullScreen={fullScreen} setFullScreen={setFullScreen} />
      </div>
      {main && current && storyList.length > 0 && (
        <ViewStoryRight fullScreen={fullScreen} />
      )}
      <div
        aria-hidden
        onClick={() => setFullScreen(!fullScreen)}
        className={`text-2xl w-10 h-10 rounded-full bg-gray-200 cursor-pointer ${
          fullScreen ? "fixed top-20 left-3 z-50" : "hidden"
        } hover:bg-gray-30 flex justify-center items-center dark:bg-dark-main dark:text-white dark:hover:bg-dark-third`}
      >
        <i className={`bx bx-${fullScreen ? "exit-" : ""}fullscreen`} />
      </div>
    </>
  );
};

export default ViewStory;
