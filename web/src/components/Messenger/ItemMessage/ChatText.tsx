import * as React from "react";
import { ContentMessageProps } from "./ContentMessage";

const ChatText = (props: ContentMessageProps) => {
  //
  const { left, margin, item, groupMessage } = props;
  let style = {
    fontSize: "15px",
    backgroundColor: groupMessage?.data?.color || "#1877f2",
    color: "white",
  };
  if (left) {
    style.backgroundColor = "bg-gray-300 dark:bg-dark-third";
    delete style.color;
  }
  //
  return (
    <div
      className={`relative border-none outline-none ${
        item.content.type === 2 ? "" : "p-1.5"
      } ${margin} rounded-lg relative dark:text-white bg-opacity-80`}
      style={item.content.type === 2 ? { fontSize: 28 } : style}
    >
      {item.content.text}
    </div>
  );
};

export default ChatText;
