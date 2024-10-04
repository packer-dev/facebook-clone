import React, { useEffect, useRef } from "react";
import ExtensionCall from "@/components/Call/ExtensionCall";
import ItemExtensionCall from "@/components/Call/ExtensionCall/ItemExtensionCall";
import InfoCalling from "@/components/Call/InfoCalling";
import NotifyRight from "@/components/Call/NotifyRight";
import messenger from "@/assets/sound/messenger.mp3";
import { useSelector } from "react-redux";
import { getCall, RootState } from "@/reducers";
import { CallProps } from "@/reducers/call";
import { PAGE_HOME } from "@/constants/Config";
import { useNavigate } from "react-router-dom";

const Call = () => {
  //
  const { mode, showVideo, localStream } = useSelector<RootState, CallProps>(
    getCall
  );
  const refLocalStream = useRef<HTMLVideoElement>(null);
  const audio = new Audio(messenger);
  audio.loop = true;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      audio.play();
    };
    mode !== "offline" && fetchData();
    return () => {
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
  useEffect(() => {
    const fetchData = async () => {
      if (mode === "offline") {
        navigate(PAGE_HOME);
        return;
      }
      if (refLocalStream.current && localStream) {
        refLocalStream.current.srcObject = localStream;
        refLocalStream.current.onloadedmetadata = (e) => {
          refLocalStream.current.play();
        };
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStream, mode]);
  return (
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
          <video
            ref={refLocalStream}
            className="w-60 h-40 border-gray-300 border border-solid rounded-lg absolute bottom-4 right-4"
          >
            <track default kind="captions" srcLang="en" />
          </video>
        )}
        <NotifyRight />
      </div>
    </div>
  );
};

export default Call;
