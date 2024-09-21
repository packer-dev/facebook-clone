import * as React from "react";
import io, { Socket } from "socket.io-client";
import { Message } from "../interfaces/Message";
import { User } from "../interfaces/User";
import { Group } from "../interfaces/Group";
import {
  Activity,
  AnswerQuestion,
  Background,
  FeelPost,
  Local,
  PostDTO,
} from "../interfaces/Post";

type Action = {
  key: string;
  value: any;
  type: string;
};

export type ContextInitProps = {
  showKeyboard: boolean;
  messages: Message[];
  socket: Socket;
  popup: any[];
  panel: {
    ui: any;
    payload: any;
  };
  user: User | null;
  groups: Group[];
  loading: boolean;
  friends: User[];
  groupCurrent: Group | null;
  list_post: PostDTO[];
  visit: User | null;
  trigger: {
    suggestFriend: any;
    cancelRelationship: any;
    profileRelationship: any;
    postHome: any;
    postProfile: any;
  };
  peerConnection: any;
  isCalling: {
    status: boolean;
    groupId: string;
  };
  post: {
    activity: Activity | null;
    background: Background | null;
    answer_question: AnswerQuestion | null;
    local: Local | null;
    feel: FeelPost | null;
  };
};

const init: ContextInitProps = {
  showKeyboard: false,
  messages: [],
  socket: io("https://server-facebook-clone.onrender.com/"),
  popup: [],
  panel: {
    ui: null,
    payload: {},
  },
  user: null,
  groups: [],
  loading: false,
  friends: [],
  groupCurrent: null,
  list_post: [],
  visit: null,
  trigger: {
    suggestFriend: null,
    cancelRelationship: null,
    profileRelationship: null,
    postHome: null,
    postProfile: null,
  },
  peerConnection: null,
  isCalling: {
    status: false,
    groupId: "",
  },
  post: {
    activity: null,
    answer_question: null,
    background: null,
    feel: null,
    local: null,
  },
};

const AppContext = React.createContext<{
  state: ContextInitProps;
  updateData: (key: keyof ContextInitProps, value: any) => void;
}>({
  state: init,
  updateData(key, value) {},
});

const reducer = (state: any, action: Action): any => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, [action.key]: action.value };
    case "UPDATE_DATA1":
      return { ...state, [action.key]: action.value };
    case "UPDATE_DATA2":
      return { ...state, [action.key]: action.value };
    default:
      return { ...state };
  }
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  //
  const [state, dispatch] = React.useReducer(reducer, init);
  const value = React.useMemo(
    () => ({
      state: state,
      updateData(key: keyof ContextInitProps, value: any) {
        dispatch({
          type: "UPDATE_DATA",
          key,
          value,
        });
      },
    }),
    [state]
  );
  //
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
