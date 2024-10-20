import moment from "moment";
import React, { memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoryContext } from "@/contexts/StoryContext";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { deleteStory } from "@/apis/storyAPI";
import { useSelector } from "react-redux";
import { getUser, RootState } from "@/reducers";
import { User } from "@/interfaces/User";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { PAGE_HOME } from "@/constants/Config";

function HeaderStoryView(props) {
  //
  const { refAudio } = props;
  const user = useSelector<RootState, User>(getUser);
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  const navigate = useNavigate();
  const {
    state: {
      current,
      timeCurrent,
      main,
      isPlaying,
      storyList,
      indexRun,
      indexStory,
    },
    updateData,
  } = useContext(StoryContext);
  const handleDeleteStory = async () => {
    updateData("loading", true);
    await deleteStory(current.id, user.id);
    const indexCurrent = main.findIndex((item) => item.id === current.id);
    const indexMain = storyList.findIndex(
      (item) => item[0].user.id === main[0].user.id
    );
    if (indexCurrent === -1 || indexMain === -1) return;

    if (indexCurrent === main.length - 1) {
      updateData("indexRun", 0);
      if (indexMain === storyList.length - 1) {
        navigate(PAGE_HOME);
        return;
      } else {
        updateData("indexStory", indexStory + 1);
      }
    } else {
      updateData("indexRun", indexRun + 1);
    }
    updateData(
      "storyList",
      storyList.map((item) =>
        [...item].filter((child) => child.id !== current.id)
      )
    );
    updateData("loading", false);
  };
  //
  return (
    <div className="w-full py-1 px-2 absolute top-1">
      <div className="w-full pb-2">
        <ul className="w-full flex">
          {main.map((item) => (
            <li
              key={item?.id}
              className={`w-${Math.floor(
                100 / main.length
              )}% bg-gray-300 mr-1 cursor-pointer`}
            >
              <div
                className={`bg-white py-0.5 `}
                style={{
                  width: `${
                    item.id === current.id ? 100 * (timeCurrent / 10) : 0
                  }%`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex items-center gap-3">
        <div className="">
          <img
            src={current.user.avatar}
            className="w-12 h-12 object-cover rounded-full p-1"
            alt=""
          />
        </div>
        <div className="flex-1 pt-1">
          <p className="pb-1">
            <Link
              to=""
              className="font-bold text-white"
            >{`${current.user.name}`}</Link>
            &nbsp;
            <span className="text-sm text-white">
              {moment(current.time_created).fromNow(true)}
            </span>
          </p>
          <p className="text-white text-sm">Mod(Remix)</p>
        </div>
        <div className="">
          <div className="w-full flex relative">
            <div className=" py-2 px-2 cursor-pointer">
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
            </div>
            <div className=" py-2 px-2 cursor-pointer">
              <i className="fas fa-volume-up text-white text-2xl" />
            </div>
            <Popover>
              <PopoverTrigger
                onClick={() => {
                  updateData("isPlaying", false);
                }}
              >
                <div className="py-2 px-2 cursor-pointer">
                  <i className="fas fa-ellipsis-h text-white text-2xl" />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="w-full">
                  <div
                    aria-hidden
                    onClick={() =>
                      modalsDispatch(
                        modalsAction.openModalDeletePost(
                          "Delete story",
                          "Do you want to delete this story?",
                          "OK",
                          handleDeleteStory
                        )
                      )
                    }
                    className="w-full px-2.5 py-2 dark:bg-dark-third bg-gray-200 
                  hover:bg-gray-300 dark:hover:bg-dark-second cursor-pointer"
                  >
                    <div className="flex items-center">
                      <i className="far fa-trash-alt text-2xl mr-3" />
                      <span>Remove story</span>
                    </div>
                  </div>
                  <div
                    className="w-full px-2.5 py-2 dark:bg-dark-third bg-gray-200 
                hover:bg-gray-300 dark:hover:bg-dark-second cursor-pointer"
                  >
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-triangle text-2xl mr-3" />
                      <span>An error occurred.</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(HeaderStoryView);
