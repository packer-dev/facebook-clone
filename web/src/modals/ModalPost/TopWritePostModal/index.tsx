import React, { useContext } from "react";
import { useSelector } from "react-redux";
import InfoPostHeader from "./InfoPostHeader";
import { RootState, getUser } from "@/reducers";
import { PostContext } from "@/contexts/PostContext/PostContext";
import { User } from "@/interfaces/User";

export default function TopWritePostModal() {
  //
  const {
    posts: { activity, feel, tags, local },
  } = useContext(PostContext);
  const user = useSelector<RootState, User>(getUser);
  //
  return (
    <div className="w-full flex px-0 py-2">
      <img
        className="w-14 h-14 ml-3 mt-1 rounded-full object-cover mx-auto"
        src={user.avatar}
        alt=""
      />
      <div className=" pl-2 " style={{ width: "calc(100% - 70px)" }}>
        <p className="pt-0.5 dark:text-white">
          <InfoPostHeader
            user={user}
            activity={activity}
            feel={feel}
            local={local}
            tagList={tags}
          />
        </p>
        <div className="py-0 px-1 mt-0.5 w-28 bg-gray-300 dark:bg-dark-third rounded-full">
          <div className="flex gap-1 py-1.5 justify-center text-xs relative cursor-pointer items-center">
            <i className="fas fa-globe-europe dark:text-white" />
            <b className="dark:text-white">&nbsp;Public&nbsp;&nbsp;</b>
            <i className="fas fa-sort-down -mt-0.5 dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
