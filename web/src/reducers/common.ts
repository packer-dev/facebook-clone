import { PostDTO } from "@/interfaces/Post";
import { User } from "@/interfaces/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CommonDataProps = {
  friends: User[];
  homePosts: PostDTO[];
  profilePosts: PostDTO[];
  pageCurrent?: string;
};

const initialState: CommonDataProps = {
  friends: [],
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
        value: any;
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
  },
});

export const { updateDataCommon } = commonSlice.actions;

export default commonSlice;
