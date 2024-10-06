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
  const { acceptUser, peer, localStream, remoteStream } = useSelector<
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
      peer.on("open", (id) => {
        console.log(id);
      });
      peer.on("call", (call) => {
        console.log("have call");
        call.answer(localStream);
        // Lắng nghe sự kiện 'stream' để nhận remoteStream từ peer gọi đến
        call.on("stream", (remoteStream_) => {
          console.log("Received remote stream", remoteStream);

          // Cập nhật state hoặc dispatch dữ liệu remoteStream sau khi nhận
          dispatch(
            updateDataCall({
              key: "remoteStream",
              value: [...remoteStream, remoteStream_],
            })
          );
        });
      });
    }
    return () => {
      socket.off(`waiting-${user?.id}`, listenCall);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
};

export default useListenCall;
