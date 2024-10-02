import { ItemPostContext } from "@/contexts/ItemPostContext";
import { Comment } from "@/interfaces/Comment";
import { PostDTO } from "@/interfaces/Post";
import { User } from "@/interfaces/User";
import { getSocket, getUser, RootState } from "@/reducers";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client";

const useListeningComment = (postId: string) => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const {
    state: { postDetail },
    updateData,
  } = useContext(ItemPostContext);
  const listenComment = (data: any) => {
    if (!data || !user) return;
    data = JSON.parse(data);
    let listComment = updateDataComment(postDetail, data);

    if (user?.id === data?.comment?.user?.id) return;

    updateData("postDetail", {
      ...postDetail,
      comments: { ...postDetail.comments, list: listComment },
    });
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
  }, [postId]);
};

export const updateDataComment = (
  postDetail: PostDTO,
  data: {
    level: 1 | 2;
    edit: string;
    comment: Comment;
    parent: string;
  }
) => {
  let listComment = [...postDetail.comments.list].filter(
    (item) => item.item.id
  );
  if (data?.level === 1) {
    if (data?.edit) {
      listComment = [...listComment].map((item) =>
        item.item.id === data?.edit ? { ...item, item: data?.comment } : item
      );
    } else {
      listComment = [{ item: data?.comment, child: [] }, ...listComment];
    }
  } else {
    listComment = [...listComment].map((item) => {
      if (item.item.id === data?.parent) {
        return data?.edit
          ? {
              ...item,
              child: [...item.child].map((child) =>
                child.id === data?.comment?.id ? data?.comment : child
              ),
            }
          : {
              ...item,
              child: [data?.comment, ...item.child].filter((child) => child.id),
            };
      }
      return item;
    });
  }
  return listComment;
};

export default useListeningComment;
