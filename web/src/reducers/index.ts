import socket from "./socket";
import user from "./user";
import headers from "./headers";
import userChat from "./userChat";
import posts from "./posts";
import { configureStore } from "@reduxjs/toolkit";
import common from "./common";

const myReducer = configureStore({
  reducer: {
    user: user.reducer,
    socket: socket.reducer,
    headers: headers.reducer,
    userChat: userChat.reducer,
    posts: posts.reducer,
    common: common.reducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof myReducer;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export default myReducer;
