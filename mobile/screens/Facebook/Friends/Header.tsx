import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import tailwind from "@/tailwind";

type ScreenList = NavigationProp<{
  ReceiveFriend: undefined;
  ListFriend: undefined;
  RequestFriend: undefined;
  SearchUser: undefined;
}>;

const Header = () => {
  const navigation = useNavigation<ScreenList>();
  return (
    <View
      style={tailwind(
        `justify-between pb-3 flex-row border-b border-gray-300 px-3`
      )}
    >
      <View>
        <Text style={tailwind(`font-bold mb-4 text-lg`)}>Friends</Text>
        <View style={tailwind(`flex-row gap-3`)}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ReceiveFriend")}
            style={tailwind(`px-3 py-3 rounded-full bg-gray-300`)}
          >
            <Text style={tailwind(`font-bold`)}>Suggestion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListFriend")}
            style={tailwind(`px-3 py-3 rounded-full bg-gray-300`)}
          >
            <Text style={tailwind(`font-bold`)}>Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RequestFriend")}
            style={tailwind(`px-3 py-3 rounded-full bg-gray-300`)}
          >
            <Text style={tailwind(`font-bold`)}>Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SearchUser")}
        style={tailwind(
          `w-10 h-10 rounded-full flex-row justify-center items-center bg-gray-300`
        )}
      >
        <AntDesign name="search1" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
