import * as React from "react";
import FriendList from "@/modules/Profile/FriendList/FriendList";
import ImageVideoList from "@/modules/Profile/ImageVideoList";
import MainProfile from "@/modules/Profile/MainProfile";
import StoryList from "@/modules/Profile/StoryList/StoryList";

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
