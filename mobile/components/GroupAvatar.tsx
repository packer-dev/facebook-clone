import * as React from "react";
import { View, Image } from "react-native";
import tailwind from "../tailwind";
import { Group } from "../interfaces/Group";

type GroupAvatarProps = {
  group: Group | null;
  size?: number;
  child?: number;
};

const GroupAvatar = ({ group, size = 16, child = 4 }: GroupAvatarProps) => {
  const bottom = (index: number) =>
    index === 1 ? "right-0 top-0" : "bottom-0 left-3";
  return (
    <View style={tailwind(`w-${size} h-${size} relative mx-auto`)}>
      {group?.members?.slice(0, 3).map((item, index) => (
        <Image
          key={item.id}
          source={{
            uri: item?.user?.avatar || `https://picsum.photos/536/354`,
          }}
          style={tailwind(
            `absolute w-${size - child} h-${
              size - child
            } p-1 border-2 border-white rounded-full ${
              index === 0 ? "top-0 left-0" : bottom(index)
            }`
          )}
        />
      ))}
    </View>
  );
};

export default GroupAvatar;
