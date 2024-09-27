import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_CREATE_STORY } from "@/constants/Config";
import WritePost from "@/modules/WritePost";
import RememberAccount from "../RememberAccount";
import HomePostList from "./HomePostList";
import MeetRom from "./MeetRom";
import StoryList from "./StoryList";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

const HomeCenter = () => {
  //
  const navigation = useNavigate();
  const user = useSelector<RootState, User>(getUser);
  const refWrapper = useRef<HTMLDivElement>();
  //
  return (
    <div
      ref={refWrapper}
      className="center-content relative left-0 px-2 pt-6 w-full sm:mx-auto md:w-3/4 lg:mx-0 
      lg:w-4/6 lg:left-0! xl:w-1/2 xl:px-8 xl:left-1/4"
    >
      <div className="w-full xl:w-[600px] mx-auto">
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
              <div
                className="w-11 h-11 rounded-full border-4 border-solid border-white dark:border-dark-second 
              absolute dark:bg-dark-second bottom-0 pt-1 bg-main left-1/2 transform -translate-x-1/2 -top-5 -mr-2 "
              >
                <i className="fas fa-plus pt-1.5 text-white" />
              </div>
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
