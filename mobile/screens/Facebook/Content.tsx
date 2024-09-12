import * as React from "react";
import { ScrollView, View, Text, Image, Platform } from "react-native";
import ItemStory from "../Story/ItemStory";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";
import SuggestFriend from "@/components/Facebook/SuggestFriend";
import Loading from "@/components/Loading";
import Post from "@/components/Facebook/Post";

type ContentProps = {
  loading?: boolean;
};

type ScreenList = NavigationProp<{
  CreatePost?: {
    assets?: any;
  };
}>;

const Content = ({ loading }: ContentProps) => {
  const {
    state: { list_post, user },
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
      navigation?.navigate("CreatePost", {
        assets: result.assets,
      });
    }
  };
  return (
    <View style={tailwind(`flex-1`)}>
      <ScrollView
        style={tailwind(`flex-1`)}
        showsVerticalScrollIndicator={false}
      >
        <View style={tailwind(`flex-row gap-3 items-center py-5 px-3`)}>
          <Image
            style={tailwind(`w-12 h-12 rounded-full`)}
            source={{ uri: user?.avatar ?? `https://picsum.photos/536/354` }}
          />
          <Text
            style={tailwind(`flex-1`)}
            onPress={() => navigation.navigate("CreatePost")}
          >
            What do you think?
          </Text>
          <Feather
            onPress={pickImage}
            name="image"
            size={28}
            style={tailwind(`text-green-500`)}
          />
        </View>
        <View style={tailwind(`py-1 bg-gray-300 flex-1`)}>
          <ScrollView
            style={tailwind(`flex-1`)}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={tailwind(`flex-row gap-2 bg-white px-3 py-3`)}>
              <ItemStory isNew auto />
              <ItemStory auto />
              <ItemStory auto />
              <ItemStory auto />
              <ItemStory auto />
            </View>
          </ScrollView>
        </View>
        <View style={tailwind(`flex-col`)}>
          <SuggestFriend />
          {loading && (
            <View style={tailwind(`py-6`)}>
              <Loading fetching />
            </View>
          )}
          {list_post?.length > 0 && !loading ? (
            list_post?.map((item) => (
              <Post
                key={item?.post?.id}
                post={item?.post}
                medias={item?.medias}
                navigation={navigation}
                feel={item?.feel}
              />
            ))
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Content;
