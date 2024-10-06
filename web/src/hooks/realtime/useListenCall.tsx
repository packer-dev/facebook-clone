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
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

const useListenCall = () => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const { acceptUser, peer, remoteStream, callStatus } = useSelector<
    RootState,
    CallProps
  >(getCall);
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  const dispatch = useDispatch<AppDispatch>();
  const listenCall = (data: any) => {
    data = JSON.parse(data);
    const accept = async () => {
      if (!navigator?.mediaDevices) return;
      dispatch(
        updateDataCall({
          key: "acceptUser",
          value: [data?.user, ...acceptUser],
        })
      );
      dispatch(
        updateDataCall({
          key: "callStatus",
          value: "ready",
        })
      );
    };

    switch (data.type) {
      case "catch":
        dispatch(
          updateDataCall({
            key: "mode",
            value: data?.info?.multiple ? "group" : "single",
          })
        );
        dispatch(
          updateDataCall({
            key: data?.info?.multiple ? "group" : "current",
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
        accept();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (socket && user && peer) {
      socket.off(`waiting-${user.id}`, listenCall);
      socket.on(`waiting-${user.id}`, listenCall);
      peer.on("open", (id) => {});
    }
    return () => {
      socket.off(`waiting-${user?.id}`, listenCall);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  useEffect(() => {
    peer.on("call", (call) => {
      dispatch(
        updateDataCall({
          key: "callEvent",
          value: call,
        })
      );
    });
  }, [callStatus]);
};

export default useListenCall;
