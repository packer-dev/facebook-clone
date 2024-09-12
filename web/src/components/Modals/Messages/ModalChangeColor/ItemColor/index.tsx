import * as React from "react";

export default function ItemColor(props) {
  //
  const { item, color, setColor } = props;

  return (
    <li
      onClick={() => setColor(item)}
      className={`p-2 rounded-full relative cursor-pointer flex justify-center items-center ${
        color === item
          ? " bg-gray-300 hover:bg-dark-third "
          : " hover:bg-gray-300 dark:hover:bg-dark-third "
      }`}
    >
      <div
        className="mx-auto rounded-full "
        style={{ backgroundColor: item, width: 60, height: 60 }}
      ></div>
    </li>
  );
}
