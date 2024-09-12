import * as React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import navbarList from "./navbarList";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";
import ItemNavbar from "@/components/ItemNavbar";

type ScreenList = NavigationProp<{
  Profile: undefined;
}>;

const Navbar = ({ route }: any) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  //
  return (
    <View
      style={tailwind(
        `flex-row justify-between px-3 pt-3 border-t border-gray-300`
      )}
    >
      {navbarList.map((navbar) => (
        <ItemNavbar key={navbar.route} navbar={navbar} current={route?.name} />
      ))}
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={{ uri: user?.avatar ?? `https://picsum.photos/536/354` }}
          style={tailwind(
            `w-8 h-8 border-2 border-black mb-1 rounded-full mx-auto`
          )}
        />
        <View
          style={tailwind(
            `relative flex-col gap-2 justify-center items-center self-center`
          )}
        >
          <Text style={tailwind(`${"text-gray-700"} text-xs`)}>Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
