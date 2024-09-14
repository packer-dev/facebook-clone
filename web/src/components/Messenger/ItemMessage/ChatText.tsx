import * as React from "react";
import { ContentMessageProps } from "./ContentMessage";

function ChatText(props: ContentMessageProps) {
  //
  const { left, margin, item, groupMessage } = props;
  let style = {
    maxWidth: "75%",
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
      className={`relative break-all border-none outline-none ${
        item.content.text ? "" : "p-1.5"
      } ${margin} 
            rounded-lg relative dark:text-white ${
              style.backgroundColor
            } bg-opacity-80`}
      style={item.content.text ? { fontSize: 28 } : style}
    >
      {item.content.text}
    </div>
  );
}

export default ChatText;
