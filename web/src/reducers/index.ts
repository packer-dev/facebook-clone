import socket from "./socket";
import user from "./user";
import userChat from "./userChat";
import posts from "./posts";
import { configureStore } from "@reduxjs/toolkit";
import common from "./common";
import call from "./call";

const myReducer = configureStore({
  reducer: {
    user: user.reducer,
    socket: socket.reducer,
    userChat: userChat.reducer,
    posts: posts.reducer,
    common: common.reducer,
    call: call.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Get the type of our store variable
export type AppStore = typeof myReducer;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export const getUser = (state: RootState) => state.user;
export const getUserChat = (state: RootState) => state.userChat;
export const getCommon = (state: RootState) => state.common;
export const getSocket = (state: RootState) => state.socket;
export const getPosts = (state: RootState) => state.posts;
export const getCall = (state: RootState) => state.call;

export default myReducer;
