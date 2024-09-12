import * as React from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";
import ModalPost from "@/components/Modals/ModalPost";

const initialState = {
  id: null,
  tags: [],
  local: null,
  feel: null,
  activity: null,
  content: "",
  imageVideo: [],
  contentAnswerQuestion: "",
  component: <ModalPost />,
  modePost: 0,
  answerQuestion: null,
  background: null,
  imageVideoUpload: false,
  usingBackground: null,
  edit: null,
};

export const PostContext = React.createContext({
  posts: initialState,
  postsDispatch: (...props: any) => props,
  postsAction: actions,
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  //
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  const value: any = React.useMemo(() => {
    return {
      posts: state,
      postsDispatch: dispatch,
      postsAction: actions,
    };
  }, [state]);
  //
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
