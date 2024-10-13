import * as React from "react";
import ContentMessage from "./ContentMessage";
import { Message } from "@/interfaces/Message";
import { Group } from "@/interfaces/Group";

type ItemMessageLeftProps = {
  item: Message;
  groupMessage: Group;
};

const ItemMessageLeft = ({ item, groupMessage }: ItemMessageLeftProps) => {
  return (
    <div className="mess-user z-0 chat-lefts w-full flex relative">
      {item.content.type < 4 && (
        <div className="w-6 relative self-end flex">
          <img
            className="w-6 h-6 object-cover rounded-full"
            src={item.user.avatar}
            alt=""
          />
        </div>
      )}
      <div
        className={`flex z-50 relative px-1.5 rounded-sm ${
          item.content.type < 4 ? "w-3/4 pl-2 mess-user-r1" : "w-full"
        }`}
      >
        <ContentMessage item={item} left groupMessage={groupMessage} />
      </div>
    </div>
  );
};

export default ItemMessageLeft;
