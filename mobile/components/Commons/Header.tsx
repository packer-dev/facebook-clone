import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tailwind from "@/tailwind";

type HeaderProps = {
  title: string;
  hiddenSearch?: boolean;
  customSearch?: {
    icon: any;
    name: string;
  };
  handle?: Function;
};

const Header = ({
  title,
  hiddenSearch,
  customSearch = { icon: AntDesign, name: "search1" },
  handle = () => "",
}: HeaderProps) => {
  const navigation = useNavigation();
  const Icon = customSearch.icon;
  return (
    <View
      style={tailwind(
        `flex-row px-3 gap-3 items-center justify-between bg-white py-3`
      )}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={tailwind(`font-bold text-lg text-gray-700`)}>{title}</Text>
      {hiddenSearch ? (
        <View />
      ) : (
        <TouchableOpacity
          onPress={() => (handle ? handle() : navigation.goBack())}
        >
          <Icon name={customSearch.name} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
