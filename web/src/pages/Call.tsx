import React, { useEffect, useRef } from "react";
import ExtensionCall from "@/modules/Call/ExtensionCall";
import ItemExtensionCall from "@/modules/Call/ExtensionCall/ItemExtensionCall";
import InfoCalling from "@/modules/Call/InfoCalling";
import NotifyRight from "@/modules/Call/NotifyRight";
import messenger from "@/assets/sound/messenger.mp3";
import { useSelector } from "react-redux";
import { getCall, getSocket, getUser, RootState } from "@/reducers";
import { CallProps } from "@/reducers/call";
import { PAGE_HOME } from "@/constants/Config";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import { User } from "@/interfaces/User";
import WrapperLogged from "./Wrapper/WrapperLogged";
import VideoUserMedia from "@/components/VideoUserMedia";

const Call = () => {
  //
  const {
    mode,
    showVideo,
    callStatus,
    group,
    localStream,
    peer,
    remoteStream,
  } = useSelector<RootState, CallProps>(getCall);
  const socket = useSelector<RootState, Socket>(getSocket);
  const user = useSelector<RootState, User>(getUser);
  const [count, setCount] = React.useState(0);
  const refLocalStream = useRef<HTMLVideoElement>(null);
  const audio = new Audio(messenger);
  audio.loop = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (callStatus === "ready") return;
    const fetchData = async () => {
      audio?.play();
    };
    mode !== "offline" && fetchData();
    return () => {
      audio?.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, callStatus]);
  useEffect(() => {
    if (callStatus === "ready") return;

    if (count > 15) {
      audio?.pause();
      for (const item of group?.members?.filter(
        (item) => item.user.id !== user.id
      ) || []) {
        socket.emit("call", {
          id: item.user.id,
          type: "end",
        });
      }
      localStream?.getTracks().forEach((track) => {
        track.stop();
      });
      navigate(PAGE_HOME);
      return;
    }

    const timeOut = setTimeout(() => {
      setCount(count + 1);
      clearTimeout(timeOut);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, callStatus]);
  useEffect(() => {
    if (mode === "offline") {
      navigate(PAGE_HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, user, group, peer]);
  return (
    <WrapperLogged hideAll>
      <div className="w-full bg-black h-screen relative">
        <div className="w-full h-screen relative">
          <div className="w-full">
            <InfoCalling />
            <ExtensionCall ref={refLocalStream} />
            <div className="absolute bottom-6 left-5">
              <ItemExtensionCall
                icon="bx bx-message-rounded"
                addClass="text-gray-300"
              />
            </div>
          </div>
          {mode === "single" && showVideo && (
            <VideoUserMedia
              stream={localStream}
              className="w-60 h-40 border-gray-300 border border-solid rounded-lg absolute bottom-4 right-4"
            />
          )}
          {remoteStream.length > 0 &&
            remoteStream.map((item) => (
              <VideoUserMedia
                key={item.id}
                stream={item}
                className="w-60 h-40 border-gray-300 border border-solid rounded-lg absolute bottom-4 right-72"
              />
            ))}
          <NotifyRight />
        </div>
      </div>
    </WrapperLogged>
  );
};

export default Call;
