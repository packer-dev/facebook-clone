import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/reducers";
import { getFriendsByUserId } from "@/apis/userAPIs";
import { updateDataUserChat, ZoomUserChatProps } from "@/reducers/userChat";
import { updateDataCommon } from "@/reducers/common";
import { generateUUID } from "@/utils";

export default function UserActivity() {
  //
  const {
    user,
    headers,
    userChat: { minize, zoom },
    common: { friends },
  } = useSelector<RootState, RootState>((state) => state);
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
        const indexMinize = minize.findIndex((data) => item.id === data.id);
        const indexZoom = zoom.findIndex((data) => item.id === data.id);
        const newData: ZoomUserChatProps = {
          id: generateUUID(),
          user: item,
          is_new: false,
        };
        if (indexZoom === -1 && indexMinize === -1) {
          if (zoom.length === 2) {
            dispatch(
              updateDataUserChat({ key: "minize", value: [...minize, zoom[0]] })
            );
            let clone = [...zoom];
            clone[0] = newData;
            dispatch(updateDataUserChat({ key: "zoom", value: [...clone] }));
          } else {
            dispatch(
              updateDataUserChat({ key: "zoom", value: [...zoom, newData] })
            );
          }
        } else if (indexMinize !== -1 && zoom.length !== 2) {
          dispatch(
            updateDataUserChat({ key: "zoom", value: [...zoom, newData] })
          );
          dispatch(
            updateDataUserChat({
              key: "minize",
              value: [...minize].filter((data) => data.id !== item.id),
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
        <span className="w-2.5 h-2.5 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
      </div>
      <p className="font-semibold ml-3 dark:text-white">{`${item.name}`}</p>
    </div>
  ));
}
