import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemStoryList from "./ItemStoryList";

export default function StoryList() {
  //
  const {
    userProfile: { userProfile },
  } = useContext(UserProfileContext);
  const [stories, setStories] = useState([]);
  //
  return (
    <WrapperContentChildProfile
      url={`stories/main?idUser=${userProfile.id}&offset=0&limit=20`}
      setData={setStories}
      label="Kho lưu trữ tin"
    >
      {stories.map((story) => (
        <ItemStoryList key={story.id} story={story} />
      ))}
    </WrapperContentChildProfile>
  );
}
