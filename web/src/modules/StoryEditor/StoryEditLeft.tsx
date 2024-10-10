import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";
import BackgroundStoryList from "./BackgroundStoryList";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

const StoryEditLeft = () => {
  const user = useSelector<RootState, User>(getUser);
  const {
    state: { mode, content },
    updateData,
  } = useContext(StoryEditorContext);
  return (
    <div
      className="w-1/4 p-4 pt-0 border-t-2 border-solid border-gray-300 shadow-md 
        dark:border-dark-third"
    >
      <p className="w-full flex py-6">
        <span className="font-bold text-xl dark:text-white">Tin Của Bạn</span>
      </p>
      <div className="w-full flex pb-3">
        <Link to="">
          <img
            className="w-20 h-20 object-cover p-1.5 shadow-xl rounded-full "
            src={user.avatar}
            alt=""
          />
        </Link>
        <Link
          to=""
          className="py-7 px-3.5 dark:text-white font-bold"
        >{`${user.name}`}</Link>
      </div>
      <hr />
      <div className="w-full pt-4 pb-2">
        <textarea
          className="outline-none w-full h-48 font-bold resize-none border-2 
          border-solid border-gray-200 dark:bg-dark-second overflow-hidden my-2 p-2 
          rounded-lg place-type dark:border-dark-third shadow-xl dark:text-white"
          placeholder="Start type"
          onChange={(event) => updateData("content", event.target.value)}
          defaultValue={content}
        />
      </div>
      <div
        className="w-full mb-4 px-2 flex relative cursor-pointer border-2 border-solid 
        border-gray-300 dark:border-dark-third shadow-lg rounded-lg"
      >
        <i className="bx bx-font-family dark:text-white text-xl py-2" />
        <div className=" p-2.5 relative dark:text-white">SUCCINCT</div>
        <i className="fas fa-caret-down absolute top-4 right-4 dark:text-white" />
      </div>
      {mode === 0 && <BackgroundStoryList />}
    </div>
  );
};

export default StoryEditLeft;
