import React, { forwardRef } from "react";
import ItemSticker from "../../Popovers/PopoverSticker/ItemSticker";
import ChatText from "./ChatText";
import { Message } from "@/interfaces/Message";
import { Group } from "@/interfaces/Group";

export type ContentMessageProps = {
  item: Message;
  groupMessage?: Group;
  margin?: any;
  left?: any;
};

export default forwardRef(function ContentMessage(
  props: ContentMessageProps,
  ref: any
) {
  //
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
    case 3:
      return (
        <img
          ref={ref}
          src={JSON.parse(item.content.text).value}
          alt={``}
          className="w-80 h-56 rounded-lg object-cover"
        />
      );
    case 2:
      return (
        <ItemSticker
          ref={ref}
          groupMessage={groupMessage}
          sticker={JSON.parse(item.content.text)}
          handleClick={() => ""}
        />
      );
    default:
      return <></>;
  }
});
