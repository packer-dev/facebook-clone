import { User } from "@/interfaces/User";
import {
  AppDispatch,
  getCall,
  getSocket,
  getUser,
  RootState,
} from "@/reducers";
import { CallProps, updateDataCall } from "@/reducers/call";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { Peer } from "peerjs";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

const useListenCall = () => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const { acceptUser } = useSelector<RootState, CallProps>(getCall);
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  const dispatch = useDispatch<AppDispatch>();
  const listenCall = (data: any) => {
    data = JSON.parse(data);
    if (data?.id !== user.id) return;

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
            key: data?.isGroup ? "group" : "current",
            value: data?.caller,
          })
        );
        dispatch(
          updateDataCall({
            key: "status",
            value: "callee",
          })
        );
        modalsDispatch(modalsAction.openModalCaller(data));
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
      socket.on(`waiting-${user.id}`, listenCall);
      const peer = new Peer(user.id);
      dispatch(
        updateDataCall({
          key: "peer",
          value: peer,
        })
      );
    }
    return () => {
      socket.off(`waiting-${user?.id}`, listenCall);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};

export default useListenCall;
