import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";

type StoryEditorContextProps = {
  mode: number;
  content: string;
  color: any;
  data: any;
  audio: any;
};

const initialState: StoryEditorContextProps = {
  mode: -1,
  content: "",
  color: null,
  data: null,
  audio: null,
};

export const StoryEditorContext =
  AppContext<StoryEditorContextProps>(initialState);

export const StoryEditorProvider = ({ children }: { children?: ReactNode }) => {
  //
  //
  return (
    <AppProvider<StoryEditorContextProps>
      initialState={initialState}
      AppContextContainer={StoryEditorContext}
    >
      {children}
    </AppProvider>
  );
};
