import * as React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { AppContext } from "@/contexts/index";
import tailwind from "@/tailwind";

const width = Dimensions.get("window").width - 20;

type WrapperProps = {
  children?: React.ReactNode;
  overflowHidden?: boolean;
  isStory?: boolean;
};

type WrapperContentProps = {
  children?: React.ReactNode;
  overflowHidden?: boolean;
};

const Wrapper = ({ children, overflowHidden, isStory }: WrapperProps) => {
  const {
    state: { popup },
  } = React.useContext(AppContext);
  return (
    <View
      style={tailwind(
        `flex-1 ${popup.length > 0 || isStory ? " bg-black" : "bg-white"}`
      )}
    >
      {(popup.length > 0 || isStory) && Platform.OS === "ios" && (
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
      )}
      <ContentWrapper overflowHidden={overflowHidden}>
        {children}
      </ContentWrapper>
    </View>
  );
};

const ContentWrapper = ({ children, overflowHidden }: WrapperContentProps) => {
  const {
    state: { popup },
  } = React.useContext(AppContext);
  return (
    <SafeAreaView
      style={{
        ...tailwind(`flex-1`),
        ...(popup.length > 0 ? { width, margin: "auto" } : {}),
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: Platform.OS === "android" ? 16 : 0,
      }}
    >
      {overflowHidden ? (
        <View
          style={{
            ...tailwind(`flex-1 bg-${popup.length > 0 ? "gray-300" : "white"}`),
            ...(popup.length > 0 ? { borderRadius: 16 } : {}),
          }}
        >
          {children}
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            ...tailwind(`flex-1 bg-${popup.length > 0 ? "gray-300" : "white"}`),
            ...(popup.length > 0 ? { borderRadius: 16 } : {}),
          }}
        >
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Wrapper;
