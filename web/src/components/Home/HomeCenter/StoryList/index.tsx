import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemStory from "../ItemStory";
import { RootState, getHeaders, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

export default function StoryList() {
  //
  const user = useSelector<RootState, User>(getUser);
  const headers = useSelector<RootState, any>(getHeaders);
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
