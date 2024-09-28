import { updateGroupById } from "@/apis/groupAPIs";
import { sendMessageAPI } from "@/apis/messageAPIs";
import { Group } from "@/interfaces/Group";
import { Member } from "@/interfaces/Member";
import { User } from "@/interfaces/User";
import { getSocket, getUser, RootState } from "@/reducers";
import { dataFakeMessage } from "@/utils";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";

const ItemNickName = ({
  item,
  group,
  updateGroup,
}: {
  item: Member;
  group: Group;
  updateGroup: Function;
}) => {
  //
  const socket = useSelector<RootState, Socket>(getSocket);
  const user = useSelector<RootState, User>(getUser);
  const [show, setShow] = useState(false);
  const [nickName, setNickName] = useState(item.nickname);
  const [loading, setLoading] = useState(false);
  //
  return (
    <div className="w-full cursor-pointer p-2.5 flex hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg relative">
      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/50" />
      )}
      <div className="">
        <img
          src={item.user.avatar}
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
      </div>
      <div aria-hidden onClick={() => setShow(true)} className="flex-1 pl-3">
        <p className={`flex items-center flex-wrap ${!show ? "" : "hidden"}`}>
          <span className="w-full font-semibold block dark:text-white">
            {!nickName ? `${item.user.name}` : nickName}
          </span>
          <br />
          <span className="w-full text-sm text-gray-700 dark:text-white py-0.5 flex items-center font-semibold">
            {!nickName ? "Nickname" : `${item.user.name}`}
          </span>
        </p>
        <input
          type="text"
          className={`w-full p-1.5 mt-1 border-2 border-solid border-blue-500 rounded-xl bg-gray-100 
          dark:bg-dark-third dark:text-white flex justify-center items-center ${
            show ? "" : "hidden"
          }`}
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          onKeyUp={async (e) => {
            if (e.key === "Enter") {
              setLoading(true);
              const newGroup = {
                ...group,
                members: [...(group?.members || [])].map((child) => {
                  if (child.id === item.id) {
                    return { ...child, nickname: nickName };
                  }
                  return child;
                }),
              };
              const message = dataFakeMessage({
                user,
                text: JSON.stringify({
                  name: item.user.name,
                  to: nickName,
                }),
                type: 6,
              });
              const response = await sendMessageAPI({
                group,
                message,
              });
              socket.emit("send-message", {
                groupId: group?.id,
                message: response?.message,
                type: "nickname",
              });
              await updateGroupById(newGroup);
              updateGroup(newGroup);
              setShow(false);
              setLoading(false);
            }
          }}
        />
      </div>
      <div className="w-1/12 text-center flex">
        <i
          aria-hidden
          onClick={() => setShow(true)}
          className={`fas fa-pen-nib cursor-pointer dark:text-white ml-5 text-xl flex items-center ${
            !show ? "" : "hidden"
          }`}
        />
        <i
          className={`fas fa-check cursor-pointer dark:text-white ml-5 text-xl flex items-center ${
            show ? "" : "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default ItemNickName;
