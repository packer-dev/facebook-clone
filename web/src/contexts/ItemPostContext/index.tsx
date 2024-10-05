import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { PostDTO } from "@/interfaces/Post";
import { ContentComment } from "@/interfaces/ContentComment";
import { generateUUID } from "@/utils";

export type ItemPostContextProps = {
  postDetail: PostDTO;
  dataComment: ContentComment;
  file?: File | { url: string };
  replyDataComment: { [key: string]: ContentComment };
  edit: string;
  replyFileComment: { [key: string]: File };
};

const initialState: ItemPostContextProps = {
  postDetail: null,
  dataComment: {
    id: generateUUID(),
    text: "",
    type: 1,
  },
  replyDataComment: {},
  replyFileComment: {},
  file: null,
  edit: "",
};

export const ItemPostContext = AppContext<ItemPostContextProps>(initialState);

export const ItemPostProvider = ({ children }: { children?: ReactNode }) => {
  //
  //
  return (
    <AppProvider
      AppContextContainer={ItemPostContext}
      initialState={initialState}
    >
      {children}
    </AppProvider>
  );
};
