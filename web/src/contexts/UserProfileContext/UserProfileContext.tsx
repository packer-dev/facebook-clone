import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";

const initialState: any = {
  userProfile: null,
  isFriend: false,
};

export const UserProfileContext = createContext<any>({
  userProfile: initialState,
  userProfilesDispatch: (...props: any) => props,
  userProfilesAction: actions,
});

export const UserProfileProvider = (props) => {
  //
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const value = React.useMemo(
    () => ({
      userProfile: state,
      userProfilesDispatch: dispatch,
      userProfilesAction: actions,
    }),
    [state]
  );
  //
  return (
    <UserProfileContext.Provider value={value}>
      {props.children}
    </UserProfileContext.Provider>
  );
};
