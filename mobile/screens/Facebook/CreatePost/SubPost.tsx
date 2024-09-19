import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useKeyboard from "@/hooks/useKeyboard";
import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";
import SearchWrapper from "@/screens/MessageList/Search";

const SubPost = ({
  popupId,
  title,
  children,
  hideScroll,
}: {
  popupId: string;
  title: string;
  children?: React.ReactNode;
  hideScroll?: boolean;
}) => {
  const {
    state: { popup },
    updateData,
  } = React.useContext(AppContext);
  const { height } = useKeyboard();
  const {
    state: { showKeyboard },
  } = React.useContext(AppContext);
  return (
    <View
      style={[
        tailwind(
          `${
            showKeyboard && Platform.OS === "ios" ? "" : "flex-1"
          } bg-gray-100 flex-col`
        ),
        showKeyboard && Platform.OS === "ios" ? { height } : {},
        tailwind(`bottom-0 right-0 absolute top-0 left-0`),
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
            <TouchableOpacity
              onPress={() =>
                updateData(
                  "popup",
                  [...popup].filter((item) => item.id !== popupId)
                )
              }
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={tailwind(`font-bold text-xl`)}>{title}</Text>
            <Text />
          </View>
          <View style={tailwind(`flex-1 flex-col`)}>
            {hideScroll ? (
              children
            ) : (
              <>
                <SearchWrapper />
                <ScrollView style={tailwind(`flex-1`)}>{children}</ScrollView>
              </>
            )}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default SubPost;
