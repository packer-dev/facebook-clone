import React from "react";
import { useSelector } from "react-redux";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import PostListContainer from "@/modules/PostListContainer";

const HomePostList = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  //
  return <PostListContainer mode="home" user={user} />;
};

export default HomePostList;
