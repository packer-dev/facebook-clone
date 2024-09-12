import * as React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import tailwind from "@/tailwind";
import { AppContext } from "@/contexts";
import { generateUUID, handleLogout } from "@/utils";
import NewMessage from "@/popups/NewMessage";

type ScreenList = NavigationProp<{
  Facebook: undefined;
}>;

const Header = () => {
  //
  const {
    state: { user, popup },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  //
  return (
    <View style={tailwind(`flex-row gap-3 p-3 items-center`)}>
      <TouchableOpacity onPress={() => navigation.navigate("Facebook")}>
        <Image
          source={{ uri: user?.avatar ?? `https://picsum.photos/536/354` }}
          style={tailwind(`w-10 h-10 rounded-full`)}
        />
      </TouchableOpacity>
      <Text style={tailwind(`flex-1 text-3xl font-bold`)}>Chats</Text>
      <View style={tailwind(`flex-row gap-4`)}>
        <TouchableOpacity
          onPress={() => {
            updateData("popup", [
              ...popup,
              {
                id: generateUUID(),
                ui: NewMessage,
                payload: {},
              },
            ]);
          }}
          style={tailwind(
            `flex justify-center item-center w-10 h-10 rounded-full bg-gray-300`
          )}
        >
          <FontAwesome
            name="pencil-square-o"
            size={24}
            style={tailwind(`text-gray-900 mx-auto`)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLogout(navigation, updateData)}
          style={tailwind(
            `flex justify-center item-center w-10 h-10 rounded-full bg-gray-300`
          )}
        >
          <MaterialIcons
            name="logout"
            size={24}
            style={tailwind(`text-gray-900 mx-auto`)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
