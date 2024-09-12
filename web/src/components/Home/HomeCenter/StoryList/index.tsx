import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemStory from "../ItemStory";
import { RootState } from "@/reducers";

export default function StoryList() {
  //
  const { headers, user } = useSelector<RootState, RootState>((state) => state);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    //
    if (user) {
      setStories([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, headers]);
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
}
