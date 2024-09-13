import React, { memo, useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ItemMessageLeft from "../ItemMessage/ItemMessageLeft";
import ItemMessageRight from "../ItemMessage/ItemMessageRight";
import { RootState } from "@/reducers";
import { ItemChatContext } from "@/contexts/ItemChatContext";
import GroupAvatar from "@/components/GroupAvatar";
import Avatar from "@/components/Avatar";

export default memo(function MainContentMessage(props: any) {
  //
  const {
    state: { messages, members, group },
  } = useContext(ItemChatContext);
  const { user } = useSelector<RootState, RootState>((state) => state);
  const refContentMessage = useRef<HTMLDivElement>();
  const member = members.find((item) => item.user.id !== user.id)?.user;
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
      className="w-full p-1 flex-1 wrapper-content-right overflow-y-auto overflow-x-hidden
         relative"
      style={{ scrollBehavior: "unset" }}
    >
      {Array.isArray(messages) && (
        <div className="w-full">
          {!messages.length && !group.multiple && (
            <div className="w-full p-2 text-center">
              <Avatar className="relative mx-auto" uri={member.avatar} />
              <p className="text-center text-gray-900 font-semibold dark:text-white">
                <span className="py-1.5 text-sm font-semibold dark:text-gray-300 ">
                  Facebook
                </span>
                <br />
                <span className="text-sm font-semibold dark:text-gray-300">
                  Các bạn hiện là bạn bè trên Ensonet
                </span>
              </p>
            </div>
          )}
          {!messages.length && group.multiple && (
            <div className="w-full p-2 text-center">
              <GroupAvatar
                group={group}
                size={16}
                className="relative mx-auto"
              />
              <p className="text-center text-gray-900 font-semibold dark:text-white">
                <span className="text-sm font-semibold dark:text-gray-300">
                  {`${user.name} đã tạo nhóm.`}
                </span>
              </p>
            </div>
          )}
          {messages.map((item) => {
            if (item.user.id === user.id)
              return <ItemMessageRight key={item.id} item={item} />;
            else return <ItemMessageLeft key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
});
