import React, { useContext, useRef, useState } from "react";
import * as functions from "@/functions";
import ControlMessageMain from "./ControlMessageMain";
import SendImageVideo from "./SendImageVideo/SendImageVideo";
import PopoverSticker from "@/components/Popovers/PopoverSticker";
import PopoverEmojii from "@/components/Popovers/PopoverEmojii";
import { ItemChatContext } from "@/contexts/ItemChatContext";
import { dataFakeGroup, dataFakeMessage } from "@/utils";
import { useSelector } from "react-redux";
import { RootState, getSocket, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { sendMessageAPI } from "@/apis/messageAPIs";
import { Socket } from "socket.io-client";

export default function ControlMessage() {
  //
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const {
    state: { members, group, isNew, messages, userParam, groups, files },
    updateData: updateDataItemChat,
  } = useContext(ItemChatContext);
  const refContent = useRef<HTMLDivElement>();
  const refPopover = useRef<HTMLDivElement>();
  const [type, setType] = useState();
  let count = 0;
  const handleClick = (type, event) => {
    setType(type);
    const current = event.target;
    if (!current) {
      return;
    }
    refPopover.current.style.display = "block";
    window.addEventListener("click", winEv);
  };
  const winEv = function (event) {
    ++count;
    if (count > 1) {
      if (refPopover.current && !refPopover.current.contains(event.target)) {
        refPopover.current.style.display = "none";
        count = 0;
        window.removeEventListener("click", winEv);
      }
    }
  };
  const handleSend = async (data?: any) => {
    const message = dataFakeMessage({
      user,
      type: data ? 2 : 1,
      text: data || refContent.current.innerText,
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
      });
    } catch (error) {}
  };
  //
  return (
    <div
      className={`w-full bg-white dark:bg-dark-second z-20 pt-2 pb-3 px-1 flex items-center 
        dark:border-dark-third border-t-2 border-solid border-gray-300 relative ${
          isNew && !members.length ? "opacity-50" : ""
        }`}
    >
      {files.length > 0 && <SendImageVideo />}
      <ControlMessageMain />
      <div className="w-9/12 relative">
        <div className="three-exten1 w-full relative">
          <div
            aria-hidden
            ref={refContent}
            className="place-input-type border-none dark:text-white bg-gray-200 dark:bg-dark-third rounded-full 
                    pl-2 outline-none py-2 break-all w-full"
            // placeholder="Aa"
            contentEditable={true}
            spellCheck={false}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
            style={{ minHeight: "20px" }}
            onInput={(event) => ""}
          />
          <div
            aria-hidden
            onClick={(event) => handleClick(1, event)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 flex cursor-pointer z-50"
          >
            <i className="fas fa-smile dark:text-white text-gray-600 text-2xl" />
          </div>
          <div
            ref={refPopover}
            className="absolute hidden bottom-full bg-white border-2 border-solid border-gray-200 shadow-lv1 
            right-0 rounded-lg w-72"
            style={{ height: 360 }}
          >
            {type === 1 ? (
              <PopoverEmojii
                handleClick={(item) => {
                  refContent.current.innerText += item;
                  functions.placeCaretAtEnd(refContent.current);
                }}
              />
            ) : (
              <PopoverSticker
                handleClick={(item) => {
                  refPopover.current.style.display = "none";
                  count = 0;
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-12 zoom flex jusitfy-center">
        <span
          aria-hidden
          onClick={handleSend}
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
}
