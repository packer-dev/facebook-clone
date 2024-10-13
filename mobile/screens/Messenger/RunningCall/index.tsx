import React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import Toolbar from "./Toolbar";
import LocalStream from "./LocalStream";
import { AppContext } from "@/contexts";
import { imageGroup, nameGroup } from "@/utils";
import useListeningCaller from "@/hooks/realtime/useListeningCaller";
import tailwind from "@/tailwind";

const RunningCall = ({ route }: any) => {
  const {
    state: { user },
  } = React.useContext(AppContext);
  const group = route?.params?.group;
  const image = imageGroup(group, user);
  const name = nameGroup(group, user);
  const { isAccept } = useListeningCaller({ group });

  return (
    <View style={tailwind(`flex-1 bg-black`)}>
      <SafeAreaView
        style={[
          tailwind(`flex-1`),
          {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            paddingBottom: Platform.OS === "android" ? 16 : 0,
          },
        ]}
      >
        <View style={tailwind(`flex-1 flex-col relative`)}>
          {isAccept && (
            <>
              <LocalStream />
              <View style={tailwind(`flex-1`)} />
            </>
          )}

          {!isAccept && (
            <View
              style={tailwind(`flex-1 flex-col items-center justify-center`)}
            >
              <View style={tailwind(`flex-col justify-center`)}>
                {image}
                <Text style={tailwind(`text-white text-center py-1 font-bold`)}>
                  {name}
                </Text>
                <Text style={tailwind(`text-gray-300 text-center text-sm`)}>
                  Calling...
                </Text>
              </View>
            </View>
          )}
          <Toolbar />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default RunningCall;
