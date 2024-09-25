import React, { useContext, useRef } from "react";
import * as functions from "@/functions";
import ControlMessageMain from "./ControlMessageMain";
import SendImageVideo from "./SendImageVideo/SendImageVideo";
import PopoverEmoji from "@/popovers/PopoverEmoji";
import { ItemChatContext } from "@/contexts/ItemChatContext";
import { dataFakeGroup, dataFakeMessage } from "@/utils";
import { useSelector } from "react-redux";
import { RootState, getSocket, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { sendMessageAPI } from "@/apis/messageAPIs";
import { Socket } from "socket.io-client";
import PopoversWrapper from "@/popovers/PopoversWrapper";

const ControlMessage = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const {
    state: { members, group, isNew, messages, userParam, groups, files },
    updateData: updateDataItemChat,
  } = useContext(ItemChatContext);
  const refContent = useRef<HTMLDivElement>();
  const handleSend = async (data?: any) => {
    const message = dataFakeMessage({
      user,
      type: typeof data === "object" ? 2 : 1,
      text:
        typeof data === "object"
          ? JSON.stringify(data)
          : refContent.current.innerText,
    });
    let temp = [...messages, message];
    updateDataItemChat("messages", [...temp]);
    delete message.loading;
    let newGroup = dataFakeGroup({
      groupCurrent: group ?? null,
      user,
      friend: userParam,
      message,
    });
    try {
      if (!newGroup) return;
      refContent.current.innerText = "";

      const result = await sendMessageAPI({
        message,
        group: newGroup,
      });
      if (!result?.group || !result?.message) {
        return;
      }
      const index = temp.findIndex((item) => item?.id === message?.id);
      if (index === -1) return;
      temp[index].loading = false;
      updateDataItemChat("messages", [...temp]);
      !group && updateDataItemChat("group", result?.group);
      if (newGroup?.id) {
        updateDataItemChat(
          "groups",
          groups?.map((item) => {
            if (item?.id === result?.group?.id) {
              return { ...result?.group, last_message: result?.message };
            }
            return item;
          })
        );
      } else {
        updateDataItemChat("groups", [...groups, result?.group]);
      }
      socket.emit(`send-message`, {
        groupId: result?.group?.id,
        message: result?.message,
        type: "message",
      });
    } catch (error) {}
  };
  //
  return (
    <div
      className={`w-full bg-white dark:bg-dark-second z-20 pt-2 pb-3 px-1 flex items-center 
        dark:border-dark-third border-t-2 border-solid border-gray-300 relative ${
          isNew && !members?.length ? "opacity-50" : ""
        }`}
    >
      {files?.length > 0 && <SendImageVideo />}
      <ControlMessageMain handleSend={handleSend} />
      <div className="w-9/12 relative">
        <div className="three-exten1 w-full relative">
          <div
            aria-hidden
            ref={refContent}
            className="place-input-type border-none dark:text-white bg-gray-200 dark:bg-dark-third rounded-full 
            pl-2 outline-none py-2 break-all w-full"
            contentEditable={true}
            spellCheck={false}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSend(refContent.current?.innerText || "");
              }
            }}
            style={{ minHeight: "20px" }}
          />
          <PopoversWrapper
            button={
              <div
                aria-hidden
                className="absolute right-3 top-1/2 transform -translate-y-1/2 flex cursor-pointer z-50"
              >
                <i className="fas fa-smile dark:text-white text-gray-600 text-2xl" />
              </div>
            }
          >
            <PopoverEmoji
              handleClick={(item: any) => {
                refContent.current.innerText += item;
                functions.placeCaretAtEnd(refContent.current);
              }}
            />
          </PopoversWrapper>
        </div>
      </div>
      <div className="w-12 zoom flex justify-center">
        <span
          aria-hidden
          onClick={() => handleSend("💕")}
          className="cursor-pointer zoom text-xl flex items-center"
        >
          {group?.data?.emoji || "💕"}
        </span>
      </div>
      {isNew && (
        <div className="w-full absolute opacity-50 top-0 left-0 z-50 h-[66px]" />
      )}
    </div>
  );
};

export default ControlMessage;
