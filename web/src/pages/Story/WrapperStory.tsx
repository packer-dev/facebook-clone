import * as React from "react";
import { StoryEditorProvider } from "@/contexts/StoryEditorContext";
import WrapperLogged from "../Wrapper/WrapperLogged";
import CreateStory from "./CreateStory";
import StoryEditor from "./StoryEditor";

type WrapperStoryProps = { mode: number };

const WrapperStory = ({ mode }: WrapperStoryProps) => {
  return (
    <WrapperLogged hideChat>
      <div className="w-full flex z-10 pt-16 h-screen bg-gray-100 dark:bg-dark-main lg:w-full lg:mx-auto xl:w-full">
        <StoryEditorProvider>
          {mode === -1 ? <CreateStory /> : <StoryEditor />}
        </StoryEditorProvider>
      </div>
    </WrapperLogged>
  );
};

export default WrapperStory;
