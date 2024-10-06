import { FriendProfileDTO, User } from "@/interfaces/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserProfileReduxProps = {
  userProfile?: User;
  isFriend?: boolean;
  friendList: FriendProfileDTO[];
  loading: boolean;
  status: number | null;
};

const initialState: UserProfileReduxProps = {
  userProfile: null,
  isFriend: false,
  status: null,
  friendList: [],
  loading: true,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    updateDataUserProfile: (
      state: UserProfileReduxProps,
      action: PayloadAction<{
        key: keyof UserProfileReduxProps;
        value: UserProfileReduxProps[keyof UserProfileReduxProps];
      }>
    ) => {
      state[action.payload.key as string] = action.payload.value;
    },
  },
});

export const { updateDataUserProfile } = userProfileSlice.actions;

export default userProfileSlice;
