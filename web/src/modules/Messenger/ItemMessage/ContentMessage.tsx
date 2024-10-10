import React, { forwardRef } from "react";
import ChatText from "./ChatText";
import { Message } from "@/interfaces/Message";
import { Group } from "@/interfaces/Group";
import ItemSticker from "@/popovers/PopoverSticker/ItemSticker";
import { useSelector } from "react-redux";
import { getUser, RootState } from "@/reducers";
import { User } from "@/interfaces/User";

export type ContentMessageProps = {
  item: Message;
  groupMessage?: Group;
  margin?: string;
  left?: boolean;
};

export default forwardRef(function ContentMessage(
  props: ContentMessageProps,
  ref: React.RefObject<any>
) {
  //
  const user = useSelector<RootState, User>(getUser);
  const { item, margin, left, groupMessage } = props;
  switch (item.content.type) {
    case 1:
      return (
        <ChatText
          item={item}
          groupMessage={groupMessage}
          margin={margin}
          left={left}
        />
      );
    case 2:
      return <ItemSticker ref={ref} sticker={JSON.parse(item.content.text)} />;
    case 3:
      return (
        <img
          ref={ref}
          src={JSON.parse(item.content.text).url}
          alt=""
          className="w-80 h-56 rounded-lg object-cover"
        />
      );
    case 4:
      return (
        <p
          className="w-11/12 mx-auto text-wrap text-center text-sm font-semibold 
        text-gray-500 dark:text-white"
        >{`${
          item.user.id === user?.id ? "You" : item.user.name.split(" ")[0]
        } changed the color of the chat.`}</p>
      );
    case 5:
      return (
        <p
          className="w-11/12 mx-auto text-wrap text-center text-sm font-semibold 
        text-gray-500 dark:text-white"
        >{`${
          item.user.id === user?.id ? "You" : item.user.name.split(" ")[0]
        } emoji changed.`}</p>
      );
    case 6:
      return (
        <p
          className="w-11/12 mx-auto text-wrap text-center text-sm font-semibold 
        text-gray-500 dark:text-white"
        >{`${
          item.user.id === user?.id ? "You" : item.user.name.split(" ")[0]
        } changed nickname of ${JSON.parse(item.content.text)?.name} to ${
          JSON.parse(item.content.text)?.to
        }.`}</p>
      );
    case 7:
      return (
        <p className="w-11/12 mx-auto text-wrap text-center text-sm font-bold text-gray-500 dark:text-white">{`${
          item.user.id === user?.id ? "You" : item.user.name.split(" ")[0]
        } changed name group to ${item.content.text}.`}</p>
      );
    default:
      return <></>;
  }
});
