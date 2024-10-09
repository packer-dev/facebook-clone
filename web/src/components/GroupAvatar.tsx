import { Group } from "@/interfaces/Group";
import React from "react";

type GroupAvatarProps = {
  group: Group | null;
  size?: number;
  child?: number;
  className?: string;
};

const GroupAvatar = ({
  size,
  group,
  child = 4,
  className = "",
}: GroupAvatarProps) => {
  const bottom = (index: number) =>
    index === 1 ? "right-0 top-0" : "bottom-0 left-3";
  return (
    <div className={`w-${size} h-${size} relative mx-auto ${className}`}>
      {group?.members?.slice(0, 3).map((item, index) => (
        <img
          alt=""
          key={item.id}
          src={item?.user?.avatar || `https://picsum.photos/536/354`}
          className={`absolute  p-0.5 bg-white w-${size - child} h-${
            size - child
          } rounded-full object-cover ${
            index === 0 ? "top-0 left-0" : bottom(index)
          }`}
        />
      ))}
      <span className="w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0.5" />
    </div>
  );
};

export default GroupAvatar;
