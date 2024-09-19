import * as React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import {
  Entypo,
  Feather,
  FontAwesome6,
  FontAwesome,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { AppContext } from "@/contexts";
import { generateUUID } from "@/utils";
import tailwind from "@/tailwind";
import Panel from "@/panels";
import FeelPost from "./FeelPost";
import TagPost from "./TagPost";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import OptionBackgroundPost from "./OptionBackgroundPost";

type ScreenList = NavigationProp<{
  Facebook: undefined;
  CreatePost: {};
  Camera: undefined;
}>;

const FooterCreatePost = () => {
  const {
    state: { popup },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const pickImage = async () => {
    let result;
    if (Platform.OS !== "web") {
      result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
      });
    }
    if (!result?.canceled && result?.assets) {
      navigation.navigate("CreatePost", {
        assets: result.assets,
      });
    }
  };
  return (
    <Panel hideOverlay>
      <View style={tailwind(`px-3 pt-6 -mb-3 flex-row justify-between`)}>
        <TouchableOpacity onPress={pickImage} style={tailwind(`mx-auto`)}>
          <Feather name="image" size={24} style={tailwind(`text-green-600`)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            updateData("popup", [
              ...popup,
              {
                id: generateUUID(),
                ui: TagPost,
              },
            ])
          }
          style={tailwind(`mx-auto`)}
        >
          <FontAwesome6
            name="user-pen"
            size={24}
            style={tailwind(`text-blue-600`)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            updateData("popup", [
              ...popup,
              {
                id: generateUUID(),
                ui: FeelPost,
              },
            ])
          }
          style={tailwind(`mx-auto`)}
        >
          <FontAwesome
            name="smile-o"
            size={24}
            style={tailwind(`text-yellow-600`)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Camera")}
          style={tailwind(`mx-auto`)}
        >
          <EvilIcons
            name="camera"
            size={32}
            style={tailwind(`text-indigo-600`)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            updateData("popup", [
              ...popup,
              {
                id: generateUUID(),
                ui: OptionBackgroundPost,
              },
            ])
          }
          style={tailwind(`mx-auto`)}
        >
          <Entypo name="video" size={24} style={tailwind(`text-pink-600`)} />
        </TouchableOpacity>
        <TouchableOpacity style={tailwind(`mx-auto`)}>
          <Ionicons name="text" size={24} style={tailwind(`text-green-600`)} />
        </TouchableOpacity>
      </View>
    </Panel>
  );
};

export default FooterCreatePost;
