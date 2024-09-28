import * as React from "react";
import ContentMessage from "./ContentMessage";
import { Message } from "@/interfaces/Message";
import { Group } from "@/interfaces/Group";

type ItemMessageLeftProps = {
  item: Message;
  groupMessage: Group;
};

const ItemMessageLeft = ({ item, groupMessage }: ItemMessageLeftProps) => {
  //
  //
  return (
    <div className="mess-user z-0 chat-lefts w-full py-2 flex relative">
      {item.content.type < 4 && (
        <div className="w-12 relative">
          <img
            className="absolute bottom-1 w-9 h-9 object-cover rounded-full"
            src={item.user.avatar}
            alt=""
          />
        </div>
      )}
      <div
        className="mess-user-r1 pl-2 flex z-50 relative p-1.5 rounded-sm"
        style={{ width: "inherit" }}
      >
        <ContentMessage item={item} left groupMessage={groupMessage} />
      </div>
    </div>
  );
};

export default ItemMessageLeft;
