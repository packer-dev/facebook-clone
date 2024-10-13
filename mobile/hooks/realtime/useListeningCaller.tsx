import React from "react";
import { AppContext } from "@/contexts/index";
import { Group } from "@/interfaces/Group";
import { User } from "@/interfaces/User";

const useListeningCaller = ({ group }: { group?: Group }) => {
  const {
    state: { user, socket, peerConnection },
  } = React.useContext(AppContext);
  const [isAccept, setIsAccept] = React.useState(true);
  const [members, setMembers] = React.useState<User[]>(user ? [user] : []);

  const listenCallReceive = async (data: any) => {
    if (!data || !peerConnection) return;

    data = JSON.parse(data);
    if (
      Object.keys(data?.accept || {}).map((item) => item === "accept").length >
      0
    ) {
      setIsAccept(true);
    }
  };
  const listenCallAccept = async (data: any) => {
    if (!data || !peerConnection || !user) return;

    data = JSON.parse(data);
    if (
      Object.keys(data?.accept || {}).map((item) => item === "accept").length >
      0
    ) {
      setIsAccept(true);
      const newMembers = [...(group?.members || [])]
        .filter((member) => {
          const check = Object.keys(data.accept || {})
            .filter((item) => data?.accept[item] === "accept")
            .find((item) => member?.user?.id === item);
          return check;
        })
        .map((item) => item.user);
      setMembers([user, ...newMembers]);
    }
  };
  React.useEffect(() => {
    if (socket && group) {
      socket.off(`receive-call-${group?.id}`, listenCallReceive);
      socket.off(`accept-call-${group?.id}`, listenCallAccept);
      socket.on(`accept-call-${group?.id}`, listenCallAccept);
      socket.on(`receive-call-${group?.id}`, listenCallReceive);
    }
    return () => {
      socket.off(`receive-call-${group?.id}`, listenCallReceive);
      socket.off(`accept-call-${group?.id}`, listenCallAccept);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);
  return { isAccept, members };
};

export default useListeningCaller;
