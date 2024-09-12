import * as React from "react";
import * as actions from "./Action";
import AppReducer from "./AppReducer";

const initialState = {
  loading: false,
  data: null,
  popover: true,
};

export const ModalContext = React.createContext({
  modals: initialState,
  modalsAction: actions,
  modalsDispatch: (...props: any) => props,
});

export const ModalProvider = (props: { children: React.ReactNode }) => {
  //
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  const value: any = React.useMemo(() => {
    return {
      modals: state,
      modalsAction: actions,
      modalsDispatch: dispatch,
    };
  }, [state]);
  //
  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};
