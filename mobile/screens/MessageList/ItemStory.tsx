import * as React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { User } from "@/interfaces/User";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";

type ItemStoryProps = {
  friend?: User;
  loading?: boolean;
};

type ScreenList = NavigationProp<{
  Main: {
    friend?: User;
  };
}>;

const ItemStory = ({ friend, loading }: ItemStoryProps) => {
  const navigation = useNavigation<ScreenList>();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Main", {
          friend,
        })
      }
    >
      <View style={tailwind(`flex-col gap-2 justify-center`)}>
        <Avatar size={14} uri={friend?.avatar} loading={loading} />
        <Text
          style={tailwind(
            `text-xs font-semibold text-gray-600 mx-auto ${
              loading ? "w-3/4 mx-auto bg-gray-300 h-2 rounded-full" : ""
            }`
          )}
        >
          {!loading ? friend?.name : " "}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemStory;
