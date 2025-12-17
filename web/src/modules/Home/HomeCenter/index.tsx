import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_CREATE_STORY } from "@/constants/Config";
import WritePost from "@/modules/WritePost";
import RememberAccount from "../RememberAccount";
import HomePostList from "./HomePostList";
import MeetRom from "./MeetRom";
import StoryList from "./StoryList";
import { RootState, getCommon, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { CommonDataProps } from "@/reducers/common";
import { Button } from "@/components/ui/button";

const HomeCenter = () => {
  const navigation = useNavigate();
  const user = useSelector<RootState, User>(getUser);
  const { reloadPost, loadingPost } = useSelector<RootState, CommonDataProps>(
    getCommon
  );
  useEffect(() => {
    const container = document.querySelector("#scroll__home");
    if (!container) return;

    container.scrollTo(0, 0);
  }, [reloadPost]);
  return (
    <div
      className="center-content relative left-0 px-2 pt-16 w-full sm:mx-auto md:w-3/4 lg:mx-0 
      lg:w-4/6 lg:left-0! xl:w-1/2 xl:px-8 xl:left-1/4"
    >
      <div className="w-full xl:w-[600px] mx-auto relative">
        {loadingPost && (
          <div
            className="w-14 h-14 rounded-full bg-white shadow-lg border border-solid border-gray-200 flex items-center 
          justify-center left-1/2 transform -translate-x-1/2 absolute"
          >
            <span className="bx bx-loader-dots text-3xl text-primary animate-spin"></span>
          </div>
        )}
        <div className="flex my-4 relative gap-1">
          <div
            aria-hidden
            onClick={() => navigation(PAGE_CREATE_STORY)}
            className="flex-shrink-0 w-1/4 md:w-1/6 px-1 pl-0 relative text-center h-44 cursor-pointer"
          >
            <img
              className="w-full rounded-t-lg object-cover h-[125px]"
              src={user.avatar}
              alt=""
            />
            <div className="w-full rounded-b-lg bg-white dark:bg-dark-second relative h-[50px]">
              <Button
                icon="fas fa-plus"
                size="icon"
                className="absolute left-1/2 transform -translate-x-1/2 rounded-full -top-5 -mr-2 border-4 border-solid border-white pt-1"
              />
              <p className="text-center text-sm font-bold pt-6 pb-0 dark:text-white">
                Create story
              </p>
            </div>
          </div>
          <StoryList />
        </div>
        <RememberAccount />
        <WritePost view={user} />
        <MeetRom />
        <HomePostList />
      </div>
    </div>
  );
};

export default HomeCenter;
