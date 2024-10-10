import { PostDTO } from "@/interfaces/Post";
import { FriendProfileDTO, User } from "@/interfaces/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "@/interfaces/Notification";

export type CommonDataProps = {
  friends: User[];
  profileFriends: FriendProfileDTO[];
  homePosts: PostDTO[];
  profilePosts: PostDTO[];
  pageCurrent?: string;
  notifications: Notification[];
};

const initialState: CommonDataProps = {
  friends: [],
  profileFriends: [],
  homePosts: [],
  profilePosts: [],
  pageCurrent: "",
  notifications: [],
};

const commonSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateDataCommon: (
      state: CommonDataProps,
      action: PayloadAction<{
        key: keyof CommonDataProps;
        value: CommonDataProps[keyof CommonDataProps];
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
  },
});

export const { updateDataCommon } = commonSlice.actions;

export default commonSlice;
