import React, { useContext } from "react";
import { StoryContext } from "@/contexts/StoryContext";

type InfoStoryProps = { setShow?: Function };

const InfoStory = ({ setShow }: InfoStoryProps) => {
  const {
    state: { current, main },
    updateData,
  } = useContext(StoryContext);
  return (
    <div
      className="w-full absolute bg-gray-100 dark:bg-dark-second px-2 bottom-0 left-0 rounded-lg"
      style={{ height: "86.5%" }}
    >
      <p className="dark:text-white font-bold py-4 w-full relative">
        <span>Detail story</span>
        <span
          aria-hidden
          onClick={() => setShow(false)}
          className=" text-2xl cursor-pointer font-bold absolute top-2 right-2"
        >
          &times;
        </span>
      </p>
      <ul className="flex overflow-x-hidden max-w-[368px]">
        {current.storyList.map((item, index) => (
          <li
            aria-hidden
            onClick={() => {
              updateData("indexRun", index);
              updateData("main", current.storyList[index]);
            }}
            key={item?.id}
            className="mr-2 cursor-pointer flex-shrink-0 flex items-center justify-center w-[120px] h-40"
          >
            <img
              className={`${
                item.id === main.id ? "w-full h-full" : "w-5/6 h-5/6"
              } object-cover`}
              alt=""
              src={item.src}
            />
          </li>
        ))}
        <li className="cursor-pointer flex-shrink-0 w-[120px]">
          <div className="w-32 h-40 p-2">
            <div className="w-full dark:bg-dark-third bg- gray-100 h-36 py-8">
              <div className=" dark:bg-dark-main bg-gray-300 w-10 h-10 rounded-full mx-auto text-center cursor-pointer pt-1">
                <i className="bx bx-plus text-2xl dark:text-white" />
              </div>
              <p className="text-center font-bold dark:text-white py-3">
                Create news
              </p>
            </div>
          </div>
        </li>
      </ul>
      <hr className="my-3 dark: bg-dark-second" />
      <div className="w-full my-2 wrapper-scrollbar overflow-y-auto max-h-[460px]">
        <p className="font-bold text-gray-800 dark :text-white">
          <i className="fas fa-eye mr-2" /> <span>No viewers</span>
        </p>
        <p className="font-semibold text-sm text-gray -600 dark:text-white px-2 text-xm py-2">
          Details about who viewed your story will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default InfoStory;
