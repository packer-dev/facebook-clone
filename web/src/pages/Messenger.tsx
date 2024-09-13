import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContentMessageTop from "@/components/Messenger/ContentMessage/ContentMessageTop";
import ControlMessage from "@/components/Messenger/ContentMessage/ControlMessage";
import MainContentMessage from "@/components/Messenger/ContentMessage/MainContentMessage";
import MessageList from "@/components/Messenger/MessageList";
import SettingMessage from "@/components/Messenger/SettingMessage";
import {
  MessengerContext,
  MessengerProvider,
} from "@/contexts/MessagerContext/MessagerContext";
import WrapperLogged from "./WrapperLogged";
import { RootState } from "@/reducers";
import { User } from "@/interfaces/User";
import { getMessageListByIdUser, getMessageMain } from "@/apis/messageAPIs";
import { Message } from "@/interfaces/Message";
import { getGroupById } from "@/apis/groupAPIs";

const WrapperMessenger = () => {
  //
  const user = useSelector<RootState, User>((state) => state.user);
  const params = useParams();
  const {
    state: { left, right, groupMessage },
    updateData,
  } = useContext(MessengerContext);
  useEffect(() => {
    //
    const fetchMessageList = async () => {
      const result = await getMessageListByIdUser(user.id);
      updateData("left", result);
    };
    const fetchGroup = async () => {
      const result = await getGroupById(params.id);
      updateData("right", result?.messages);
      updateData("groupMessage", result?.group);
    };
    if (user) {
      fetchMessageList();
    }
    if (params?.id) {
      fetchGroup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, params]);
  //
  return (
    <div className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full h-full max-h-full">
      <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
        <div className="w-full h-full ">
          <MessageList allMessage={left} />
        </div>
      </div>
      <div className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 dark:border-dark-second z-40">
        {right && groupMessage ? (
          <>
            <ContentChat />
            <SettingMessage groupMessage={groupMessage} />
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

const ContentChat = () => {
  //
  const {
    state: { right, groupMessage },
    updateData,
  } = useContext(MessengerContext);
  const [dataMessage, setDataMessage] = useState({
    type: 0,
    value: null,
    content: "",
  });
  //
  return (
    <div className="w-full z-50 xl:w-2/3 h-full max-h-full overflow-hidden flex flex-col">
      <ContentMessageTop groupMessage={groupMessage} />
      <MainContentMessage
        messages={right}
        item={groupMessage.members[0]}
        groupMessage={groupMessage}
      />
      <ControlMessage
        groupMessage={groupMessage}
        dataMessage={dataMessage}
        messages={right}
        setDataMessage={setDataMessage}
        setMessages={(right: Message[]) => updateData("right", right)}
        chatter={groupMessage.members[0]}
      />
    </div>
  );
};

export default function Messenger() {
  //
  //
  return (
    <WrapperLogged hideChat={true} hideMessage={true}>
      <MessengerProvider>
        <WrapperMessenger />
      </MessengerProvider>
    </WrapperLogged>
  );
}
