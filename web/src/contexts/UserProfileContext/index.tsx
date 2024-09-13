import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { User } from "@/interfaces/User";

export type UserProfileContextProps = {
  userProfile?: User;
  isFriend?: boolean;
};

const initialState: any = {
  userProfile: null,
  isFriend: false,
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
