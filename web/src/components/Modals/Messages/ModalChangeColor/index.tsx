import React, { useState } from "react";
import ItemColor from "./ItemColor";
import { Group } from "@/interfaces/Group";
import ModalMessageWrapper from "../ModalMessageWrapper";

type ModalChangeColorProps = {
  updateGroup: (group: Group) => void;
  group: Group;
};

const ModalChangeColor = ({ updateGroup, group }: ModalChangeColorProps) => {
  //
  const [color, setColor] = useState(group?.data?.color);
  const colors = [
    "#006AD4",
    "#02B28D",
    "#4C9CF2",
    "#5B5B5B",
    "#68D400",
    "#692CF2",
    "#77A2F2",
    "#AB41D4",
    "#B51299",
    "#B76618",
    "#EDA600",
    "#EE046B",
    "#FF311E",
  ];
  //
  return (
    <ModalMessageWrapper
      title="Color"
      className="shadow-sm border border-solid border-gray-500 py-3 bg-white w-full fixed z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg 
      sm:w-10/12 md:w-2/3 lg:w-2/3 xl:w-1/3 transform -translate-x-1/2 -translate-y-1/2"
      group={group}
      updateGroup={updateGroup}
      type="color"
      value={color}
    >
      <div className="w-full py-4 flex justify-center">
        <ul className="pl-2 flex flex-wrap">
          {colors.map((item) => (
            <ItemColor
              item={item}
              key={item}
              color={color}
              setColor={setColor}
            />
          ))}
        </ul>
      </div>
    </ModalMessageWrapper>
  );
};

export default ModalChangeColor;
