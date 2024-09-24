import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getUser, getUserChat } from "@/reducers";
import Avatar from "../Avatar";
import GroupAvatar from "../GroupAvatar";
import { Group } from "@/interfaces/Group";
import { generateUUID } from "@/utils";
import {
  updateDataUserChat,
  UserChatReduxProps,
  ZoomUserChatProps,
} from "@/reducers/userChat";
import { User } from "@/interfaces/User";

const ItemChatMinimize = ({ item }: { item: Group }) => {
  //
  const { minimize, zoom } = useSelector<RootState, UserChatReduxProps>(
    getUserChat
  );
  const user = useSelector<RootState, User>(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    const newZoom: ZoomUserChatProps[] = [
      {
        id: generateUUID(),
        group: item,
        is_new: false,
      },
    ];
    dispatch(
      updateDataUserChat({
        key: "zoom",
        value:
          zoom.length > 0
            ? newZoom.concat([zoom[zoom.length - 1]])
            : [
                {
                  id: generateUUID(),
                  group: item,
                },
              ],
      })
    );
    dispatch(
      updateDataUserChat({
        key: "minimize",
        value: [...minimize].filter((data) => data.id !== item.id),
      })
    );
  };
  //
  return (
    <div className="scroll-user w-14 h-14 relative my-3">
      <div aria-hidden onClick={handleClick}>
        {item.multiple ? (
          <GroupAvatar group={item} size={14} />
        ) : (
          <Avatar
            uri={
              item.members.find((item) => item.user.id !== user.id)?.user.avatar
            }
            size={14}
            online={false}
          />
        )}
      </div>
      <span
        aria-hidden
        onClick={() => {
          dispatch(
            updateDataUserChat({
              key: "minimize",
              value: [...minimize].filter((data) => data.id !== item.id),
            })
          );
        }}
        className="close-scroll-user hidden text-xm py-0.5 px-2 font-bold rounded-full absolute -top-2 -right-1 bg-white"
      >
        &times;
      </span>
      <span className="w-3.5 h-3.5 rounded-full border-2 border-solid  border-white absolute bottom-0 -right-1 bg-green-500" />
    </div>
  );
};

export default ItemChatMinimize;
