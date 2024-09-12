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

const WrapperMessenger = (props) => {
  //
  const { loadMessage } = props;
  const { user } = useSelector<RootState, RootState>((state) => state);
  const params = useParams();
  const {
    state: { left, right, groupMessage, usersList },
    updateData,
  } = useContext(MessengerContext);
  useEffect(() => {
    //
    const fetch = async () => {};
    if (user) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  //
  return (
    <div className="w-full flex pt-16 z-10 bg-white dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full h-full max-h-full">
      <div className="w-24 md:w-5/12 xl:w-1/4 shadow-xl overflow-hidden h-full ">
        <div className="w-full h-full ">
          <MessageList allMessage={left} />
        </div>
      </div>
      <div
        className="w-full md:w-7/12 xl:w-3/4 flex h-full border-x-2 border-solid border-gray-100 
            dark:border-dark-second z-40"
      >
        {right && groupMessage && usersList ? (
          <>
            <ContentChat loadMessage={loadMessage} />
            <SettingMessage
              groupMessage={groupMessage}
              setGroupMessage={(groupMessage) =>
                updateData("groupMessage", groupMessage)
              }
              usersList={usersList}
            />
          </>
        ) : (
          <div className={`w-full h-full flex justify-center items-center`}>
            <div className="w-11/12 md:w-2/3 lg:w-5/12 xl:w-30% text-center mx-auto">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg"
                alt=""
                className="w-32 object-cover mx-auto"
              />
              <p className="font-bold text-xl">Chạm để xem tin nhắn</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ContentChat = (props) => {
  //
  const {
    state: { right, groupMessage, usersList },
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
      <ContentMessageTop
        item={usersList[0]}
        groupMessage={groupMessage}
        members={usersList}
      />
      <MainContentMessage
        messages={right}
        item={usersList[0]}
        groupMessage={groupMessage}
      />
      <ControlMessage
        groupMessage={groupMessage}
        dataMessage={dataMessage}
        messages={right}
        setDataMessage={setDataMessage}
        setMessages={(right) => updateData("right", right)}
        chatter={usersList[0]}
      />
    </div>
  );
};

export default function Messenger(props) {
  //
  const { loadMessage } = props;
  //
  return (
    <WrapperLogged hideChat={true} hideMessage={true}>
      <MessengerProvider>
        <WrapperMessenger loadMessage={loadMessage}></WrapperMessenger>
      </MessengerProvider>
    </WrapperLogged>
  );
}
