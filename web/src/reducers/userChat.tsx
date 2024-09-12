import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserChatReduxProps = {
  minize: any[];
  zoom: any[];
};

const initialState: UserChatReduxProps = {
  minize: [],
  zoom: [],
};

const userChatSlice = createSlice({
  name: "userChat",
  initialState,
  reducers: {
    updateData: (
      state: UserChatReduxProps,
      action: PayloadAction<{
        key: keyof UserChatReduxProps;
        value: any;
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
  },
});

export const { updateData } = userChatSlice.actions;

export default userChatSlice;
