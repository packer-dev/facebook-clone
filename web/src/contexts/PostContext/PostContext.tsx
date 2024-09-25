import * as React from "react";
import AppReducer from "./AppReducer";
import * as actions from "./Action";
import {
  Activity,
  AnswerQuestion,
  Background,
  FeelPost,
  Local,
} from "@/interfaces/Post";
import { Media } from "@/interfaces/Media";
import { User } from "@/interfaces/User";
import ModalPost from "@/modals/ModalPost";

export type PostContextProps = {
  id: string;
  content: string;
  imageVideo: {
    old: Media[];
    new: FileList;
    length: number;
  };
  component: any;
  modePost: number;
  imageVideoUpload: false;
  usingBackground: any;
  edit: any;
  background: Background | null;
  tags: User[];
  activity: Activity | null;
  answer_question: AnswerQuestion | null;
  feel: FeelPost | null;
  local: Local | null;
  fileList: File[] | [];
  time_created: string;
};

const initialState: PostContextProps = {
  id: "",
  content: "",
  imageVideo: {
    old: [],
    new: null,
    length: 0,
  },
  component: <ModalPost />,
  modePost: 0,
  imageVideoUpload: false,
  usingBackground: null,
  edit: null,
  activity: null,
  answer_question: null,
  background: null,
  feel: null,
  local: null,
  tags: [],
  fileList: null,
  time_created: "",
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
