import * as React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import tailwind from "../../../tailwind";
import Avatar from "../../Avatar";
import {
  Feather,
  FontAwesome6,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import moment from "moment";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Post } from "@/interfaces/Post";
import { Media } from "@/interfaces/Media";
import { User } from "@/interfaces/User";
import { AppContext } from "@/contexts";
import { deletePost } from "@/apis/postAPIs";

type HeaderProps = {
  post: Post;
  isDetail?: boolean;
  setLoading: Function;
  loading?: boolean;
  medias: Media[];
};

type ScreenList = NavigationProp<{
  DetailProfile: {
    visit: User | null;
  };
  CreatePost: {
    medias: Media[];
    post: Post;
  };
}>;

const Header = ({
  post,
  isDetail,
  setLoading,
  loading,
  medias = [],
}: HeaderProps) => {
  //
  const navigation = useNavigation<ScreenList>();
  const {
    state: { list_post, user },
    updateData,
  } = React.useContext(AppContext);
  const handleDelete = () => {
    setLoading(true);
    deletePost(post?.id ?? "")
      .then(() => {
        updateData(
          "list_post",
          [...list_post].filter((item) => item?.post?.id !== post?.id)
        );
      })
      .catch((e) => {});
  };
  const handleDeletePost = async () => {
    Alert.alert("Do you want to delete this post.", "", [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: handleDelete,
      },
    ]);
  };
  const descriptionSmall = () => {
    switch (post?.type) {
      case 3:
        return " updated his profile picture.";
      case 2:
        return " updated his cover photo.";
      default:
        return "";
    }
  };
  //
  return (
    <View
      style={tailwind(
        `flex-row gap-3 p-3 items-center ${
          isDetail ? "border-b border-gray-100" : ""
        }`
      )}
    >
      {isDetail && (
        <TouchableOpacity
          onPress={() => navigation?.goBack?.()}
          style={tailwind(`pr-2`)}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      )}
      <View style={tailwind(`flex-1 flex-row gap-3 items-center`)}>
        <Avatar size={11} uri={post?.user?.avatar} loading={loading} />
        <View style={tailwind(`flex-1 flex-col gap-1`)}>
          <TouchableOpacity
            style={tailwind(`flex-row`)}
            onPress={() =>
              navigation?.navigate?.("DetailProfile", {
                visit: post?.user,
              })
            }
          >
            {loading ? (
              <View style={tailwind(`w-40 h-2 rounded-lg bg-gray-200`)} />
            ) : (
              <Text>
                <Text style={tailwind(`font-semibold`)}>
                  {post?.user?.name || "Alexander Toyota"}
                </Text>
                {descriptionSmall()}
              </Text>
            )}
          </TouchableOpacity>
          <View style={tailwind(`flex-row items-center gap-3`)}>
            {loading ? (
              <View style={tailwind(`w-20 h-2 rounded-lg bg-gray-200`)} />
            ) : (
              <Text style={tailwind(`text-gray-600 text-sm`)}>
                {moment(post?.time_created).fromNow()}.
              </Text>
            )}
            <FontAwesome6 name="earth-africa" size={12} color="gray" />
          </View>
        </View>
      </View>
      <View style={tailwind(`flex-row gap-3 items-center`)}>
        {post?.user?.id === user?.id && (
          <MaterialCommunityIcons
            onPress={() =>
              navigation.navigate("CreatePost", {
                post,
                medias,
              })
            }
            name="account-edit-outline"
            size={20}
            color="gray"
          />
        )}
        {!isDetail && post?.user?.id === user?.id && (
          <TouchableOpacity onPress={handleDeletePost}>
            <Feather name="x" size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
