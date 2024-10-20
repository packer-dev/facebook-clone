import React, { useState } from "react";
import WrapperContentChildProfile from "../WrapperContentChildProfile";
import ItemStoryList from "./ItemStoryList";
import { getStoryProfile } from "@/apis/storyAPI";
import { useSelector } from "react-redux";
import { getUserProfile, RootState } from "@/reducers";
import { UserProfileReduxProps } from "@/reducers/userProfile";

const StoryList = () => {
  //
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const [stories, setStories] = useState([]);
  //
  return (
    <WrapperContentChildProfile
      setData={setStories}
      label="Kho lưu trữ tin"
      getResultAPI={() => getStoryProfile(userProfile.id, 10, 0)}
    >
      {stories?.map((story) => (
        <ItemStoryList key={story.id} story={story} />
      ))}
    </WrapperContentChildProfile>
  );
};

export default StoryList;
