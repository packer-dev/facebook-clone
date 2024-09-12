import { PostDTO } from "@/interfaces/Post";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PostReduxProps = {
  list: PostDTO[];
  index: number;
  add: boolean;
};

const initialState: PostReduxProps = {
  list: [],
  index: 0,
  add: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateDataPostList: (
      state: PostReduxProps,
      action: PayloadAction<{
        key: keyof PostReduxProps;
        value: any;
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
    resetPostList: () => {
      return { ...initialState };
    },
  },
});

export const { updateDataPostList } = postsSlice.actions;

export default postsSlice;
