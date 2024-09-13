import * as React from "react";
import InputComponent from "../../InputComponent";
import ItemMessageList from "./ItemMessageList";

export default function MessageList(props) {
  //
  const { allMessage, mini } = props;
  //
  return (
    <>
      <div className="w-full flex py-2">
        <div className="w-1/2 font-semibold text-2xl py-0.5 ml-5 dark:text-white  flex justify-center xl:justify-start">
          <span className="flex items-center">Chat</span>
        </div>
        <div className="w-1/2 my-2 ml-auto hidden xl:block">
          <ul className="ml-auto flex float-right">
            <li className="w-9 h-9 flex ml-2 bg-gray-200 dark:bg-dark-third rounded-full dark:text-gray-300 cursor-pointer justify-center relative">
              <span className="fas fa-ellipsis-h flex items-center"></span>
            </li>
            <li className="w-9 h-9 flex ml-2 bg-gray-200 dark:bg-dark-third rounded-fulldark:text-gray-300 cursor-pointer justify-center">
              <span className="fas fa-video flex items-center"></span>
            </li>
            <li className="w-9 h-9 flex mx-2 bg-gray-200 dark:bg-dark-third rounded-full dark:text-gray-300 cursor-pointer justify-center">
              <span className="far fa-edit flex items-center"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center px-2 flex">
        <InputComponent
          type="text"
          className="w-full mx-auto rounded-full p-2.5 flex items-center bg-gray-100 dark:bg-dark-third dark:text-white"
          placeholder="Search on messenger"
          search={true}
        />
      </div>
      <div
        className="w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap justify-center "
        style={{ maxHeight: "calc(100% - 80px)" }}
      >
        {allMessage.map((itemMessage) => (
          <ItemMessageList
            itemMessage={itemMessage}
            key={itemMessage.groupMessage.id}
            mini={mini}
          />
        ))}
      </div>
    </>
  );
}
