import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { User } from "@/interfaces/User";
import { AppContext } from "@/contexts";
import Avatar from "@/components/Avatar";
import GroupAvatar from "@/components/GroupAvatar";
import tailwind from "@/tailwind";

const Header = ({ friend }: { friend: User }) => {
  const {
    state: { groupCurrent },
  } = React.useContext(AppContext);
  const bigGroup = groupCurrent?.image ? (
    <Avatar size={24} uri={groupCurrent?.image} />
  ) : (
    <GroupAvatar group={groupCurrent} size={24} child={10} />
  );
  const navigation = useNavigation();
  return (
    <View style={tailwind(`relative mt-3`)}>
      <TouchableOpacity
        style={tailwind(`absolute top-0 left-3`)}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={24} />
      </TouchableOpacity>
      <View style={tailwind(`flex-col gap-1 justify-center mx-auto mt-5`)}>
        {groupCurrent?.multiple ? (
          bigGroup
        ) : (
          <Avatar size={24} uri={friend?.avatar} />
        )}
        <Text
          style={tailwind(`font-bold text-lg text-center mt-1 px-3`)}
          numberOfLines={1}
        >
          {groupCurrent?.multiple
            ? groupCurrent?.name ??
              groupCurrent?.members?.map((item) => item?.user?.name).join(", ")
            : friend?.name}
        </Text>
        <Text
          style={tailwind(
            `font-semibold text-gray-400 text-center text-xs mb-3`
          )}
        >
          Messenger
        </Text>
      </View>
    </View>
  );
};

export default Header;
