import React from "react";
import { AppContext } from "@/contexts/index";
import useSound from "../useSound";

const useListeningMessage = (groupId: string) => {
  const {
    state: { user, socket, messages, groups },
    updateData,
  } = React.useContext(AppContext);
  const { playSound } = useSound();
  const listenChat = (data: any) => {
    data = JSON.parse(data);
    if (user?.id === data?.message?.user?.id) return;
    playSound();
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
