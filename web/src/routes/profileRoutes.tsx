import * as React from "react";
import FriendList from "@/components/Profile/FriendList/FriendList";
import ImageVideoList from "@/components/Profile/ImageVideoList";
import MainProfile from "@/components/Profile/MainProfile";
import StoryList from "@/components/Profile/StoryList/StoryList";

const routes = [
  {
    path: `/friends`,
    exact: false,
    element: <FriendList />,
  },
  {
    path: `/images`,
    exact: false,
    element: <ImageVideoList image />,
  },
  {
    path: `/videos`,
    exact: false,
    element: <ImageVideoList />,
  },
  {
    path: `/stories`,
    exact: false,
    element: <StoryList />,
  },
  {
    path: ``,
    exact: false,
    element: <MainProfile />,
  },
];

export default routes;
