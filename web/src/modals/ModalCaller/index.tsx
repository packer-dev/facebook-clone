import React, { useContext, useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  getCall,
  getSocket,
  getUser,
  RootState,
} from "@/reducers";
import { Socket } from "socket.io-client";
import { User } from "@/interfaces/User";
import { useNavigate } from "react-router-dom";
import { PAGE_CALL } from "@/constants/Config";
import { CallProps, updateDataCall } from "@/reducers/call";
import sound_callee from "@/assets/sound/sound-callee.mp3";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { Group } from "@/interfaces/Group";

const ModalCaller = ({ data }: { data: any }) => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const { acceptUser } = useSelector<RootState, CallProps>(getCall);
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const refButton = useRef<HTMLButtonElement>(null);
  const sound = new Audio(sound_callee);
  sound.loop = true;
  sound.muted = true;
  sound.autoplay = true;
  useEffect(() => {
    if (refButton.current) refButton.current.click();
  }, [refButton]);
  return (
    <ModalWrapper title="Caller" width={360}>
      <button
        className="hidden"
        ref={refButton}
        onClick={() => {
          sound.muted = false;
          sound.play();
        }}
      />
      <div className="w-full py-4">
        <img
          src={data?.caller?.avatar}
          className="object-cover w-20 h-20 mx-auto rounded-full"
          alt=""
        />
      </div>
      <p className="w-10/12 mx-auto text-wrap text-center font-bold text-3xl">
        {data?.caller?.name} called for you
      </p>
      <div className="flex gap-1 justify-center text-wrap items-center text-gray-500 font-semibold text-xs py-2">
        <span className="bx bx-lock" />
        <span>End-to-end encrypted.</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-5 flex flex-col gap-1 justify-center items-center">
          <span
            aria-hidden
            onClick={() => {
              socket.emit("call", {
                type: "deny",
              });
              sound.pause();
              modalsDispatch(modalsAction.closeModal());
            }}
            className="w-10 h-10 rounded-full bx bx-x text-2xl bg-red-500 flex items-center justify-center 
          text-white"
          />
          <p className="text-center text-xs font-semibold text-gray-700">
            Deny
          </p>
        </div>
        <div className="p-5 flex flex-col gap-1 justify-center items-center">
          <span
            aria-hidden
            onClick={async () => {
              const group: Group = data?.info;
              const members = group?.members?.filter(
                (item) => item.user.id !== user.id
              );
              for (const member of members) {
                socket.emit("call", {
                  id: member?.user?.id,
                  type: "accept",
                });
              }
              dispatch(
                updateDataCall({
                  key: "callStatus",
                  value: "ready",
                })
              );
              dispatch(
                updateDataCall({
                  key: "acceptUser",
                  value: [user, ...acceptUser],
                })
              );
              dispatch(
                updateDataCall({
                  key: "mode",
                  value: data?.info?.multiple ? "group" : "single",
                })
              );
              const localStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
              });
              dispatch(
                updateDataCall({
                  key: "localStream",
                  value: localStream,
                })
              );
              sound.pause();
              navigate(PAGE_CALL);
            }}
            className="w-10 h-10 rounded-full bx bx-phone text-2xl bg-green-500 flex items-center justify-center 
          text-white"
          />
          <p className="text-center text-xs font-semibold text-gray-700">
            Accept
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalCaller;
