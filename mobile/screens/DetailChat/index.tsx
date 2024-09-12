import { View, Text } from "react-native";
import Header from "./Header";
import Control from "./Control";
import ItemGroupOption from "./ItemGroupOption";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import Wrapper from "../Wrapper";
import tailwind from "@/tailwind";

type ScreenList = NavigationProp<{
  MemberList: undefined;
  Nickname: undefined;
}>;

const DetailChat = ({ route: { params } }: any) => {
  const {
    state: { groupCurrent },
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  return (
    <Wrapper>
      <Header friend={params?.friend} />
      <Control />
      <View style={tailwind(`p-3`)}>
        <ItemGroupOption name="Color">
          <View
            style={tailwind(
              `w-6 h-6 rounded-full bg-primary flex justify-center items-center`
            )}
          >
            <View style={tailwind(`w-2 h-2 rounded-full bg-white`)} />
          </View>
        </ItemGroupOption>
        <ItemGroupOption name="Emoji">
          <Text style={tailwind(`text-xl`)}>
            {groupCurrent?.data?.emoji ? groupCurrent?.data?.emoji : "🧡"}
          </Text>
        </ItemGroupOption>
        <ItemGroupOption
          onPress={() => navigation.navigate("MemberList")}
          name="Members"
        >
          <FontAwesome6 name="user-group" size={18} color="black" />
        </ItemGroupOption>
        <ItemGroupOption
          name="Nickname"
          onPress={() => navigation.navigate("Nickname")}
        >
          <Ionicons name="text" size={18} color="black" />
        </ItemGroupOption>
        <Text style={tailwind(`text-gray-500 font-semibold text-md py-3`)}>
          MORE ACTIONS
        </Text>
      </View>
    </Wrapper>
  );
};

export default DetailChat;
