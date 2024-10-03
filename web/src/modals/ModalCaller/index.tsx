import React from "react";
import ModalWrapper from "../ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getSocket, getUser, RootState } from "@/reducers";
import { Socket } from "socket.io-client";
import { User } from "@/interfaces/User";
import { useNavigate } from "react-router-dom";
import { PAGE_CALL } from "@/constants/Config";
import { updateDataCall } from "@/reducers/call";

const ModalCaller = ({ data }: { data: any }) => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  return (
    <ModalWrapper title="Caller" width={360}>
      <div className="w-full py-4">
        <img
          src={data?.info?.user?.avatar}
          className="object-cover w-20 h-20 mx-auto rounded-full"
          alt=""
        />
      </div>
      <p className="w-10/12 mx-auto text-wrap text-center font-bold text-3xl">
        {data?.info?.user?.name} called for you
      </p>
      <div className="flex gap-1 justify-center text-wrap items-center text-gray-500 font-semibold text-xs py-2">
        <span className="bx bx-lock"></span>
        <span>End-to-end encrypted.</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-5 flex flex-col gap-1 justify-center items-center">
          <span
            className="w-10 h-10 rounded-full bx bx-x text-2xl bg-red-500 flex items-center justify-center 
          text-white"
          ></span>
          <p className="text-center text-xs font-semibold text-gray-700">
            Deny
          </p>
        </div>
        <div
          aria-hidden
          onClick={() => {
            socket.emit("call", {
              id: user?.id,
              type: "accept",
            });
            dispatch(
              updateDataCall({
                key: "acceptUser",
                value: [user],
              })
            );
            navigate(PAGE_CALL);
          }}
          className="p-5 flex flex-col gap-1 justify-center items-center"
        >
          <span
            className="w-10 h-10 rounded-full bx bx-phone text-2xl bg-green-500 flex items-center justify-center 
          text-white"
          ></span>
          <p className="text-center text-xs font-semibold text-gray-700">
            Accept
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalCaller;
