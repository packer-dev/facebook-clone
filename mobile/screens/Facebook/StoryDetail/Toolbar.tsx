import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import tailwind from "@/tailwind";

type ScreenList = NavigationProp<{
  StoryDetail: undefined;
}>;

const Toolbar = () => {
  const navigation = useNavigation<ScreenList>();
  return (
    <View
      style={tailwind(
        `bg-black px-3 pt-6 flex-row items-center justify-between`
      )}
    >
      <TouchableOpacity
        style={tailwind(
          `w-10 h-10 border-white border flex-row items-center justify-center rounded-full`
        )}
      >
        <FontAwesome name="share" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind(
          `h-10 px-4 border border-white rounded-full items-center flex-row`
        )}
      >
        <Text style={tailwind(`text-white font-bold`)}>Send message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("StoryDetail")}
        style={tailwind(
          `w-10 h-10 border-white border bg-primary flex-row items-center justify-center rounded-full`
        )}
      >
        <AntDesign name="like2" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
