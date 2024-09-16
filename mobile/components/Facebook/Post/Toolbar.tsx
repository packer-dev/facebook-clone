import * as React from "react";
import { View } from "react-native";
import { EvilIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Post } from "@/interfaces/Post";
import { Media } from "@/interfaces/Media";
import { AppContext } from "@/contexts";
import { sendFeelPost } from "@/apis/postAPIs";
import tailwind from "@/tailwind";
import IconButton from "@/components/IconButton";
import { Feel } from "@/interfaces/Feel";

type ToolbarProps = {
  post: Post;
  medias: Media[];
  feel: Feel[];
  handleFeel?: Function;
  loading?: boolean;
};

type ScreenList = NavigationProp<{
  DetailPost: {
    medias: Media[];
    post: Post;
  };
}>;

const Toolbar = ({ post, medias, feel, handleFeel, loading }: ToolbarProps) => {
  //
  const {
    state: { user, list_post, socket },
    updateData,
  } = React.useContext(AppContext);
  const navigation = useNavigation<ScreenList>();
  const checkUser = (feel || []).find((item) => user?.id === item.user?.id);
  const handleLike = async () => {
    if (!user) return;

    const result = await sendFeelPost(post?.id ?? "", user?.id);
    updateData(
      "list_post",
      [...list_post].map((item) => {
        if (item?.post?.id === post?.id) {
          if (result) {
            item.feel = [...item.feel, result];
          } else {
            item.feel = [...item.feel].filter(
              (item) => item.id === checkUser?.id
            );
          }
          return item;
        }

        return item;
      })
    );
    handleFeel?.(result);
    socket.emit(
      `feel-post.${post.id}`,
      JSON.stringify({
        sender: user.id,
        feel: result,
      })
    );
  };
  //
  return loading ? (
    <></>
  ) : (
    <View
      style={tailwind(
        `flex-row gap-3 px-3 pb-3 items-center justify-between border-b border-gray-300`
      )}
    >
      <IconButton
        IconContainer={FontAwesome}
        iconName={{
          before: "heart-o",
          after: "heart",
        }}
        onPress={handleLike}
        iconSize={18}
        text="Love"
        changeColor
        active={!!checkUser}
      />
      <IconButton
        onPress={() =>
          navigation.navigate("DetailPost", {
            post,
            medias,
          })
        }
        IconContainer={EvilIcons}
        iconSize={28}
        iconName="comment"
        text="Comment"
      />
      <IconButton
        IconContainer={Ionicons}
        iconSize={22}
        iconName="copy-outline"
        text="Copy"
      />
      <IconButton
        IconContainer={EvilIcons}
        iconSize={28}
        iconName="share-google"
        text="Share"
      />
    </View>
  );
};

export default Toolbar;
