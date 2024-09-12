import * as React from "react";

function ChatText(props: any) {
  //
  const { left, margin, item, groupMessage } = props;
  let style = {
    maxWidth: "75%",
    fontSize: "15px",
    backgroundColor: groupMessage ? groupMessage.color : "#1877f2",
    color: "white",
  };
  if (left) {
    style.backgroundColor = "bg-gray-300 dark:bg-dark-third";
    delete style.color;
  }
  const dataMessage = JSON.parse(item.dataMessage);
  //
  return (
    <div
      className={`relative break-all border-none outline-none ${
        dataMessage.value ? "" : "p-1.5"
      } ${margin} 
            rounded-lg relative dark:text-white ${
              style.backgroundColor
            } bg-opacity-80`}
      style={dataMessage.value ? { fontSize: 28 } : style}
    >
      {item.content}
    </div>
  );
}

export default ChatText;
