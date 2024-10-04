import { PostDTO } from "@/interfaces/Post";
import { FriendProfileDTO, User } from "@/interfaces/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CommonDataProps = {
  friends: User[];
  profileFriends: FriendProfileDTO[];
  homePosts: PostDTO[];
  profilePosts: PostDTO[];
  pageCurrent?: string;
};

const initialState: CommonDataProps = {
  friends: [],
  profileFriends: [],
  homePosts: [],
  profilePosts: [],
  pageCurrent: "",
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
