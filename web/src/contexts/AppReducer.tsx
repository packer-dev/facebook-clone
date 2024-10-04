import { Action } from "./AppContext";

const AppReducer = <T,>(state: T, action: Action<T, keyof T>): T => {
  return { ...state, [action.key]: action.value };
};

export default AppReducer;
