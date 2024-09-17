import { ItemChatContext } from "@/contexts/ItemChatContext";
import { User } from "@/interfaces/User";
import { RootState, getSocket, getUser } from "@/reducers";
import React from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";

const useListeningMessage = (groupId: string) => {
  const {
    state: { messages, groups },
    updateData,
  } = React.useContext(ItemChatContext);
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const listenChat = (data: any) => {
    data = JSON.parse(data);
    if (user?.id === data?.message?.user?.id) return;
    updateData("messages", [...messages, data?.message]);
    updateData(
      "groups",
      [...groups].map((item) => {
        if (item.id === groupId) {
          return { ...item, last_message: data?.message };
        }
        return item;
      })
    );
  };
  React.useEffect(() => {
    if (socket && groupId) {
      socket.off(`receive-message-${groupId}`, listenChat);
      socket.on(`receive-message-${groupId}`, listenChat);
    }
    return () => {
      socket.off(`receive-message-${groupId}`, listenChat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, groupId]);
};

export default useListeningMessage;
