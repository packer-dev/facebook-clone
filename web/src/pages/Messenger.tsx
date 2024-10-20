import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContentMessageTop from "@/modules/Messenger/ContentMessage/ContentMessageTop";
import ControlMessage from "@/modules/Messenger/ContentMessage/ControlMessage";
import MainContentMessage from "@/modules/Messenger/ContentMessage/MainContentMessage";
import MessageList from "@/modules/Messenger/MessageList";
import SettingMessage from "@/modules/Messenger/SettingMessage";
import { MessengerProvider } from "@/contexts/MessengerContext";
import WrapperLogged from "./Wrapper/WrapperLogged";
import { RootState } from "@/reducers";
import { User } from "@/interfaces/User";
import { getMessageListByIdUser } from "@/apis/messageAPIs";
import { getGroupById } from "@/apis/groupAPIs";
import { ItemChatContext, ItemChatProvider } from "@/contexts/ItemChatContext";

const WrapperMessenger = () => {
  const user = useSelector<RootState, User>((state) => state.user);
  const params = useParams();
  const {
    state: { groups, group, messages, loading },
    updateData: updateDataItemChat,
  } = useContext(ItemChatContext);
  const fetchMessageList = async () => {
    const result = await getMessageListByIdUser(user.id);
    updateDataItemChat("groups", result);
  };
  const fetchGroup = async () => {
    const result = await getGroupById(params.id);
    updateDataItemChat("messages", result.messages);
    updateDataItemChat("group", result.group);
    updateDataItemChat("mini", false);
    updateDataItemChat("loading", false);
  };
  useEffect(() => {
    if (user) fetchMessageList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  useEffect(() => {
    updateDataItemChat("loading", true);
    if (params?.id) fetchGroup();
    else updateDataItemChat("loading", true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <div className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full h-full max-h-full">
      <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
        <div className="w-full h-full ">
          <MessageList groups={groups} />
        </div>
      </div>
      <div className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 dark:border-dark-second z-40 relative">
        {!loading && messages && group && params?.id && (
          <>
            <div className="w-full z-50 xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
              <ContentMessageTop />
              <MainContentMessage />
              <ControlMessage />
            </div>
            <SettingMessage />
          </>
        )}
        {loading && (
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <i className="bx bx-loader-circle dark:text-white text-blue-500 animate-spin text-5xl" />
          </div>
        )}
        {!loading && !params?.id && (
          <div className={`w-full h-full flex justify-center items-center`}>
            <div className="w-11/12 md:w-2/3 lg:w-5/12 xl:w-30% text-center mx-auto relative">
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
    <WrapperLogged hideChat hideMessage>
      <MessengerProvider>
        <ItemChatProvider>
          <WrapperMessenger />
        </ItemChatProvider>
      </MessengerProvider>
    </WrapperLogged>
  );
};

export default Messenger;
