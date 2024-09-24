import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  getCommon,
  getHeaders,
  getUser,
  getUserChat,
} from "@/reducers";
import { getFriendsByUserId } from "@/apis/userAPIs";
import {
  updateDataUserChat,
  UserChatReduxProps,
  ZoomUserChatProps,
} from "@/reducers/userChat";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { generateUUID } from "@/utils";
import { User } from "@/interfaces/User";

export default function UserActivity() {
  //
  const { minimize, zoom } = useSelector<RootState, UserChatReduxProps>(
    getUserChat
  );
  const user = useSelector<RootState, User>(getUser);
  const headers = useSelector<RootState, any>(getHeaders);
  const { friends } = useSelector<RootState, CommonDataProps>(getCommon);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //
    const fetch = async () => {
      const result = await getFriendsByUserId(user.id);
      dispatch(
        updateDataCommon({
          key: "friends",
          value: result,
        })
      );
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, headers]);
  //
  return [...friends.filter((item) => item.id !== user.id)].map((item) => (
    <div
      aria-hidden
      onClick={() => {
        const indexMinimize = minimize.findIndex((data) => item.id === data.id);
        const indexZoom = zoom.findIndex((data) => item.id === data.id);
        const newData: ZoomUserChatProps = {
          id: generateUUID(),
          user: item,
          is_new: false,
        };
        if (indexZoom === -1 && indexMinimize === -1) {
          if (zoom.length === 2) {
            dispatch(
              updateDataUserChat({
                key: "minimize",
                value: [...minimize, zoom[0]],
              })
            );
            let clone = [...zoom];
            clone[0] = newData;
            dispatch(updateDataUserChat({ key: "zoom", value: [...clone] }));
          } else {
            dispatch(
              updateDataUserChat({ key: "zoom", value: [...zoom, newData] })
            );
          }
        } else if (indexMinimize !== -1 && zoom.length !== 2) {
          dispatch(
            updateDataUserChat({ key: "zoom", value: [...zoom, newData] })
          );
          dispatch(
            updateDataUserChat({
              key: "minimize",
              value: [...minimize].filter((data) => data.id !== item.id),
            })
          );
        }
      }}
      key={item.id}
      className="w-full flex p-2 items-center friends-online relative cursor-pointer dark:hover:bg-dark-third"
    >
      <div className="w-10 h-10 relative">
        <img
          className="w-full h-full rounded-full object-cover"
          src={item.avatar}
          alt=""
        />
        <span className="w-2.5 h-2.5 rounded-full absolute bottom-0 right-0 bg-green-500" />
      </div>
      <p className="font-semibold ml-3 dark:text-white">{`${item.name}`}</p>
    </div>
  ));
}
