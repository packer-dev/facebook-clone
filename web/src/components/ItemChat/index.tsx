import React, { useContext, useEffect, useRef } from "react";
import MainContentMessage from "../Messenger/ContentMessage/MainContentMessage";
import SettingMessageChild from "../Messenger/SettingMessage/SettingMessageChild";
import WrapperItemChat from "./WrapperItemChat";
import NewChat from "./NewChat";
import sound from "@/assets/sound/sound.mp3";
import { ItemChatContext, ItemChatProvider } from "@/contexts/ItemChatContext";
import { Group } from "@/interfaces/Group";
import { getGroupById } from "@/apis/groupAPIs";
import { getMessageMain } from "@/apis/messageAPIs";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";

export type ItemChatProps = {
  group?: Group;
};

const ItemChat = ({ group }: ItemChatProps) => {
  //
  const {
    state: { showSetting },
    updateData,
  } = useContext(ItemChatContext);
  const ref = useRef<HTMLAudioElement>();
  const { user } = useSelector<RootState, RootState>((state) => state);
  useEffect(() => {
    updateData("loading", true);
    updateData("group", group);
    const fetchData = async () => {
      updateData("members", group.members);
      const result = await getGroupById(group.id);
      if (result) {
        updateData("messages", result.messages || []);
        updateData("group", result.group || group);
      }
      updateData("loading", false);
    };
    if (group?.id && !group.is_new) fetchData();
    else updateData("loading", false);
  }, [group]);
  useEffect(() => {
    const fetchData = async () => {
      updateData("loading", true);
      const result = await getMessageMain(user?.id, group?.members[0].user.id);
      updateData("messages", result.messages || []);
      updateData("group", result.group || group);
      updateData("loading", false);
    };
    if (group?.id === group?.members[0]?.user.id) fetchData();
  }, [group]);
  if (!group) return <></>;
  //
  return (
    <WrapperItemChat>
      <audio ref={ref} muted src={sound} className="hidden" />
      {!group.is_new ? <MainContentMessage /> : <NewChat />}
      {showSetting && (
        <ul
          className="w-72 absolute top-0 right-full bg-white dark:bg-dark-third border-2 border-solid 
          border-gray-300 dark:border-dark-second shadow-lv1 mr-0.5 rounded-lg z-50"
        >
          <SettingMessageChild hide={true} />
        </ul>
      )}
    </WrapperItemChat>
  );
};

const ContainerWrapperItemChat = ({ group }: ItemChatProps) => {
  return (
    <ItemChatProvider>
      <ItemChat group={group} />
    </ItemChatProvider>
  );
};

export default ContainerWrapperItemChat;
