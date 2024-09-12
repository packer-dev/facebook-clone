import React, { forwardRef, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import MainContentMessage from "../Messenger/ContentMessage/MainContentMessage";

const ItemNewChat = forwardRef((props: any, ref: any) => {
  //
  const { item, choose, setChoose, setText } = props;
  const index = choose.findIndex(
    (dt) => dt.userUserRelationShip.id === item.userUserRelationShip.id
  );
  //
  return (
    <div
      onClick={() => {
        if (ref.current) {
          ref.current.innerText = "";
        }
        if (index === -1) {
          setChoose([...choose, item]);
        } else {
          setChoose(
            [...choose].filter(
              (dt) =>
                dt.userUserRelationShip.id !== item.userUserRelationShip.id
            )
          );
        }
        setText("");
      }}
      className={`w-full rounded-sm p-1.5 ${`${
        index === 1
          ? "dark:bg-dark-third bg-gray-200"
          : "dark:hover:bg-dark-third hover:bg-gray-200"
      }`} cursor-pointer flex`}
    >
      <div className="w-auto">
        <img
          src={item.userUserRelationShip.avatar}
          className="w-12 h-12 p-1 object-cover rounded-full"
          alt=""
          srcSet=""
        />
      </div>
      <div className="w-8/12 px-3 py-3 dark:text-white">
        {`${item.userUserRelationShip.firstName} ${item.userUserRelationShip.lastName}`}
      </div>
      <div className="w-2/12 py-3 text-center"></div>
    </div>
  );
});

export default function NewChat(props) {
  //
  const refText = useRef();
  const { choose, setChoose, groupMessage, messages, item } = props;
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("11");
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    //
    let timeOut;
    if (text.length > 0) {
      setLoading(true);
      timeOut = setTimeout(async () => {
        try {
          setLoading(false);
        } catch (error) {
          throw error;
        }
      }, 300);
    } else {
      setLoading(false);
      setUserList([]);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  //
  return (
    <div className="w-full flex-1 p-1 relative">
      <div className="w-full h-full flex flex-col">
        <div
          className="w-full py-1 flex items-start border-b-2 border-solid flex border-gray-200  
                dark:border-dark-third"
        >
          <div className="w-2/12 pl-2 font-bold py-2 dark:text-white">
            Đến :
          </div>
          <div className="w-10/12 flex">
            <div className="w-auto flex flex-wrap">
              {Array.isArray(choose) &&
                choose.map((item) => (
                  <div
                    onClick={() => {
                      setChoose(
                        [...choose].filter(
                          (dt) =>
                            dt.userUserRelationShip.id !==
                            item.userUserRelationShip.id
                        )
                      );
                    }}
                    className="mr-2 mb-2 break-all rounded-full text-sm w-auto cursor-pointer p-1.5 bg-blue-300 text-blue-500 font-bold"
                  >
                    {`${item.userUserRelationShip.firstName} ${item.userUserRelationShip.lastName}`}
                    <span className="ml-1 text-xm">&times;</span>
                  </div>
                ))}
            </div>
            <div
              onInput={(event) => {
                setText(event.currentTarget.textContent);
              }}
              ref={refText}
              className="border-none pl-3 outline-none dark:text-white py-2"
              contentEditable={true}
              spellCheck={true}
            ></div>
          </div>
        </div>
        {loading ? (
          <div className="w-full p-3 flex items-center justify-center">
            <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
          </div>
        ) : text ? (
          <div className="w-full flex-1 p-1 wrapper-content-right overflow-y-auto overflow-x-hidden">
            {userList.map((item, index) => (
              <ItemNewChat
                key={index}
                item={item}
                choose={choose}
                setChoose={setChoose}
                ref={refText}
                setText={setText}
              />
            ))}
          </div>
        ) : (
          <MainContentMessage
            messages={messages}
            item={item}
            choose={choose}
            typeGroupMessage={0}
            groupMessage={
              groupMessage.id
                ? groupMessage
                : messages.length > 0
                ? messages[0].groupMessageMessage
                : groupMessage
            }
          />
        )}
      </div>
    </div>
  );
}
