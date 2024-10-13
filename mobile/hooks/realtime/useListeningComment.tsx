import { AppContext } from "@/contexts";
import { CommentDTO } from "@/interfaces/Comment";
import { useContext, useEffect } from "react";
import { Alert } from "react-native";

const useListeningComment = (
  postId: string,
  comments: CommentDTO[],
  setComments: (comments: CommentDTO[]) => void
) => {
  const {
    state: { socket, user },
  } = useContext(AppContext);
  const listenComment = (data: any) => {
    if (!data || !user) return;
    data = JSON.parse(data);
    if (user?.id === data?.comment?.user?.id || !data?.comment) return;
    setComments([{ item: data?.comment, child: [] }, ...comments]);
  };
  useEffect(() => {
    if (socket && postId) {
      socket.off(`receive-comment-${postId}`, listenComment);
      socket.on(`receive-comment-${postId}`, listenComment);
    }
    return () => {
      socket.off(`receive-comment-${postId}`, listenComment);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, comments]);
};

export default useListeningComment;
