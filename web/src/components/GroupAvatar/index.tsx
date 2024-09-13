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
  child,
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
          className={`absolute w-${size - child} h-${
            size - child
          } p-1 border-2 border-white rounded-full ${
            index === 0 ? "top-0 left-0" : bottom(index)
          }`}
        />
      ))}
      <span className="w-3.5 h-3.5 rounded-full bg-green-500 absolute bottom-0 right-0.5"></span>
    </div>
  );
};

export default GroupAvatar;
