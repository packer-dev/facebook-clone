import * as React from "react";
import ItemExtensionCall from "./ItemExtensionCall";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getCall, RootState } from "@/reducers";
import { CallProps, updateDataCall } from "@/reducers/call";
import { useNavigate } from "react-router-dom";
import { PAGE_HOME } from "@/constants/Config";

const ExtensionCall = () => {
  //
  const { showAudio, showVideo, localStream } = useSelector<
    RootState,
    CallProps
  >(getCall);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <div
      className="p-2 flex justify-center absolute bottom-6 transform 
      -translate-x-1/2 left-1/2 w-[450px]"
    >
      <ItemExtensionCall icon="bx bxs-category-alt" addClass="text-gray-300" />
      <ItemExtensionCall
        handleClick={async () => {
          if (showVideo) {
            localStream.getVideoTracks().forEach((track) => {
              track.stop();
            });
          } else {
            dispatch(
              updateDataCall({
                key: "localStream",
                value: await navigator.mediaDevices.getUserMedia({
                  video: true,
                  audio: false,
                }),
              })
            );
          }
          dispatch(
            updateDataCall({
              key: "showVideo",
              value: !showVideo,
            })
          );
        }}
        icon={`bx bxs-video${showVideo ? "" : "-off"}`}
        addClass="text-gray-300"
      />
      <ItemExtensionCall
        handleClick={() =>
          dispatch(
            updateDataCall({
              key: "showAudio",
              value: !showAudio,
            })
          )
        }
        icon={`bx bxs-microphone${showAudio ? "" : "-off"}`}
        addClass="text-gray-300"
      />
      <ItemExtensionCall
        handleClick={() => {
          localStream.getTracks().forEach((track) => {
            track.stop();
          });
          navigate(PAGE_HOME);
        }}
        icon="bx bxs-phone"
        addClass="text-red-500 transform rotate-135"
      />
    </div>
  );
};

export default React.forwardRef(ExtensionCall);
