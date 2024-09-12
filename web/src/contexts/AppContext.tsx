import React, { Context, ReactNode, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export type ContextProps<T> = {
  state: T;
  updateData: (key: keyof T, value: any) => void;
  actions?: Function[];
};

export const AppContext = <T,>(initialState?: T) =>
  createContext<ContextProps<T>>({
    state: initialState,
    updateData: (key: keyof T, value: any) => {},
    actions: [],
  });

export const AppProvider = <T,>({
  actions,
  children,
  initialState,
  AppContextContainer,
}: {
  actions?: Function[];
  children?: ReactNode;
  initialState: T;
  AppContextContainer: Context<ContextProps<T>>;
}) => {
  //
  const [state, dispatch] = useReducer(AppReducer<T>, initialState);
  const value = React.useMemo(() => {
    return {
      state,
      updateData: (key: keyof T, value: any) => {
        dispatch({
          type: "UPDATE_DATA",
          key,
          value,
        });
      },
      actions,
    };
  }, [state]);
  //
  return (
    <AppContextContainer.Provider value={value}>
      {children}
    </AppContextContainer.Provider>
  );
};
