import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContentMessageTop from "@/components/Messenger/ContentMessage/ContentMessageTop";
import ControlMessage from "@/components/Messenger/ContentMessage/ControlMessage";
import MainContentMessage from "@/components/Messenger/ContentMessage/MainContentMessage";
import MessageList from "@/components/Messenger/MessageList";
import SettingMessage from "@/components/Messenger/SettingMessage";
import { MessengerProvider } from "@/contexts/MessengerContext";
import WrapperLogged from "./Wrapper/WrapperLogged";
import { RootState } from "@/reducers";
import { User } from "@/interfaces/User";
import { getMessageListByIdUser } from "@/apis/messageAPIs";
import { getGroupById } from "@/apis/groupAPIs";
import { ItemChatContext, ItemChatProvider } from "@/contexts/ItemChatContext";

const WrapperMessenger = () => {
  //
  const user = useSelector<RootState, User>((state) => state.user);
  const params = useParams();
  const {
    state: { groups, group, messages },
    updateData: updateDataItemChat,
  } = useContext(ItemChatContext);
  const fetchMessageList = async () => {
    const result = await getMessageListByIdUser(user.id);
    updateDataItemChat("groups", result);
  };
  const fetchGroup = async () => {
    const result = await getGroupById(params.id);
    updateDataItemChat("messages", result);
    updateDataItemChat("mini", false);
  };
  useEffect(() => {
    //
    if (user) fetchMessageList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    //
    if (params?.id) fetchGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  //
  return (
    <div className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full h-full max-h-full">
      <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
        <div className="w-full h-full ">
          <MessageList groups={groups} />
        </div>
      </div>
      <div className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 dark:border-dark-second z-40">
        {messages && group ? (
          <>
            <div className="w-full z-50 xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
              <ContentMessageTop />
              <MainContentMessage />
              <ControlMessage />
            </div>
            <SettingMessage />
          </>
        ) : (
          <div className={`w-full h-full flex justify-center items-center`}>
            <div className="w-11/12 md:w-2/3 lg:w-5/12 xl:w-30% text-center mx-auto">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg"
                alt=""
                className="w-32 object-cover mx-auto"
              />
              <p className="font-bold text-xl">Tap to view the message</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const Messenger = () => {
  return (
    <WrapperLogged hideChat={true} hideMessage={true}>
      <MessengerProvider>
        <ItemChatProvider>
          <WrapperMessenger />
        </ItemChatProvider>
      </MessengerProvider>
    </WrapperLogged>
  );
};

export default Messenger;
