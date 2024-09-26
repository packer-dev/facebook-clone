import { updateGroupById } from "@/apis/groupAPIs";
import { Group } from "@/interfaces/Group";
import { Member } from "@/interfaces/Member";
import React, { useState } from "react";

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
  const [show, setShow] = useState(false);
  const [nickName, setNickName] = useState(
    item.nickname ? null : item.nickname
  );
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
              await updateGroupById({ ...group });
              // updateGroup({...group, members: [...group?.members].map(item => ) })
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
