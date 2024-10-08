import * as React from "react";
import Input from "@/components/Input";
import ItemMessageList from "./ItemMessageList";
import { Group } from "@/interfaces/Group";

export type MessageListProps = {
  groups: Group[];
  mini?: boolean;
  closePopover?: () => void;
};

const MessageList = ({ groups, mini, closePopover }: MessageListProps) => {
  //
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
              <span className="fas fa-ellipsis-h flex items-center" />
            </li>
            <li className="w-9 h-9 flex ml-2 bg-gray-200 dark:bg-dark-third rounded-full dark:text-gray-300 cursor-pointer justify-center">
              <span className="fas fa-video flex items-center" />
            </li>
            <li className="w-9 h-9 flex mx-2 bg-gray-200 dark:bg-dark-third rounded-full dark:text-gray-300 cursor-pointer justify-center">
              <span className="far fa-edit flex items-center" />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center px-2 flex">
        <Input
          type="text"
          className="w-full mx-auto rounded-full "
          placeholder="Search on messenger"
          search
        />
      </div>
      <div
        className={`w-full pt-3 wrapper-scrollbar overflow-y-auto my-1 flex flex-wrap justify-center ${
          mini ? "" : "px-3"
        }`}
        style={{ maxHeight: "calc(100% - 80px)" }}
      >
        {groups.map((group) => (
          <ItemMessageList
            group={group}
            key={group.id}
            mini={mini}
            closePopover={closePopover}
          />
        ))}
      </div>
    </>
  );
};

export default MessageList;
