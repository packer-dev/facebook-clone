import React, { useState } from "react";
import SettingMessageChild from "./SettingMessageChild";
import { Group } from "@/interfaces/Group";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import Avatar from "@/components/Avatar";
import GroupAvatar from "@/components/GroupAvatar";

const WrapperItemSetting = (props: any) => {
  //
  const [show, setShow] = useState(!!props.children);
  //
  return (
    <>
      <li
        aria-hidden
        onClick={() => {
          if (props.children) setShow(!show);
        }}
        className="w-full font-semibold py-2.5 px-4 cursor-pointer hover:bg-gray-300 dark:hover:bg-dark-third rounded-lg dark:text-white relative"
      >
        {props.component({ show, name: props.name })}
      </li>
      {show && props.children}
    </>
  );
};

const ItemSetting = (props: any) => {
  return (
    <>
      {props.name}
      <i
        className={`fas fa-chevron-${
          props.show ? "down" : "right"
        } float-right absolute right-5 top-3.5`}
      ></i>
    </>
  );
};

const SettingMessage = ({ groupMessage }: { groupMessage: Group }) => {
  //
  const { user } = useSelector<RootState, RootState>((state) => state);
  const member = groupMessage.members.find((item) => item.user.id !== user.id);
  //
  return (
    <div className="w-1/3 hidden xl:block pr-2 wrapper-content-right shadow-xl h-full overflow-y-auto">
      <div className="w-full mt-2">
        {groupMessage.members.length > 0 && groupMessage.multiple ? (
          <>
            <GroupAvatar
              group={groupMessage}
              size={14}
              className="mt-8 mb-3 mx-auto"
            />
            <p className="font-semibold text-center dark:text-white">
              {groupMessage.name || "My group"}
            </p>
          </>
        ) : (
          <>
            <Avatar
              uri={member.user.avatar}
              className="my-2 rounded-full mx-auto"
            />
            <p className="font-semibold text-center dark:text-white">
              {member.user.name}
            </p>
          </>
        )}
        <p className="font-semibold text-center text-sm text-gray-600 dark:text-gray-300">
          Active
        </p>
      </div>
      <ul className="w-full py-2">
        <WrapperItemSetting component={ItemSetting} name={`Custom chat`}>
          <SettingMessageChild groupMessage={groupMessage} />
        </WrapperItemSetting>
        <WrapperItemSetting component={ItemSetting} name={`Shared file`} />
        <WrapperItemSetting
          component={ItemSetting}
          name={`Shared media file`}
        />
      </ul>
    </div>
  );
};

export default SettingMessage;
