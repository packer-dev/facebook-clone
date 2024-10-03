import { getGroupById } from "@/apis/groupAPIs";
import { getMessageMain, updateStatusMessage } from "@/apis/messageAPIs";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Toolbar from "@/components/Toolbar";
import { AppContext } from "@/contexts";
import useKeyboard from "@/hooks/useKeyboard";
import useListeningMessage from "@/hooks/useListeningMessage";
import tailwind from "@/tailwind";
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Main = ({ route: { params } }: any) => {
  const {
    state: { user, groups, groupCurrent, messages },
    updateData,
  } = React.useContext(AppContext);
  const refScroll = React.useRef<ScrollView>(null);
  useListeningMessage(groupCurrent?.id ?? "");
  const { keyboardHeight, width } = useKeyboard();
  React.useEffect(() => {
    const fetchData = async () => {
      if (!user || !groupCurrent) return;

      let result;
      if (params?.friend) {
        result = await getMessageMain(params?.friend?.id, user?.id);
        updateData("messages", result.messages);
        updateData("groupCurrent", result.group);
      } else {
        result = await getGroupById(groupCurrent?.id ?? "");
        updateData("messages", result);
      }
      if (groupCurrent?.id && user?.id) {
        await updateStatusMessage(groupCurrent.id, user?.id);
        updateData(
          "groups",
          [...groups].map((item: any) => {
            if (item?.id === groupCurrent?.id) {
              item.seen[user?.id] = true;
            }
            return item;
          })
        );
      }
    };
    if (!groupCurrent?.id) return;
    fetchData();
    return () => {
      updateData("messages", []);
      updateData("groupCurrent", null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupCurrent?.id, user]);
  React.useEffect(() => {
    refScroll.current?.scrollToEnd();
  }, [messages]);
  return (
    <SafeAreaView style={[tailwind(`p-3 flex-col bg-white flex-1`)]}>
      <KeyboardAvoidingView
        style={tailwind(`flex-1`)}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header friend={params?.friend} />
        <ScrollView
          ref={refScroll}
          style={{ ...tailwind(`flex-1`), width: width - 12 }}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => refScroll.current?.scrollToEnd()}
        >
          <Content />
        </ScrollView>
        <Toolbar friend={params?.friend} keyboardHeight={keyboardHeight} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;
