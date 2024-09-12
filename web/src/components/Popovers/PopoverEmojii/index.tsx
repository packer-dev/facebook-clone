import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import emojii from "../../../config/emojii";

export default function PopoverEmojii(props: any) {
  //
  const { handleClick } = props;
  const listCategoryFun = () => {
    let listCategory = [];
    emojii.forEach((element) => {
      let index = listCategory.findIndex(
        (item) => element.category === item.category
      );
      if (index === -1)
        listCategory.push({
          thumnail: element.emoji,
          category: element.category,
        });
    });
    return listCategory;
  };
  const listCategory = listCategoryFun();
  const [categoryActive, setCategoryActive] = useState(
    listCategory[0].category
  );
  const showCategoryAll = listCategory.map((item, index) => {
    return (
      <li
        aria-hidden
        onClick={() => setCategoryActive(item.category)}
        className={`flex justify-center py-2 px-3 mx-0.5 rounded-lg text-xl cursor-pointer 
            ${
              categoryActive === item.category
                ? " bg-gray-300 dark:bg-dark-third"
                : " hover:bg-gray-300 dark:hover:bg-dark-third"
            }`}
        key={item?.id}
      >
        {item.thumnail}
      </li>
    );
  });
  const getEmojiiByCategory = (category) => {
    let listEmojii = [];
    emojii.forEach((element) => {
      if (element.category === category) listEmojii.push(element.emoji);
    });
    return listEmojii;
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
        {getEmojiiByCategory(categoryActive).map((item, index) => {
          return (
            <div
              aria-hidden
              onClick={() => handleClick(item)}
              className={`w-9 h-9 flex justify-center text-2xl cursor-pointer items-center ${
                item !== "icon"
                  ? "hover:bg-gray-300 dark:hover:bg-dark-third"
                  : "bg-gray-300 dark:bg-dark-third"
              }`}
              key={item?.id}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
