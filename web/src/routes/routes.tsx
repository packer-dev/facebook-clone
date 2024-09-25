import * as React from "react";
import Login from "@/pages/Login";
import * as Config from "@/constants/Config";
import Call from "@/pages/Call";
import ForgetAccount from "@/pages/Auth/ForgetAccount";
import RecoverAccount from "@/pages/Auth/RecoverAccount";
import VerifyCodeAccount from "@/pages/Auth/VerifyCodeAccount";
import TypeNewPassword from "@/pages/Auth/TypeNewPassword";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import WrapperStory from "@/pages/Story/WrapperStory";
import ViewStory from "@/pages/Story/ViewStory";
import Watch from "@/pages/Watch";
import Messenger from "@/pages/Messenger";
import ViewPost from "@/pages/ViewPost";
import NotFound from "@/pages/NotFound";

const routes = [
  {
    path: Config.PAGE_LOGIN,
    element: <Login />,
  },
  {
    path: Config.PAGE_CALL,
    element: <Call />,
  },
  {
    path: Config.PAGE_FORGET_ACCOUNT,
    element: <ForgetAccount />,
  },
  {
    path: Config.PAGE_RECOVER_ACCOUNT,
    element: <RecoverAccount />,
  },
  {
    path: Config.PAGE_RECOVER_ACCOUNT_VERIFY,
    element: <RecoverAccount verify />,
  },
  {
    path: Config.PAGE_VERIFY_CODE_ACCOUNT_RECOVER,
    element: <VerifyCodeAccount verifyAccountNew={false} />,
  },
  {
    path: Config.PAGE_VERIFY_CODE_ACCOUNT_REGISTER,
    element: <VerifyCodeAccount verifyAccountNew />,
  },
  {
    path: Config.PAGE_TYPE_NEW_PASSWORD,
    element: <TypeNewPassword />,
  },
  {
    path: Config.PAGE_HOME,
    element: <Home />,
  },
  {
    path: `${Config.PAGE_PROFILE}/:id/*`,
    element: <Profile />,
  },
  {
    path: Config.PAGE_CREATE_STORY,
    element: <WrapperStory mode={-1} />,
  },
  {
    path: Config.PAGE_CREATE_STORY + "/text",
    element: <WrapperStory mode={0} />,
  },
  {
    path: Config.PAGE_CREATE_STORY + "/image",
    element: <WrapperStory mode={1} />,
  },
  {
    path: Config.PAGE_STORY,
    element: <ViewStory />,
  },
  {
    path: Config.PAGE_WATCH,
    element: <Watch />,
  },
  {
    path: Config.PAGE_MESSENGER + "/:id",
    element: <Messenger />,
  },
  {
    path: Config.PAGE_MESSENGER,
    element: <Messenger />,
  },
  {
    path: Config.PAGE_VIEW_POST + "/:id",
    element: <ViewPost />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
