import { PAGE_CALL } from "@/constants/Config";
import { User } from "@/interfaces/User";
import {
  AppDispatch,
  getCall,
  getSocket,
  getUser,
  RootState,
} from "@/reducers";
import { CallProps, updateDataCall } from "@/reducers/call";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import { Peer } from "peerjs";
const useListenCall = () => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const { acceptUser } = useSelector<RootState, CallProps>(getCall);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const listenCall = (data: any) => {
    data = JSON.parse(data);
    if (data?.id === user.id) return;

    switch (data.type) {
      case "catch":
        dispatch(
          updateDataCall({
            key: "mode",
            value: data?.isGroup ? "group" : "single",
          })
        );
        dispatch(
          updateDataCall({
            key: "status",
            value: "callee",
          })
        );
        dispatch(
          updateDataCall({
            key: data?.isGroup ? "group" : "current",
            value: data.info,
          })
        );
        navigate(PAGE_CALL);
        break;
      case "accept":
        dispatch(
          updateDataCall({
            key: "acceptUser",
            value: [data.user, ...acceptUser],
          })
        );
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (socket && user) {
      socket.off(`waiting-${user.id}`, listenCall);
      socket.on(`receive-comment-${user.id}`, listenCall);
      const peer = new Peer(user.id);
      dispatch(
        updateDataCall({
          key: "peer",
          value: peer,
        })
      );
    }
    return () => {
      socket.off(`receive-comment-${user.id}`, listenCall);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};

export default useListenCall;
