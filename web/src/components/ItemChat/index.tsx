import React, { useContext, useEffect, useRef } from "react";
import MainContentMessage from "../Messenger/ContentMessage/MainContentMessage";
import SettingMessageChild from "../Messenger/SettingMessage/SettingMessageChild";
import WrapperItemChat from "./WrapperItemChat";
import NewChat from "./NewChat";
import sound from "@/assets/sound/sound.mp3";
import { ItemChatContext, ItemChatProvider } from "@/contexts/ItemChatContext";
import { getMessageMain } from "@/apis/messageAPIs";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { ZoomUserChatProps } from "@/reducers/userChat";
import { getGroupById } from "@/apis/groupAPIs";

export type ItemChatProps = {
  item?: ZoomUserChatProps;
};

const ItemChat = ({ item }: ItemChatProps) => {
  //
  const {
    state: { showSetting },
    updateData,
  } = useContext(ItemChatContext);
  const ref = useRef<HTMLAudioElement>();
  const { user } = useSelector<RootState, RootState>((state) => state);

  useEffect(() => {
    updateData("loading", true);
    updateData("isNew", item.is_new);
    updateData("group", item.group);
    updateData("userParam", item.user);
    updateData("idItemChat", item.id);
    if (item.user) {
      const fetchDataUser = async () => {
        const result = await getMessageMain(user?.id, item.user.id);
        updateData("messages", result.messages || []);
        updateData("group", result.group);
        updateData("loading", false);
      };
      fetchDataUser();
      return;
    }

    if (item.group) {
      const fetchDataGroup = async () => {
        const result = await getGroupById(item.group.id);
        updateData("messages", result || []);
        updateData("loading", false);
      };
      fetchDataGroup();
      return;
    }
    updateData("loading", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <WrapperItemChat>
      <audio ref={ref} muted src={sound} className="hidden" />
      {!item.is_new ? <MainContentMessage /> : <NewChat />}
      {showSetting && (
        <ul
          className="w-72 absolute top-0 right-full bg-white dark:bg-dark-third border-2 border-solid 
          border-gray-300 dark:border-dark-second shadow-lv1 mr-0.5 rounded-lg z-50"
        >
          <SettingMessageChild hide={true} group={item.group} />
        </ul>
      )}
    </WrapperItemChat>
  );
};

const ContainerWrapperItemChat = ({ item }: ItemChatProps) => {
  return (
    <ItemChatProvider>
      <ItemChat item={item} />
    </ItemChatProvider>
  );
};

export default ContainerWrapperItemChat;
