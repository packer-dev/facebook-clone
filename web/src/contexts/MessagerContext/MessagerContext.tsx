import { Group } from "@/interfaces/Group";
import { User } from "@/interfaces/User";
import React, { createContext, useReducer } from "react";
import AppReducer from "../AppReducer";

export type MessageContextProps = {
  left: any[];
  right: any;
  groupMessage: Group | null;
  usersList?: User[];
};

const initialState: MessageContextProps = {
  left: [],
  right: null,
  groupMessage: null,
  usersList: null,
};

export const MessengerContext = createContext<{
  state: MessageContextProps;
  updateData: (key: keyof MessageContextProps, value: any) => void;
}>({
  state: initialState,
  updateData: (key: keyof MessageContextProps, value: any) => {},
});

export const MessengerProvider = (props) => {
  //
  const [state, dispatch] = useReducer(
    AppReducer<MessageContextProps>,
    initialState
  );
  const value = React.useMemo(() => {
    return {
      state,
      updateData: (key: keyof MessageContextProps, value: any) => {
        dispatch({
          type: "UPDATE_DATA",
          key,
          value,
        });
      },
    };
  }, [state]);
  //
  return (
    <MessengerContext.Provider value={value}>
      {props.children}
    </MessengerContext.Provider>
  );
};
