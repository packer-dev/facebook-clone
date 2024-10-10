import * as React from "react";
import ContentMessageTop from "@/modules/Messenger/ContentMessage/ContentMessageTop";
import ControlMessage from "@/modules/Messenger/ContentMessage/ControlMessage";
import { ItemChatContext } from "@/contexts/ItemChatContext";

type WrapperItemChatProps = {
  children?: React.ReactNode;
  onload?: boolean;
};

const WrapperItemChat = ({ children, onload }: WrapperItemChatProps) => {
  const {
    state: { loading },
  } = React.useContext(ItemChatContext);
  return (
    <div
      className="relative bg-white m-2 dark:bg-dark-second rounded-lg dark:border-dark-third 
      border-2 border-solid border-gray-300 ml-auto w-[340px] h-[486px]"
    >
      <div className="w-full h-full flex flex-col">
        {!loading && !onload && (
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
