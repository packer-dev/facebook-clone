import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { FriendProfileDTO, User } from "@/interfaces/User";

export type UserProfileContextProps = {
  userProfile?: User;
  isFriend?: boolean;
  friendList: FriendProfileDTO[];
};

const initialState: UserProfileContextProps = {
  userProfile: null,
  isFriend: false,
  friendList: [],
};

export const UserProfileContext =
  AppContext<UserProfileContextProps>(initialState);

export const UserProfileProvider = ({ children }: { children?: ReactNode }) => {
  //
  //
  return (
    <AppProvider
      AppContextContainer={UserProfileContext}
      initialState={initialState}
    >
      {children}
    </AppProvider>
  );
};
