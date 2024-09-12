import * as React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import useKeyboard from "@/hooks/useKeyboard";
import { getPostById } from "@/apis/postAPIs";
import tailwind from "@/tailwind";
import Post from "@/components/Facebook/Post";

const DetailPost = ({ route }: any) => {
  const {
    state: { user, showKeyboard },
  } = React.useContext(AppContext);
  const navigation = useNavigation();
  const { height, keyboardHeight } = useKeyboard();
  const [response, setPost] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const post = await getPostById(route?.params?.post?.id);
      if (!post) {
        navigation.goBack();
      }
      setPost(post);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route?.params?.postId]);
  return (
    <View style={tailwind(`bg-white flex-1`)}>
      <SafeAreaView
        style={[
          {
            ...tailwind(
              `flex-col ${
                showKeyboard && Platform.OS === "ios" ? "" : "flex-1"
              }`
            ),
          },
          showKeyboard && Platform.OS === "ios" ? { height } : {},
          {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: Platform.OS === "android" ? 16 : 0,
          },
        ]}
      >
        {
          <Post
            isDetail
            post={response?.post}
            medias={response?.medias}
            feel={response?.feel}
            navigation={navigation}
            keyboardHeight={keyboardHeight}
            handleFeel={(result: any) =>
              response &&
              setPost({
                ...response,
                feel: !result
                  ? [...response.feel].filter((item) => item !== user?.id)
                  : [...response.feel, user?.id],
              })
            }
            loading={loading}
          />
        }
      </SafeAreaView>
    </View>
  );
};

export default DetailPost;
