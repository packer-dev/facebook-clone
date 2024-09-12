import * as React from "react";
import { Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { User } from "@/interfaces/User";
import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";
const width = Dimensions.get("window").width - 36;

type ItemStoryProps = {
  isNew?: boolean;
  auto?: boolean;
  friend?: { user: User };
};

type ScreenList = NavigationProp<{
  StoryDetail: undefined;
}>;

const ItemStory = ({ isNew, auto, friend }: ItemStoryProps) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  //
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("StoryDetail")}
      style={{
        ...tailwind(`relative shadow h-${auto ? "44" : "60"}`),
        width: width / (auto ? 3 : 2) - (auto ? 10 : 0),
      }}
    >
      <Image
        style={tailwind(`w-full h-full rounded-lg`)}
        source={{
          uri: isNew
            ? user?.avatar
            : friend?.user?.avatar ?? `https://picsum.photos/536/354`,
        }}
      />
      {isNew ? (
        <TouchableOpacity
          style={tailwind(`w-10 h-10 rounded-full bg-white shadow border border-gray-200 absolute top-3 left-3 justify-center 
        items-center`)}
        >
          <AntDesign name="plus" size={20} color="gray" />
        </TouchableOpacity>
      ) : (
        <Image
          source={{
            uri: friend?.user?.avatar ?? `https://picsum.photos/536/354`,
          }}
          style={tailwind(`w-10 h-10 rounded-full bg-white shadow border-4 border-primary p-2 absolute top-3 left-3 justify-center 
        items-center`)}
        />
      )}
      <Text
        style={tailwind("text-white absolute bottom-3 left-3 font-semibold")}
      >
        {isNew ? "Add story" : friend?.user?.name ?? "Name"}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemStory;
