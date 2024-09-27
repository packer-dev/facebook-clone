import * as React from "react";
// import { RTCPeerConnection, mediaDevices } from "react-native-webrtc";
import { AppContext } from "@/contexts";

const useWebRTC = () => {
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    if (!user) return;

    // const peerConnection = new RTCPeerConnection();
    // peerConnection.onicecandidate = (event) => {
    //   if (event.candidate) {
    //     return;
    //   }
    // };
    // peerConnection.onaddstream = (event) => { };
    // peerConnection.oniceconnectionstatechange = () => { };

    // mediaDevices
    //   .getUserMedia({
    //     video: true,
    //     audio: true,
    //   })
    //   .then((stream) => {
    //     peerConnection.addStream(stream);
    //   });
    // updateData("peerConnection", peerConnection);
    // return () => {
    //   if (peerConnection) {
    //     peerConnection.close();
    //     updateData("peerConnection", null);
    //   }
    // };
  }, [user]);
};

export default useWebRTC;
