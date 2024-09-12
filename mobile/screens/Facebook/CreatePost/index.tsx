import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  StatusBar,
  Keyboard,
} from "react-native";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome6,
  FontAwesome,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import useKeyboard from "@/hooks/useKeyboard";
import { Post } from "@/interfaces/Post";
import { AppContext } from "@/contexts";
import { ContentPost } from "@/interfaces/ContentPost";
import { generateUUID } from "@/utils";
import { postModel } from "@/models";
import { createPost, editPost } from "@/apis/postAPIs";
import tailwind from "@/tailwind";
import Avatar from "@/components/Avatar";
import MediaDisplay from "@/components/Facebook/MediaDisplay";
import Panel from "@/panels";

type ScreenList = NavigationProp<{
  Facebook: undefined;
  CreatePost: {};
  Camera: undefined;
}>;

const CreatePost = ({ route }: any) => {
  const { width, height } = useKeyboard();
  const inputRef = React.useRef<TextInput>(null);
  const [post, setPost] = React.useState<Post>();
  const [value, setValue] = React.useState("");
  const [medias, setMedias] = React.useState<any[]>([]);
  const [oldMedia, setOldMedia] = React.useState([]);
  const navigation = useNavigation<ScreenList>();
  const {
    state: { user, loading, showKeyboard, list_post },
    updateData,
  } = React.useContext(AppContext);
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handePost = async () => {
    Keyboard.dismiss();
    if (loading || !user) return;
    updateData("loading", true);
    const formData = new FormData();

    if (medias.length > 0) {
      for (let i = 0; i < medias.length || 0; i++) {
        formData.append("media_new", {
          uri: medias[i].uri,
          name: medias[i].uri.substring(
            medias[i].uri.lastIndexOf("/") + 1,
            medias[i].uri.length
          ),
          type: medias[i].mimeType || "image/jpeg",
        });
      }
    }
    const content: ContentPost = {
      id: generateUUID(),
      text: value,
      type: 1,
    };
    formData.append(
      "post",
      JSON.stringify(
        post
          ? postModel({ ...post, content: { ...post?.content, text: value } })
          : postModel({
              user,
              content,
            })
      )
    );
    if (oldMedia.length > 0) {
      formData.append("media_new", JSON.stringify(oldMedia));
    }
    const result = post ? editPost(formData) : createPost(formData);
    result
      .then((res) => {
        updateData("loading", false);
        if (!post) {
          navigation.navigate("Facebook");
        } else {
          updateData(
            "list_post",
            [...list_post].map((item) => {
              if (item?.post?.id === post?.id) {
                return { ...item, post: res };
              }
              return item;
            })
          );
          navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
        updateData("loading", false);
      });
  };
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
  React.useEffect(() => {
    if (route?.params?.asset) {
      setMedias([...medias, route?.params?.asset]);
    } else {
      setMedias(route?.params?.assets || []);
    }
  }, [route?.params?.assets, route?.params?.asset]);
  React.useEffect(() => {
    if (route?.params?.post) {
      setPost(route?.params?.post);
      setValue(route?.params?.post?.content?.text);
    }
  }, [route?.params?.post]);
  React.useEffect(() => {
    if (route?.params?.medias?.length > 0) {
      setOldMedia(
        route?.params?.medias?.map((item: any) => ({
          uri: item.url,
          id: generateUUID(),
        }))
      );
    }
  }, []);
  const fullMedia = [...oldMedia, ...medias];
  return (
    <View
      style={[
        tailwind(
          `${
            showKeyboard && Platform.OS === "ios" ? "" : "flex-1"
          } bg-gray-100 flex-col`
        ),
        showKeyboard && Platform.OS === "ios" ? { height } : {},
      ]}
    >
      <View style={tailwind(`flex-1`)}>
        <SafeAreaView
          style={{
            ...tailwind(`flex-col flex-1`),
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: Platform.OS === "android" ? 8 : 0,
          }}
        >
          <View
            style={tailwind(
              `flex-row justify-between pt-3 pb-5 border-b border-gray-300 px-3 bg-gray-100 items-center`
            )}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Facebook")}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tailwind(`font-bold text-xl`)}>
              {post ? "Edit" : "Create"} post
            </Text>
            <Text
              onPress={handePost}
              style={tailwind(
                `font-bold text-${
                  value.length === 0 ? "gray-600" : "primary"
                } text-lg`
              )}
            >
              {post ? "Update" : "Post"}
            </Text>
          </View>
          <View style={tailwind(`flex-1 flex-col bg-white p-3`)}>
            <View style={tailwind(`flex-row gap-3 pb-3`)}>
              <Avatar size={14} uri={user?.avatar} />
              <View>
                <Text style={tailwind(`font-bold text-lg`)}>{user?.name}</Text>
                <View
                  style={tailwind(
                    `p-1 rounded-lg flex-row gap-2 bg-blue-200 items-center justify-center mt-1`
                  )}
                >
                  <Entypo
                    name="globe"
                    size={14}
                    style={tailwind(`text-blue-700`)}
                  />
                  <Text style={tailwind(`text-blue-700`)}>Public</Text>
                </View>
              </View>
            </View>
            <ScrollView>
              <TextInput
                multiline={true}
                ref={inputRef}
                placeholder="What do you think?"
                placeholderTextColor="gray"
                style={tailwind(`py-4`)}
                value={value}
                onChangeText={setValue}
              />
              {fullMedia.length > 0 && (
                <MediaDisplay medias={fullMedia} width={width} />
              )}
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
      <Panel hideOverlay>
        <View style={tailwind(`px-3 pt-6 -mb-3 flex-row justify-between`)}>
          <TouchableOpacity onPress={pickImage} style={tailwind(`mx-auto`)}>
            <Feather
              name="image"
              size={24}
              style={tailwind(`text-green-600`)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tailwind(`mx-auto`)}>
            <FontAwesome6
              name="user-pen"
              size={24}
              style={tailwind(`text-blue-600`)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tailwind(`mx-auto`)}>
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
          <TouchableOpacity style={tailwind(`mx-auto`)}>
            <Entypo name="video" size={24} style={tailwind(`text-pink-600`)} />
          </TouchableOpacity>
          <TouchableOpacity style={tailwind(`mx-auto`)}>
            <Ionicons
              name="text"
              size={24}
              style={tailwind(`text-green-600`)}
            />
          </TouchableOpacity>
        </View>
      </Panel>
    </View>
  );
};

export default CreatePost;
