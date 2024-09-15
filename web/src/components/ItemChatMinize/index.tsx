import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/reducers";
import Avatar from "../Avatar";
import GroupAvatar from "../GroupAvatar";
import { Group } from "@/interfaces/Group";
import { generateUUID } from "@/utils";
import { updateDataUserChat, ZoomUserChatProps } from "@/reducers/userChat";

const ItemChatMinize = ({ item }: { item: Group }) => {
  //
  const {
    user,
    userChat: { minize, zoom },
  } = useSelector<RootState, RootState>((state) => state);
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
        key: "minize",
        value: [...minize].filter((data) => data.id !== item.id),
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
              key: "minize",
              value: [...minize].filter((data) => data.id !== item.id),
            })
          );
        }}
        className="close-scroll-user hidden text-xm py-0.5 px-2 font-bold rounded-full absolute -top-2 -right-1 bg-white"
      >
        &times;
      </span>
      <span className="w-3.5 h-3.5 rounded-full border-2 border-solid  border-white absolute bottom-0 -right-1 bg-green-500"></span>
    </div>
  );
};

export default ItemChatMinize;
