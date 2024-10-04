import React, { Context, ReactNode, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export type ContextProps<T> = {
  state: T;
  updateData: (key: keyof T, value: T[keyof T]) => void;
  actions?: Function[];
};

export const AppContext = <T,>(initialState?: T) =>
  createContext<ContextProps<T>>({
    state: initialState,
    updateData: (key: keyof T, value: T[keyof T]) => {},
    actions: [],
  });

export type Action<T, K extends keyof T> = {
  key: K;
  value: T[K]; // The type of value is based on the key
};

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
      updateData: (key: keyof T, value: T[keyof T]) => {
        dispatch({
          key,
          value,
        });
      },
      actions,
    };
  }, [state, actions]);
  //
  return (
    <AppContextContainer.Provider value={value}>
      {children}
    </AppContextContainer.Provider>
  );
};
