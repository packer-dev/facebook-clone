import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import emoji from "@/config/emoji";

const PopoverEmoji = ({ handleClick }: { handleClick: Function }) => {
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
  const showCategoryAll = listCategory.map((item) => {
    return (
      <li
        aria-hidden
        onClick={() => setCategoryActive(item.category)}
        className={`flex justify-center py-2 px-3 mx-0.5 rounded-lg text-xl cursor-pointer ${
          categoryActive === item.category
            ? " bg-gray-300 dark:bg-dark-third"
            : " hover:bg-gray-300 dark:hover:bg-dark-third"
        }`}
        key={item?.emoji}
      >
        {item.thumbnail}
      </li>
    );
  });
  const getEmojiByCategory = (category: string) => {
    let listEmoji = [];
    emoji.forEach((element) => {
      if (element.category === category) listEmoji.push(element.emoji);
    });
    return listEmoji;
  };
  //
  return (
    <div className="w-full flex flex-col h-full overflow-hidden max-h-full">
      <div className="border-b-2 border-solid border-gray-200 shadow-lv1 w-full pb-0.5">
        <ScrollContainer className="w-full flex max-w-full">
          {showCategoryAll}
        </ScrollContainer>
      </div>
      <div className="w-full pl-1 flex flex-wrap items-end flex-1 gap-0.5 overflow-y-auto">
        {getEmojiByCategory(categoryActive).map((item, index) => {
          return (
            <div
              aria-hidden
              onClick={() => handleClick?.(item)}
              className={`w-9 h-9 flex justify-center text-2xl cursor-pointer items-center ${
                item !== "icon"
                  ? "hover:bg-gray-300 dark:hover:bg-dark-third"
                  : "bg-gray-300 dark:bg-dark-third"
              }`}
              key={item + index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopoverEmoji;
