import { User } from "@/interfaces/User";
import {
  AppDispatch,
  getCommon,
  getSocket,
  getUser,
  RootState,
} from "@/reducers";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";

const useListeningNotification = () => {
  const { notifications } = useSelector<RootState, CommonDataProps>(getCommon);
  const socket = useSelector<RootState, Socket>(getSocket);
  const user = useSelector<RootState, User>(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const listenChat = (data_: string) => {
    if (!data_) return;

    let data = JSON.parse(data_);
    if (data?.notification?.sender?.id === user.id) return;

    dispatch(
      updateDataCommon({
        key: "notifications",
        value: [data.notification, ...notifications],
      })
    );
  };
  React.useEffect(() => {
    if (socket && user) {
      socket.off(`receive-message-${user.id}`, listenChat);
      socket.on(`receive-message-${user.id}`, listenChat);
    }
    return () => {
      socket.off(`receive-message-${user?.id}`, listenChat);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};

export default useListeningNotification;
