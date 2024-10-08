import React, { useState } from "react";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemStoryList from "./ItemStoryList";

const StoryList = () => {
  //
  const [stories, setStories] = useState([]);
  //
  return (
    <WrapperContentChildProfile setData={setStories} label="Kho lưu trữ tin">
      {stories.map((story) => (
        <ItemStoryList key={story.id} story={story} />
      ))}
    </WrapperContentChildProfile>
  );
};

export default StoryList;
