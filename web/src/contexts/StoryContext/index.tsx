import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import stories from "@/config/stories";

type StoryContextProps = {
  current: any;
  isPlaying: boolean;
  indexStory: number;
  timeCurrent: number;
  main: any;
  indexRun: number;
  show: boolean;
  storyList: any[];
};

const initialState: StoryContextProps = {
  current: null,
  isPlaying: true,
  indexStory: 0,
  timeCurrent: 0,
  main: null,
  indexRun: 0,
  show: false,
  storyList: stories,
};

export const StoryContext = AppContext<StoryContextProps>(initialState);

export const StoryProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <AppProvider<StoryContextProps>
      initialState={initialState}
      AppContextContainer={StoryContext}
    >
      {children}
    </AppProvider>
  );
};
