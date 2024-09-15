import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { Group } from "@/interfaces/Group";
import { Message } from "@/interfaces/Message";
import { Member } from "@/interfaces/Member";
import { User } from "@/interfaces/User";

export type ItemChatContextProps = {
  group?: Group;
  isNew?: boolean;
  messages: Message[];
  members?: Member[];
  loading?: boolean;
  showSetting?: boolean;
  mini?: boolean;
  choose?: User[];
  loader?: string[];
  idItemChat?: string;
  userParam?: User;
  groups: Group[];
};

const initialState: ItemChatContextProps = {
  group: null,
  isNew: false,
  loading: true,
  messages: [],
  members: [],
  showSetting: false,
  mini: true,
  choose: [],
  loader: [],
  userParam: null,
  groups: [],
};

export const ItemChatContext = AppContext<ItemChatContextProps>(initialState);

export const ItemChatProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <AppProvider<ItemChatContextProps>
      AppContextContainer={ItemChatContext}
      initialState={initialState}
    >
      {children}
    </AppProvider>
  );
};
