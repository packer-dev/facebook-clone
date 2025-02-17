import React, { memo, useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ItemMessageLeft from "../ItemMessage/ItemMessageLeft";
import ItemMessageRight from "../ItemMessage/ItemMessageRight";
import { RootState, getUser } from "@/reducers";
import { ItemChatContext } from "@/contexts/ItemChatContext";
import GroupAvatar from "@/components/GroupAvatar";
import Avatar from "@/components/Avatar";
import { User } from "@/interfaces/User";

export default memo(function MainContentMessage() {
  //
  const {
    state: { messages, members, idItemChat, group, userParam },
  } = useContext(ItemChatContext);
  const user = useSelector<RootState, User>(getUser);
  const refContentMessage = useRef<HTMLDivElement>();
  const member =
    members.find((item) => item.user.id !== user.id)?.user || userParam;
  useEffect(() => {
    //
    if (refContentMessage.current) {
      refContentMessage.current.scrollTop =
        refContentMessage.current.scrollHeight;
    }
    //
  }, [refContentMessage, messages]);
  //
  return (
    <div
      ref={refContentMessage}
      className="w-full p-1 flex-1 wrapper-content-right overflow-y-auto overflow-x-hidden relative"
      style={{ scrollBehavior: "unset" }}
    >
      <div className="w-full">
        {idItemChat !== "new" && !messages.length && !group?.multiple && (
          <div className="w-full p-2 text-center">
            <Avatar
              className="relative mx-auto"
              uri={member?.avatar}
              online={false}
            />
            <p className="text-center text-gray-900 font-semibold dark:text-white">
              <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">
                Facebook
              </span>
              <br />
              <span className="text-sm font-semibold dark:text-gray-300">
                You are now friends on Facebook
              </span>
            </p>
          </div>
        )}
        {idItemChat !== "new" && !messages.length && group?.multiple && (
          <div className="w-full p-2 text-center">
            <GroupAvatar group={group} size={16} className="relative mx-auto" />
            <p className="text-center text-gray-900 font-semibold dark:text-white">
              <span className="text-sm font-semibold dark:text-gray-300">
                {`${user.name} created group.`}
              </span>
            </p>
          </div>
        )}
        <div className="flex flex-col gap-2 py-2">
          {messages?.map((item) => {
            if (item.user.id === user.id)
              return (
                <ItemMessageRight
                  key={item.id}
                  item={item}
                  groupMessage={group}
                />
              );
            else
              return (
                <ItemMessageLeft
                  key={item.id}
                  item={item}
                  groupMessage={group}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
});
