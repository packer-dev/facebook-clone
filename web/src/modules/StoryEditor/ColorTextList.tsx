import React, { useContext } from "react";
import foregroundStory from "@/config/foregroundStory";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";

const ColorTextList = () => {
  const {
    state: { color },
    updateData,
  } = useContext(StoryEditorContext);
  return (
    <div className="w-full">
      <div
        className="w-full pb-2 border-2 border-solid border-gray-200 rounded-lg bg-white dark:bg-dark-third
        max-h-40 mb-2 wrapper-content-right overflow-y-auto dark:border-dark-third shadow-xl"
      >
        <p className="font-bold text-xm py-1 px-2 dark:text-white">
          Color text
        </p>
        <ul className="w-full pl-2 flex flex-wrap h-32 max-h-32 overflow-y-auto">
          <li
            aria-hidden
            onClick={() => updateData("color", null)}
            className={`flex items-center dark:text-white justify-center w-8 h-8 bx bx-x cursor-pointer m-1 rounded-full border-2 border-solid 
            ${color === null ? "border-gray-500" : "border-white"}`}
          />
          {foregroundStory.map((item, index) => (
            <li
              aria-hidden
              key={item?.id}
              onClick={() => updateData("color", item)}
              className={`cursor-pointer w-8 h-8 m-1 rounded-full border-2 border-solid ${
                color?.id === item.id ? "border-gray-500" : "border-white"
              }`}
              style={{ backgroundColor: item.color }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ColorTextList;
