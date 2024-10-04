import * as React from "react";
import allFeel from "@/config/feels";

const Feels = ({ handle }: { handle?: (feel: any) => void }) => {
  //
  //
  return (
    <div className="p-2 z-40">
      <ul
        className="flex flex-column dark:bg-dark-second bg-white rounded-full border-solid 
        dark:border-dark-third border-gray-300 border"
      >
        {allFeel.map((feel, index) => (
          <li
            aria-hidden
            onClick={() => handle?.(index + 1)}
            key={feel.image}
            className="p-1 cursor-pointer rounded-full hover:bg-gray-200 
            dark:hover:bg-dark-third relative w-12 h-12 item__hover"
          >
            <span
              className="p-1 text-xs rounded-full hidden bg-black text-white font-semibold 
              absolute bottom-full mb-2 left-0 overflow-hidden text-ellipsis whitespace-nowrap"
            >
              {feel.label}
            </span>
            <img
              src={feel.image}
              alt=""
              className="w-10 h-10 hover:w-11 rounded-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feels;
