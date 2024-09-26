import * as React from "react";

const ItemSendImageVideo = ({ file, mini }: { file: File; mini?: boolean }) => {
  //
  //
  return (
    <li
      className={`${
        mini ? "w-16 h-16" : "w-20 h-20"
      } rounded-lg text-center mr-4 relative flex-shrink-0`}
    >
      <img
        src={URL.createObjectURL(file)}
        className="w-full h-full mx-auto rounded-lg object-cover"
        alt=""
      />
      <span
        aria-hidden
        onClick={() => {}}
        className="font-bold text-sm absolute -top-2 -right-2 p-0.5 px-2 dark:text-white 
        rounded-full bg-gray-300 dark:bg-dark-third cursor-pointer"
      >
        &times;
      </span>
    </li>
  );
};

export default ItemSendImageVideo;
