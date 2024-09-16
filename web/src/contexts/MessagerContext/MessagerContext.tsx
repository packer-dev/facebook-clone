import { Group } from "@/interfaces/Group";
import React, { ReactNode, createContext, useReducer } from "react";
import AppReducer from "../AppReducer";
import { Message } from "@/interfaces/Message";

export type MessageContextProps = {
  left: Group[];
  right: Message[];
  groupMessage: Group | null;
};

const initialState: MessageContextProps = {
  left: [],
  right: [],
  groupMessage: null,
};

export const MessengerContext = createContext<{
  state: MessageContextProps;
  updateData: (key: keyof MessageContextProps, value: any) => void;
}>({
  state: initialState,
  updateData: (key: keyof MessageContextProps, value: any) => {},
});

export const MessengerProvider = (props: { children?: ReactNode }) => {
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
