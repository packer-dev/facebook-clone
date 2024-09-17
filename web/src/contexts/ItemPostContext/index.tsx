import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { PostDTO } from "@/interfaces/Post";
import { CommentDTO } from "@/interfaces/Comment";
import { ContentComment } from "@/interfaces/ContentComment";
import { generateUUID } from "@/utils";

export type ItemPostContextProps = {
  postDetail: PostDTO;
  comments: CommentDTO[];
  dataComment: ContentComment;
  file?: FileList;
  relyDataComment: ContentComment;
};

const initialState: ItemPostContextProps = {
  postDetail: null,
  comments: [],
  dataComment: {
    id: generateUUID(),
    text: "",
    type: 1,
  },
  relyDataComment: {
    id: generateUUID(),
    text: "",
    type: 1,
  },
  file: null,
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
