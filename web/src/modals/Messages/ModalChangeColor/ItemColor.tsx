import * as React from "react";

type ItemColorProps = {
  item: string;
  color: string;
  setColor: (color: string) => void;
};

const ItemColor = ({ item, color, setColor }: ItemColorProps) => {
  return (
    <li
      aria-hidden
      onClick={() => setColor(item)}
      className={`rounded-full relative cursor-pointer flex justify-center items-center ${
        color === item
          ? " bg-gray-300 hover:bg-dark-third "
          : " hover:bg-gray-300 dark:hover:bg-dark-third "
      }`}
      style={{ paddingTop: "100%" }}
    >
      <div className="mx-auto rounded-full absolute top-0 p-1 left-0 bottom-0 right-0">
        <div className={`w-ful h-full rounded-full bg-[${item}]`}></div>
      </div>
    </li>
  );
};

export default ItemColor;
