import * as React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Dimensions,
  ActivityIndicator,
  Platform,
} from "react-native";
import Header from "./Header";
import Content from "./Content";
import Toolbar from "./Toolbar";
import Comments from "./Comments";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { AppContext } from "@/contexts";
import { Comment, CommentDTO } from "@/interfaces/Comment";
import { generateUUID, getCurrentDateTime } from "@/utils";
import { getCommentByPost, sendComment } from "@/apis/commentAPIs";
import tailwind from "@/tailwind";
import BoardSticker from "@/components/Commons/BoardSticker";

const width = Dimensions.get("window").width - 24;

const Post = (props: any) => {
  //
  const {
    state: { user },
  } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [showSticker, setShowSticker] = React.useState(false);
  const [comments, setComments] = React.useState<CommentDTO[]>([]);
  const inputRef = React.useRef<TextInput>(null);
  const handleSendComment = async (val: any, type = 1) => {
    if (!user) return;

    setShowSticker(false);
    Keyboard.dismiss();
    setValue("");
    let comment: Comment = {
      id: "",
      user,
      content: {
        id: generateUUID(),
        text: type === 1 ? value : val,
        type: type,
      },
      time_created: getCurrentDateTime(),
      last_time_update: getCurrentDateTime(),
      level: type,
      parent: "",
      loading: true,
    };
    let newComments: CommentDTO[] = [{ item: comment, child: [] }, ...comments];
    setComments(newComments);
    delete comment.loading;
    const formData = new FormData();
    formData.append("comment", JSON.stringify(comment));
    formData.append("post_id", props?.post?.id);
    comment = await sendComment(formData);
    setComments(
      [...newComments].map((item) => {
        if (item.item.id === comment.id) return { item: comment, child: [] };
        return item;
      })
    );
  };
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getCommentByPost(props?.post?.id);
      setComments(result?.list);
    };
    props.post && props.isDetail && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.post]);
  //
  return (
    <View
      style={tailwind(props.isDetail ? "flex-1" : `py-1 bg-gray-300 -mt-1`)}
    >
      <View
        style={tailwind(
          `bg-white flex-col gap-3 ${props.isDetail ? "relative flex-1" : ""}`
        )}
      >
        {loading && (
          <View
            style={[
              tailwind(`absoluteFull flex-col items-center justify-center`),
              { backgroundColor: "rgba(255, 255, 255, 0.5)", zIndex: 10 },
            ]}
          >
            <ActivityIndicator size="large" />
          </View>
        )}
        <Header {...props} setLoading={setLoading} loading={props.loading} />
        {props.isDetail ? (
          <ScrollView
            style={tailwind(`flex-1`)}
            showsVerticalScrollIndicator={false}
          >
            <View style={tailwind(`flex-col gap-3 pb-12`)}>
              <Content {...props} loading={props.loading} />
              <Toolbar {...props} loading={props.loading} />
              <Comments {...props} list={comments} />
            </View>
          </ScrollView>
        ) : (
          <>
            <Content {...props} loading={props.loading} />
            <Toolbar {...props} loading={props.loading} />
            <Comments {...props} list={comments} />
          </>
        )}
        {props.isDetail && (
          <View
            style={tailwind(
              `w-full absolute bottom-0 left-0 flex-col bg-white`
            )}
          >
            <View
              style={tailwind(`flex-row px-3 pt-3 ${
                Platform.OS === "ios" ? "pb-3" : ""
              } border-t border-gray-300 
              gap-3 items-center`)}
            >
              <TouchableOpacity>
                <Feather name="camera" size={24} color="black" />
              </TouchableOpacity>
              <View
                style={tailwind(
                  `bg-gray-200 p-3 rounded-xl flex-1 relative flex-row items-center`
                )}
              >
                <TextInput
                  ref={inputRef}
                  placeholder="Comment"
                  placeholderTextColor="gray"
                  value={value}
                  onPress={() => setShowSticker(false)}
                  onChangeText={(text) => setValue(text)}
                />
                <TouchableOpacity
                  onPress={() => {
                    if (inputRef.current) {
                      if (!Keyboard.isVisible()) {
                        inputRef.current.focus();
                        Keyboard.dismiss();
                      }
                      setShowSticker(!showSticker);
                    }
                  }}
                  style={tailwind(`absolute bottom-2 right-3`)}
                >
                  <FontAwesome name="smile-o" size={24} color="gray" />
                </TouchableOpacity>
              </View>
              {value.length > 0 && (
                <TouchableOpacity onPress={() => handleSendComment(1)}>
                  <Ionicons
                    name="send"
                    size={24}
                    style={tailwind(`text-primary`)}
                  />
                </TouchableOpacity>
              )}
            </View>
            {showSticker && (
              <BoardSticker
                keyboardHeight={props.keyboardHeight}
                width={width}
                handle={handleSendComment}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default Post;
