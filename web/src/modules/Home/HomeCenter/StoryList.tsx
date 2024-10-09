import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemStory from "./ItemStory";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { Story } from "@/interfaces/Story";
import { getStoryByUser } from "@/apis/storyAPI";

const StoryList = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const [stories, setStories] = useState<Story[][]>([]);
  useEffect(() => {
    //
    if (user) {
      const fetchData = async () => {
        const result = await getStoryByUser(user.id);
        setStories(result);
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  //
  return stories.length ? (
    [...stories]
      .slice(0, 5)
      .map((story, index) => (
        <ItemStory
          key={story}
          story={story}
          nearLast={index === 3 ? "hidden lg:block" : ""}
          last={index === 4 ? "hidden md:block" : ""}
          length={[...stories].slice(0, 5).length}
          index={index}
        />
      ))
  ) : (
    <></>
  );
};

export default StoryList;
