import React, { memo, useContext, useEffect, useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import allFeel from "@/config/feels";
import { StoryContext } from "@/contexts/StoryContext";
import InfoStory from "../InfoStory";
import HeaderStoryView from "./HeaderStoryView";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

const ContentStory = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const {
    state: {
      timeCurrent,
      current,
      isPlaying,
      indexRun,
      show,
      main,
      indexStory,
      storyList,
      loading,
    },
    updateData,
  } = useContext(StoryContext);
  const refAudio = useRef<HTMLAudioElement>();
  useEffect(() => {
    //
    let timeOut: ReturnType<typeof setTimeout>;
    if (isPlaying) {
      timeOut = setTimeout(() => {
        if (timeCurrent + 1 > 10) {
          updateData("timeCurrent", 0);
          if (indexRun + 1 === main.length) {
            updateData("indexRun", 0);
            if (indexStory + 1 === storyList.length) {
              updateData("indexStory", 0);
              updateData("indexRun", 0);
              updateData("current", storyList[0][0]);

              updateData("main", storyList[0]);
            } else {
              updateData("indexRun", 0);
              updateData("indexStory", indexStory + 1);

              updateData("main", storyList[indexStory + 1]);

              updateData("current", storyList[indexStory + 1][0]);
            }
          } else {
            updateData("indexRun", indexRun + 1);
            updateData("current", main[indexRun + 1]);
          }
        } else {
          updateData("timeCurrent", timeCurrent + 1);
        }
      }, 1000);
    } else {
      refAudio.current.pause();
      clearTimeout(timeOut);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [main, timeCurrent, isPlaying, current]);
  //
  return (
    <div
      className="w-7/12 story-right bg-gray-400 dark:bg-dark-third mt-5 m-2 rounded-lg relative"
      style={{ height: "calc(100% - 90px)" }}
    >
      {current?.music && (
        <audio
          ref={refAudio}
          className="hidden"
          src={JSON.parse(current.music).src}
          autoPlay
          loop
        ></audio>
      )}
      <div className="w-full h-full flex items-center relative">
        {loading && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center">
            <i className="bx bx-loader-circle text-2xl animate-spin text-white" />
          </div>
        )}
        <img
          src={current.url}
          className="w-full img-story object-cover"
          alt=""
          style={{ maxHeight: "calc(100%)" }}
        />
      </div>
      {current && main && <HeaderStoryView refAudio={refAudio} />}
      {user.id !== current.user.id && (
        <ScrollContainer className=" w-full p-2 absolute bottom-2 flex max-w-full overflow-x-auto">
          <div className="w-10/12 relative flex-shrink-0 flex items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="Trả lời.."
              className="w-full p-2 rounded-3xl bg-black bg-opacity-50 text-white"
            />
            <i className="far fa-paper-plane cursor-pointer absolute right-4 top-0.5 text-2xl text-gray-200" />
          </div>
          <div className="flex gap-2 items-center ml-3">
            {allFeel.map((feel) => (
              <img
                src={feel.image}
                key={feel.image}
                className="w-8 flex-shrink-0 flex h-8 rounded-full cursor-pointer"
                alt=""
              />
            ))}
          </div>
        </ScrollContainer>
      )}
      {current && !show && user.id === current.user.id && (
        <div
          aria-hidden
          onClick={() => updateData("show", true)}
          className="absolute -bottom-12 cursor-pointer left-2 p-2 z-50"
        >
          <div className="mb-7 -ml-2  border-b-2 border-gray-200 border-solid">
            <i className="bx bx-chevron-left transform text-white rotate-90 mb-0 text-2xl" />
            <br></br>
            <span className="text-white font-semibold mt-2">
              4 people viewed
            </span>
          </div>
          <div className="flex pl-2">
            <img
              src="https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png"
              alt=""
              className="w-7 h-7 rounded-full -ml-2 z-30 object-cover border-white border-2 border-solid"
            />
            <img
              src="http://res.cloudinary.com/tratahuong01/image/upload/v1638973763/Avatar/kxqbimjteg5ka9cbqh6y.jpg"
              alt=""
              className="w-7 h-7 rounded-full -ml-2 z-20 object-cover border-white border-2 border-solid"
            />
            <img
              src="https://res.cloudinary.com/tratahuong01/image/upload/v1624453911/Story/z9kkojxij5zgav74969q.png"
              alt=""
              className="w-7 h-7 rounded-full -ml-2 z-10 object-cover border-white border-2 border-solid"
            />
          </div>
        </div>
      )}
      <div
        className="w-1/4 bg-white flex p-1.5 absolute top-1/2 left-16 rounded-lg"
        style={{ transform: "rotate(-25deg)" }}
      >
        <div className="w-1/4 pr-2">
          <img
            src="http://res.cloudinary.com/tratahuong01/image/upload/v1639970050/Story/pxhxin9ywl1ii7u7qped.png"
            alt=""
          />
        </div>
        <div className="w-3/4">
          <p className="font-bold" style={{ fontSize: 7 }}>
            បទកំពុងល្បី 24kgoldn - Mood
          </p>
          <p className="font-sm" style={{ fontSize: 5 }}>
            24kgoldn
          </p>
        </div>
      </div>
      {show && user.id === current.user.id && (
        <InfoStory setShow={(status) => updateData("show", status)} />
      )}
    </div>
  );
};
export default memo(ContentStory);
