import { PAGE_PROFILE } from "@/constants/Config";
import { User } from "@/interfaces/User";
import {
  AppDispatch,
  RootState,
  getCommon,
  getSocket,
  getUser,
} from "@/reducers";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Socket } from "socket.io-client";

const useListeningFeelPost = (postId: string) => {
  const user = useSelector<RootState, User>(getUser);
  const socket = useSelector<RootState, Socket>(getSocket);
  const location = useLocation();
  const { homePosts, profilePosts } = useSelector<RootState, CommonDataProps>(
    getCommon
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    socket.on(`feel-post.${postId}`, (data) => {
      if (!data) return;

      const { sender, feel } = JSON.parse(data);
      if (sender === user?.id) return;
      const isProfile = location.pathname.indexOf(PAGE_PROFILE) === -1;
      dispatch(
        updateDataCommon({
          key: isProfile ? "profilePosts" : "homePosts",
          value: [...(isProfile ? profilePosts : homePosts)].map((item) => {
            if (item.post.id === postId) {
              return { ...item, feel: [feel, ...item.feel] };
            }
            return item;
          }),
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useListeningFeelPost;
