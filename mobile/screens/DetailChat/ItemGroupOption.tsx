import { View, Text, TouchableOpacity } from "react-native";
import { ReactNode } from "react";
import tailwind from "@/tailwind";

type ItemGroupOptionProps = {
  name: string;
  children?: ReactNode;
  onPress?: Function;
};

const ItemGroupOption = ({ name, children, onPress }: ItemGroupOptionProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      style={tailwind(`flex-row py-3 border-b border-gray-200 items-center`)}
    >
      <View>{children}</View>
      <Text style={tailwind(`text-base flex-1 pl-5`)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ItemGroupOption;
