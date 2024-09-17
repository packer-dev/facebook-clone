import React, { useContext } from "react";
import backgroundStory from "@/config/backgroundStory";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";

export default function BackgroundStoryList() {
  //
  const {
    state: { data },
    updateData,
  } = useContext(StoryEditorContext);
  //
  return (
    <div
      className="w-full pb-4 border-2 border-solid border-gray-200 rounded-lg h-[220px] max-h-[220px]
        wrapper-content-right overflow-y-auto dark:border-dark-third shadow-xl"
    >
      <p className="font-bold text-xm p-2 dark:text-white">Phông nền</p>
      <ul className="w-full pl-2 flex flex-wrap gap-1.5">
        {backgroundStory.map((item) => (
          <li
            aria-hidden
            onClick={() => updateData("data", item)}
            key={item.id}
            className={`cursor-pointer w-10 h-10 rounded-full ${
              item?.id === data?.id ? " border-gray-600" : "border-white"
            } border-2 border-solid`}
          >
            <img className="w-9 h-9 p-1 rounded-full" src={item.src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
