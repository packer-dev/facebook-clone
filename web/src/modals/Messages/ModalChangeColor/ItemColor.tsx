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
      className={`p-2 rounded-full relative cursor-pointer flex justify-center items-center ${
        color === item
          ? " bg-gray-300 hover:bg-dark-third "
          : " hover:bg-gray-300 dark:hover:bg-dark-third "
      }`}
    >
      <div className={`mx-auto rounded-full bg-[${item}] w-[60px] h-[60px]`} />
    </li>
  );
};

export default ItemColor;
