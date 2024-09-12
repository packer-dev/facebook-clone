import * as React from "react";
import ContentMessage from "./ContentMessage";

export default function ItemMessageLeft(props: any) {
  //
  const { item } = props;
  //
  return (
    <div className="mess-user z-0 chat-lefts w-full py-2 flex relative">
      <div className="w-12 relative">
        <img
          className="absolute bottom-1 w-9 h-9 object-cover rounded-full"
          src={item.userMessage.avatar}
          alt=""
        />
      </div>
      <div
        className="mess-user-r1 pl-2 flex z-50 relative"
        style={{ width: "inherit" }}
      >
        <ContentMessage item={item} left={true} />
      </div>
    </div>
  );
}
