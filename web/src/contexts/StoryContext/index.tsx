import React, { ReactNode } from "react";
import { AppContext, AppProvider } from "../AppContext";
import { Story } from "@/interfaces/Story";

type StoryContextProps = {
  current: Story;
  isPlaying: boolean;
  indexStory: number;
  timeCurrent: number;
  main: Story[];
  indexRun: number;
  show: boolean;
  storyList: Story[][];
  loading: boolean;
};

const initialState: StoryContextProps = {
  current: null,
  isPlaying: true,
  indexStory: 0,
  timeCurrent: 0,
  main: null,
  indexRun: 0,
  show: false,
  storyList: [],
  loading: false,
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
