import { AppContext } from "@/contexts";
import { useContext, useEffect } from "react";

const useFeelPost = (postId: string) => {
  const {
    state: { socket, user, list_post },
    updateData,
  } = useContext(AppContext);
  useEffect(() => {
    socket.on(`feel-post.${postId}`, (data) => {
      if (!data) return;

      const { sender, feel } = JSON.parse(data);
      if (sender === user?.id) return;
      updateData(
        "list_post",
        [...list_post].map((item) => {
          if (item.post.id === postId) {
            return { ...item, feel: [feel, ...item.feel] };
          }
          return item;
        })
      );
    });
  }, []);
};

export default useFeelPost;
