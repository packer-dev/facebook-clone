import React, { useEffect, useRef } from "react";
import ExtensionCall from "@/components/Call/ExtensionCall";
import ItemExtensionCall from "@/components/Call/ExtensionCall/ItemExtensionCall";
import InfoCalling from "@/components/Call/InfoCalling";
import NotifyRight from "@/components/Call/NotifyRight";
import messenger from "@/assets/sound/messenger.mp3";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  getCall,
  getSocket,
  getUser,
  RootState,
} from "@/reducers";
import { CallProps, updateDataCall } from "@/reducers/call";
import { Button } from "@/components/ui/button";
import { Socket } from "socket.io-client";
import { User } from "@/interfaces/User";

const Call = () => {
  //
  const socket = useSelector<RootState, Socket>(getSocket);
  const user = useSelector<RootState, User>(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const { mode, status, acceptUser, localStream } = useSelector<
    RootState,
    CallProps
  >(getCall);
  const refLocalStream = useRef<HTMLVideoElement>(null);
  const audio = new Audio(messenger);
  audio.loop = true;

  useEffect(() => {
    async function fetch() {
      // audio.play();
      setTimeout(() => {
        window.close();
      }, 20000);
    }
    fetch();
    return () => {
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (refLocalStream.current && localStream) {
      refLocalStream.current.srcObject = localStream;
    }
  }, [localStream]);

  return (
    <div className="w-full bg-black h-screen relative">
      <div className="w-full h-screen relative">
        <div className="w-full">
          <InfoCalling />
          <ExtensionCall />
          <div className="absolute bottom-6 left-5">
            <ItemExtensionCall
              icon="bx bx-message-rounded"
              addClass="text-gray-300"
            />
          </div>
        </div>
        {status === "callee" && (
          <>
            <Button
              onClick={() =>
                socket.emit("call", {
                  id: user.id,
                  type: "deny",
                })
              }
              variant="secondary"
            >
              Deny
            </Button>
            <Button
              onClick={() => {
                socket.emit("call", {
                  id: user.id,
                  user,
                  type: "accept",
                });
                dispatch(
                  updateDataCall({
                    key: "acceptUser",
                    value: [user, ...acceptUser],
                  })
                );
              }}
              className="bg-green-500"
            >
              Accept
            </Button>
          </>
        )}
        {mode === "offline" && (
          <div className="border-gray-300 border border-solid rounded-lg absolute bottom-4 right-4">
            <div className="w-60 h-40 rounded-lg relative">
              <video
                ref={refLocalStream}
                className="absolute top-0 left-0 bottom-0 right-0"
              />
            </div>
          </div>
        )}
        <NotifyRight />
      </div>
    </div>
  );
};

export default Call;
