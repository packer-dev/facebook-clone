import React, { useState } from "react";
import ModalMessageWrapper from "../ModalMessageWrapper";
import { Group } from "@/interfaces/Group";
import emoji from "@/config/emoji";

type ModalChangeEmojiProps = {
  updateGroup: (group: Group) => void;
  group: Group;
};

const ModalChangeEmoji = ({ updateGroup, group }: ModalChangeEmojiProps) => {
  //
  const listCategoryFun = () => {
    let listCategory = [];
    emoji.forEach((element) => {
      let index = listCategory.findIndex(
        (item) => element.category === item.category
      );
      if (index === -1)
        listCategory.push({
          thumbnail: element.emoji,
          category: element.category,
        });
    });
    return listCategory;
  };
  const listCategory = listCategoryFun();
  const [categoryActive, setCategoryActive] = useState(
    listCategory[0].category
  );
  const showCategoryAll = listCategory.map((item) => (
    <li
      aria-hidden
      onClick={() => setCategoryActive(item.category)}
      className={`flex justify-center py-2 px-3 mx-0.5 rounded-lg text-xl cursor-pointer ${
        categoryActive === item.category
          ? " bg-gray-300 dark:bg-dark-third"
          : " hover:bg-gray-300 dark:hover:bg-dark-third"
      }`}
      key={item?.id}
    >
      {item.thumbnail}
    </li>
  ));
  const getEmojiByCategory = (category) => {
    let listEmoji = [];
    emoji.forEach((element) => {
      if (element.category === category) listEmoji.push(element.emoji);
    });
    return listEmoji;
  };
  const [icon, setIcon] = useState("");
  //
  return (
    <ModalMessageWrapper
      title="Emoji"
      className="shadow-sm border border-solid border-gray-500 py-3 bg-white w-full fixed 
      z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform 
      -translate-x-1/2 -translate-y-1/2"
      type="emoji"
      value={icon}
      updateGroup={updateGroup}
      group={group}
    >
      <ul className="flex overflow-x-scroll m-2 border-b border-gray-100 border-solid px-2">
        {showCategoryAll}
      </ul>
      <div className="w-full dark:bg-dark-second wrapper-content-right flex overflow-y-auto flex-wrap justify-center max-h-[315px]">
        {getEmojiByCategory(categoryActive).map((item) => (
          <div
            aria-hidden
            onClick={() => setIcon(item)}
            className={`w-12 h-12 flex rounded-sm mb-1 justify-center text-2xl cursor-pointer items-center ${
              item !== icon
                ? "hover:bg-gray-300 dark:hover:bg-dark-third"
                : "bg-gray-300 dark:bg-dark-third"
            }`}
            key={item?.id}
          >
            {item}
          </div>
        ))}
      </div>
    </ModalMessageWrapper>
  );
};

export default ModalChangeEmoji;
