import { Group } from "@/interfaces/Group";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserChatReduxProps = {
  minize: Group[];
  zoom: Group[];
};

const initialState: UserChatReduxProps = {
  minize: [],
  zoom: [],
};

const userChatSlice = createSlice({
  name: "userChat",
  initialState,
  reducers: {
    updateDataUserChat: (
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

export const { updateDataUserChat } = userChatSlice.actions;

export default userChatSlice;
