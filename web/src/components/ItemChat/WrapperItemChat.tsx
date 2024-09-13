import * as React from "react";
import ContentMessageTop from "../Messenger/ContentMessage/ContentMessageTop";
import ControlMessage from "../Messenger/ContentMessage/ControlMessage";
import { ItemChatContext } from "@/contexts/ItemChatContext";

const WrapperItemChat = ({ children }: { children?: React.ReactNode }) => {
  const {
    state: { loading },
  } = React.useContext(ItemChatContext);

  return (
    <div
      className="relative bg-white m-2 dark:bg-dark-second rounded-lg dark:border-dark-third 
      border-2 border-solid border-gray-300 ml-auto"
      style={{ width: 340, height: 486 }}
    >
      <div className="w-full h-full flex flex-col">
        {!loading && (
          <>
            <ContentMessageTop />
            {children}
            <ControlMessage />
          </>
        )}
      </div>
    </div>
  );
};

export default WrapperItemChat;
