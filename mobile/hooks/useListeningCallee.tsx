import React from "react";
import { AppContext } from "@/contexts/index";
import useSound from "./useSound";
import { NavigationProp, useNavigation } from "@react-navigation/native";
// import { RTCSessionDescription } from "react-native-webrtc";

type ScreenList = NavigationProp<{
  ReceiveCall: { payload: any };
}>;

const useListeningCallee = () => {
  const {
    state: { user, socket, peerConnection },
    updateData,
  } = React.useContext(AppContext);
  const { playSound } = useSound(require("../assets/audio.mp3"));
  const navigation = useNavigation<ScreenList>();
  const listenChat = async (data: any) => {
    if (!peerConnection) return;

    data = JSON.parse(data);
    playSound();
    updateData("loading", true);
    // await peerConnection.setRemoteDescription(
    //   new RTCSessionDescription(data?.offer)
    // );
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    navigation.navigate("ReceiveCall", { payload: { ...data, answer } });
    updateData("loading", false);
  };
  React.useEffect(() => {
    if (socket && user) {
      socket.off(`call-to-${user?.id}`, listenChat);
      socket.on(`call-to-${user?.id}`, listenChat);
    }
    return () => {
      socket.off(`call-to-${user?.id}`, listenChat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};

export default useListeningCallee;
