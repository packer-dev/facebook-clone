import { Group } from "@/interfaces/Group";
import { User } from "@/interfaces/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ZoomUserChatProps = {
  id: string;
  group?: Group;
  is_new: boolean;
  user?: User;
  onload?: boolean;
  localStorage?: "";
};

export type UserChatReduxProps = {
  minimize: Group[];
  zoom: ZoomUserChatProps[];
};

const initialState: UserChatReduxProps = {
  minimize: [],
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
        value: UserChatReduxProps[keyof UserChatReduxProps];
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
  },
});

export const { updateDataUserChat } = userChatSlice.actions;

export default userChatSlice;
