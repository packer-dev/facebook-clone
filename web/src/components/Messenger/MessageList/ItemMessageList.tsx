import * as React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_MESSENGER } from "@/constants/Config";
import moment from "moment";
import { AppDispatch, RootState } from "@/reducers";
import { Group } from "@/interfaces/Group";
import { generateUUID, lastMessage } from "@/utils";
import Avatar from "@/components/Avatar";
import GroupAvatar from "@/components/GroupAvatar";
import { useDispatch, useSelector } from "react-redux";
import { updateDataUserChat } from "@/reducers/userChat";
import { ItemChatContext } from "@/contexts/ItemChatContext";

type ItemMessageListProps = {
  group: Group;
  mini?: boolean;
  closePopover?: () => void;
};

const ItemMessageList = ({
  group,
  mini,
  closePopover,
}: ItemMessageListProps) => {
  //
  const { user, userChat } = useSelector<RootState, RootState>(
    (state) => state
  );
  const { updateData: updateDataItemChat } = React.useContext(ItemChatContext);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const member = group?.members?.find((item) => item.user.id !== user?.id);
  //
  return (
    <div
      aria-hidden
      onClick={() => {
        if (mini) {
          dispatch(
            updateDataUserChat({
              key: "zoom",
              value: [
                ...userChat.zoom,
                {
                  id: generateUUID(),
                  group,
                },
              ],
            })
          );
          closePopover?.();
        } else {
          navigation(PAGE_MESSENGER + `/${group.id}`);
          updateDataItemChat("group", group);
        }
      }}
      className="w-full mess-person user__chat__child cursor-pointer flex relative py-2 px-1 
        dark:hover:bg-dark-third hover:bg-gray-200  "
    >
      <div className="w-full flex justify-center md:w-auto mr-3">
        <div className="xl:w-14 xl:h-14 object-cover rounded-full mx-auto relative w-16 h-16">
          {!group.multiple ? (
            <Avatar uri={member?.user?.avatar} size={14} />
          ) : (
            <GroupAvatar group={group} size={14} child={6} />
          )}
        </div>
      </div>
      <div className="w-4/5 md:flex-1 hidden md:block">
        <div className="w-full text-left">
          <span
            className="w-full font-semibold dark:text-gray-300 inline-block whitespace-nowrap 
            overflow-ellipsis overflow-hidden max-w-full pr-4"
          >
            {!group.multiple
              ? `${member?.user?.name}`
              : group?.name ||
                group?.members.map((item) => item?.user?.name).join(", ")}
          </span>
        </div>
        <div className="w-full py-1 text-sm flex md:pr-3 xl:pr-0">
          <div className="w-full flex text-left dark:text-gray-300 text-gray-500  font-semibold">
            <div className="max-w-3/4 inline-block whitespace-nowrap text-left overflow-ellipsis overflow-hidden pr-1">
              {lastMessage(user, group)}
            </div>
            <div className="w-1/4 flex pr-3 whitespace-nowrap overflow-ellipsis overflow-hidden">
              · {moment(group.last_message.time_created).fromNow(true)}
            </div>
          </div>
        </div>
        {/* <div className="mess-edit top-4 right-8 text-center absolute rounded-full bg-gray-100 dark:bg-dark-second">
          <i className="fas fa-ellipsis-h edit-mess dark:text-gray-300"></i>
        </div> */}
      </div>
    </div>
  );
};

export default ItemMessageList;
