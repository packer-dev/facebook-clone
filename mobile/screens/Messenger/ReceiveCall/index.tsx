import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppContext } from "@/contexts";
import { imageGroup, nameGroup } from "@/utils";
import useSound from "@/hooks/useSound";
import tailwind from "@/tailwind";

type ScreenList = NavigationProp<{
  RunningCall: {
    payload: any;
  };
}>;

const ReceiveCall = ({ route }: any) => {
  const {
    state: { user, socket },
  } = React.useContext(AppContext);
  const payload = route?.params?.payload;
  const navigation = useNavigation<ScreenList>();
  const group = route?.params?.group;
  const image = imageGroup(group, user);
  const name = nameGroup(group, user);
  const { playSound } = useSound(2);
  const handleAccept = async () => {
    if (!user) return;
    playSound();
    navigation.navigate("RunningCall", {
      payload,
    });
    socket.emit(
      `accept-call-${payload?.group?.id}`,
      JSON.stringify({
        ...payload,
        accept: { ...(payload?.accept || {}), [user?.id]: "accept" },
      })
    );
  };

  return (
    <View style={tailwind(`flex-1 bg-black flex-col`)}>
      <SafeAreaView style={tailwind(`flex-1 relative`)}>
        <View style={tailwind(`flex-1 flex-col items-center justify-center`)}>
          <View style={tailwind(`flex-col justify-center`)}>
            <View>{image}</View>
            <Text style={tailwind(`text-white text-center py-1 font-bold`)}>
              {name}
            </Text>
            <View style={tailwind(`flex-row gap-10 py-6`)}>
              <TouchableOpacity
                onPress={handleAccept}
                style={tailwind(
                  `w-14 h-14 rounded-full flex-row justify-center items-center bg-green-500`
                )}
              >
                <MaterialIcons name="call" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={tailwind(
                  `w-14 h-14 rounded-full flex-row justify-center items-center bg-red-500`
                )}
              >
                <SimpleLineIcons name="call-end" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default ReceiveCall;
