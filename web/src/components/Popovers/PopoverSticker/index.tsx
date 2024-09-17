import React, { useState } from "react";
import stickers from "@/config/stickers";
import ItemSticker from "./ItemSticker";

const PopoverSticker = ({ handleClick }: { handleClick: Function }) => {
  //
  const generalListSticker = () => {
    let list = [];
    stickers.forEach((element) => {
      let index = list.findIndex((item) => item.group === element.group);
      if (index === -1) list.push(element);
    });
    return list;
  };
  const [categoryItem, setCategoryItem] = useState("001");
  //
  return (
    <>
      <ul className="w-full flex max-w-full overflow-x-auto">
        {generalListSticker().map((item, index) => {
          return (
            <li
              aria-hidden
              onClick={() => setCategoryItem(item.group)}
              className={`w-10 mr-2 flex flex-shrink-0 items-center dark:text-white justify-center cursor-pointer ${
                item.group === categoryItem &&
                "border-b-4 border-solid border-blue-500 "
              }`}
              key={item.id + index}
            >
              <div
                className={`w-10 h-10 max-w-10 max-h-10 overflow-hidden animation__sticker bg-size:${item.col}:${item.row} relative`}
                style={{ backgroundImage: `url('${item.src}')` }}
              />
            </li>
          );
        })}
      </ul>
      <div className="w-full py-2 px-3 text-center">
        <input
          type="text"
          className="w-full mx-auto dark:border-dark-second border-gray-200 border-solid border-2 my-1 px-2.5
           py-2 rounded-3xl dark:bg-dark-third "
          placeholder="Tìm kiếm"
        />
      </div>
      <div className="w-full h-60 overflow-y-auto flex flex-wrap wrapper-content-right px-2 m-h-[300px]">
        {[...stickers]
          .filter((item) => item.group === categoryItem)
          .map((item, index) => (
            <ItemSticker
              sticker={item}
              key={item?.id}
              handleClick={handleClick}
            />
          ))}
      </div>
    </>
  );
};

export default PopoverSticker;
