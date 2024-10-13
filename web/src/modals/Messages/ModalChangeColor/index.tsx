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
      group={group}
      updateGroup={updateGroup}
      type="color"
      value={color}
    >
      <div className="w-full py-4 flex justify-center">
        <ul className="w-full grid grid-cols-6 gap-3">
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
