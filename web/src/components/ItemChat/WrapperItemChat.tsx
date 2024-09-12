import * as React from "react";
import ContentMessageTop from "../Messenger/ContentMessage/ContentMessageTop";
import ControlMessage from "../Messenger/ContentMessage/ControlMessage";

export default function WrapperItemChat(props: any) {
  //
  const {
    groupMessage,
    mini,
    dataMessage,
    messages,
    setDataMessage,
    members,
    setMembers,
    setMessages,
    item,
    show,
    setShow,
    choose,
    setGroupMessage,
    setChoose,
  } = props;
  //
  return (
    <div
      className="relative bg-white m-2 dark:bg-dark-second rounded-lg dark:border-dark-third 
        border-2 border-solid border-gray-300 ml-auto"
      style={{ width: 340, height: 486 }}
    >
      <div className="w-full h-full flex flex-col">
        <ContentMessageTop
          mini={mini}
          item={item}
          groupMessage={groupMessage}
          setShow={setShow}
          show={show}
          choose={choose}
          members={members}
          setMembers={setMembers}
        />
        {props.children}
        <ControlMessage
          groupMessage={groupMessage}
          dataMessage={dataMessage}
          messages={messages}
          setMembers={setMembers}
          setDataMessage={setDataMessage}
          mini={mini}
          setMessages={setMessages}
          chatter={item}
          choose={choose}
          setGroupMessage={setGroupMessage}
          item={item}
          setChoose={setChoose}
          members={members}
        />
      </div>
    </div>
  );
}
