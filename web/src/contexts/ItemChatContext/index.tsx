import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { Group } from "@/interfaces/Group";
import { Message } from "@/interfaces/Message";
import { Member } from "@/interfaces/Member";

export type ItemChatContextProps = {
  group?: Group;
  isNew?: boolean;
  messages: Message[];
  members?: Member[];
  loading?: boolean;
  showSetting?: boolean;
  mini?: boolean;
};

const initialState = {
  group: null,
  isNew: false,
  loading: true,
  messages: [],
  members: [],
  showSetting: false,
  mini: false,
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
